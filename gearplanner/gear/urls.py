from django.urls import path
from . import views as gear_views

urlpatterns = [
    path('', gear_views.IndexView.as_view(), name='index'),

    path('add-gear/', gear_views.AddGear.as_view(), name='add_gear'),
    path('gear-list-all/', gear_views.GearList.as_view(), name='gear_list_all'),
    path('gear-list-tank/', gear_views.TankGearList.as_view(), name='gear_list_tank'),
    path('gear-list-healer/', gear_views.HealerGearList.as_view(), name='gear_list_healer'),
    path('gear-list-dps/', gear_views.DpsGearList.as_view(), name='gear_list_dps'),
    path('gear-details/<int:pk>/', gear_views.GearDetails.as_view(), name='gear_details'),

    path('add-cost/', gear_views.AddCost.as_view(), name='add_cost'),
    path('cost-list/', gear_views.CostList.as_view(), name='cost_list'),

    path('add-gearset-admin/', gear_views.AddGearsetAdmin.as_view(), name='add_gearset_admin'),
    path('add-gearset/', gear_views.AddGearset.as_view(), name='add_gearset'),
    path('gearset-list/', gear_views.GearsetList.as_view(), name='gearset_list'),
    path('gearset-details/<int:pk>/', gear_views.GearsetDetails.as_view(), name='gearset_details'),
    path('update-gearset/<int:pk>/', gear_views.UpdateGearset.as_view(), name='update_gearset'),
    path('delete-gearset/<int:pk>/', gear_views.DeleteGearset.as_view(), name='delete_gearset'),

    path('job-list/', gear_views.JobList.as_view(), name='job_list'),

    path('race-list/', gear_views.RaceList.as_view(), name='race_list'),

    path('content-list/', gear_views.ContentList.as_view(), name='content_list'),

    path('type-list/', gear_views.TypeList.as_view(), name='type_list'),
]