# REST imports
from django.shortcuts import render
from django.views import View
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

# Serializers
from .serializers import JobSerializer, RaceSerializer, CostSerializer, GearSerializer, GearsetSerializer

# Models import
from .models import Job, Race, Cost, Gear, Gearset


class APIIndex(View):
    '''Helper View'''

    def get(self, request):
        return render(request, "index.html")


class JobList(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {'role': ['in']}


class RaceList(generics.ListAPIView):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer


class CostList(generics.ListAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostSerializer


class GearsetList(generics.ListCreateAPIView):
    queryset = Gearset.objects.all()
    serializer_class = GearsetSerializer


class GearList(generics.ListCreateAPIView):
    queryset = Gear.objects.all()
    serializer_class = GearSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {'category': ['in']}
