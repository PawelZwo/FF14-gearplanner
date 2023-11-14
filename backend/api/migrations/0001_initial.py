# Generated by Django 4.2.6 on 2023-11-14 00:12

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.SmallAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Cost',
            fields=[
                ('id', models.SmallAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(null=True, unique=True)),
                ('mythos_1', models.PositiveSmallIntegerField(db_comment='Number of Mythos I tokens needed to exchange for a piece of api', default=0, null=True)),
                ('mythos_2', models.PositiveSmallIntegerField(db_comment='Number of Mythos II tokens needed to exchange for a piece of api', default=0, null=True)),
                ('mythos_3', models.PositiveSmallIntegerField(db_comment='Number of Mythos III tokens needed to exchange for a piece of api', default=0, null=True)),
                ('mythos_4', models.PositiveSmallIntegerField(db_comment='Number of Mythos IV tokens needed to exchange for a piece of api', default=0, null=True)),
                ('unsung_head', models.PositiveSmallIntegerField(db_comment='Number of Unsung Head tokens needed to exchange for a piece of api', default=0, null=True)),
                ('unsung_body', models.PositiveSmallIntegerField(db_comment='Number of Unsung Body tokens needed to exchange for a piece of api', default=0, null=True)),
                ('unsung_legs', models.PositiveSmallIntegerField(db_comment='Number of Unsung Legs tokens needed to exchange for a piece of api', default=0, null=True)),
                ('unsung_hands', models.PositiveSmallIntegerField(db_comment='Number of Unsung Hands tokens needed to exchange for a piece of api', default=0, null=True)),
                ('unsung_feet', models.PositiveSmallIntegerField(db_comment='Number of Unsung Feet tokens needed to exchange for a piece of api', default=0, null=True)),
                ('unsung_acc', models.PositiveSmallIntegerField(db_comment='Number of Unsung Accessory tokens needed to exchange for a piece of api', default=0, null=True)),
                ('tomestones', models.PositiveSmallIntegerField(db_comment='Number of Tomestones needed to exchange for a piece of api', default=0, null=True)),
                ('weapon_token', models.BooleanField(db_comment='Is weapon token needed to exchange for a weapon', default=False, null=True)),
                ('weapon_token_price', models.PositiveSmallIntegerField(db_comment='Number of Unsung Weapon tokens needed to exchange for a weapon token', default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Gear',
            fields=[
                ('id', models.SmallAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_comment='Name of the gear')),
                ('category', models.CharField(choices=[('Fending', 'Fending'), ('Healing', 'Healing'), ('Scouting', 'Scouting'), ('Aiming', 'Aiming'), ('Casting', 'Casting'), ('Slaying', 'Slaying')], db_comment='Category of the gear')),
                ('acquisition', models.CharField(choices=[('NR', 'Normal Raid'), ('AR', 'Alliance Raid'), ('SR', 'Savage Raid'), ('TG', 'Tomestone Gear'), ('ATG', 'Augmented Tomestone Gear'), ('ETG', 'Exquisite Tomestone Weapon'), ('C_Normal_Q', 'Crafted Normal Quality'), ('C_High_Q', 'Crafted High Quality'), ('DD', 'Dungeon Drop'), ('RW', 'Relic Weapon')], db_comment='Way to obtain the gear')),
                ('added_in_patch', models.CharField(choices=[('x.0', 'x.0'), ('x.1', 'x.1'), ('x.2', 'x.2'), ('x.3', 'x.3'), ('x.4', 'x.4'), ('x.5', 'x.5')], db_comment='Patch the gear was added on')),
                ('slot', models.CharField(choices=[('Head', 'Head'), ('Body', 'Body'), ('Legs', 'Legs'), ('Hands', 'Hands'), ('Feet', 'Feet'), ('Earring', 'Earring'), ('Necklace', 'Necklace'), ('Bracelet', 'Bracelet'), ('Ring', 'Ring'), ('Shield', 'Shield'), ('Weapon', 'Weapon')], db_comment='Slot for the gear')),
                ('item_level', models.PositiveSmallIntegerField(db_comment='Item level of the gear')),
                ('physical_dmg', models.PositiveSmallIntegerField(db_comment="Weapon's physical damage", null=True)),
                ('magical_dmg', models.PositiveSmallIntegerField(db_comment="Weapon's magical damage", null=True)),
                ('auto_attack', models.DecimalField(db_comment="Weapon's auto attack", decimal_places=2, max_digits=5, null=True)),
                ('delay', models.DecimalField(db_comment="Weapon's delay", decimal_places=2, max_digits=5, null=True)),
                ('dps', models.DecimalField(db_comment="Weapon's dps", decimal_places=2, max_digits=5, null=True)),
                ('block_strength', models.PositiveSmallIntegerField(db_comment="Shield's block strength", null=True)),
                ('block_rate', models.PositiveSmallIntegerField(db_comment="Shield's block rate", null=True)),
                ('defense', models.PositiveSmallIntegerField(db_comment="Gear's defense", null=True)),
                ('magic_defense', models.PositiveSmallIntegerField(db_comment="Gear's magic defense", null=True)),
                ('vitality', models.PositiveSmallIntegerField(db_comment="Gear's vitality value", null=True)),
                ('strength', models.PositiveSmallIntegerField(db_comment="Gear's strength value", null=True)),
                ('dexterity', models.PositiveSmallIntegerField(db_comment="Gear's dexterity value", null=True)),
                ('tenacity', models.PositiveSmallIntegerField(db_comment="Gear's tenacity value", null=True)),
                ('intelligence', models.PositiveSmallIntegerField(db_comment="Gear's intelligence value", null=True)),
                ('mind', models.PositiveSmallIntegerField(db_comment="Gear's mind value", null=True)),
                ('piety', models.PositiveSmallIntegerField(db_comment="Gear's piety value", null=True)),
                ('critical_rate', models.PositiveSmallIntegerField(db_comment="Gear's critical rate value", null=True)),
                ('direct_hit', models.PositiveSmallIntegerField(db_comment="Gear's direct hit value", null=True)),
                ('determination', models.PositiveSmallIntegerField(db_comment="Gear's determination value", null=True)),
                ('skill_speed', models.PositiveSmallIntegerField(db_comment="Gear's skill speed value", null=True)),
                ('spell_speed', models.PositiveSmallIntegerField(db_comment="Gear's spell speed value", null=True)),
                ('cost', models.OneToOneField(db_comment='Costs of the gear', on_delete=django.db.models.deletion.CASCADE, to='api.cost')),
            ],
            options={
                'ordering': ['category'],
            },
        ),
        migrations.CreateModel(
            name='Gearset',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(unique=True)),
                ('body', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='body', to='api.gear')),
                ('bracelet', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='bracelet', to='api.gear')),
                ('earring', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='earring', to='api.gear')),
                ('feet', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='feet', to='api.gear')),
                ('hands', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='hands', to='api.gear')),
                ('head', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='head', to='api.gear')),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.SmallAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_comment='Name of the job')),
            ],
        ),
        migrations.CreateModel(
            name='Race',
            fields=[
                ('id', models.SmallAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_comment='Race name')),
                ('base_vitality', models.PositiveSmallIntegerField(db_comment='Base vitality value for the race')),
                ('base_strength', models.PositiveSmallIntegerField(db_comment='Base strength value for the race')),
                ('base_dexterity', models.PositiveSmallIntegerField(db_comment='Base dexterity value for the race')),
                ('base_intelligence', models.PositiveSmallIntegerField(db_comment='Base intelligence value for the race')),
                ('base_mind', models.PositiveSmallIntegerField(db_comment='Base mind value for the race')),
                ('base_piety', models.PositiveSmallIntegerField(db_comment='Base piety value for the race')),
            ],
        ),
        migrations.CreateModel(
            name='PlayerGearsets',
            fields=[
                ('id', models.SmallAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.OneToOneField(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='playergearset_account', to=settings.AUTH_USER_MODEL)),
                ('gearset', models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='playergearset_gearset', to='api.gearset')),
            ],
        ),
        migrations.AddField(
            model_name='gearset',
            name='job',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.job'),
        ),
        migrations.AddField(
            model_name='gearset',
            name='left_ring',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='left_ring', to='api.gear'),
        ),
        migrations.AddField(
            model_name='gearset',
            name='legs',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='legs', to='api.gear'),
        ),
        migrations.AddField(
            model_name='gearset',
            name='necklace',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='necklace', to='api.gear'),
        ),
        migrations.AddField(
            model_name='gearset',
            name='right_ring',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='right_ring', to='api.gear'),
        ),
        migrations.AddField(
            model_name='gearset',
            name='shield',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shield', to='api.gear'),
        ),
        migrations.AddField(
            model_name='gearset',
            name='weapon',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='weapon', to='api.gear'),
        ),
        migrations.AddField(
            model_name='gear',
            name='job',
            field=models.ManyToManyField(related_name='gear_job', to='api.job'),
        ),
    ]
