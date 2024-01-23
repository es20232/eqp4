from rest_framework import viewsets

from dbModule.models import Channel
from dbModule.serializer import UserSerializer


class ChannelViewSet(viewsets.ModelViewSet):
    queryset = Channel.objects.all()
    serializer_class = UserSerializer