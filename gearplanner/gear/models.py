from django.contrib.auth.models import User
from django.db import models
from random import randint
from django.urls import reverse


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
    base_strength = models.PositiveSmallIntegerField()
    base_dexterity = models.PositiveSmallIntegerField()
    base_vitality = models.PositiveSmallIntegerField()
    base_intelligence = models.PositiveSmallIntegerField()
    base_mind = models.PositiveSmallIntegerField()
    base_piety = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Cost(models.Model):
    mythos_1 = models.PositiveSmallIntegerField(null=True)
    mythos_2 = models.PositiveSmallIntegerField(null=True)
    mythos_3 = models.PositiveSmallIntegerField(null=True)
    mythos_4 = models.PositiveSmallIntegerField(null=True)
    unsung_body = models.PositiveSmallIntegerField(null=True)
    unsung_head = models.PositiveSmallIntegerField(null=True)
    unsung_legs = models.PositiveSmallIntegerField(null=True)
    unsung_feet = models.PositiveSmallIntegerField(null=True)
    unsung_hands = models.PositiveSmallIntegerField(null=True)
    unsung_acc = models.PositiveSmallIntegerField(null=True)
    unsung_weapon = models.PositiveSmallIntegerField(null=True)
    tomestones = models.PositiveSmallIntegerField(null=True)
    weapon_token = models.BooleanField(null=True)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.type)


class Gear(models.Model):
    cost = models.ForeignKey(Cost, on_delete=models.CASCADE)
    job = models.ManyToManyField(Job, related_name='gearjob')
    craftable = models.BooleanField(null=True)
    name = models.CharField(max_length=100)
    item_level = models.PositiveSmallIntegerField()
    physical_dmg = models.PositiveSmallIntegerField(null=True)
    magical_dmg = models.PositiveSmallIntegerField(null=True)
    auto_attack = models.DecimalField(null=True, max_digits=5, decimal_places=2)
    delay = models.DecimalField(null=True, max_digits=5, decimal_places=2)
    dps = models.DecimalField(null=True, max_digits=5, decimal_places=2)
    block_strength = models.PositiveSmallIntegerField(null=True)
    block_rate = models.PositiveSmallIntegerField(null=True)
    defense = models.PositiveSmallIntegerField(null=True)
    magic_defense = models.PositiveSmallIntegerField(null=True)
    strength = models.PositiveSmallIntegerField(null=True)
    dexterity = models.PositiveSmallIntegerField(null=True)
    intelligence = models.PositiveSmallIntegerField(null=True)
    mind = models.PositiveSmallIntegerField(null=True)
    piety = models.PositiveSmallIntegerField(null=True)
    vitality = models.PositiveSmallIntegerField(null=True)
    tenacity = models.PositiveSmallIntegerField(null=True)
    critical_rate = models.PositiveSmallIntegerField(null=True)
    direct_hit = models.PositiveSmallIntegerField(null=True)
    determination = models.PositiveSmallIntegerField(null=True)
    skill_speed = models.PositiveSmallIntegerField(null=True)
    spell_speed = models.PositiveSmallIntegerField(null=True)

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
    name = models.CharField(max_length=50)
    job = models.ForeignKey(Job, related_name='gearsetjob', on_delete=models.CASCADE)
    content = models.ForeignKey(Content, related_name='gearsetcontent', on_delete=models.CASCADE)

    def calculate_total_vitality(self):
        vitality = 0
        vitality += self.weapon.vitality
        vitality += self.shield.vitality if self.shield else 0
        vitality += self.body.vitality
        vitality += self.legs.vitality
        vitality += self.helmet.vitality
        vitality += self.hands.vitality
        vitality += self.feet.vitality
        vitality += self.earrings.vitality
        vitality += self.necklace.vitality
        vitality += self.bracelet.vitality
        vitality += self.left_ring.vitality
        vitality += self.right_ring.vitality
        return vitality

    def calculate_total_strength(self):
        strength = 0
        strength += self.weapon.strength
        strength += self.shield.strength if self.shield else 0
        strength += self.body.strength
        strength += self.legs.strength
        strength += self.helmet.strength
        strength += self.hands.strength
        strength += self.feet.strength
        strength += self.earrings.strength
        strength += self.necklace.strength
        strength += self.bracelet.strength
        strength += self.left_ring.strength
        strength += self.right_ring.strength
        return strength

    def calculate_total_dexterity(self):
        dexterity = 0
        dexterity += self.weapon.dexterity
        dexterity += self.shield.dexterity if self.shield else 0
        dexterity += self.body.dexterity
        dexterity += self.legs.dexterity
        dexterity += self.helmet.dexterity
        dexterity += self.hands.dexterity
        dexterity += self.feet.dexterity
        dexterity += self.earrings.dexterity
        dexterity += self.necklace.dexterity
        dexterity += self.bracelet.dexterity
        dexterity += self.left_ring.dexterity
        dexterity += self.right_ring.dexterity
        return dexterity

    def calculate_total_intelligence(self):
        intelligence = 0
        intelligence += self.weapon.intelligence
        intelligence += self.shield.intelligence if self.shield else 0
        intelligence += self.body.intelligence
        intelligence += self.legs.intelligence
        intelligence += self.helmet.intelligence
        intelligence += self.hands.intelligence
        intelligence += self.feet.intelligence
        intelligence += self.earrings.intelligence
        intelligence += self.necklace.intelligence
        intelligence += self.bracelet.intelligence
        intelligence += self.left_ring.intelligence
        intelligence += self.right_ring.intelligence
        return intelligence

    def calculate_total_mind(self):
        mind = 0
        mind += self.weapon.mind
        mind += self.shield.mind if self.shield else 0
        mind += self.body.mind
        mind += self.legs.mind
        mind += self.helmet.mind
        mind += self.hands.mind
        mind += self.feet.mind
        mind += self.earrings.mind
        mind += self.necklace.mind
        mind += self.bracelet.mind
        mind += self.left_ring.mind
        mind += self.right_ring.mind
        return mind

    def calculate_total_piety(self):
        piety = 0
        piety += self.weapon.piety
        piety += self.shield.piety if self.shield else 0
        piety += self.body.piety
        piety += self.legs.piety
        piety += self.helmet.piety
        piety += self.hands.piety
        piety += self.feet.piety
        piety += self.earrings.piety
        piety += self.necklace.piety
        piety += self.bracelet.piety
        piety += self.left_ring.piety
        piety += self.right_ring.piety
        return piety

    def calculate_total_tenacity(self):
        tenacity = 0
        tenacity += self.weapon.tenacity
        tenacity += self.shield.tenacity if self.shield else 0
        tenacity += self.body.tenacity
        tenacity += self.legs.tenacity
        tenacity += self.helmet.tenacity
        tenacity += self.hands.tenacity
        tenacity += self.feet.tenacity
        tenacity += self.earrings.tenacity
        tenacity += self.necklace.tenacity
        tenacity += self.bracelet.tenacity
        tenacity += self.left_ring.tenacity
        tenacity += self.right_ring.tenacity
        return tenacity

    def calculate_total_critical_rate(self):
        critical_rate = 0
        critical_rate += self.weapon.critical_rate
        critical_rate += self.shield.critical_rate if self.shield else 0
        critical_rate += self.body.critical_rate
        critical_rate += self.legs.critical_rate
        critical_rate += self.helmet.critical_rate
        critical_rate += self.hands.critical_rate
        critical_rate += self.feet.critical_rate
        critical_rate += self.earrings.critical_rate
        critical_rate += self.necklace.critical_rate
        critical_rate += self.bracelet.critical_rate
        critical_rate += self.left_ring.critical_rate
        critical_rate += self.right_ring.critical_rate
        return critical_rate

    def calculate_total_direct_hit(self):
        direct_hit = 0
        direct_hit += self.weapon.direct_hit
        direct_hit += self.shield.direct_hit if self.shield else 0
        direct_hit += self.body.direct_hit
        direct_hit += self.legs.direct_hit
        direct_hit += self.helmet.direct_hit
        direct_hit += self.hands.direct_hit
        direct_hit += self.feet.direct_hit
        direct_hit += self.earrings.direct_hit
        direct_hit += self.necklace.direct_hit
        direct_hit += self.bracelet.direct_hit
        direct_hit += self.left_ring.direct_hit
        direct_hit += self.right_ring.direct_hit
        return direct_hit

    def calculate_total_determination(self):
        determination = 0
        determination += self.weapon.determination
        determination += self.shield.determination if self.shield else 0
        determination += self.body.determination
        determination += self.legs.determination
        determination += self.helmet.determination
        determination += self.hands.determination
        determination += self.feet.determination
        determination += self.earrings.determination
        determination += self.necklace.determination
        determination += self.bracelet.determination
        determination += self.left_ring.determination
        determination += self.right_ring.determination
        return determination

    def calculate_total_skill_speed(self):
        skill_speed = 0
        skill_speed += self.weapon.skill_speed
        skill_speed += self.shield.skill_speed if self.shield else 0
        skill_speed += self.body.skill_speed
        skill_speed += self.legs.skill_speed
        skill_speed += self.helmet.skill_speed
        skill_speed += self.hands.skill_speed
        skill_speed += self.feet.skill_speed
        skill_speed += self.earrings.skill_speed
        skill_speed += self.necklace.skill_speed
        skill_speed += self.bracelet.skill_speed
        skill_speed += self.left_ring.skill_speed
        skill_speed += self.right_ring.skill_speed
        return skill_speed

    def calculate_total_spell_speed(self):
        spell_speed = 0
        spell_speed += self.weapon.spell_speed
        spell_speed += self.shield.spell_speed if self.shield else 0
        spell_speed += self.body.spell_speed
        spell_speed += self.legs.spell_speed
        spell_speed += self.helmet.spell_speed
        spell_speed += self.hands.spell_speed
        spell_speed += self.feet.spell_speed
        spell_speed += self.earrings.spell_speed
        spell_speed += self.necklace.spell_speed
        spell_speed += self.bracelet.spell_speed
        spell_speed += self.left_ring.spell_speed
        spell_speed += self.right_ring.spell_speed
        return spell_speed

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('gearset_details', kwargs={'pk': self.id})


class PlayerGearset(models.Model):
    name = models.CharField(max_length=50)
    account = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    job = models.ManyToManyField(Job)
    race = models.ForeignKey(Race, on_delete=models.CASCADE)
    gearset = models.ForeignKey(Gearset, on_delete=models.CASCADE, default=None)
    content = models.ManyToManyField(Content)
    unique_name = models.CharField(max_length=50, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.unique_name:
            self.unique_name = f'gear{str(randint(0, 20))}{str(randint(20, 40))}'
        self.account = User.pk
        super(PlayerGearset, self).save(*args, **kwargs)


def __str__(self):
    return self.name
