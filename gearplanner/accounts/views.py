from django.contrib.auth import login, logout
from django.shortcuts import render, redirect
from django.views import View
from .forms import *


class LoginView(View):
    def get(self, request):
        form = LoginForm()
        return render(request, 'accounts/form.html', {'form': form})

    def post(self, request):
        form = LoginForm(request.POST)
        if form.is_valid():
            user = form.cleaned_data['user']
            if user is not None:
                login(request, user)
            return redirect('index')
        return render(request, 'accounts/form.html', {'form': form})


class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('index')


class AddUser(View):
    def get(self, request):
        form = AddUserForm()
        return render(request, 'accounts/form.html', {'form': form})

    def post(self, request):
        form = AddUserForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])
            user.save()
            login(request, user)
            return redirect('index')
        return render(request, 'accounts/form.html', {'form': form})
