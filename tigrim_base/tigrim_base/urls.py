from django.contrib import admin
from django.urls import path, include
from .views import index
from usuarios import views
from dj_rest_auth.views import PasswordResetConfirmView, PasswordResetView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('api/usuarios/', include('usuarios.urls')),
    path('users/', include('users.urls')),
    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
]