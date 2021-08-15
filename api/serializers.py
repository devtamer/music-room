# this is to translate data from user and api endpoints into JSON
from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guests_can_pause',
                  'votes_to_skip', 'created_at')

    # this will handle post request to API view (whats hidden in request is the payload being sent in post request)
    # this serializer confirms data being passed is valid and translated


class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guests_can_pause', 'votes_to_skip')
