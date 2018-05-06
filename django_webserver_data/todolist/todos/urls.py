from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create_new', views.create_new, name='create_new'),
    url(r'^impressum', views.impressum, name='impressum'),
    url(r'^edit/(?P<id>\w{0,50})/$', views.edit),
    url(r'^delete/(?P<id>\w{0,50})/$', views.delete, name="delete_todo"),
]