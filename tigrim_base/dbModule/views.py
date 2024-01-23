from django.shortcuts import render
from .models import usuario
from serializer import UserSerializer
# Create your views here.

def registerUser(request, query):
    if request.method == 'POST':
        user = UserSerializer(request.POST)
        if user.is_valid():
            user.save()