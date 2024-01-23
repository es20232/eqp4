# Generated by Django 5.0.1 on 2024-01-22 22:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='usuario',
            fields=[
                ('login', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('senha', models.CharField(max_length=50)),
                ('data_nascimento', models.DateTimeField()),
                ('bio', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='imagem',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('titulo', models.CharField(max_length=100)),
                ('descricao', models.CharField(max_length=200)),
                ('data_upload', models.DateTimeField(auto_now_add=True)),
                ('imagem', models.BinaryField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dbModule.usuario')),
            ],
        ),
    ]
