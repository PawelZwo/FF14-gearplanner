# FF14 Gear planner [ver 2.0.0 in development]

## Table of content

- [Introduction](#introduction)
- [Installation](#installation)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [API](#api)
- [Inspiration](#inspiration)
- [Additional info](#additional-info)

## Introduction

As a Final Fantasy XIV player I noticed that every patch I create a new table sheet to make sure that I know, what I
need to buy for my character. I found existing web apps confusing to use; they display informations in (to me) not clear
manner.

My idea was to create a webapp that will in more clear and readable way present a User with ability to create
gearsets.

## Installation

Fork this repository and clone it.
REMEMBER to change local_settings_public.py name to local_settings.py and follow instructions in there to connect to
your DB.
To populate your DB with initial data for Job, Race and Cost, use commands in the terminal:

```
cd backend
python manage.py loaddata api/fixtures/initial
```

Obviously, to run entire app we need to start both Django server and React.

```
cd backend
python manage.py runserver
cd ../
cd frontend
npm start
```

## Technologies

The app was created using:

```
* Python 3.11
* Django 4.2.6
* Django REST framework
* React
* Bootstrap-React
* React-router
```

## Requirements

Naturally each backbone of this app has individual needs for dependencies. You can find them below.

| Backend                      | Frontend                 |
| ---------------------------- | ------------------------ |
| django ^4.2.6                | react ^18.2.0            |
| django-cors-headers ^4.3.1   | react-icons ^4.12.0      |
| django_restframwerok ^3.14.0 | react-bootstrap ^2.9.1   |
| psycopng2-binary ^2.9.90     | bootstrap ^5.3.2         |
| python-dotenv                | react-router-dom ^6.18.0 |

## Api

Using Django REST API, this project have the following endpoints which will return data in `json`:

`[GET] /api/job/` list of jobs.

```
[
  {
    "id": 1,
    "name": "Paladin",
    "role": "tank"
  },
  ...
]
```

`[GET] api/cost/` list of costs.

```
[
  {
    "id": 1,
    "name": "Normal Raid Head",
    "mythos_1": 0,
    "mythos_2": 0,
    "mythos_3": 0,
    "mythos_4": 0,
    "unsung_head": 2,
    "unsung_body": 0,
    "unsung_legs": 0,
    "unsung_hands": 0,
    "unsung_feet": 0,
    "unsung_acc": 0,
    "tomestones": 0,
    "weapon_token": false,
    "weapon_token_price": 0
  },
  ...
]
```

`[GET] api/race/` list of races.

```
[
  {
    "id": 1,
    "name": "Hyur",
    "base_vitality": 21,
    "base_strength": 21,
    "base_dexterity": 19,
    "base_intelligence": 20,
    "base_mind": 20,
    "base_piety": 20
  },
  ...
]
```

`[GET, POST] api/gearset/`

- `[GET]` list of gearsets,

```
[
  {
    "uuid": RANDOM.UUID4,
    "name": "Paladin BiS",
    "job": 1,
    "weapon": 1,
    "shield": 2,
    "head": 3,
    "body": 4,
    "legs": 5,
    "hands": 6,
    "feet": 7,
    "earring": 8,
    "necklace": 9,
    "bracelet": 10,
    "left_ring": 11,
    "right_ring": 12,
    "attributes": {
                    "defense": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "spell_speed": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "skill_speed": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "determination": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "direct_hit": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "critical_rate": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "tenacity": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "piety": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "mind": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "intelligence": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "dexterity": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "magic_defense": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "strength": SUM_OF_ALL_GEAR_AS_INTEGER,
                    "vitality": SUM_OF_ALL_GEAR_AS_INTEGER
                  }
  },
  ...
]
```

- `[POST]` creating a gearset.

```
{
  "name": STR,
  "job": JOB.id: INT,
  "weapon": GEAR.id: INT,
  "shield": GEAR.id: INT,
  "head": GEAR.id: INT,
  "body": GEAR.id: INT,
  "legs": GEAR.id: INT,
  "hands": GEAR.id: INT,
  "feet": GEAR.id: INT,
  "earring": GEAR.id: INT,
  "necklace": GEAR.id: INT,
  "bracelet": GEAR.id: INT,
  "left_ring": GEAR.id: INT,
  "right_ring": GEAR.id: INT
}
```

`[GET, POST]  api/gear/`

- `[GET]` list of gears,

```
[
  {
    "id": 1,
    "name": "Ascension Face Guard of Fending ",
    "category": "Fending",
    "acquisition": "SR",
    "added_in_patch": "x.4",
    "slot": "Head",
    "cost": 7,
    "job": [
            1, 2, 3, 4
            ],
    "ff14_db_index": "744ac517967",
    "item_level": 660,
    "physical_dmg": 0,
    "magical_dmg": 0,
    "auto_attack": "0",
    "delay": "0",
    "dps": "0",
    "block_strength": 0,
    "block_rate": 0,
    "defense": 892,
    "magic_defense": 892,
    "vitality": 277,
    "strength": 248,
    "dexterity": 0,
    "tenacity": 0,
    "intelligence": 0,
    "mind": 0,
    "piety": 0,
    "critical_rate": 184,
    "direct_hit": 0,
    "determination": 129,
    "skill_speed": 0,
    "spell_speed": 0
  },
  ...
]
```

- `[POST]` creating a gear.

```
{
  "name": STR, -> unique=True
  "category": STR,
  "acquisition": STR,
  "added_in_patch": STR,
  "slot": STR,
  "cost": COST.id: INT,
  "job": [
          JOB.id: INT,
          ],
  "ff14_db_index": STR, -> null=True, blank=True
  "item_level": INT, -> null=True
  "physical_dmg": INT, -> null=True
  "magical_dmg": INT, -> null=True
  "auto_attack": "FLOAT", -> null=True
  "delay": "FLOAT", -> null=True
  "dps": "FLOAT", -> null=True
  "block_strength": INT, -> null=True
  "block_rate": INT, -> null=True
  "defense": INT, -> null=True
  "magic_defense": INT, -> null=True
  "vitality": INT, -> null=True
  "strength": INT, -> null=True
  "dexterity": INT, -> null=True
  "tenacity": INT, -> null=True
  "intelligence": INT, -> null=True
  "mind": INT, -> null=True
  "piety": INT, -> null=True
  "critical_rate": INT, -> null=True
  "direct_hit": INT, -> null=True
  "determination": INT, -> null=True
  "skill_speed": INT, -> null=True
  "spell_speed": INT -> null=True
}
```

The following endpoint return the same data structure as `[GET] api/gear/`:

- `[GET] api/dpsgear/` list of gear with `category` for DPS jobs,
- `[GET] api/healergear/` list of gear with `category` for Healer jobs,
- `[GET] api/tankgear/` list of gear with `category` for Tank jobs.

## Inspiration

Web idea as a whole was inspired by already existing webapps such as [Etro](https://etro.gg/) and similar.

## Additional info

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
FINAL FANTASY XIV © SQUARE ENIX CO., LTD.

Job icons and banner were taken from offical Final Fantasy XIV Fan Kit, which can be
downloaded [here](https://na.finalfantasyxiv.com/lodestone/special/fankit/).

For questions feel free to ask them via [LinkedIn](https://www.linkedin.com/in/pawe%C5%82-zwoli%C5%84ski/).
