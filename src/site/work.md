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
  {{ page.excerpt }}
  </article>
{%- endfor -%}
</section>


<div class="callout">
<p> 🚧 This page is under construction 
</div>