import pytest
from django.test import Client, RequestFactory
from .views import *
from ..accounts.forms import *
from ..accounts.views import *


# Testing connection to 'index' URL
@pytest.mark.django_db
def test_index_get():
    client = Client()
    url = reverse('index')
    response = client.get(url)
    assert response.status_code == 200


# Testing all gear lists
# Testing tank_gear_list connection
@pytest.mark.django_db
def test_tank_gear_list_get():
    client = Client()
    url = reverse('gear_list_tank')
    response = client.get(url)
    assert response.status_code == 200


# Testing healer_gear_list connection
@pytest.mark.django_db
def test_healer_gear_list_get():
    client = Client()
    url = reverse('gear_list_healer')
    response = client.get(url)
    assert response.status_code == 200


# Testing dps_gear_list connection
@pytest.mark.django_db
def test_dps_gear_list_get():
    client = Client()
    url = reverse('gear_list_dps')
    response = client.get(url)
    assert response.status_code == 200


# Testing gearset_list connection
@pytest.mark.django_db
def test_tank_gear_list_get():
    client = Client()
    url = reverse('gearset_list')
    response = client.get(url)
    assert response.status_code == 200


# Testing all_gear_list connection
@pytest.mark.django_db
def test_all_gear_list_get():
    client = Client()
    url = reverse('gear_list_all')
    response = client.get(url)
    assert response.status_code == 200


# Testing adding an instance of Gear model
@pytest.mark.django_db
def test_add_gear_view(client):
    factory = RequestFactory()
    request = factory.get(reverse('add_gear'))
    response = AddGear.as_view()(request)

    assert response.status_code == 200
    assert response.template_name == ['gear/generic_form.html']
    assert response.context_data['view'].success_url == reverse('add_gear')
    assert isinstance(response.context_data['view'].model(), Gear)
    assert response.context_data['view'].fields == '__all__'


# Testing views connected to Cost model
# Testing cost_list connection
@pytest.mark.django_db
def test_cost_list_get(cost):
    client = Client()
    url = reverse('cost_list')
    response = client.get(url)
    assert response.status_code == 200


# Testing addind an instance of Cost
@pytest.mark.django_db
def test_add_cost_view(client):
    factory = RequestFactory()
    request = factory.get(reverse('add_cost'))
    response = AddCost.as_view()(request)
    assert response.status_code == 200
    assert response.template_name == ['gear/generic_form.html']
    assert response.context_data['view'].success_url == reverse('add_cost')
    assert isinstance(response.context_data['view'].model(), Cost)
    assert response.context_data['view'].fields == '__all__'


# Testing gearsets
# Testing gearsets connection
@pytest.mark.django_db
def test_gearsets_list_get():
    client = Client()
    url = reverse('gearset_list')
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.django_db
def test_gearset_creation(client):
    factory = RequestFactory()
    request = factory.get(reverse('add_gearset'))
    response = AddGearset.as_view()(request)
    assert response.status_code == 200


# Testing type_list connection
@pytest.mark.django_db
def test_type_list_get(type_):
    client = Client()
    url = reverse('type_list')
    response = client.get(url)
    assert response.status_code == 200


# Testing job_list connection
@pytest.mark.django_db
def test_job_list_get(job):
    client = Client()
    url = reverse('job_list')
    response = client.get(url)
    assert response.status_code == 200


# Testing race_list connection
@pytest.mark.django_db
def test_race_list_get(race):
    client = Client()
    url = reverse('race_list')
    response = client.get(url)
    assert response.status_code == 200


# Testing content_list connection
@pytest.mark.django_db
def test_content_list_get(content):
    client = Client()
    url = reverse('content_list')
    response = client.get(url)
    assert response.status_code == 200


# Testing adding a new user
@pytest.mark.django_db
def test_add_user_form(form_data):
    form = AddUserForm(data=form_data)
    assert form.is_valid()
    user = form.save()
    assert user is not None
    assert user.username == 'testuser'
    form_data['username'] = 'anotheruser'
    form_data['password2'] = 'differentpassword'
    form = AddUserForm(data=form_data)
    assert not form.is_valid()


# Testing logging in
@pytest.mark.django_db
def test_login_form(form_data_login, test_user):
    form = LoginForm(data=form_data_login)
    assert form.is_valid()
    cleaned_data = form.clean()
    assert 'user' in cleaned_data
    assert cleaned_data['user'] == test_user
    assert test_user.is_authenticated
    form_data_login['password'] = 'wrongpassword'
    form = LoginForm(data=form_data_login)
    assert not form.is_valid()


@pytest.mark.django_db
def test_login_view(form_data_login, test_user):
    test_login_form(form_data_login, test_user)
    client = Client()
    url = reverse('login')
    response = client.get(url)
    assert response.status_code == 200
    assert test_user.is_authenticated
