from django.db import models
from user_app.models import App_user





# Create your models here.
class Portfolio(models.Model):
    user = models.OneToOneField(App_user, on_delete=models.CASCADE, related_name='portfolio')

