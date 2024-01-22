from django.db import models

# Create your models here.

class usuario(models.Model):
    """Um usuario"""
    login = models.CharField(max_length=100, primary_key=True)
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    senha = models.CharField(max_length=50)
    data_nascimento = models.DateTimeField()
    bio = models.CharField(max_length=200)

    def __str__(self):
        """Devolve uma representação em string do modelo"""
        return self.nome
    

class imagem(models.Model):
    """Uma imagem"""
    id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey(usuario, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    descricao = models.CharField(max_length=200)
    data_upload = models.DateTimeField(auto_now_add=True)
    imagem = models.BinaryField()

    def __str__(self):
        """Devolve uma representação em string do modelo"""
        return self.titulo