# REST imports
from django.shortcuts import render
from django.views import View
from rest_framework import generics

# Serializers
from .serializers import JobSerializer, RaceSerializer, CostSerializer, GearSerializer, GearsetSerializer

# Models import
from .models import Job, Race, Cost, Gear, Gearset


class JobList(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class RaceList(generics.ListCreateAPIView):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer


class CostList(generics.ListCreateAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostSerializer


class GearList(generics.ListCreateAPIView):
    queryset = Gear.objects.all()
    serializer_class = GearSerializer


class GearsetList(generics.ListCreateAPIView):
    queryset = Gearset.objects.all()
    serializer_class = GearsetSerializer


class APIIndex(View):
    def get(self, request):
        return render(request, "index.html")
