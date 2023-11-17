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
        fields = (
            "id",
            "name", "mythos_1", "mythos_2",
            "mythos_3", "unsung_head", "unsung_body",
            "unsung_legs", "unsung_hands", "unsung_feet",
            "unsung_acc", "tomestones", "weapon_token",
            "weapon_token_price",
        )


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = (
            "id",
            "name", "base_vitality", "base_strength",
            "base_dexterity", "base_intelligence", "base_mind",
            "base_piety"
        )


class GearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gear
        fields = "__all__"


class GearsetSerializer(serializers.ModelSerializer):
    attributes = serializers.SerializerMethodField(
        source='calculate_total_stats')

    class Meta:
        model = Gearset
        fields = "__all__"

