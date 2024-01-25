from django.urls import path
from .views import UsuarioList, UsuarioDetail

urlpatterns = [
    path('', UsuarioList.as_view()),
    path('<int:pk>', UsuarioDetail.as_view()),
]
