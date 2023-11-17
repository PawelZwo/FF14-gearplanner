# Django models
from django.db import models

# AbstractUser model imports
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Additional imports
import uuid


class Account(AbstractUser):
    pass


class Job(models.Model):

    ROLES = [
        ("tank", "tank"),
        ("healer", "healer"),
        ("melee", "melee"),
        ("ranged", "ranged"),
        ("caster", "caster"),
    ]

    name = models.CharField(db_comment="Name of the job")
    role = models.CharField(choices=ROLES)

    def __str__(self):
        return f"{self.name}"


class Race(models.Model):
    name = models.CharField(db_comment="Race name")
    base_vitality = models.PositiveSmallIntegerField(
        db_comment="Base vitality value for the race")
    base_strength = models.PositiveSmallIntegerField(
        db_comment="Base strength value for the race")
    base_dexterity = models.PositiveSmallIntegerField(
        db_comment="Base dexterity value for the race")
    base_intelligence = models.PositiveSmallIntegerField(
        db_comment="Base intelligence value for the race")
    base_mind = models.PositiveSmallIntegerField(
        db_comment="Base mind value for the race")
    base_piety = models.PositiveSmallIntegerField(
        db_comment="Base piety value for the race")

    def __str__(self):
        return f"{self.name}"


class Cost(models.Model):
    name = models.CharField(unique=True, null=True)
    mythos_1 = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Mythos I tokens needed to exchange for a piece of gear")
    mythos_2 = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Mythos II tokens needed to exchange for a piece of gear")
    mythos_3 = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Mythos III tokens needed to exchange for a piece of gear")
    mythos_4 = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Mythos IV tokens needed to exchange for a piece of gear")
    unsung_head = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Head tokens needed to exchange for a piece of gear")
    unsung_body = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Body tokens needed to exchange for a piece of gear")
    unsung_legs = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Legs tokens needed to exchange for a piece of gear")
    unsung_hands = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Hands tokens needed to exchange for a piece of gear")
    unsung_feet = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Feet tokens needed to exchange for a piece of gear")
    unsung_acc = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Accessory tokens needed to exchange for a piece of gear")
    tomestones = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Tomestones needed to exchange for a piece of gear")
    weapon_token = models.BooleanField(
        null=True, default=False,
        db_comment="Is weapon token needed to exchange for a weapon")
    weapon_token_price = models.PositiveSmallIntegerField(
        null=True, default=0,
        db_comment="Number of Unsung Weapon tokens needed to exchange for a weapon token")

    def __str__(self):
        return f"{self.name}"


class Gear(models.Model):
    ACQUISITION_TYPES = [
        ("NR", "Normal Raid"),
        ("AR", "Alliance Raid"),
        ("SR", "Savage Raid"),
        ("TG", "Tomestone Gear"),
        ("ATG", "Augmented Tomestone Gear"),
        ("ETG", "Exquisite Tomestone Weapon"),
        ("C_Normal_Q", "Crafted Normal Quality"),
        ("C_High_Q", "Crafted High Quality"),
        ("DD", "Dungeon Drop"),
        ("RW", "Relic Weapon")
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
        ("Striking", "Striking"),
        ("Maiming", "Maiming"),
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

    name = models.CharField(db_comment="Name of the gear")
    category = models.CharField(
        choices=CATEGORIES, db_comment="Category of the gear")
    acquisition = models.CharField(
        choices=ACQUISITION_TYPES, db_comment="Way to obtain the gear")
    added_in_patch = models.CharField(
        choices=PATCHES, db_comment="Patch the gear was added on")
    slot = models.CharField(choices=TYPES, db_comment="Slot for the gear")
    cost = models.OneToOneField(
        Cost, on_delete=models.CASCADE, db_comment="Costs of the gear")
    job = models.ManyToManyField(Job, related_name="gear_job")
    ff14_db_index = models.PositiveSmallIntegerField(null=True, blank=True)

    # Gear actual stats
    item_level = models.PositiveSmallIntegerField(
        db_comment="Item level of the gear")
    physical_dmg = models.PositiveSmallIntegerField(
        null=True, db_comment="Weapon's physical damage")
    magical_dmg = models.PositiveSmallIntegerField(
        null=True, db_comment="Weapon's magical damage")
    auto_attack = models.DecimalField(
        null=True, max_digits=5, decimal_places=2, db_comment="Weapon's auto attack")
    delay = models.DecimalField(
        null=True, max_digits=5, decimal_places=2, db_comment="Weapon's delay")
    dps = models.DecimalField(null=True, max_digits=5,
                              decimal_places=2, db_comment="Weapon's dps")
    block_strength = models.PositiveSmallIntegerField(
        null=True, db_comment="Shield's block strength")
    block_rate = models.PositiveSmallIntegerField(
        null=True, db_comment="Shield's block rate")
    defense = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's defense")
    magic_defense = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's magic defense")
    vitality = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's vitality value")
    strength = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's strength value")
    dexterity = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's dexterity value")
    tenacity = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's tenacity value")
    intelligence = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's intelligence value")
    mind = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's mind value")
    piety = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's piety value")
    critical_rate = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's critical rate value")
    direct_hit = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's direct hit value")
    determination = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's determination value")
    skill_speed = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's skill speed value")
    spell_speed = models.PositiveSmallIntegerField(
        null=True, db_comment="Gear's spell speed value")

    class Meta:
        ordering = ['category', 'pk']

    def __str__(self):
        return f"{self.name}"


class Gearset(models.Model):
    uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(unique=True)
    job = models.OneToOneField(Job, on_delete=models.CASCADE)
    weapon = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_weapon")
    shield = models.OneToOneField(
        Gear, on_delete=models.CASCADE, null=True, related_name="gearset_shield")
    head = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_head")
    body = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_body")
    legs = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_legs")
    hands = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_hands")
    feet = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_feet")
    earring = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_earring")
    necklace = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_necklace")
    bracelet = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_bracelet")
    left_ring = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_left_ring")
    right_ring = models.OneToOneField(
        Gear, on_delete=models.CASCADE, related_name="gearset_right_ring")

    def __str__(self):
        return f"{self.name}"

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
    account = models.OneToOneField(settings.AUTH_USER_MODEL,
                                   on_delete=models.DO_NOTHING,
                                   null=True,
                                   related_name="playergearset_account")
    gearset = models.ForeignKey(Gearset,
                                on_delete=models.DO_NOTHING,
                                null=True,
                                related_name="playergearset_gearset")
