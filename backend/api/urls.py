# Django imports
from django.urls import path

# Models imports
from . import views as api_views

urlpatterns = [
    path('', api_views.APIIndex.as_view(), name='index'),

    path('job/', api_views.JobList.as_view(), name='job'),
    path('cost/', api_views.CostList.as_view(), name='cost'),
    path('race/', api_views.RaceList.as_view(), name='race'),
    path('gearset/', api_views.GearsetList.as_view(), name='gearset'),

    path('gear/', api_views.GearList.as_view(), name='gear'),
    path('dpsgear/', api_views.DpsGearList.as_view(), name='dps_gear'),
    path('healergear/', api_views.HealerGearList.as_view(), name='healer_gear'),
    path('tankgear/', api_views.TankGearList.as_view(), name='tank_gear'),
    
]
