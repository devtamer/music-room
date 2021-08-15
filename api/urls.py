from django.urls import path
from .views import CreateRoomView, RoomView, getRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', getRoom.as_view())
]