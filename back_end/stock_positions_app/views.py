from django.shortcuts import render
from django.shortcuts import render
from user_app.views import TokenReq
from django.shortcuts import render, get_object_or_404
from user_app.views import TokenReq
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
)
from .serializers import StockPositionSerializer, StockPositions
import requests
import os


# Create your views here.
class All_positions(TokenReq):
    def get(self, request):
        try:
            alpaca_api_key = os.getenv('ALPACA_API_KEY')
            alpaca_secret_key = os.getenv('ALPACA_SECRET_KEY')

             # Filter stock positions by the current user's portfolio
            user_portfolio = request.user.portfolio
            all_positions = StockPositions.objects.filter(portfolio=user_portfolio)

            # Fetch current prices for all stock symbols
            # for position in all_positions:
            #     symbol = position.symbol
            #     # Make API call to Alpaca Markets to get current price
            #     response = requests.get(f'https://data.alpaca.markets/v2/stocks/{symbol}/quotes/latest',
            #                         headers={'APCA-API-KEY-ID': alpaca_api_key, 'APCA-API-SECRET-KEY': alpaca_secret_key})
            #     if response.status_code == 200:
            #         current_price = response.json()['quote']['ap']
            #         position.current_price = current_price
            #         position.save()
            #     else:
            #         return Response(f"Failed to fetch current price for symbol {symbol}", status=HTTP_400_BAD_REQUEST)
            
            
            # Serialize the filtered queryset
            serialized_positions = StockPositionSerializer(all_positions, many=True)
            
            return Response(serialized_positions.data)


        except Exception as e:
            return Response(e, status=HTTP_400_BAD_REQUEST)

    def post(self, request):
        data = request.data.copy()
        # Retrieve the portfolio instance associated with the current user
        portfolio = request.user.portfolio
        # Assign the portfolio instance to the 'portfolio' field in the data
        data['portfolio'] = portfolio.id
        ser_positions = StockPositionSerializer(data = data)
        if ser_positions.is_valid():
            ser_positions.save()
            return Response(ser_positions.data, status=HTTP_201_CREATED)
        else:
            print(ser_positions.errors)
            return Response(ser_positions.errors,status=HTTP_400_BAD_REQUEST)
        

    def delete(self, request):
        symbol = request.data.get('symbol')
        try:
            position = StockPositions.objects.get(symbol=symbol)
        except StockPositions.DoesNotExist:
            return Response(status= HTTP_404_NOT_FOUND)

        position.delete()
        return Response(status= HTTP_204_NO_CONTENT)