from django.db import models
from portfolio_app.models import Portfolio

# Create your models here.
class StockPositions(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE, related_name='stock_positions')
    symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    
