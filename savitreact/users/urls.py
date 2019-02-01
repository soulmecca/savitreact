from django.urls import path

from savitreact.users.views import (
    ExploreUsers,
    FollowUser,
    UnfollowUser
)

app_name = "users"
urlpatterns = [
    path("explore/", view=ExploreUsers.as_view(), name="explore_users"),
    path("<int:id>/follow", view=FollowUser.as_view(), name="follow_user"),
    path("<int:id>/unfollow", view=UnfollowUser.as_view(), name="unfollow_user"),
]
