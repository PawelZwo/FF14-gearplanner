# Generated by Django 4.2.6 on 2023-12-26 11:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_gear_required_level'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gear',
            old_name='ff14_db_icon',
            new_name='xiv_api_icon',
        ),
    ]