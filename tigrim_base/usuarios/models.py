from django.db import models

# Create your models here.
class Usuario(models.Model):
    login = models.CharField("Username", max_length=100, primary_key=True)
    nome = models.CharField("Name", max_length=100)
    email = models.EmailField()
    senha = models.CharField("Password", max_length=50)
    data_nascimento = models.DateTimeField()
    bio = models.CharField("Biograph", max_length=200)

    def __str__(self):
        return self.login