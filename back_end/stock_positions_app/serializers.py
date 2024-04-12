from .models import StockPositions
from rest_framework.serializers import ModelSerializer

class StockPositionSerializer(ModelSerializer):
    class Meta:
        model = StockPositions
        fields = '__all__'