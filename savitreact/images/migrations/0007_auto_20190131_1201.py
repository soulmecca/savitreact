# Generated by Django 2.0.10 on 2019-01-31 17:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0006_auto_20190131_1142'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['-created_at']},
        ),
    ]
