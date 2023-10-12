from django.shortcuts import render, redirect

# from .models import Gear


"""
TODO:
NIE nazywaj fragmentów używając "__X__.html" !

W fields warto nie używać "__all__" w myśl zasady "Explicit is better than implicit."

Usun hardkodowany cost_id -> niebezpieczeństwo, że id będzie albo stale zmieniane, albo będzie źle wskazywane podczas zmian w BD.

Body, legs itd. dodać jako choices w Cost. W Cost relacja MtM do Job.

Model Category joko "fending" itd. MtM do Cost.
"""
