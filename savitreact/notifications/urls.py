from django.urls import path

from savitreact.notifications.views import (
    Notifications
)

app_name = "notifications"
urlpatterns = [
    path("", view=Notifications.as_view(), name="notifications"),
]
