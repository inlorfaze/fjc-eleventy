---
layout: layouts/base.njk
---
<h1 id="home-title">WordPress Web Development</h1>
<p class="description">Hands-on, collaborative development for high converting, quality websites.</p>

<section class="calltoaction">
  <a href="/contact" class="button">Get in Touch</a>
  <span> or
  <a href="/work">See what I do</a>
</section>

<div class="divider"></div>



## Notes 
<section class="listing">
{%- for page in collections.post | reverse -%}
  <article>
    <h3>
    <a href="{{ page.url }}">
    <span>{{ page.data.title }}</span>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay() }}</time>
    </a>
    </h3>
  {{ page.excerpt }}
  </article>
{%- endfor -%}
</section>



<!-- <ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
{%- endfor -%}
</ul> -->





