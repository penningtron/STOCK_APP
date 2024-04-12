# consumers.py
import json
import os
import requests
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import StockPositions
from django.contrib.auth.models import User

class StockPriceConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        user_id = text_data_json['user_id']

        # Fetch the user's stock positions
        user_portfolio = User.objects.get(id=user_id).portfolio
        all_positions = StockPositions.objects.filter(portfolio=user_portfolio)

        # Fetch current prices for all stock symbols
        for position in all_positions:
            symbol = position.symbol
            # Make API call to Alpaca Markets to get current price
            alpaca_api_key = os.getenv('ALPACA_API_KEY')
            alpaca_secret_key = os.getenv('ALPACA_SECRET_KEY')
            response = requests.get(f'https://data.alpaca.markets/v2/stocks/{symbol}/quotes/latest',
                                headers={'APCA-API-KEY-ID': alpaca_api_key, 'APCA-API-SECRET-KEY': alpaca_secret_key})
            if response.status_code == 200:
                current_price = response.json()['quote']['ap']

                # Send the current price to the client
                await self.send(text_data=json.dumps({
                    'symbol': symbol,
                    'current_price': current_price,
                }))