---
title: Finley Chen
subtitle: WordPress Front-End Developer
description: Personal Website of Finley Chen, Front-End WordPress developer. Currently taking freelance projects.
layout: layouts/base.njk
---

I’m a freelance front-end developer primarily working on WordPress sites for small businesses.
I’m also a junior at California Polytechnic State University, San Luis Obispo studying Political Science.

## What I Do
I create custom WordPress websites that are accessible, responsive, and SEO-optimized. I work in mainly eCommerce (WooCommerce, Shopify) however I also create web applications and local business websites, with experience working as a front-end developer at a local startup and my university (Cal Poly). 

Whether you are a recruiter, business owner, or just want to ask me a question, contact me at <a href="mailto:finleyjchen@gmail.com">finleyjchen@gmail.com</a>.



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





