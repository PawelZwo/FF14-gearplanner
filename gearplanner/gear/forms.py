from django import forms
from .models import *

"""
SUPERUSER ONLY form for adding a gear piece.
"""


class AddGearForm(forms.ModelForm):
    def clean(self):
        cleaned_data = super().clean()
        cost = cleaned_data['cost']
        job = cleaned_data['job']
        craftable = cleaned_data['craftable']
        name = cleaned_data['name']
        item_level = cleaned_data['item_level']
        physical_dmg = cleaned_data['physical_dmg']
        magical_dmg = cleaned_data['magical_dmg']
        auto_attack = cleaned_data['auto_attack']
        delay = cleaned_data['delay']
        dps = cleaned_data['dps']
        block_strength = cleaned_data['block_strength']
        block_rate = cleaned_data['block_rate']
        defense = cleaned_data['defense']
        magic_defense = cleaned_data['magic_defense']
        strength = cleaned_data['strength']
        dexterity = cleaned_data['dexterity']
        intelligence = cleaned_data['intelligence']
        mind = cleaned_data['mind']
        piety = cleaned_data['piety']
        vitality = cleaned_data['vitality']
        tenacity = cleaned_data['tenacity']
        critical_rate = cleaned_data['critical_rate']
        direct_hit = cleaned_data['direct_hit']
        determination = cleaned_data['determination']
        skill_speed = cleaned_data['skill_speed']
        spell_speed = cleaned_data['spell_speed']
        return cleaned_data

    class Meta:
        model = Gear
        fields = '__all__'


"""
SUPERUSER ONLY for for adding a cost for gear pieces.
"""


class AddCostForm(forms.ModelForm):
    def clean(self):
        cleaned_data = super().clean()
        mythos_1 = cleaned_data['mythos_1']
        mythos_2 = cleaned_data['mythos_2']
        mythos_3 = cleaned_data['mythos_3']
        mythos_4 = cleaned_data['mythos_4']
        unsung_body = cleaned_data['unsung_body']
        unsung_head = cleaned_data['unsung_head']
        unsung_legs = cleaned_data['unsung_legs']
        unsung_feet = cleaned_data['unsung_feet']
        unsung_hands = cleaned_data['unsung_hands']
        unsung_acc = cleaned_data['unsung_acc']
        unsung_weapon = cleaned_data['unsung_weapon']
        tomestones = cleaned_data['tomestones']
        weapon_token = cleaned_data['weapon_token']
        type = cleaned_data['type']
        return cleaned_data

    class Meta:
        model = Cost
        fields = '__all__'


"""
SUPERUSER ONLY form for adding a gearset.
"""


class AddGearsetForm(forms.ModelForm):
    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data['name']
        weapon = cleaned_data['weapon']
        shield = cleaned_data['shield']
        body = cleaned_data['body']
        legs = cleaned_data['legs']
        helmet = cleaned_data['helmet']
        hands = cleaned_data['hands']
        feet = cleaned_data['feet']
        earrings = cleaned_data['earrings']
        necklace = cleaned_data['necklace']
        bracelet = cleaned_data['bracelet']
        left_ring = cleaned_data['left_ring']
        right_ring = cleaned_data['right_ring']

        class Meta:
            model = Gearset
            fields = '__all__'

