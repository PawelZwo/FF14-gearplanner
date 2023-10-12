from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.gear.urls')),
    path('account/', include('backend.accounts.urls'))
]
