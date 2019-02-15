from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from . import models
from savitreact.images import serializers as image_serializers


class ListUserSerializer(serializers.ModelSerializer):

    following = serializers.SerializerMethodField()

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name',
            'following'
        )

    def get_following(self, obj):
        if "request" in self.context:
            request = self.context['request']
            if obj in request.user.followings.all():
                return True

        return False


class UserProfileSerializer(serializers.ModelSerializer):

    images = image_serializers.UserProfileImageSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    followings_count = serializers.ReadOnlyField()

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


class SignUpSerializer(RegisterSerializer):

    name = serializers.CharField(required=True, write_only=True)

    def get_cleaned_data(self):
        return {
            'name': self.validated_data.get('name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user
