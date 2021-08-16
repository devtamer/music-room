from django.db import models
import string
import random

# generates a unique code and does not allow repeats


def generate_unique_code():
    length = 6
    # creates a code randomly using uppercase acsii elements and witth specified length k
    # if the code is equal to zero then break the cycle and re-generate code
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if (Room.objects.filter(code=code).count() == 0):
            break

    return code

# Create your models here.


# class Login(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField()
#     completed = models.BooleanField(default=False)

#     def _str_(self):
#         return self.title


class Room(models.Model):
    # code for joining into music room server
    code = models.CharField(
        max_length=8, default=generate_unique_code, unique=True)
    # this will be unique generated code for host
    host = models.CharField(max_length=50, unique=True)
    # ability for guests who join room to skip song
    guest_can_pause = models.BooleanField(null=False, default=False)
    # counts number of users votes to skip song
    votes_to_skip = models.IntegerField(null=False, default=1)
    # date and time the room was created
    created_at = models.DateTimeField(auto_now_add=True)
