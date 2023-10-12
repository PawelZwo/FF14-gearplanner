from django.contrib.auth.models import User
from django.db import models


class Job(models.Model):
    name = models.CharField(db_comment="Name of the job")

    def __str__(self):
        return self.name


class Race(models.Model):
    name = models.CharField(db_comment="Race name")
    base_strength = models.PositiveSmallIntegerField(db_comment="Base strength value for the race")
    base_dexterity = models.PositiveSmallIntegerField(db_comment="Base dexterity value for the race")
    base_vitality = models.PositiveSmallIntegerField(db_comment="Base vitality value for the race")
    base_intelligence = models.PositiveSmallIntegerField(db_comment="Base intelligence value for the race")
    base_mind = models.PositiveSmallIntegerField(db_comment="Base mind value for the race")
    base_piety = models.PositiveSmallIntegerField(db_comment="Base piety value for the race")

    def __str__(self):
        return self.name


class Cost(models.Model):
    mythos_1 = models.PositiveSmallIntegerField(
        null=True, default=3,
        db_comment="Number of Mythos I tokens needed to exchange for a piece of gear")
    mythos_2 = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Mythos II tokens needed to exchange for a piece of gear",
        default=4)
    mythos_3 = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Mythos III tokens needed to exchange for a piece of gear",
        default=6)
    mythos_4 = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Mythos IV tokens needed to exchange for a piece of gear",
        default=8)
    unsung_head = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Unsung Head tokens needed to exchange for a piece of gear",
        default=2)
    unsung_body = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Unsung Body tokens needed to exchange for a piece of gear",
        default=4)
    unsung_legs = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Unsung Legs tokens needed to exchange for a piece of gear",
        default=4)
    unsung_hands = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Unsung Hands tokens needed to exchange for a piece of gear",
        default=2)
    unsung_feet = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Unsung Feet tokens needed to exchange for a piece of gear",
        default=2)
    unsung_acc = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Unsung Accessory tokens needed to exchange for a piece of gear",
        default=1)
    tomestones = models.PositiveSmallIntegerField(
        null=True,
        db_comment="Number of Tomestones needed to exchange for a piece of gear",
        default=375)
    weapon_token = models.BooleanField(
        null=True,
        db_comment="Is weapon token needed to exchange for a weapon",
        default=False)

    # unsung_weapon = models.PositiveSmallIntegerField(
    #     null=True,
    #     db_comment="Number of Unsung Weapon tokens needed to exchange for a ")


class Gear(models.Model):
    CONTENT_TYPES = [
        ("NR", "Normal Raid"),
        ("AR", "Alliance Raid"),
        ("SR", "Savage Raid"),
        ("TG", "Tomestone Gear"),
        ("ATG", "Augmented Tomestone Gear"),
        ("CHQ", "Crafted High Quality")
    ]

    TYPES = [
        ("Head", "Head"),
        ("Body", "Body"),
        ("Legs", "Legs"),
        ("Hands", "Hands"),
        ("Feet", "Feet"),
        ("Earring", "Earring"),
        ("Necklace", "Necklace"),
        ("Bracelet", "Bracelet"),
        ("Ring", "Ring"),
        ("Shield", "Shield"),
        ("Weapon", "Weapon")
    ]

    CATEGORIES = [
        ("Fending", "Fending"),
        ("Healing", "Healing"),
        ("Scouting", "Scouting"),
        ("Aiming", "Aiming"),
        ("Casting", "Casting"),
        ("Slaying", "Slaying")
    ]

    PATCHES = [
        ("x.0", "x.0"),
        ("x.1", "x.1"),
        ("x.2", "x.2"),
        ("x.3", "x.3"),
        ("x.4", "x.4"),
        ("x.5", "x.5")
    ]

    name = models.CharField(unique=True, db_comment="Name of the gear")
    category = models.CharField(choices=CATEGORIES, db_comment="Category of the gear")
    content_type = models.CharField(choices=CONTENT_TYPES, db_comment="Way to obtain the gear")
    added_in_patch = models.CharField(choices=PATCHES, db_comment="Patch the gear was added on")
    type = models.CharField(choices=TYPES, db_comment="Type of the gear")
    cost = models.ManyToManyField(Cost)
    job = models.ManyToManyField(Job)
    item_level = models.PositiveSmallIntegerField(db_comment="Item level of the gear")
    physical_dmg = models.PositiveSmallIntegerField(null=True, db_comment="Weapon's physical damage")
    magical_dmg = models.PositiveSmallIntegerField(null=True, db_comment="Weapon's magical damage")
    auto_attack = models.DecimalField(null=True, max_digits=5, decimal_places=2, db_comment="Weapon's auto attack")
    delay = models.DecimalField(null=True, max_digits=5, decimal_places=2, db_comment="Weapon's delay")
    dps = models.DecimalField(null=True, max_digits=5, decimal_places=2, db_comment="Weapon's dps")
    block_strength = models.PositiveSmallIntegerField(null=True, db_comment="Shield's block strength")
    block_rate = models.PositiveSmallIntegerField(null=True, db_comment="Shield's block rate")
    defense = models.PositiveSmallIntegerField(null=True, db_comment="Gear's defense")
    magic_defense = models.PositiveSmallIntegerField(null=True, db_comment="Gear's magic defense")
    vitality = models.PositiveSmallIntegerField(null=True, db_comment="Gear's vitality value")
    strength = models.PositiveSmallIntegerField(null=True, db_comment="Gear's strength value")
    dexterity = models.PositiveSmallIntegerField(null=True, db_comment="Gear's dexterity value")
    tenacity = models.PositiveSmallIntegerField(null=True, db_comment="Gear's tenacity value")
    intelligence = models.PositiveSmallIntegerField(null=True, db_comment="Gear's intelligence value")
    mind = models.PositiveSmallIntegerField(null=True, db_comment="Gear's mind value")
    piety = models.PositiveSmallIntegerField(null=True, db_comment="Gear's piety value")
    critical_rate = models.PositiveSmallIntegerField(null=True, db_comment="Gear's critical rate value")
    direct_hit = models.PositiveSmallIntegerField(null=True, db_comment="Gear's direct hit value")
    determination = models.PositiveSmallIntegerField(null=True, db_comment="Gear's determination value")
    skill_speed = models.PositiveSmallIntegerField(null=True, db_comment="Gear's skill speed value")
    spell_speed = models.PositiveSmallIntegerField(null=True, db_comment="Gear's spell speed value")

    class Meta:
        ordering = ['category']

    def __str__(self):
        return self.name


class Gearset(models.Model):
    name = models.CharField(unique=True)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    weapon = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="weapon")
    shield = models.ForeignKey(Gear, on_delete=models.CASCADE, null=True, blank=True, related_name="shield")
    body = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="body")
    legs = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="legs")
    head = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="head")
    hands = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="hands")
    feet = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="feet")
    earring = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="earring")
    necklace = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="necklace")
    bracelet = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="bracelet")
    left_ring = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="left_ring")
    right_ring = models.ForeignKey(Gear, on_delete=models.CASCADE, related_name="right_ring")

    def __str__(self):
        return self.name

    def calculate_total_stats(self):
        attributes = {
            "defense": 0,
            "spell_speed": 0,
            "skill_speed": 0,
            "determination": 0,
            "direct_hit": 0,
            "critical_rate": 0,
            "tenacity": 0,
            "piety": 0,
            "mind": 0,
            "intelligence": 0,
            "dexterity": 0,
            "magic_defense": 0,
            "strength": 0,
            "vitality": 0
        }

        equipment_slots = [
            self.weapon, self.shield, self.body, self.legs, self.head, self.hands,
            self.feet, self.earring, self.necklace, self.bracelet, self.left_ring, self.right_ring
        ]

        for equipment in equipment_slots:
            for attribute, value in attributes.items():
                attributes[attribute] += getattr(equipment, attribute, 0)

        return attributes


class PlayerGearsets(models.Model):
    gearset = models.ManyToManyField(Gearset)
    account = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True)
