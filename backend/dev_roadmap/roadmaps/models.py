from django.db import models
from django.conf import settings


class Track(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    purpose = models.TextField()


class Node(models.Model):
    track = models.ForeignKey(Track, on_delete=models.CASCADE, related_name='nodes')
    depth = models.IntegerField()
    order = models.IntegerField()
    isEssential = models.BooleanField(default=False)
    isComplete = models.BooleanField(default=False)
    title = models.CharField(max_length=255)
    content = models.TextField()
    purpose = models.TextField()
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='child')


class RecommendContent(models.Model):
    node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='recommend_content')
    title = models.CharField(max_length=255)
    url = models.CharField(max_length=1000)
    img_url = models.CharField(max_length=1000, default="")


class Interview(models.Model):
    node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='interview')
    interviewee = models.CharField(max_length=255)
    content = models.TextField()


class Completion(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='completion')
    node= models.ForeignKey(Node, on_delete=models.CASCADE, related_name='completion', null=True, blank=True)