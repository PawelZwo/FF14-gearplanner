import pytest
from .models import *
from django.contrib.auth.models import User


@pytest.fixture
def job():
    jobs = [
        Job.objects.create(name='Alchemist'),
        Job.objects.create(name='Poucher'),
        Job.objects.create(name='Necromancer'),
        Job.objects.create(name='Swordsman')
    ]
    return jobs


@pytest.fixture
def content():
    contents = [
        Content.objects.create(name='Raid 1'),
        Content.objects.create(name='Raid 2'),
        Content.objects.create(name='Raid 3'),
        Content.objects.create(name='Raid 4')
    ]
    return contents


@pytest.fixture
def race():
    races = [
        Race.objects.create(name='Orc', base_vitality=10, base_strength=10, base_dexterity=10,
                            base_intelligence=10, base_mind=10, base_piety=10),

        Race.objects.create(name='Human', base_vitality=20, base_strength=20, base_dexterity=20,
                            base_intelligence=20, base_mind=20, base_piety=20),

        Race.objects.create(name='Gnome', base_vitality=30, base_strength=30, base_dexterity=30,
                            base_intelligence=30, base_mind=30, base_piety=30),

        Race.objects.create(name='Elf', base_vitality=40, base_strength=40, base_dexterity=40,
                            base_intelligence=40, base_mind=40, base_piety=40),
        Race.objects.create(name='Orc', base_vitality=10, base_strength=10, base_dexterity=10,
                            base_intelligence=10, base_mind=10, base_piety=10),

        Race.objects.create(name='Human', base_vitality=20, base_strength=20, base_dexterity=20,
                            base_intelligence=20, base_mind=20, base_piety=20),

        Race.objects.create(name='Gnome', base_vitality=30, base_strength=30, base_dexterity=30,
                            base_intelligence=30, base_mind=30, base_piety=30),

        Race.objects.create(name='Elf', base_vitality=40, base_strength=40, base_dexterity=40,
                            base_intelligence=40, base_mind=40, base_piety=40)
    ]
    return races


@pytest.fixture
def type_():
    types = [
        Type.objects.create(name='flask'),
        Type.objects.create(name='beaker'),
        Type.objects.create(name='cauldron'),
        Type.objects.create(name='iris')
    ]
    return types


@pytest.fixture
def cost(type_):
    costs = [
        Cost.objects.create(mythos_1=0, mythos_2=0, mythos_3=0, mythos_4=8, unsung_body=0, unsung_legs=0,
                            unsung_weapon=0, unsung_acc=0, unsung_feet=0, unsung_head=0, unsung_hands=0,
                            tomestones=0, weapon_token=False, type=type_[0]),

        Cost.objects.create(mythos_1=0, mythos_2=0, mythos_3=6, mythos_4=0, unsung_body=4, unsung_legs=0,
                            unsung_weapon=0, unsung_acc=0, unsung_feet=0, unsung_head=0, unsung_hands=0,
                            tomestones=825, weapon_token=False, type=type_[1])
    ]
    return costs


@pytest.fixture
def gear(cost, job):
    return Gear.objects.create(cost=cost[0], job=job, craftable=True, name='Zapalniczka', item_level=666,
                               physical_dmg=666, magical_dmg=666, auto_attack=66.6, delay=6.66, dps=666,
                               block_strength=666, block_rate=666, defense=666, magic_defense=666, strength=666,
                               dexterity=666, intelligence=666, mind=666, piety=666, vitality=666, tenacity=666,
                               critical_rate=666, direct_hit=666, determination=666, skill_speed=666,
                               spell_speed=666),


@pytest.fixture
def gearset(job, content, gear):
    gearsets = [
        Gearset.objects.create(name='Najlepszy', job=job[0].job.pk, content=content[0], weapon=gear[0], shield=gear[0],
                               body=gear[0], legs=gear[0], helmet=gear[0], hands=gear[0], feet=gear[0],
                               earrings=gear[0], necklace=gear[0], bracelet=gear[0], left_ring=gear[0],
                               right_ring=gear[0]),

        Gearset.objects.create(name='Bardziej najlepszy', job=job[1], content=content[1], weapon=gear[1],
                               shield=gear[1], body=gear[1], legs=gear[1], helmet=gear[1], hands=gear[1],
                               feet=gear[1], earrings=gear[1], necklace=gear[1], bracelet=gear[1],
                               left_ring=gear[1], right_ring=gear[1]),
    ]
    return gearsets


@pytest.fixture
def unique_name():
    unique_names = [
        f'gear{str(randint(0, 20))}#{str(randint(20, 40))}#{str(randint(40, 60))}',
        f'gear{str(randint(0, 20))}#{str(randint(20, 40))}#{str(randint(40, 60))}'
    ]
    return unique_names


@pytest.fixture
def player_gearset(user, gearset, race, job, content, unique_name):
    player_gearsets = [
        PlayerGearset.objects.create(name='Random1', account=user[0], job=job[0], race=race[0], gearset=gearset[0],
                                     content=content[0], unique_name=unique_name[0]),
        PlayerGearset.objects.create(name='Random2', account=user[1], job=job[1], race=race[1], gearset=gearset[1],
                                     content=content[1], unique_name=unique_name[1])
    ]
    return player_gearsets


@pytest.fixture
def form_data():
    form_data = {
        'username': 'testuser',
        'password1': 'password123',
        'password2': 'password123',
    }
    return form_data


@pytest.fixture
def form_data_login():
    form_data_login = {
        'username': 'testuser',
        'password': 'password123',
    }
    return form_data_login


@pytest.fixture
def test_user():
    test_user = User.objects.create_user(username='testuser', password='password123')
    return test_user
