from django.contrib import admin
from . import models


@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):
    
    list_display = (
        'from_user',
        'to_user',
        'notification_type',
        'image'
    )