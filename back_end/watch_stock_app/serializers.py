from .models import WatchStock
from rest_framework.serializers import ModelSerializer

class WatchedStockSerializer(ModelSerializer):
    class Meta:
        model = WatchStock
        fields = '__all__'