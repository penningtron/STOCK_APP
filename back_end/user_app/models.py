from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core import validators as v



# Create your models here.
class App_user(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(default="unknown", max_length=50)
    last_name = models.CharField(default="unknown", max_length=50)
    phone_number = models.BigIntegerField(default=11234567890, max_length=11)
    display_name = models.CharField(default='unknown' , max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    




