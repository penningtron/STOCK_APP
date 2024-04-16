

from django.urls import path
from .views import All_watched_stocks

urlpatterns = [
    path('', All_watched_stocks.as_view()),
]
