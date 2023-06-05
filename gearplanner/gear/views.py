from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView, CreateView, UpdateView
from .forms import *
from django.contrib import messages

"""
Index view with main menu and login/register/logout/profile links (depending on a user).
"""


class IndexView(View):
    def get(self, request):
        return render(request, 'gear/index.html')


"""
SUPERUSER ONLY gear adding view.
"""


class AddGear(CreateView):
    model = Gear
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_gear')


"""
List of gear in the DB sorted by the type of a gear and which piece is it.
"""


class GearList(View):
    GEAR_MAPPING = {
        # Fending (tanks) gear and accessories
        'fending_body': {'name__contains': 'Fending', 'cost_id': 6},
        'fending_legs': {'name__contains': 'Fending', 'cost_id': 9},
        'fending_head': {'name__contains': 'Fending', 'cost_id': 7},
        'fending_hands': {'name__contains': 'Fending', 'cost_id': 10},
        'fending_feet': {'name__contains': 'Fending', 'cost_id': 11},
        'tank_weapon': {'cost__in': [4, 5], 'job__in': [1, 2, 3, 4]},
        'shield': {'cost': 8},
        'fending_earrings': {'name__contains': 'Fending', 'cost_id': 12},
        'fending_necklace': {'name__contains': 'Fending', 'cost_id': 13},
        'fending_bracelet': {'name__contains': 'Fending', 'cost_id': 15},
        'fending_ring': {'name__contains': 'Fending', 'cost_id': 14},

        # Healing (healers) gear and accessories
        'healing_body': {'name__contains': 'Healing', 'cost_id': 6},
        'healing_legs': {'name__contains': 'Healing', 'cost_id': 9},
        'healing_head': {'name__contains': 'Healing', 'cost_id': 7},
        'healing_hands': {'name__contains': 'Healing', 'cost_id': 10},
        'healing_feet': {'name__contains': 'Healing', 'cost_id': 11},
        'healer_weapon': {'cost': 5, 'job__in': [5, 6, 7, 8]},
        'healing_earrings': {'name__contains': 'Healing', 'cost_id': 12},
        'healing_necklace': {'name__contains': 'Healing', 'cost_id': 13},
        'healing_bracelet': {'name__contains': 'Healing', 'cost_id': 15},
        'healing_ring': {'name__contains': 'Healing', 'cost_id': 14},

        # DPS gear
        # Striking (MNK / SAM) gear
        'striking_body': {'name__contains': 'Striking', 'cost_id': 6},
        'striking_legs': {'name__contains': 'Striking', 'cost_id': 9},
        'striking_head': {'name__contains': 'Striking', 'cost_id': 7},
        'striking_hands': {'name__contains': 'Striking', 'cost_id': 10},
        'striking_feet': {'name__contains': 'Striking', 'cost_id': 11},

        # Maiming (DRG / RPR) gear
        'maiming_body': {'name__contains': 'Maiming', 'cost_id': 6},
        'maiming_legs': {'name__contains': 'Maiming', 'cost_id': 9},
        'maiming_head': {'name__contains': 'Maiming', 'cost_id': 7},
        'maiming_hands': {'name__contains': 'Maiming', 'cost_id': 10},
        'maiming_feet': {'name__contains': 'Maiming', 'cost_id': 11},

        # Scouting (NIN) gear
        'scouting_body': {'name__contains': 'Scouting', 'cost_id': 6},
        'scouting_legs': {'name__contains': 'Scouting', 'cost_id': 9},
        'scouting_head': {'name__contains': 'Scouting', 'cost_id': 7},
        'scouting_hands': {'name__contains': 'Scouting', 'cost_id': 10},
        'scouting_feet': {'name__contains': 'Scouting', 'cost_id': 11},

        # DPS weapons
        'mnksam_weapon': {'cost': 5, 'job__in': [9, 12]},
        'nin_weapon': {'cost': 5, 'job__in': [11]},
        'drgrpr_weapon': {'cost': 5, 'job__in': [10, 13]},
        'ranged_weapon': {'cost': 5, 'job__in': [14, 15, 16]},
        'caster_weapon': {'cost': 5, 'job__in': [17, 18, 19]},

        # DPS accessories
        'slaying_earrings': {'name__contains': 'Slaying', 'cost_id': 12},
        'slaying_necklace': {'name__contains': 'Slaying', 'cost_id': 13},
        'slaying_bracelet': {'name__contains': 'Slaying', 'cost_id': 15},
        'slaying_ring': {'name__contains': 'Slaying', 'cost_id': 14},

        # Aiming (BRD, MCH, DNC) gear and accessories
        'aiming_body': {'name__contains': 'Aiming', 'cost_id': 6},
        'aiming_legs': {'name__contains': 'Aiming', 'cost_id': 9},
        'aiming_head': {'name__contains': 'Aiming', 'cost_id': 7},
        'aiming_hands': {'name__contains': 'Aiming', 'cost_id': 10},
        'aiming_feet': {'name__contains': 'Aiming', 'cost_id': 11},
        'aiming_earrings': {'name__contains': 'Aiming', 'cost_id': 12},
        'aiming_necklace': {'name__contains': 'Aiming', 'cost_id': 13},
        'aiming_bracelet': {'name__contains': 'Aiming', 'cost_id': 15},
        'aiming_ring': {'name__contains': 'Aiming', 'cost_id': 14},

        # Casting (BLM, SMN, RDM) gear and accessories
        'casting_body': {'name__contains': 'Casting', 'cost_id': 6},
        'casting_legs': {'name__contains': 'Casting', 'cost_id': 9},
        'casting_head': {'name__contains': 'Casting', 'cost_id': 7},
        'casting_hands': {'name__contains': 'Casting', 'cost_id': 10},
        'casting_feet': {'name__contains': 'Casting', 'cost_id': 11},
        'casting_earrings': {'name__contains': 'Casting', 'cost_id': 12},
        'casting_necklace': {'name__contains': 'Casting', 'cost_id': 13},
        'casting_bracelet': {'name__contains': 'Casting', 'cost_id': 15},
        'casting_ring': {'name__contains': 'Casting', 'cost_id': 14},
    }

    def get(self, request):
        context = {}
        for gear_name, filters in self.GEAR_MAPPING.items():
            gear_items = Gear.objects.filter(**filters).order_by('id')
            context[gear_name] = gear_items

        return render(request, 'gear/gear_all.html', context)


"""
List of gear for tanks only.
"""


class TankGearList(View):
    FENDING_GEAR_MAPPING = {
        'fending_body': {'name__contains': 'Fending', 'cost_id': 6},
        'fending_legs': {'name__contains': 'Fending', 'cost_id': 9},
        'fending_head': {'name__contains': 'Fending', 'cost_id': 7},
        'fending_hands': {'name__contains': 'Fending', 'cost_id': 10},
        'fending_feet': {'name__contains': 'Fending', 'cost_id': 11},
        'tank_weapon': {'cost__in': [4, 5], 'job__in': [1, 2, 3, 4]},
        'shield': {'cost': 8},
        'fending_earrings': {'name__contains': 'Fending', 'cost_id': 12},
        'fending_necklace': {'name__contains': 'Fending', 'cost_id': 13},
        'fending_bracelet': {'name__contains': 'Fending', 'cost_id': 15},
        'fending_ring': {'name__contains': 'Fending', 'cost_id': 14},
    }

    def get(self, request):
        context = {}
        for gear_name, filters in self.FENDING_GEAR_MAPPING.items():
            gear_items = Gear.objects.filter(**filters).order_by('id')
            context[gear_name] = gear_items

        return render(request, 'gear/gear_tank.html', context)


"""
List of gear for healers only.
"""


class HealerGearList(View):
    HEALING_GEAR_MAPPING = {
        'healing_body': {'name__contains': 'Healing', 'cost_id': 6},
        'healing_legs': {'name__contains': 'Healing', 'cost_id': 9},
        'healing_head': {'name__contains': 'Healing', 'cost_id': 7},
        'healing_hands': {'name__contains': 'Healing', 'cost_id': 10},
        'healing_feet': {'name__contains': 'Healing', 'cost_id': 11},
        'healer_weapon': {'cost': 5, 'job__in': [5, 6, 7, 8]},
        'healing_earrings': {'name__contains': 'Healing', 'cost_id': 12},
        'healing_necklace': {'name__contains': 'Healing', 'cost_id': 13},
        'healing_bracelet': {'name__contains': 'Healing', 'cost_id': 15},
        'healing_ring': {'name__contains': 'Healing', 'cost_id': 14},
    }

    def get(self, request):
        context = {}
        for gear_name, filters in self.HEALING_GEAR_MAPPING.items():
            gear_items = Gear.objects.filter(**filters).order_by('id')
            context[gear_name] = gear_items

        return render(request, 'gear/gear_healer.html', context)


"""
List of gear for DPS only.
"""


class DpsGearList(View):
    GEAR_MAPPING = {
        'striking_body': {'name__contains': 'Striking', 'cost_id': 6},
        'striking_legs': {'name__contains': 'Striking', 'cost_id': 9},
        'striking_head': {'name__contains': 'Striking', 'cost_id': 7},
        'striking_hands': {'name__contains': 'Striking', 'cost_id': 10},
        'striking_feet': {'name__contains': 'Striking', 'cost_id': 11},
        'maiming_body': {'name__contains': 'Maiming', 'cost_id': 6},
        'maiming_legs': {'name__contains': 'Maiming', 'cost_id': 9},
        'maiming_head': {'name__contains': 'Maiming', 'cost_id': 7},
        'maiming_hands': {'name__contains': 'Maiming', 'cost_id': 10},
        'maiming_feet': {'name__contains': 'Maiming', 'cost_id': 11},
        'scouting_body': {'name__contains': 'Scouting', 'cost_id': 6},
        'scouting_legs': {'name__contains': 'Scouting', 'cost_id': 9},
        'scouting_head': {'name__contains': 'Scouting', 'cost_id': 7},
        'scouting_hands': {'name__contains': 'Scouting', 'cost_id': 10},
        'scouting_feet': {'name__contains': 'Scouting', 'cost_id': 11},
        'mnksam_weapon': {'cost': 5, 'job__in': [9, 12]},
        'nin_weapon': {'cost': 5, 'job__in': [11]},
        'drgrpr_weapon': {'cost': 5, 'job__in': [10, 13]},
        'slaying_earrings': {'name__contains': 'Slaying', 'cost_id': 12},
        'slaying_necklace': {'name__contains': 'Slaying', 'cost_id': 13},
        'slaying_bracelet': {'name__contains': 'Slaying', 'cost_id': 15},
        'slaying_ring': {'name__contains': 'Slaying', 'cost_id': 14},
        'aiming_body': {'name__contains': 'Aiming', 'cost_id': 6},
        'aiming_legs': {'name__contains': 'Aiming', 'cost_id': 9},
        'aiming_head': {'name__contains': 'Aiming', 'cost_id': 7},
        'aiming_hands': {'name__contains': 'Aiming', 'cost_id': 10},
        'aiming_feet': {'name__contains': 'Aiming', 'cost_id': 11},
        'ranged_weapon': {'cost': 5, 'job__in': [14, 15, 16]},
        'aiming_earrings': {'name__contains': 'Aiming', 'cost_id': 12},
        'aiming_necklace': {'name__contains': 'Aiming', 'cost_id': 13},
        'aiming_bracelet': {'name__contains': 'Aiming', 'cost_id': 15},
        'aiming_ring': {'name__contains': 'Aiming', 'cost_id': 14},
        'casting_body': {'name__contains': 'Casting', 'cost_id': 6},
        'casting_legs': {'name__contains': 'Casting', 'cost_id': 9},
        'casting_head': {'name__contains': 'Casting', 'cost_id': 7},
        'casting_hands': {'name__contains': 'Casting', 'cost_id': 10},
        'casting_feet': {'name__contains': 'Casting', 'cost_id': 11},
        'caster_weapon': {'cost': 5, 'job__in': [17, 18, 19]},
        'casting_earrings': {'name__contains': 'Casting', 'cost_id': 12},
        'casting_necklace': {'name__contains': 'Casting', 'cost_id': 13},
        'casting_bracelet': {'name__contains': 'Casting', 'cost_id': 15},
        'casting_ring': {'name__contains': 'Casting', 'cost_id': 14},
    }

    def get(self, request):
        context = {}
        for gear_name, filters in self.GEAR_MAPPING.items():
            gear_items = Gear.objects.filter(**filters).order_by('id')
            context[gear_name] = gear_items

        return render(request, 'gear/gear_dps.html', context)


"""
Details of a gear piece with information of its: name, item level, for what jobs is it for, if it's craftable or not, stats.
"""


class GearDetails(View):
    def get(self, request, pk):
        item = Gear.objects.get(id=pk)
        return render(request, 'gear/gear_details.html', {'item': item})


"""
SUPERUSER ONLY adding cost of particular gear pieces.
"""


class AddCost(CreateView):
    model = Cost
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_cost')


"""
SUPERUSER ONLY list of all costs.
"""


class CostList(ListView):
    model = Cost
    template_name = 'gear/__list__.html'
    ordering = ['-tomestones', 'type_id']


"""
SUPERUSER ONLY adding a gearset.
"""


class AddGearsetAdmin(CreateView):
    model = Gearset
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('gearset_list')


"""
SUPERUSER ONLY (as for now) updating a gearset.
"""


class UpdateGearset(UpdateView):
    model = Gearset
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('gearset_list')


"""
General use adding gearset and sending it into a form.
"""


class AddGearset(View):
    def get(self, request):
        context = {
            'jobs': Job.objects.all(),
            'races': Race.objects.all(),
            'contents': Content.objects.all(),
            'weapons': Gear.objects.filter(cost__weapon_token=True).order_by('job'),
            'heads': Gear.objects.filter(cost_id=7),
            'bodies': Gear.objects.filter(cost_id=6),
            'legs': Gear.objects.filter(cost_id=9),
            'hands': Gear.objects.filter(cost_id=10),
            'feet': Gear.objects.filter(cost_id=11),
            'earrings': Gear.objects.filter(cost_id=12),
            'necklaces': Gear.objects.filter(cost_id=13),
            'bracelets': Gear.objects.filter(cost_id=15),
            'left_rings': Gear.objects.filter(cost_id=14),
            'right_rings': Gear.objects.filter(cost_id=14),
            'shields': Gear.objects.filter(cost_id=8)
        }
        return render(request, 'gear/add_gearset.html', context)

    def post(self, request):
        user = request.user if request.user.is_authenticated else None
        title = request.POST.get('title')

        if Gearset.objects.filter(name=title):
            messages.warning(request, f"There's already a gearset named '{title}'! Choose another name.")
            return redirect('add_gearset')
        else:
            content = request.POST.get('content')
            race = request.POST.get('race')
            job = request.POST.get('job')
            weapon = request.POST.get('weapon')
            head = request.POST.get('head')
            body = request.POST.get('body')
            legs = request.POST.get('legs')
            hands = request.POST.get('hands')
            feet = request.POST.get('feet')
            earrings = request.POST.get('earrings')
            necklace = request.POST.get('necklace')
            bracelet = request.POST.get('bracelet')
            left_ring = request.POST.get('left_ring')
            right_ring = request.POST.get('right_ring')
            shield = request.POST.get('shield')

            if job != '1' and job != '0':
                Gearset.objects.create(name=title,
                                       job=Job.objects.get(pk=job),
                                       content=Content.objects.get(pk=content),
                                       weapon=Gear.objects.get(pk=weapon),
                                       body=Gear.objects.get(pk=body),
                                       legs=Gear.objects.get(pk=legs),
                                       helmet=Gear.objects.get(pk=head),
                                       hands=Gear.objects.get(pk=hands),
                                       feet=Gear.objects.get(pk=feet),
                                       earrings=Gear.objects.get(pk=earrings),
                                       necklace=Gear.objects.get(pk=necklace),
                                       bracelet=Gear.objects.get(pk=bracelet),
                                       left_ring=Gear.objects.get(pk=left_ring),
                                       right_ring=Gear.objects.get(pk=right_ring),
                                       )

                player_gearset = PlayerGearset(name=title,
                                               account=user,
                                               job=Job.objects.get(pk=job),
                                               race=Race.objects.get(pk=race),
                                               gearset=Gearset.objects.get(name=title),
                                               content=Content.objects.get(pk=content)
                                               )

                player_gearset.save()
                return redirect('gearset_details', pk=Gearset.objects.get(name=title).pk)

            elif job == '0':
                messages.warning(request, f"Please choose a job before trying creating a new gearset!")
                return redirect('add_gearset')

            else:
                Gearset.objects.create(name=title,
                                       job=Job.objects.get(pk=job),
                                       content=Content.objects.get(pk=content),
                                       weapon=Gear.objects.get(pk=weapon),
                                       body=Gear.objects.get(pk=body),
                                       legs=Gear.objects.get(pk=legs),
                                       helmet=Gear.objects.get(pk=head),
                                       hands=Gear.objects.get(pk=hands),
                                       feet=Gear.objects.get(pk=feet),
                                       earrings=Gear.objects.get(pk=earrings),
                                       necklace=Gear.objects.get(pk=necklace),
                                       bracelet=Gear.objects.get(pk=bracelet),
                                       left_ring=Gear.objects.get(pk=left_ring),
                                       right_ring=Gear.objects.get(pk=right_ring),
                                       shield=Gear.objects.get(pk=shield)
                                       )

                player_gearset = PlayerGearset(name=title,
                                               account=user,
                                               job=Job.objects.get(pk=job),
                                               race=Race.objects.get(pk=race),
                                               gearset=Gearset.objects.get(name=title),
                                               content=Content.objects.get(pk=content)
                                               )

                player_gearset.save()
                return redirect('gearset_details', pk=Gearset.objects.get(name=title).pk)


"""
List of gearsets sorted by job, ordered by content it's for.
"""


class GearsetList(View):
    JOB_GEARSET_MAPPING = {
        1: 'pld_gearsets',
        2: 'war_gearsets',
        3: 'drk_gearsets',
        4: 'gnb_gearsets',
        5: 'whm_gearsets',
        6: 'sch_gearsets',
        7: 'ast_gearsets',
        8: 'sge_gearsets',
        9: 'mnk_gearsets',
        10: 'drg_gearsets',
        11: 'nin_gearsets',
        12: 'sam_gearsets',
        13: 'rpr_gearsets',
        14: 'brd_gearsets',
        15: 'dnc_gearsets',
        16: 'mch_gearsets',
        17: 'blm_gearsets',
        18: 'smn_gearsets',
        19: 'rdm_gearsets',
    }

    def get(self, request):
        context = {}
        for job_id, gearset_name in self.JOB_GEARSET_MAPPING.items():
            gearsets = Gearset.objects.filter(job_id=job_id).order_by('content_id')
            context[gearset_name] = gearsets

        return render(request, 'gear/gearset_list.html', context)


"""
Details for the chosen gearset with all pieces, showing main and secondary stats sums.
"""


class GearsetDetails(View):
    def get(self, request, pk):
        gearset = Gearset.objects.get(pk=pk)
        context = {
            'gearset': gearset,
            'job': gearset.job.name,
            'vitality': gearset.calculate_total_vitality(),
            'strength': gearset.calculate_total_strength(),
            'dexterity': gearset.calculate_total_dexterity(),
            'intelligence': gearset.calculate_total_intelligence(),
            'mind': gearset.calculate_total_mind(),
            'piety': gearset.calculate_total_piety(),
            'critical_rate': gearset.calculate_total_critical_rate(),
            'critical_hit': gearset.calculate_total_critical_rate() // 95,
            'direct_hit': gearset.calculate_total_direct_hit(),
            'determination': gearset.calculate_total_determination(),
            'skill_speed': gearset.calculate_total_skill_speed(),
            'spell_speed': gearset.calculate_total_spell_speed(),
            'tenacity': gearset.calculate_total_tenacity(),
            'defense': gearset.calculate_total_defense(),
            'magic_defense': gearset.calculate_total_magic_defense(),
        }

        return render(request, 'gear/gearset_details.html', context)


"""
SUPERUSER ONLY list of all jobs in the DB.
"""


class JobList(ListView):
    model = Job
    template_name = 'gear/__list__.html'
    ordering = ['id']


"""
List of all races in the DB.
"""


class RaceList(View):
    def get(self, request):
        return render(request, 'gear/races.html', {'races': Race.objects.all()})


"""
SUPERUSER ONLY list of all content in the DB.
"""


class ContentList(ListView):
    model = Content
    template_name = 'gear/__list__.html'


"""
SUPERUSER ONLY list of all types of gear type in the DB.
"""


class TypeList(ListView):
    model = Type
    template_name = 'gear/__list__.html'
