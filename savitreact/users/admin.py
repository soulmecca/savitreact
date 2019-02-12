from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from savitreact.users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("name", "bio", "followers", "followings",
                                      'profile_image', 'website', 'gender')}),) + auth_admin.UserAdmin.fieldsets
    list_display = [
        "id",
        "username",
        "name",
        "bio",
        "website",
        "is_superuser"
    ]
    search_fields = ["name"]
