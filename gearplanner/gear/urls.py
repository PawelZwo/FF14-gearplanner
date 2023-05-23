from django.urls import path
from .views import *

urlpatterns = [
    path('', IndexView.as_view(), name='index'),

    path('add-gear', AddGear.as_view(), name='add_gear'),
    path('gear-list', GearList.as_view(), name='gear_list'),

    path('add-cost', AddCost.as_view(), name='add_cost'),
    path('cost-list', CostList.as_view(), name='cost_list'),

    path('add-gearset', AddGearset.as_view(), name='add_gearset'),
    path('gearset-list', GearsetList.as_view(), name='gearset_list'),

    path('job-list', JobList.as_view(), name='job_list'),

    path('race-list', RaceList.as_view(), name='race_list'),

    path('content-list', ContentList.as_view(), name='content_list'),

    path('type-list', TypeList.as_view(), name='type_list'),
]