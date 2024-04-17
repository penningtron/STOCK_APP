from django.shortcuts import render
from django.shortcuts import render
from user_app.views import TokenReq
from django.shortcuts import render, get_object_or_404
from user_app.views import TokenReq
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import WatchStock
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
)
from .serializers import WatchedStockSerializer, WatchStock
import requests
import os
from django.http import JsonResponse

# Create your views here.

class All_watched_stocks(TokenReq):
    def get(self, request):
        try:
            print("debuging")
            print(request.user.watchlist,"debugging ")
            
            user_watchlist = request.user.watchlist
            print("testing user_watchlist")
            # print(user_watchlist.data,"testing user_watchlist.data")
            all_watched_stocks = WatchStock.objects.filter(watchlist=user_watchlist)
            print(all_watched_stocks,"all watched stocks")
            ser_watch_list = WatchedStockSerializer(all_watched_stocks, many=True)
            print(ser_watch_list, "ser_watch_list")
            return Response(ser_watch_list.data)
        except Exception as e:
            return Response(e, status=HTTP_400_BAD_REQUEST)

    def post(self, request):
        data = request.data.copy()
        ser_list = WatchedStockSerializer(data = data)
        if ser_list.is_valid():
            ser_list.save()
            return Response(ser_list.data, status=HTTP_201_CREATED)
        else:
            print(ser_list.errors)
            return Response(ser_list.errors, status=HTTP_400_BAD_REQUEST)
    

