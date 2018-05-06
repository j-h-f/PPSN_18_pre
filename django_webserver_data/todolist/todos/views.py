# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages

from .models import TODO

# Create your views here.
def index(request): 
    todos = TODO.objects.all()
    
    context = {
        'todos':todos,
    }

    return render(request, 'index.html', context)

def create_new(request):
    if(request.method == 'POST'):
        text_new = request.POST['todo_text']
        deadline_new = request.POST['todo_deadline']
        process_new = request.POST['todo_progress']

        new_todo = TODO(text=text_new, deadline=deadline_new, process=process_new)
        new_todo.save()

        return redirect('/todo')
    else:
        return render(request, 'create_new.html')

def impressum(request):
    return render(request, 'impressum.html')

def edit(request, id):
    todo = TODO.objects.get(id=id)
    
    if(request.method == 'POST'):
        todo.text = request.POST['todo_edit_text']
        todo.deadline = request.POST['todo_edit_deadline']
        todo.process = request.POST['todo_edit_progress']
        todo.save()

        return redirect('/todo')
    else:
        context = {
            'todo':todo,
        }

        return render(request, 'edit.html', context)

def delete (request, id):
    todo = TODO.objects.get(id=id)
    todo.delete()
    
    return redirect('/todo')
    