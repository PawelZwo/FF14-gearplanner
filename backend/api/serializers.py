# REST imports
from rest_framework import serializers

# Models imports
from .models import Job, Race, Cost, Gear, Gearset


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ("id", "job_name", "role")


class JobGearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        exclude = ("role",)


class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cost
        fields = ("id", 'cost_name', 'mythos_1', 'mythos_2', 'mythos_3', 'mythos_4', 'unsung_head', 'unsung_body', 'unsung_legs',
                  'unsung_hands', 'unsung_feet', 'unsung_acc', 'tomestones', 'weapon_token', 'weapon_token_price', )


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ("id", 'race_name', 'base_vitality', 'base_strength',
                  'base_dexterity', 'base_intelligence', 'base_mind', 'base_piety', )


class GearSerializer(serializers.ModelSerializer):
    acquisition = serializers.CharField(source='get_acquisition_display')
    job = JobGearSerializer(many=True)
    cost_name = serializers.CharField(source='cost')

    class Meta:
        model = Gear
        fields = ('id', 'gear_name', 'slug', 'category', 'acquisition', 'added_in_patch',
                  'slot', 'cost_name', 'job', 'ff14_db_index', 'ff14_db_icon',
                  'item_level', 'physical_dmg', 'magical_dmg',
                  'auto_attack', 'delay', 'block_strength', 'block_rate', 'defense',
                  'magic_defense', 'vitality', 'strength', 'dexterity',
                  'tenacity', 'intelligence', 'mind', 'piety', 'critical_rate',
                  'direct_hit', 'determination', 'skill_speed', 'spell_speed',)


class GearsetSerializer(serializers.ModelSerializer):
    # attributes = serializers.SerializerMethodField(
    #     source='calculate_total_stats')
    attributes = serializers.SerializerMethodField()
    job_name = serializers.CharField(source='job')

    class Meta:
        model = Gearset
        fields = ('uuid', 'gearset_name', 'slug', 'job', 'job_name', 'weapon',
                  'shield', 'head', 'body', 'legs', 'hands', 'feet', 'earring',
                  'necklace', 'bracelet', 'left_ring', 'right_ring',
                  'attributes', 'date_added', 'last_modified')

    def get_attributes(self, obj):
        return obj.calculate_total_stats()
