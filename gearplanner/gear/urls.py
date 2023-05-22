from django.urls import path
from .views import *

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('add-gear', AddGear.as_view(), name='add_gear'),
    path('add-cost', AddCost.as_view(), name='add_cost'),

]