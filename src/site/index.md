---
title: Finley Chen Web Development
description: I'm a front-end engineer and WordPress developer. Currently taking freelance projects.
layout: layouts/base.njk
---


Hi, I'm Finley. I create custom WordPress websites that are fast, accessible, responsive, and SEO-optimized. I work with local businesses to improve their digital experiences. I have experience working as a front-end UI/UX developer at an [eCommerce startup](https://www.allpeople.co/) and my university (Cal Poly). 

I can provide value for your business with:
- Designing and developing robust WordPress websites
- Hosting and maintaining your website long-term
- Business digital strategy & marketing

Whether you are a recruiter, business owner, or just want to ask me a question, contact me at <a href="mailto:finleyjchen@gmail.com">finleyjchen@gmail.com</a>.



## Blog 
<section class="listing">
{%- for page in collections.post -%}
  <article>
    <h3>
    <a href="{{ page.url }}">{{ page.data.title }}
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
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





