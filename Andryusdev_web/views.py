from django.shortcuts import render

def principal (request):

    return render(request, 'principal.html')


def portafolio2(request):

    return render(request, 'portafolio2.html')

def portafolio(request):

    return render(request, 'portafolio.html')

# Create your views here.
