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
            'fending_body':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=6).order_by('id'),
            'fending_legs':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=9).order_by('id'),
            'fending_head':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=7).order_by('id'),
            'fending_hands':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=10).order_by('id'),
            'fending_feet':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=11).order_by('id'),
            'tank_weapon':
                Gear.objects.filter(cost__in=[4, 5]).filter(job__in=[1, 2, 3, 4]).order_by('job'),
            'shield':
                Gear.objects.filter(cost=8).order_by('id'),
            'fending_earrings':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=12).order_by('id'),
            'fending_necklace':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=13).order_by('id'),
            'fending_bracelet':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=15).order_by('id'),
            'fending_ring':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=14).order_by('id'),

            'healing_body':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=6).order_by('id'),
            'healing_legs':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=9).order_by('id'),
            'healing_head':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=7).order_by('id'),
            'healing_hands':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=10).order_by('id'),
            'healing_feet':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=11).order_by('id'),
            'healer_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[5, 6, 7, 8]).order_by('job'),
            'healing_earrings':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=12).order_by('id'),
            'healing_necklace':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=13).order_by('id'),
            'healing_bracelet':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=15).order_by('id'),
            'healing_ring':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=14).order_by('id'),

            'striking_body':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=6).order_by('id'),
            'striking_legs':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=9).order_by('id'),
            'striking_head':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=7).order_by('id'),
            'striking_hands':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=10).order_by('id'),
            'striking_feet':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=11).order_by('id'),

            'maiming_body':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=6).order_by('id'),
            'maiming_legs':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=9).order_by('id'),
            'maiming_head':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=7).order_by('id'),
            'maiming_hands':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=10).order_by('id'),
            'maiming_feet':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=11).order_by('id'),

            'scouting_body':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=6).order_by('id'),
            'scouting_legs':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=9).order_by('id'),
            'scouting_head':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=7).order_by('id'),
            'scouting_hands':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=10).order_by('id'),
            'scouting_feet':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=11).order_by('id'),
            'mnksam_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[9, 12]).order_by('job'),
            'nin_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[11]).order_by('job'),
            'drgrpr_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[10, 13]).order_by('job'),
            'slaying_earrings':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=12).order_by('id'),
            'slaying_necklace':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=13).order_by('id'),
            'slaying_bracelet':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=15).order_by('id'),
            'slaying_ring':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=14).order_by('id'),

            'aiming_body':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=6).order_by('id'),
            'aiming_legs':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=9).order_by('id'),
            'aiming_head':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=7).order_by('id'),
            'aiming_hands':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=10).order_by('id'),
            'aiming_feet':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=11).order_by('id'),
            'ranged_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[14, 15, 16]).order_by('job'),
            'aiming_earrings':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=12).order_by('id'),
            'aiming_necklace':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=13).order_by('id'),
            'aiming_bracelet':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=15).order_by('id'),
            'aiming_ring':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=14).order_by('id'),

            'casting_body':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=6).order_by('id'),
            'casting_legs':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=9).order_by('id'),
            'casting_head':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=7).order_by('id'),
            'casting_hands':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=10).order_by('id'),
            'casting_feet':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=11).order_by('id'),
            'caster_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[17, 18, 19]).order_by('job'),
            'casting_earrings':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=12).order_by('id'),
            'casting_necklace':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=13).order_by('id'),
            'casting_bracelet':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=15).order_by('id'),
            'casting_ring':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=14).order_by('id'),
        }
        return render(request, 'gear/gear_all.html', context)


class TankGearList(View):
    def get(self, request):
        context = {
            'fending_body':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=6).order_by('id'),
            'fending_legs':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=9).order_by('id'),
            'fending_head':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=7).order_by('id'),
            'fending_hands':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=10).order_by('id'),
            'fending_feet':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=11).order_by('id'),
            'tank_weapon':
                Gear.objects.filter(cost__in=[4, 5]).filter(job__in=[1, 2, 3, 4]).order_by('job'),
            'shield':
                Gear.objects.filter(cost=8).order_by('id'),
            'fending_earrings':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=12).order_by('id'),
            'fending_necklace':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=13).order_by('id'),
            'fending_bracelet':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=15).order_by('id'),
            'fending_ring':
                Gear.objects.filter(name__contains='Fending').filter(cost_id=14).order_by('id'),
        }
        return render(request, 'gear/gear_tank.html', context)


class HealerGearList(View):
    def get(self, request):
        context = {
            'healing_body':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=6).order_by('id'),
            'healing_legs':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=9).order_by('id'),
            'healing_head':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=7).order_by('id'),
            'healing_hands':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=10).order_by('id'),
            'healing_feet':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=11).order_by('id'),
            'healer_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[5, 6, 7, 8]).order_by('job'),
            'healing_earrings':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=12).order_by('id'),
            'healing_necklace':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=13).order_by('id'),
            'healing_bracelet':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=15).order_by('id'),
            'healing_ring':
                Gear.objects.filter(name__contains='Healing').filter(cost_id=14).order_by('id'),
        }
        return render(request, 'gear/gear_healer.html', context)


class DpsGearList(View):
    def get(self, request):
        context = {
            'striking_body':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=6).order_by('id'),
            'striking_legs':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=9).order_by('id'),
            'striking_head':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=7).order_by('id'),
            'striking_hands':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=10).order_by('id'),
            'striking_feet':
                Gear.objects.filter(name__contains='Striking').filter(cost_id=11).order_by('id'),

            'maiming_body':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=6).order_by('id'),
            'maiming_legs':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=9).order_by('id'),
            'maiming_head':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=7).order_by('id'),
            'maiming_hands':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=10).order_by('id'),
            'maiming_feet':
                Gear.objects.filter(name__contains='Maiming').filter(cost_id=11).order_by('id'),

            'scouting_body':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=6).order_by('id'),
            'scouting_legs':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=9).order_by('id'),
            'scouting_head':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=7).order_by('id'),
            'scouting_hands':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=10).order_by('id'),
            'scouting_feet':
                Gear.objects.filter(name__contains='Scouting').filter(cost_id=11).order_by('id'),
            'mnksam_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[9, 12]).order_by('job'),
            'nin_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[11]).order_by('job'),
            'drgrpr_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[10, 13]).order_by('job'),
            'slaying_earrings':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=12).order_by('id'),
            'slaying_necklace':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=13).order_by('id'),
            'slaying_bracelet':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=15).order_by('id'),
            'slaying_ring':
                Gear.objects.filter(name__contains='Slaying').filter(cost_id=14).order_by('id'),

            'aiming_body':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=6).order_by('id'),
            'aiming_legs':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=9).order_by('id'),
            'aiming_head':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=7).order_by('id'),
            'aiming_hands':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=10).order_by('id'),
            'aiming_feet':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=11).order_by('id'),
            'ranged_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[14, 15, 16]).order_by('job'),
            'aiming_earrings':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=12).order_by('id'),
            'aiming_necklace':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=13).order_by('id'),
            'aiming_bracelet':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=15).order_by('id'),
            'aiming_ring':
                Gear.objects.filter(name__contains='Aiming').filter(cost_id=14).order_by('id'),

            'casting_body':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=6).order_by('id'),
            'casting_legs':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=9).order_by('id'),
            'casting_head':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=7).order_by('id'),
            'casting_hands':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=10).order_by('id'),
            'casting_feet':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=11).order_by('id'),
            'caster_weapon':
                Gear.objects.filter(cost=5).filter(job__in=[17, 18, 19]).order_by('job'),
            'casting_earrings':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=12).order_by('id'),
            'casting_necklace':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=13).order_by('id'),
            'casting_bracelet':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=15).order_by('id'),
            'casting_ring':
                Gear.objects.filter(name__contains='Casting').filter(cost_id=14).order_by('id'),
        }
        return render(request, 'gear/gear_dps.html', context)


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


class GearsetDetails(View):
    def get(self, request, pk):
        context = {
            'gearset': Gearset.objects.get(pk=pk),
            'job': Gearset.objects.get(pk=pk).weapon.job.all().last().name,
            'vitality': Gearset.objects.get(pk=pk).calculate_total_vitality(),
            'strength': Gearset.objects.get(pk=pk).calculate_total_strength(),
            'dexterity': Gearset.objects.get(pk=pk).calculate_total_dexterity(),
            'intelligence': Gearset.objects.get(pk=pk).calculate_total_intelligence(),
            'mind': Gearset.objects.get(pk=pk).calculate_total_mind(),
            'piety': Gearset.objects.get(pk=pk).calculate_total_piety(),
            'critical_rate': Gearset.objects.get(pk=pk).calculate_total_critical_rate(),
            'direct_hit': Gearset.objects.get(pk=pk).calculate_total_direct_hit(),
            'determination': Gearset.objects.get(pk=pk).calculate_total_determination(),
            'skill_speed': Gearset.objects.get(pk=pk).calculate_total_skill_speed(),
            'spell_speed': Gearset.objects.get(pk=pk).calculate_total_spell_speed(),
            'tenacity': Gearset.objects.get(pk=pk).calculate_total_tenacity(),
        }

        return render(request, 'gear/gearset_details.html', context)


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
