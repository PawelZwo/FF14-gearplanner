# FF14 Gear planner

*** 

## Table of content

* [Introduction](#introduction)
* [Installation](#installation)
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Features](#features)
* [To-do](#to-do)
* [Inspiration](#inspiration)
* [Additional info](#additional-info)

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
REMEMBER to make local_settings.py to your main directory and put your database connection details in there!

## Technologies

The app was created using:

```
* Python 3.11
* Django 4.2.1
* Bootstrap 4
* HTML 5
* JavaScript
```

## Requirements

```
* django-mathfilters 1.0.0
* psycopg2-binary 2.9.6
* pytest 7.3.1
* pytest-django 4.5.2
```

***

## Features

You will be able to:

* view gear pieces for each role,
* add a gear piece (both in admin site and via webapp itself),
* login / logout / registration,
* view races' base stats,
* view list of: jobs, costs, types, contents;
* view, edit and delete (as for now, both editing and deleting is Superuser exclusive) a gearset,
* create a gearset, which will be assigned to your profile,
* view gearsets created by you in Profile.

## To-do

* inserting data into DB from API (as for now each gear piece is added manually by a superuser),
* preventing a User from adding the same ring in both left and right ring slots (not applicable to crafted,
  non-augmented pieces),
* displaying gear pieces filtered by a chosen job in "Add a gearset" form,
* editing a gearset using custom View, not using EditView from Django, to enhance UX.

***

## Inspiration

Web idea as a whole was inspired by already existing webapps such as [Etro](https://etro.gg/) and similar.

Front-end was inspired by [CoreySchafer](https://github.com/CoreyMSchafer)'s Django Tutorial series that can be
watched [here](https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p).

***

## Additional info

Job icons and banner were taken from offical Final Fantasy XIV Fan Kit, which can be
downloaded [here](https://na.finalfantasyxiv.com/lodestone/special/fankit/).

For questions you can ask them on my [LinkedIn](https://www.linkedin.com/in/pawe%C5%82-zwoli%C5%84ski/).
