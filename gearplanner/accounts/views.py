from django.contrib.auth import login, logout
from django.shortcuts import render, redirect
from django.views import View
from .forms import *
from django.contrib import messages


class LoginView(View):
    def get(self, request):
        form = LoginForm()
        return render(request, 'accounts/form.html', {'form': form})

    def post(self, request):
        form = LoginForm(request.POST)
        if form.is_valid():
            user = form.cleaned_data['user']
            if user is not None:
                username = form.cleaned_data.get('username')
                login(request, user)
                messages.success(request, f'{username} logged in!')
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
            username = form.cleaned_data.get('username')
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])
            user.save()
            messages.success(request, f'Account created for {username}!')
            login(request, user)
            return redirect('index')
        return render(request, 'accounts/form.html', {'form': form})
