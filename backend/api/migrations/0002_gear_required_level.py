# Generated by Django 4.2.6 on 2023-12-26 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='gear',
            name='required_level',
            field=models.PositiveSmallIntegerField(db_comment='Level needed to equip', default=90),
            preserve_default=False,
        ),
    ]
