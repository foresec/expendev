# Generated by Django 3.2.13 on 2023-02-03 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0004_alter_article_thumnail_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='thumnail_image',
            field=models.ImageField(blank=True, default='article/thumnail_default.png', null=True, upload_to='aritcle/'),
        ),
    ]