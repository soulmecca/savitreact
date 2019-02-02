from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from savitreact.notifications import views as notifications_view

class Feed(APIView):

    def get(self, request, format=None):
    
        user = request.user
        following_users = user.followings.all()

        image_list = []
        
        for  following_user in following_users:
            user_images = following_user.images.all()[:2]
            for image in user_images:
                image_list.append(image)

        my_images = user.images.all()[:2]

        for image in my_images:
            image_list.append(image)


        sorted_list = sorted(image_list, key=lambda image: image.created_at, reverse=True)
        serializer = serializers.ImageSerializer(sorted_list, many=True)
        return Response(data=serializer.data)


class LikeImage(APIView):

    def post(self, request, id, format=None):

        user = request.user

        try: 
            found_image = models.Image.objects.get(id=id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            existing_like = models.Like.objects.get(
                creator = user,
                image = found_image
            )
            return Response(status=status.HTTP_304_NOT_MODIFIED)

        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(
                creator = user,
                image = found_image
            )
            new_like.save()

            notifications_view.create_notification(user, found_image.creator, 'like', found_image)

        return Response(status=status.HTTP_201_CREATED)


class UnLikeImage(APIView):

    def delete(self, request, id, format=None):

        user = request.user

        try: 
            found_image = models.Image.objects.get(id=id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            existing_like = models.Like.objects.get(
                creator = user,
                image = found_image
            )
            existing_like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Like.DoesNotExist:
            return Response(status=status.HTTP_304_NOT_MODIFIED)   

             

class CreateCommentOnImage(APIView):

    def post(self, request, id, format=None):
        user = request.user

        try: 
            found_image = models.Image.objects.get(id=id)
        except models.Image.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

        serializer = serializers.CommentSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save(creator = user, image = found_image)
            notifications_view.create_notification(
                user, 
                found_image.creator, 
                'comment', 
                found_image, 
                serializer.data["message"]
            )

            return Response(data = serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteCommentOnImage(APIView):

    def delete(self, request, id, format=None):

        user = request.user
        
        try: 
            found_comment = models.Comment.objects.get(id=id, creator=user)
            found_comment.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except models.Comment.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)


class Search(APIView):

    def get(self, request, format = None):
        
        hashtags = request.query_params.get('hashtags', None)

        if hashtags is not None:

            hashtags = hashtags.split(",")

            images = models.Image.objects.filter(tags__name__in = hashtags).distinct()

            serializer = serializers.UserProfileImageSerializer(images, many = True)

            return Response(data = serializer.data, status = status.HTTP_200_OK)

        else:

            return Response(status = status.HTTP_400_BAD_REQUEST)



class ModerateCommentOnImage(APIView):

    def delete(self, request, image_id, comment_id, format=None):

        user = request.user

        try:
            comment_to_delete = models.Comment.objects.get(
                id = comment_id, image__id = image_id, image__creator = user
            )
            comment_to_delete.delete()

        except models.Comment.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

        return Response(status = status.HTTP_204_NO_CONTENT)