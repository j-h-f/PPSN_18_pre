# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from datetime import datetime

# Create your models here.
class TODO(models.Model):
    text = models.CharField(max_length=255)
    deadline = models.DateTimeField()
    process = models.IntegerField()
    
    def __str__(self):
        return self.text