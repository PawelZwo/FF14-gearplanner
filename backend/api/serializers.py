# REST imports
from rest_framework import serializers

# Models imports
from .models import Job, Race, Cost, Gear, Gearset


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ("id", "name", "role")


class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cost
        fields = ("id", 'name', 'mythos_1', 'mythos_2', 'mythos_3', 'mythos_4', 'unsung_head', 'unsung_body', 'unsung_legs',
                  'unsung_hands', 'unsung_feet', 'unsung_acc', 'tomestones', 'weapon_token', 'weapon_token_price', )


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = ("id", 'name', 'base_vitality', 'base_strength',
                  'base_dexterity', 'base_intelligence', 'base_mind', 'base_piety', )


class GearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gear
        fields = ('name', 'category', 'acquisition', 'added_in_patch',
                  'slot', 'cost', 'job', 'ff14_db_url', 'item_level',
                  'physical_dmg', 'magical_dmg', 'auto_attack', 'delay',
                  'dps', 'block_strength', 'block_rate', 'defense',
                  'magic_defense', 'vitality', 'strength', 'dexterity',
                  'tenacity', 'intelligence', 'mind', 'piety', 'critical_rate',
                  'direct_hit', 'determination', 'skill_speed', 'spell_speed', )


class GearsetSerializer(serializers.ModelSerializer):
    # attributes = serializers.SerializerMethodField(
    #     source='calculate_total_stats')
    attributes = serializers.SerializerMethodField()

    class Meta:
        model = Gearset
        fields = ('uuid', 'name', 'job', 'weapon', 'shield', 'head',
                  'body', 'legs', 'hands', 'feet', 'earring',
                  'necklace', 'bracelet', 'left_ring', 'right_ring', )

    def get_attributes(self, obj):
        return obj.calculate_total_stats()
