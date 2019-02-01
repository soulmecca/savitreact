from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

class ExploreUsers(APIView):

    def get(self, request, format=None):
        
        last_five = models.User.objects.all().order_by('-date_joined')[:5]
        serializer = serializers.ExploreUserSerializer(last_five, many=True)
        return Response(data = serializer.data, status = status.HTTP_200_OK)


class FollowUser(APIView):

    def post(self, request, id, format=None):

        user = request.user

        try: 
            user_to_follow = models.User.objects.get(id=id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        user.followings.add(user_to_follow)
        user.save()

        return Response(status = status.HTTP_200_OK)


class UnfollowUser(APIView):

    def delete(self, request, id, format=None):

        user = request.user

        try: 
            user_to_unfollow = models.User.objects.get(id=id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        user.followings.remove(user_to_unfollow)
        user.save()

        return Response(status = status.HTTP_204_NO_CONTENT)        