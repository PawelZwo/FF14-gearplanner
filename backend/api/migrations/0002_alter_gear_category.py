# Generated by Django 4.2.6 on 2023-11-15 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gear',
            name='category',
            field=models.CharField(choices=[('Fending', 'Fending'), ('Healing', 'Healing'), ('Striking', 'Striking'), ('Maiming', 'Maiming'), ('Scouting', 'Scouting'), ('Aiming', 'Aiming'), ('Casting', 'Casting'), ('Slaying', 'Slaying')], db_comment='Category of the gear'),
        ),
    ]
