from rest_framework import serializers
from . import models
from savitreact.users import serializers as user_serializers
from savitreact.images import serializers as image_serializers

class NotificationSerializer(serializers.ModelSerializer):

    from_user = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()
    class Meta:
        model = models.Notification
        fields = '__all__'