---
title: Projects
description: Examples of selected past work and side projects. 
layout: layouts/base.njk
---

<section class="listing">
{%- for page in collections.project -%}
  <article>
    <h3>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    </h3>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  {{ page.excerpt }}
  </article>
{%- endfor -%}
</section>