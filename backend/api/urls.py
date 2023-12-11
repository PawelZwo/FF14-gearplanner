# Django imports
from django.urls import path

# Models imports
from . import views as api_views

urlpatterns = [
    path('', api_views.APIIndex.as_view(), name='index'),

    path('jobs/', api_views.JobList.as_view(), name='job'),
    path('costs/', api_views.CostList.as_view(), name='cost'),
    path('races/', api_views.RaceList.as_view(), name='race'),
    path('gearsets/', api_views.GearsetList.as_view(), name='gearset'),
    path('gears/', api_views.GearList.as_view(), name='gear'),
    path('gears/<str:slug>/', api_views.GearDetails.as_view(), name='gear_details'),
]
