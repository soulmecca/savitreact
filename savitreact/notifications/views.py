import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(to_user=user)

        serializer = serializers.NotificationSerializer(notifications, many=True, context={'request': request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


def create_notification(from_user, to_user, type, image=None, comment=None):

    notification = models.Notification.objects.create(
        from_user=from_user,
        to_user=to_user,
        notification_type=type,
        image=image,
        comment=comment
    )

    notification.save()
