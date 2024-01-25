# Generated by Django 5.0.1 on 2024-01-25 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0002_rename_usuarios_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='bio',
            field=models.CharField(max_length=200, verbose_name='Biograph'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='login',
            field=models.CharField(max_length=100, primary_key=True, serialize=False, verbose_name='Username'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='nome',
            field=models.CharField(max_length=100, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='senha',
            field=models.CharField(max_length=50, verbose_name='Password'),
        ),
    ]
