# Generated by Django 5.0.2 on 2024-02-12 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='email',
            field=models.EmailField(max_length=80, unique=True),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='name',
            field=models.CharField(max_length=80),
        ),
    ]
