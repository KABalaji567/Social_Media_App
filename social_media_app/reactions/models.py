from django.db import models
from django.contrib.auth.models import User
from posts.models import Post

class Reaction(models.Model):
    LIKE="LIKE"
    DISLIKE="DISLIKE"

    CHOICES=[
        (LIKE,"LIKE"),
        (DISLIKE,"DISLIKE")
    ]

    user=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    reaction=models.CharField(max_length=20,choices=CHOICES)