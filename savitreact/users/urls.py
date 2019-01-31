from django.urls import path

from savitreact.users.views import (
    ExploreUsers,
)

app_name = "users"
urlpatterns = [
    path("explore/", view=ExploreUsers.as_view(), name="explore_users"),
]
