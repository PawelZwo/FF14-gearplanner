from django.contrib import admin
from .models import Job, Cost, Content, Type, Race, Gear, Gearset, PlayerGearset

admin.site.register(Job)
admin.site.register(Content)
admin.site.register(Race)
admin.site.register(Type)
admin.site.register(Cost)
admin.site.register(Gear)
admin.site.register(Gearset)
admin.site.register(PlayerGearset)
