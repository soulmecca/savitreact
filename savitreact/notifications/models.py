from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from savitreact.users import models as user_models
from savitreact.images import models as image_models

class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    from_user = models.ForeignKey(user_models.User, on_delete = models.CASCADE, related_name = 'from_user')
    to_user   = models.ForeignKey(user_models.User, on_delete = models.CASCADE,  related_name = 'to_user') 
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(image_models.Image, on_delete = models.CASCADE, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From: {} - To: {}'.format(self.from_user, self.to_user)