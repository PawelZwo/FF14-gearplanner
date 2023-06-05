from django.urls import path
from .views import *

urlpatterns = [
    path('', IndexView.as_view(), name='index'),

    path('add-gear/', AddGear.as_view(), name='add_gear'),
    path('gear-list-all/', GearList.as_view(), name='gear_list_all'),
    path('gear-list-tank/', TankGearList.as_view(), name='gear_list_tank'),
    path('gear-list-healer/', HealerGearList.as_view(), name='gear_list_healer'),
    path('gear-list-dps/', DpsGearList.as_view(), name='gear_list_dps'),
    path('gear-details/<int:pk>/', GearDetails.as_view(), name='gear_details'),

    path('add-cost/', AddCost.as_view(), name='add_cost'),
    path('cost-list/', CostList.as_view(), name='cost_list'),

    path('add-gearset-admin/', AddGearsetAdmin.as_view(), name='add_gearset_admin'),
    path('add-gearset/', AddGearset.as_view(), name='add_gearset'),
    path('gearset-list/', GearsetList.as_view(), name='gearset_list'),
    path('gearset-details/<int:pk>/', GearsetDetails.as_view(), name='gearset_details'),
    path('update-gearset/<int:pk>/', UpdateGearset.as_view(), name='update_gearset'),
    path('delete-gearset/<int:pk>/', DeleteGearset.as_view(), name='delete_gearset'),

    path('job-list/', JobList.as_view(), name='job_list'),

    path('race-list/', RaceList.as_view(), name='race_list'),

    path('content-list/', ContentList.as_view(), name='content_list'),

    path('type-list/', TypeList.as_view(), name='type_list'),
]