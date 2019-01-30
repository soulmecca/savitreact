from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.db.models import URLField
from django.db.models import TextField
from django.db.models import ManyToManyField
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):

    """ USER  """

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('femail', 'Femail'),
        ('not-specified', 'Not specified')
    )

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = CharField(_("Name of User"), blank=True, max_length=255)
    website = URLField(null=True)
    bio = TextField(null=True)
    phone = CharField(max_length=140, null=True)
    gender = CharField(max_length=80, choices=GENDER_CHOICES, null=True)
    followers = ManyToManyField("self")
    followings = ManyToManyField("self")


    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
