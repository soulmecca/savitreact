from django.urls import path, re_path

from savitreact.users.views import (
    ExploreUsers,
    FollowUser,
    UnfollowUser,
    UserProfile,
    UserFollowers,
    UserFollowings,
    Search,
    ChangePassword,
    FacebookLogin
)

app_name = "users"
urlpatterns = [
    path("explore/", view=ExploreUsers.as_view(), name="explore_users"),
    path("<int:id>/follow/", view=FollowUser.as_view(), name="follow_user"),
    path("<int:id>/unfollow/", view=UnfollowUser.as_view(), name="unfollow_user"),

    path("<str:username>/followers/", view=UserFollowers.as_view(), name="user_followers"),
    path("<str:username>/followings/", view=UserFollowings.as_view(), name="user_followingss"),
    path('search/', view=Search.as_view(), name='search'),

    path("<str:username>/", view=UserProfile.as_view(), name="user_profile"),
    path("<str:username>/password", view=ChangePassword.as_view(), name="change_password"),

    path('login/facebook/', FacebookLogin.as_view(), name='fb_login')
]
