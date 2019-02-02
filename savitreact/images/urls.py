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
        '<int:id>/',
        view = views.ImageDetail.as_view(),
        name = "image_detail"
    ),
    path(
        '<int:id>/likes/',
        view=views.LikeImage.as_view(),
        name='like_image'
    ),
    path(
        '<int:id>/unlikes/',
        view=views.UnLikeImage.as_view(),
        name='unlike_image'
    ),    
    path(
        '<int:id>/comments/',
        view=views.CreateCommentOnImage.as_view(),
        name='create_comment'
    ),
    path(
        '<int:image_id>/comments/<int:comment_id>/',
        view=views.ModerateCommentOnImage.as_view(),
        name='moderate_comment'
    ),    
    path(
        'comments/<int:id>',
        view=views.DeleteCommentOnImage.as_view(),
        name='delete_comment'
    ),
    path(
        'search/',
        view=views.Search.as_view(),
        name='search'
    ),            
]

