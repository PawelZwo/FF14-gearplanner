from django.urls import path
from . import views as account_views

urlpatterns = [
    path('login/', account_views.LoginView.as_view(), name='login'),
    path('logout/', account_views.LogoutView.as_view(), name='logout'),
    path('register/', account_views.AddUser.as_view(), name='register'),
    path('profile/<int:pk>', account_views.ProfileDetails.as_view(), name='profile'),
]