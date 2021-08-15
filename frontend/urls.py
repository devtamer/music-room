from django.urls import path
from django.urls.conf import include
from  .views import index

# this will be front end pages users see, setting up domain directory essentially
urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index),
]