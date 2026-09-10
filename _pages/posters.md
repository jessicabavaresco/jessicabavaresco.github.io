---
layout: page
title: Posters
permalink: /posters/
description: Posters presented at conferences and workshops.
nav: false
---

<div class="projects">
  <div class="grid">
    {% assign sorted_projects = site.projects | where: "category", "posters" | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects.html %}
    {% endfor %}
  </div>
</div>
