# Generated by Django 5.0.4 on 2024-04-10 03:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('portfolio_app', '0003_alter_portfolio_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='StockPositions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=10)),
                ('quantity', models.IntegerField()),
                ('portfolio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stock_positions', to='portfolio_app.portfolio')),
            ],
        ),
    ]