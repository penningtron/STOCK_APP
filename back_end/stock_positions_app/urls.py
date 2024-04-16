from django.urls import path
from .views import All_positions

urlpatterns = [
    path('', All_positions.as_view()),
    

]