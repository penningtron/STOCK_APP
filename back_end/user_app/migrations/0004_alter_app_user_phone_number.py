# Generated by Django 5.0.4 on 2024-04-09 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0003_app_user_display_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='app_user',
            name='phone_number',
            field=models.BigIntegerField(default=11234567890, max_length=11),
        ),
    ]