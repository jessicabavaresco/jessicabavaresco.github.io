---
layout: page
title: Courses
permalink: /courses/
description: Courses and tutorials presented in Summer schools & conferences
nav: false
---

{% assign courses = site.projects | where: "category", "courses" %}
{% include course_list.html courses=courses %}
