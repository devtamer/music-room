
from django.urls import path, include
from django.conf.urls import url
from .views import index

# django needs this to know that this urls.py files belongs to frontend app
# this is in correlation to the spotify api get request that redirect from spotify/views
# to the frontend after authenticating / storing the user
app_name = 'frontend'

urlpatterns = [
    path('', index, name=''),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index),

]
