from django.contrib import admin
from .models import Job, Race, Cost, Gear, Gearset, PlayerGearsets

admin.site.register(Job)
admin.site.register(Race)
admin.site.register(Cost)
admin.site.register(Gearset)
admin.site.register(Gear)
admin.site.register(PlayerGearsets)

