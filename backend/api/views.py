# REST imports
from django.shortcuts import render, get_object_or_404
from django.views import View
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

# Serializers
from .serializers import JobSerializer, RaceSerializer, CostSerializer, GearSerializer, GearListSerializer, GearAddSerializer, GearOptionsSerializer, GearsetSerializer

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


class GearsetList(generics.ListAPIView):
    queryset = Gearset.objects.all()
    serializer_class = GearsetSerializer


# Gear model endpoints
class GearListAll(generics.ListCreateAPIView):
    # For returning all instances of Gear model
    queryset = Gear.objects.all()
    serializer_class = GearSerializer


class GearAdd(generics.ListCreateAPIView):
    # For returning all instances of Gear model
    queryset = Gear.objects.all()
    serializer_class = GearAddSerializer


class GearList(generics.ListAPIView):
    # As above, but with much less informations
    # Used to populate simple list of all Gear instances
    queryset = Gear.objects.all()
    serializer_class = GearListSerializer


class GearOptions(generics.CreateAPIView):
    # Returns even fewer informations.
    # Used to receive data from OPTIONS to populate form.
    queryset = Gear.objects.all()
    serializer_class = GearOptionsSerializer


class GearDetails(APIView):
    def get(self, request, slug, format=None):
        instance = get_object_or_404(Gear, slug=slug)
        serializer = GearSerializer(instance)
        return Response(serializer.data)


class GearsetDetails(APIView):
    def get(self, request, slug, format=None):
        instance = get_object_or_404(Gearset, slug=slug)
        serializer = GearsetSerializer(instance)
        return Response(serializer.data)
