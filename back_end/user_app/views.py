from django.shortcuts import render
from django.core.exceptions import ValidationError
from rest_framework.views import APIView
from django.contrib.auth import login, logout, authenticate
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from .models import App_user
from utils import telesign_API
from stock_positions_app.models import StockPositions
from portfolio_app.models import Portfolio
from watchlist_app.models import Watchlist
from watch_stock_app.models import WatchStock


# Create your views here.
class Sign_up(APIView):
    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get("email")
        data['phone_number'] = request.data.get("phone_number")
        # 2FA AUTH
        if not telesign_API(data['phone_number']):
            return Response({"error": "Phone number verification failed"}, status=HTTP_400_BAD_REQUEST)

        new_user = App_user(**data)
        try:
            new_user.full_clean()
            
            new_user.save()
            new_user.set_password(data.get("password"))
            new_user.save()
            portfolio = Portfolio.objects.create(user=new_user)
            watchlist = Watchlist.objects.create(user=new_user)

            initial_watch_list = [
                {'symbol': "SPY"},
                {'symbol': "GE"},
            ]
            


            initial_stock_positions = [
                {'symbol': 'AAPL', 'quantity': 10},
                {'symbol': 'GOOGL', 'quantity': 32},
                # Add more initial stock positions as needed
            ]
            
            for position_data in initial_stock_positions:
                StockPositions.objects.create(portfolio=portfolio, **position_data)

            for watch_list_data in initial_watch_list:
                WatchStock.objects.create(watchlist=watchlist, **watch_list_data)

            
            login(request, new_user)
            token = Token.objects.create(user=new_user)
            return Response({"user":new_user.display_name, "token":token.key}, status=HTTP_201_CREATED)
        except ValidationError as e:
            print(e)
            return Response(e, status=HTTP_400_BAD_REQUEST)

class Log_in(APIView):
    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get("username", request.data.get('email'))
        user = authenticate(username=data.get("username"), password=data.get("password"))
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user = user)
            return Response({"user": user.email, "token":token.key}, status=HTTP_200_OK)
        return Response("No user matching credentials", status=HTTP_400_BAD_REQUEST)

class TokenReq(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class Log_out(TokenReq):
    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response(status=HTTP_204_NO_CONTENT)

