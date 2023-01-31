# Generated by Django 3.2.13 on 2023-01-30 01:49

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='like_users',
            field=models.ManyToManyField(blank=True, related_name='like_articles', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='article',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='articles', to='blogs.Tag'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='like_users',
            field=models.ManyToManyField(blank=True, related_name='like_comments', to=settings.AUTH_USER_MODEL),
        ),
    ]
