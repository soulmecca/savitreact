from rest_framework import serializers
from . import models
from savitreact.images import serializers as image_serializers

class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name'
        )



class UserProfileSerializer(serializers.ModelSerializer):

    images = image_serializers.UserProfileImageSerializer(many=True)

    class Meta:
        model = models.User
        fields = (
            'username',
            'name',
            'bio',
            'profile_image',
            'website',
            'post_count',
            'followers_count',
            'followings_count',
            'images'
        )