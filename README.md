# FF14 Gear planner

*** 

## Table of content

* [Introduction](#introduction)
* [Installation](#installation)
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Inspiration](#inspiration)
* [Additional info](#additional-info)

  [//]: # (* [Features]&#40;#features&#41;)
  [//]: # (* [To-do]&#40;#to-do&#41;)

***

## Introduction

As a Final Fantasy XIV player I noticed that every patch I create a new table sheet to make sure that I know, what I
need to buy for my character. I found existing web apps confusing to use; they display informations in (to me) not clear
manner.

My idea was to create a webapp that will in more clear and readable way present a User with ability to create
gearsets.

This is my first full-pledged webapp project.

***

## Installation

Fork this repository and clone it.
REMEMBER to change local_settings_public.py name to local_settings.py and follow instructions in there to connect to
your DB.
To populate your DB with initial data for Job, Race and Cost, use commands in the terminal:

```
cd backend
cd core
python manage.py loaddata fixtures/initial
```

## Technologies

The app was created using:

```
* Python 3.11
* Django 5.0a1
* React
* Bootstrap-React
```

## Requirements

```
* Node.js

If using PostgreSQL:
* psycopg2-binary 2.9.6
* PostgreSQL database
```

[//]: # (***)

[//]: # ()
[//]: # (## Features)

[//]: # ()
[//]: # (You will be able to:)

[//]: # ()
[//]: # (* view gear pieces for each role,)

[//]: # (* add a gear piece &#40;both in admin site and via webapp itself&#41;,)

[//]: # (* login / logout / registration,)

[//]: # (* view races' base stats,)

[//]: # (* view list of: jobs, costs, types, contents;)

[//]: # (* view, edit and delete &#40;as for now, both editing and deleting is Superuser exclusive&#41; a gearset,)

[//]: # (* create a gearset, which will be assigned to your profile,)

[//]: # (* view gearsets created by you in Profile.)

[//]: # (## To-do)

[//]: # ()
[//]: # (* inserting data into DB from API &#40;as for now each gear piece is added manually by a superuser&#41;,)

[//]: # (* preventing a User from adding the same ring in both left and right ring slots &#40;not applicable to crafted,)

[//]: # (  non-augmented pieces&#41;,)

[//]: # (* displaying gear pieces filtered by a chosen job in "Add a gearset" form,)

[//]: # (* editing a gearset using custom View, not using EditView from Django, to enhance UX.)

[//]: # ()
[//]: # (***)

## Inspiration

Web idea as a whole was inspired by already existing webapps such as [Etro](https://etro.gg/) and similar.


***

## Additional info

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
FINAL FANTASY XIV © SQUARE ENIX CO., LTD.

Job icons and banner were taken from offical Final Fantasy XIV Fan Kit, which can be
downloaded [here](https://na.finalfantasyxiv.com/lodestone/special/fankit/).

For questions feel free to ask them via [LinkedIn](https://www.linkedin.com/in/pawe%C5%82-zwoli%C5%84ski/).