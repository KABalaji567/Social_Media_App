from django.http import HttpResponse

def home(request):
    return HttpResponse("Social Media API Running Successfully")