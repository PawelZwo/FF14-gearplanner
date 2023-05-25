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
        context = {
            'fending':
                Gear.objects.filter(name__contains='Fending').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'tank_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[1, 2, 3, 4]).order_by('job'),
            'shield':
                Gear.objects.filter(cost=8).order_by('id'),
            'fending_acc':
                Gear.objects.filter(name__contains='Fending').filter(cost_id__in=[12, 13, 14, 15]).order_by('id'),

            'healing':
                Gear.objects.filter(name__contains='Healing').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'healer_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[5, 6, 7, 8]).order_by('job'),
            'healing_acc':
                Gear.objects.filter(name__contains='Healing').filter(cost_id__in=[12, 13, 14, 15]).order_by('id'),

            'striking':
                Gear.objects.filter(name__contains='Striking').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'maiming':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'scouting':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'mnksam_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[9, 12]).order_by('job'),
            'nin_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[11]).order_by('job'),
            'drgrpr_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[10, 13]).order_by('job'),
            'slaying_acc':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id__in=[12, 13, 14, 15]).order_by('id'),

            'aiming':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'ranged_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[14, 15, 16]).order_by('job'),
            'aiming_acc':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id__in=[12, 13, 14, 15]).order_by('id'),

            'casting':
                Gear.objects.filter(name__contains='Casting').filter(cost_id__in=[6, 7, 9, 10, 11]).order_by('id'),
            'caster_weapon':
                Gear.objects.filter(cost=4).filter(job__in=[17, 18, 19]).order_by('job'),
            'casting_acc':
                Gear.objects.filter(name__contains='Casting').filter(cost_id__in=[12, 13, 14, 15]).order_by('id'),
        }
        return render(request, 'gear/gear_all.html', context)


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
