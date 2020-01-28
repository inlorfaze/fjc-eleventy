---
title: Finley Chen
subtitle: WordPress Design & Development
layout: layouts/base.njk
---


## Hi, my name is Finley.

I’m a freelance front-end developer primarily working on WordPress sites for small businesses.

I’m also a student at California Polytechnic State University, San Luis Obispo.




<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>



<!-- <ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
{%- endfor -%}
</ul> -->





