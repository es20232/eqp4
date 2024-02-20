from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.
from rest_framework import generics
from .models import postModel
from .serializers import PostSerializer
from rest_framework.generics import CreateAPIView
import logging
logger = logging.getLogger(__name__)    

class PostListAPIView(generics.ListAPIView):
    queryset = postModel.objects.all()
    serializer_class = PostSerializer
    
class UploadAPIView(CreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        # O usuário já está autenticado devido ao IsAuthenticated
        author = request.user
        logger.info('API UploadAPIView foi chamada.')

        image = request.data.get('image')
        description = request.data.get('description')

        if not image or not description:
            return Response({'error': 'Dados incompletos'}, status=status.HTTP_400_BAD_REQUEST)

        post_data = {
            'author_id': author.id,
            'image': image,
            'description': description,
        }

        serializer = self.get_serializer(data=post_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)