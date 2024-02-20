from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

from rest_framework import serializers
from .models import postModel

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = postModel
        fields = ['id', 'created_at' , 'author_id',  'image', 'descripiton', 'like', 'dislike']

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
        
        