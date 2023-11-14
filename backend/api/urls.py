# Django imports
from django.urls import path

# Models imports
from . import views as gear_views

urlpatterns = [
    path('', gear_views.APIIndex.as_view(), name='index'),
    path('job/', gear_views.JobList.as_view(), name='job'),
    path('cost/', gear_views.CostList.as_view(), name='cost'),
    path('race/', gear_views.RaceList.as_view(), name='race'),
    path('gear/', gear_views.GearList.as_view(), name='gear'),
    path('gearset/', gear_views.GearsetList.as_view(), name='gearset'),
]
