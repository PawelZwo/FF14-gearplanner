from django.db import models
# from accounts.models import Accounts
from random import randint


class Job(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Content(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Race(models.Model):
    name = models.CharField(max_length=50)
    base_strength = models.SmallIntegerField()
    base_dexterity = models.SmallIntegerField()
    base_vitality = models.SmallIntegerField()
    base_intelligence = models.SmallIntegerField()
    base_mind = models.SmallIntegerField()
    base_piety = models.SmallIntegerField()

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Cost(models.Model):
    mythos_1 = models.SmallIntegerField(null=True)
    mythos_2 = models.SmallIntegerField(null=True)
    mythos_3 = models.SmallIntegerField(null=True)
    mythos_4 = models.SmallIntegerField(null=True)
    unsung_1 = models.SmallIntegerField(null=True)
    unsung_body = models.SmallIntegerField(null=True)
    unsung_head = models.SmallIntegerField(null=True)
    unsung_legs = models.SmallIntegerField(null=True)
    unsung_feet = models.SmallIntegerField(null=True)
    unsung_hands = models.SmallIntegerField(null=True)
    unsung_acc = models.SmallIntegerField(null=True)
    unsung_weapon = models.SmallIntegerField(null=True)
    tomestones = models.SmallIntegerField(null=True)
    weapon_token = models.BooleanField(null=True)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.type)


class Gear(models.Model):
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    cost = models.ForeignKey(Cost, on_delete=models.CASCADE)
    job = models.ManyToManyField(Job)
    name = models.CharField(max_length=100)
    physical_dmg = models.SmallIntegerField(null=True)
    magical_dmg = models.SmallIntegerField(null=True)
    auto_attack = models.DecimalField(null=True, max_digits=5, decimal_places=2)
    delay = models.DecimalField(null=True, max_digits=5, decimal_places=2)
    dps = models.DecimalField(null=True, max_digits=5, decimal_places=2)
    block_strength = models.SmallIntegerField(null=True)
    block_rate = models.SmallIntegerField(null=True)
    defense = models.SmallIntegerField(null=True)
    magic_defense = models.SmallIntegerField(null=True)
    strength = models.SmallIntegerField(null=True)
    dexterity = models.SmallIntegerField(null=True)
    intelligence = models.SmallIntegerField(null=True)
    mind = models.SmallIntegerField(null=True)
    piety = models.SmallIntegerField(null=True)
    vitality = models.SmallIntegerField(null=True)
    tenacity = models.SmallIntegerField(null=True)
    critical_rate = models.SmallIntegerField(null=True)
    direct_hit = models.SmallIntegerField(null=True)
    determination = models.SmallIntegerField(null=True)
    skill_speed = models.SmallIntegerField(null=True)
    spell_speed = models.SmallIntegerField(null=True)
    craftable = models.NullBooleanField
    item_level = models.SmallIntegerField()

    def __str__(self):
        return str(self.name)


class Gearset(models.Model):
    weapon = models.ForeignKey(Gear, related_name='gearweapon', on_delete=models.CASCADE)
    shield = models.ForeignKey(Gear, related_name='gearshield', on_delete=models.CASCADE, null=True)
    body = models.ForeignKey(Gear, related_name='gearbody', on_delete=models.CASCADE)
    legs = models.ForeignKey(Gear, related_name='gearlegs', on_delete=models.CASCADE)
    helmet = models.ForeignKey(Gear, related_name='gearhelmet', on_delete=models.CASCADE)
    hands = models.ForeignKey(Gear, related_name='gearhands', on_delete=models.CASCADE)
    feet = models.ForeignKey(Gear, related_name='gearfeet', on_delete=models.CASCADE)
    earrings = models.ForeignKey(Gear, related_name='gearearrings', on_delete=models.CASCADE)
    necklace = models.ForeignKey(Gear, related_name='gearnecklace', on_delete=models.CASCADE)
    bracelet = models.ForeignKey(Gear, related_name='gearbracelet', on_delete=models.CASCADE)
    left_ring = models.ForeignKey(Gear, related_name='gearleft_ring', on_delete=models.CASCADE)
    right_ring = models.ForeignKey(Gear, related_name='gearright_ring', on_delete=models.CASCADE)


class PlayerGearset(models.Model):
    name = models.CharField(max_length=50)
    # account = models.ForeignKey(Accounts, on_delete=models.CASCADE, null=True)
    job = models.ManyToManyField(Job)
    race = models.ForeignKey(Race, on_delete=models.CASCADE)
    gearset = models.ForeignKey(Gearset, on_delete=models.CASCADE, default=None)
    content = models.ManyToManyField(Content)
    unique_id = models.CharField(max_length=50, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.unique_id:
            self.unique_id = f'gear{str(randint(0, 2000))}{self.job.lower()}'
        super(PlayerGearset, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
