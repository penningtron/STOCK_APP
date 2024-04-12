from .models import Portfolio
from rest_framework.serializers import ModelSerializer

class PortfolioSerializer(ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'