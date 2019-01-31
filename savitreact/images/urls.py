from django.urls import path
from . import views


app_name = "images"
urlpatterns = [
    path(
        '', 
        view=views.Feed.as_view(), 
        name="feed"
    ),
    path(
        '<int:id>/likes/',
        view=views.LikeImage.as_view(),
        name='like_image'
    ),
    path(
        '<int:id>/comments/',
        view=views.CreateCommentOnImage.as_view(),
        name='create_comment'
    ),
    path(
        'comments/<int:id>',
        view=views.DeleteCommentOnImage.as_view(),
        name='delete_comment'
    )        
]

