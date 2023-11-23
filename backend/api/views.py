# REST imports
from django.shortcuts import render
from django.views import View
from rest_framework import generics

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


class RaceList(generics.ListAPIView):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer


class CostList(generics.ListAPIView):
    queryset = Cost.objects.all()
    serializer_class = CostSerializer


class GearsetList(generics.ListCreateAPIView):
    queryset = Gearset.objects.all()
    serializer_class = GearsetSerializer


# GEAR model API views

class GearList(generics.ListCreateAPIView):
    '''All Gear'''

    queryset = Gear.objects.all()
    serializer_class = GearSerializer


class DpsGearList(generics.ListAPIView):
    '''Gear for DPS jobs'''

    queryset = Gear.objects.filter(
        category__in=["Maiming", "Striking", "Slaying",
                      "Scouting", "Aiming", "Casting"]
    )
    serializer_class = GearSerializer


class HealerGearList(generics.ListAPIView):
    '''Gear for healers'''

    queryset = Gear.objects.filter(category="Healing")
    serializer_class = GearSerializer


class TankGearList(generics.ListAPIView):
    '''Gear for tanks'''

    queryset = Gear.objects.filter(category="Fending")
    serializer_class = GearSerializer
