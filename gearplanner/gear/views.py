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


class GearList(View):
    def get(self, request):
        obj = Gear.objects.all().order_by('id')
        return render(request, 'gear/gear_list.html', {'obj': obj})


class GearDetails(View):
    def get(self, request, pk):
        item = Gear.objects.get(id=pk)
        return render(request, 'gear/gear_details.html', {'item': item})


class AddCost(CreateView):
    model = Cost
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_cost')


class CostList(ListView):
    model = Cost
    template_name = 'gear/__list__.html'
    ordering = ['-tomestones', 'type_id']


class AddGearset(CreateView):
    model = Gearset
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('gearset_list')


class UpdateGearset(UpdateView):
    model = Gearset
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('gearset_list')


class GearsetList(ListView):
    model = Gearset
    template_name = 'gear/gearset_list.html'


class JobList(ListView):
    model = Job
    template_name = 'gear/__list__.html'
    ordering = ['id']


class RaceList(ListView):
    model = Race
    template_name = 'gear/__list__.html'
    ordering = ['name']


class ContentList(ListView):
    model = Content
    template_name = 'gear/__list__.html'


class TypeList(ListView):
    model = Type
    template_name = 'gear/__list__.html'
