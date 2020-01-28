---
title: Finley Chen
subtitle: WordPress Design & Development
layout: layouts/base.njk
---


### Hi, my name is Finley.
I’m a freelance front-end developer primarily working on WordPress sites for small businesses.
I’m also a junior at California Polytechnic State University, San Luis Obispo studying Political Science.

### What I Do
I create custom WordPress websites that are accessible, responsive, and SEO-optimized. I work in mainly eCommerce (WooCommerce, Shopify) but also create web applications and local business websites, with experience working as a front-end developer at a local startup and my university (Cal Poly). 

I'm currently looking to for opportunities whether you are a recruiter, business owner, or just want to ask me a question, contact me at <a href="mailto:finleyjchen@gmail.com">finleyjchen@gmail.com</a>.



## Blog 
<section class="listing">
{%- for page in collections.post -%}
  <article>
    <h3>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    </h3>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
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





