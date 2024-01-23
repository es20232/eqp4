from django.urls import include, path, re_path

from rest_framework import routers
from dbModule.api import ChannelViewSet
from . import views

api_router = routers.DefaultRouter()
api_router.register(r"channels", ChannelViewSet)

urlpatterns = [
    path("api/", include(api_router.urls)),
    re_path('api/register', views.registerUser)
]