from django.contrib import admin
from django.urls import path
from Andryusdev_web import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('principal/',views.principal, name='principal'),
    path('portafolio2/',views.portafolio2, name='portafolio2'),
    path('portafolio/',views.portafolio, name='portafolio')

]
