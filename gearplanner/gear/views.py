from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView, CreateView, UpdateView
from .forms import *


class IndexView(View):
    def get(self, request):
        return render(request, 'gear/index.html')


class AddGear(CreateView):
    model = Gear
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_gear')


class GearList(ListView):
    model = Gear
    template_name = 'gear/__list__.html'


class AddCost(CreateView):
    model = Cost
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_cost')


class CostList(ListView):
    model = Cost
    template_name = 'gear/__list__.html'


class AddGearset(CreateView):
    model = Gearset
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_gearset')


class GearsetList(ListView):
    model = Gearset
    template_name = 'gear/__list__.html'


class JobList(ListView):
    model = Job
    template_name = 'gear/__list__.html'


class RaceList(ListView):
    model = Race
    template_name = 'gear/__list__.html'


class ContentList(ListView):
    model = Content
    template_name = 'gear/__list__.html'


class TypeList(ListView):
    model = Type
    template_name = 'gear/__list__.html'
