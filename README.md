# FF14 Gear planner [ver 2.0.0 in development]

## Table of content

- [Introduction](#introduction)
- [Installation](#installation)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Features](#features)
- [API](#api)
- [Inspiration](#inspiration)
- [Additional info](#additional-info)

## Introduction

As a Final Fantasy XIV player I noticed that every patch I create a new table sheet to make sure that I know, what I
need to buy for my character. I found existing web apps confusing to use; they display informations in not clear
manner.

My idea was to create a webapp that will in more clear and readable way present a User with ability to create gearsets. Moreover, it will be a go-to app for not only that purpose, but also calculating PvP series experience, view each Gear piece in a simple and clear way.

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
* React-router
* Bootstrap-React
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

## Features

- [x] view Jobs list and use it to view its guide
- [x] view Races list with their starting stats
- [x] view Costs list for each Gear type
- [x] calculate how much more PvP combats are ahead of you to achieve 25 Series Level
- [x] browse Gears list and filter them by Category
- [x] create a Gear instance
- [x] browse Gearsets list

Todo:

- [] creating Gearset instances
- [] browsing Gearsets list and filtering them by Job or Category
- [] register/login/logout
- [] assigning a Gearset to a registered User

## API

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
NOT YET IMPLEMENTED
```

- `[POST]` creating a gearset.

```
{
  "gearset_name": STR (max 100),
  "slug": STR,
  "job": JOB.id: INT,
  "job_name": STR,
  "weapon": INT,
  "shield": INT,
  "head": INT,
  "body": INT,
  "legs": INT,
  "hands": INT,
  "feet": INT,
  "earring": INT,
  "necklace": INT,
  "bracelet": INT,
  "left_ring": INT,
  "right_ring": INT
}
```

`[GET, POST] api/gears/*`

- `[GET] /list/` list of gears to be displayed as a simple list,

```
[
  {
      "id": 1,
      "gear_name": "Ascension Mail of Fending",
      "slug": "ascension-mail-of-fending",
      "category": "Fending",
      "slot": "Body",
      "xiv_api_icon": "042000/042975"
  },
  ...
]
```

- `[POST] /add/` creating a gear,

```
{
    "gear_name": STR -> unique,
    "slug": STR -> leave EMPTY,
    "category": STR,
    "acquisition": STR,
    "added_in_patch": STR,
    "slot": STR,
    "cost_name": STR,
    "job": [] ,
    "ff14_db_index": STR,
    "xiv_api_icon": STR,
    "item_level": INT,
    "required_level": INT,
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

`[GET] /details/{slug}` single instance of Gear model with its details,

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
    "xiv_api_icon": "042000/042975",
    "item_level": 660,
    "required_level": 90,
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

`/options/` options from model's text choices fields

```
{
    "category": {
        "required": true,
        "label": "Category",
        "choices": [
            {
                "value": "Fending",
                "display_name": "Fending"
            },
            {
                "value": "Healing",
                "display_name": "Healing"
            },
            {
                "value": "Striking",
                "display_name": "Striking"
            },
            {
                "value": "Maiming",
                "display_name": "Maiming"
            },
            {
                "value": "Scouting",
                "display_name": "Scouting"
            },
            {
                "value": "Aiming",
                "display_name": "Aiming"
            },
            {
                "value": "Casting",
                "display_name": "Casting"
            },
            {
                "value": "Slaying",
                "display_name": "Slaying"
            }
        ]
    },
    "acquisition": {
        "required": true,
        "label": "Acquisition",
        "choices": [
            {
                "value": "NR",
                "display_name": "Normal Raid"
            },
            {
                "value": "AR",
                "display_name": "Alliance Raid"
            },
            {
                "value": "SR",
                "display_name": "Savage Raid"
            },
            {
                "value": "TG",
                "display_name": "Tomestone Gear"
            },
            {
                "value": "ATG",
                "display_name": "Augmented Tomestone Gear"
            },
            {
                "value": "ETG",
                "display_name": "Exquisite Tomestone Weapon"
            },
            {
                "value": "C_Normal_Q",
                "display_name": "Crafted Normal Quality"
            },
            {
                "value": "C_High_Q",
                "display_name": "Crafted High Quality"
            },
            {
                "value": "DD",
                "display_name": "Dungeon Drop"
            },
            {
                "value": "RW",
                "display_name": "Relic Weapon"
            }
        ]
    },
    "added_in_patch": {
        "required": true,
        "label": "Added in patch",
        "choices": [
            {
                "value": "x.0",
                "display_name": "x.0"
            },
            {
                "value": "x.1",
                "display_name": "x.1"
            },
            {
                "value": "x.2",
                "display_name": "x.2"
            },
            {
                "value": "x.3",
                "display_name": "x.3"
            },
            {
                "value": "x.4",
                "display_name": "x.4"
            },
            {
                "value": "x.5",
                "display_name": "x.5"
            }
        ]
    },
    "slot": {
        "required": true,
        "label": "Slot",
        "choices": [
            {
                "value": "Head",
                "display_name": "Head"
            },
            {
                "value": "Body",
                "display_name": "Body"
            },
            {
                "value": "Legs",
                "display_name": "Legs"
            },
            {
                "value": "Hands",
                "display_name": "Hands"
            },
            {
                "value": "Feet",
                "display_name": "Feet"
            },
            {
                "value": "Earring",
                "display_name": "Earring"
            },
            {
                "value": "Necklace",
                "display_name": "Necklace"
            },
            {
                "value": "Bracelet",
                "display_name": "Bracelet"
            },
            {
                "value": "Ring",
                "display_name": "Ring"
            },
            {
                "value": "Shield",
                "display_name": "Shield"
            },
            {
                "value": "Weapon",
                "display_name": "Weapon"
            }
        ]
    }
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
