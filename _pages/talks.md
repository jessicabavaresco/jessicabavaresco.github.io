---
layout: page
title: Talks
permalink: /talks/
description: Slides from some of my talks.
nav: false
---

{% assign talks = site.projects | where: "category", "talks" | sort: "importance" %}
{% include talk_list.html talks=talks %}
