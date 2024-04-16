from django.urls import path
from .views import Watchlist

urlpatterns = [

    path('', Watchlist.as_view()),
]