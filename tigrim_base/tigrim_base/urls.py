from django.contrib import admin
from django.urls import path, re_path
from . import views
from .views import index 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    re_path('login', views.login),
    re_path('register', views.login),
]