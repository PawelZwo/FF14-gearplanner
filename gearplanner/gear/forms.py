from django import forms
from .models import Gear, Gearset, Cost

"""
SUPERUSER ONLY form for adding a gear piece.
"""


class AddGearForm(forms.ModelForm):
    class Meta:
        model = Gear
        fields = '__all__'


"""
SUPERUSER ONLY for for adding a cost for gear pieces.
"""


class AddCostForm(forms.ModelForm):
    class Meta:
        model = Cost
        fields = '__all__'


"""
SUPERUSER ONLY form for adding a gearset.
"""


class AddGearsetForm(forms.ModelForm):
    class Meta:
        model = Gearset
        fields = '__all__'
