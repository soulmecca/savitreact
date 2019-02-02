from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from savitreact.notifications import views as notifications_view
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView


class ExploreUsers(APIView):

    def get(self, request, format=None):
        
        last_five = models.User.objects.all().order_by('-date_joined')[:5]
        serializer = serializers.ListUserSerializer(last_five, many=True)
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
        notifications_view.create_notification( user, user_to_follow,'follow')

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

    
class UserProfile(APIView):

    def find_user(self, username):
        try:
            found_user = models.User.objects.get(username = username)
            return found_user
        except models.User.DoesNotExist:
            return None

    def get(self, request, username, format=None):

        found_user = self.find_user(username)

        if found_user is None:
            return Response(status = status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(found_user)
        return Response(data = serializer.data, status = status.HTTP_200_OK)

    
    def put(self, request, username, format=None):

        user = request.user

        found_user = self.find_user(username)

        if found_user is None:
            return Response(status = status.HTTP_404_NOT_FOUND)        

        elif found_user.id != user.id:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

        else:
            serializer = serializers.UserProfileSerializer(found_user, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()

                return Response(data = serializer.data, status = status.HTTP_200_OK)

            else:

                return Response(data = serializer.data, status = status.HTTP_400_BAD_REQUEST)
                
        



class UserFollowers(APIView):

    def get (self, request, username, format = None):

        try:
            found_user = models.User.objects.get(username = username)
        except models.User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

        user_followers = found_user.followers.all()
        
        serializer = serializers.ListUserSerializer(user_followers, many=True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class UserFollowings(APIView):

    def get(self, request, username, format = None):

        try: 
            found_user = models.User.objects.get(username = username)
        except models.User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

        user_followings = found_user.followings.all()

        serializer = serializers.ListUserSerializer(user_followings, many=True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class Search(APIView):

    def get(self, request, format = None):
        
        username = request.query_params.get('username', None)
        
        if username is not None:
            
            users = models.User.objects.filter(username__istartswith = username)

            serializer = serializers.ListUserSerializer(users, many=True)
            
            return Response(data = serializer.data, status = status.HTTP_200_OK)
        else:

            return Response(status = status.HTTP_400_BAD_REQUEST)


class ChangePassword(APIView):

    def put(self, request, username, format=None):
        
        user = request.user
        
        if user.username != username:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

        current_password = request.data.get('current_password', None)
        new_password = request.data.get('new_password', None)

        if current_password is not None and new_password is not None:
            
            password_match = user.check_password(current_password)

            if password_match:
                user.set_password(new_password)
                user.save()
                return Response(status = status.HTTP_200_OK)                
            else:
                return Response(status = status.HTTP_400_BAD_REQUEST)
                    
        else:
            return Response(status = status.HTTP_400_BAD_REQUEST)



class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter