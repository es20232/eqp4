from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404

def index(request):
    return render(request, 'index.html')

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.isvalid():
        serializer.save()
        user = User.objects.get(user)
        user.set_password(request.data['password'])
        token = Token.objects.create(user=user)
        return Response({"Token": Token.key, "user" : serializer.data})
    return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)