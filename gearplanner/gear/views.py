from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView, CreateView, UpdateView
from .forms import *


class IndexView(View):
    def get(self, request):
        return render(request, 'gear/index.html')


class AddGear(CreateView):
    model = Gear
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_gear')


class AddCost(CreateView):
    model = Cost
    fields = '__all__'
    template_name = 'gear/__form__.html'
    success_url = reverse_lazy('add_cost')
