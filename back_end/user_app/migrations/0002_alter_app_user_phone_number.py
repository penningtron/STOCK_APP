# Generated by Django 5.0.4 on 2024-04-08 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='app_user',
            name='phone_number',
            field=models.IntegerField(default=1234567890, max_length=10),
        ),
    ]