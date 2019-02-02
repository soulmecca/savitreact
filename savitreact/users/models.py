from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.db.models import URLField
from django.db.models import TextField
from django.db.models import ManyToManyField
from django.db.models import ImageField
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
    profile_image = ImageField(null=True)
    name = CharField(_("Name of User"), blank=True, max_length=255)
    website = URLField(null=True, blank=True)
    bio = TextField(null=True, blank=True)
    phone = CharField(max_length=140, null=True)
    gender = CharField(max_length=80, choices=GENDER_CHOICES, null=True)
    followers = ManyToManyField("self", blank=True)
    followings = ManyToManyField("self", blank=True)


    @property
    def post_count(self):
        return self.images.all().count()

    @property
    def followers_count(self):
        return self.followers.all().count()

    @property
    def followings_count(self):
        return self.followings.all().count()        
    
