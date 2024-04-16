from django.db import models
from watchlist_app.models import Watchlist

# Create your models here.

class WatchStock(models.Model):
    watchlist = models.ForeignKey(Watchlist, on_delete=models.CASCADE, related_name='watch_stocks')
    symbol = models.CharField(max_length=10)
