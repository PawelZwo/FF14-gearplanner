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
| django-autoslug ^1.9.9       |                          |

## Api

Using Django REST API, this project have the following endpoints which will return data in `json`:

`[GET] /api/jobs/` list of jobs.

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

`[GET] api/costs/` list of costs.

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

`[GET] api/races/` list of races.

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

`[GET, POST] api/gearsets/`

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
    "attributes":
              {
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

`[GET, POST] api/gears/`

- `[GET]` list of gears,

```
[
  {
    "id": 1,
    "gear_name": "Ascension Mail of Fending",
    "slug": "ascension-mail-of-fending",
    "category": "Fending",
    "acquisition": "Savage Raid",
    "added_in_patch": "x.4",
    "slot": "Body",
    "cost_name": "Savage Raid Body",
    "job": [
        {
            "id": 1,
            "job_name": "Paladin"
        },
        {
            "id": 2,
            "job_name": "Warrior"
        },
        {
            "id": 3,
            "job_name": "Dark Knight"
        },
        {
            "id": 4,
            "job_name": "Gunbreaker"
        }
    ],
    "ff14_db_index": "4e2611e60a3",
    "ff14_db_icon": "a4/a43ce3ad18916cfffcb187b396d2f39e81a20873.png",
    "item_level": 660,
    "physical_dmg": 0,
    "magical_dmg": 0,
    "auto_attack": "0.00",
    "delay": "0.00",
    "block_strength": 0,
    "block_rate": 0,
    "defense": 1196,
    "magic_defense": 1196,
    "vitality": 440,
    "strength": 394,
    "dexterity": 0,
    "tenacity": 292,
    "intelligence": 0,
    "mind": 0,
    "piety": 0,
    "critical_rate": 0,
    "direct_hit": 0,
    "determination": 204,
    "skill_speed": 0,
    "spell_speed": 0
  },
  ...
]
```

- `[POST]` creating a gear.

```
{
    "gear_name": STR -> unique,
    "slug": STR -> leave EMPTY,
    "category": STR,
    "acquisition": STR,
    "added_in_patch": STR,
    "slot": STR,
    "cost_name": STR,
    "job": [OBJECT] ,
    "ff14_db_index": STR,
    "ff14_db_icon": STR,
    "item_level": INT,
    "physical_dmg": INT -> null=True,
    "magical_dmg": INT -> null=True,
    "auto_attack": FLOAT -> null=True,
    "delay": FLOAT -> null=True,
    "block_strength": INT -> null=True,
    "block_rate": INT -> null=True,
    "defense": INT -> null=True,
    "magic_defense": INT -> null=True,
    "vitality": INT -> null=True,
    "strength": INT -> null=True,
    "dexterity": INT -> null=True,
    "tenacity": INT -> null=True,
    "intelligence": INT -> null=True,
    "mind": INT -> null=True,
    "piety": INT -> null=True,
    "critical_rate": INT -> null=True,
    "direct_hit": INT -> null=True,
    "determination": INT -> null=True,
    "skill_speed": INT -> null=True,
    "spell_speed": INT -> null=True
}
```

`[GET] api/gears/{slug}` single instance of Gear model

```
{
    "id": 1,
    "gear_name": "Ascension Mail of Fending",
    "slug": "ascension-mail-of-fending",
    "category": "Fending",
    "acquisition": "Savage Raid",
    "added_in_patch": "x.4",
    "slot": "Body",
    "cost_name": "Savage Raid Body",
    "job": [
        {
            "id": 1,
            "job_name": "Paladin"
        },
        {
            "id": 2,
            "job_name": "Warrior"
        },
        {
            "id": 3,
            "job_name": "Dark Knight"
        },
        {
            "id": 4,
            "job_name": "Gunbreaker"
        }
    ],
    "ff14_db_index": "4e2611e60a3",
    "ff14_db_icon": "a4/a43ce3ad18916cfffcb187b396d2f39e81a20873.png",
    "item_level": 660,
    "physical_dmg": 0,
    "magical_dmg": 0,
    "auto_attack": "0.00",
    "delay": "0.00",
    "block_strength": 0,
    "block_rate": 0,
    "defense": 1196,
    "magic_defense": 1196,
    "vitality": 440,
    "strength": 394,
    "dexterity": 0,
    "tenacity": 292,
    "intelligence": 0,
    "mind": 0,
    "piety": 0,
    "critical_rate": 0,
    "direct_hit": 0,
    "determination": 204,
    "skill_speed": 0,
    "spell_speed": 0
}
```

## Inspiration

Web idea as a whole was inspired by already existing webapps such as [Etro](https://etro.gg/) and similar.

## Additional info

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
FINAL FANTASY XIV © SQUARE ENIX CO., LTD.

Job icons and banner were taken from offical Final Fantasy XIV Fan Kit, which can be
downloaded [here](https://na.finalfantasyxiv.com/lodestone/special/fankit/).

For questions feel free to ask them via [LinkedIn](https://www.linkedin.com/in/pawe%C5%82-zwoli%C5%84ski/).
