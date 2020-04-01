---
layout: layouts/base.njk
---
<h1 id="home-title">WordPress Web Development</h1>
<p class="description">Hands-on, collaborative development for high converting, quality websites.</p>

<section class="divider">
  <a href="/contact" class="button">Get in Touch</a>
  <span> or
  <a href="/work">See what I do</a>
</section>

<div class="divider"></div>

Hi, I'm Finley. I make things on the web for small businesses. Previously, I was working as a WordPress WooCommerce developer at an [eCommerce startup](https://www.allpeople.co/) and a front-end developer at [Cal Poly](https://calpoly.edu). 
I create custom WordPress websites that are fast, accessible, responsive, and SEO-optimized. 


## Services 
I work with local businesses to improve their digital experiences. 
Examples of services I provide:
- Designing and developing robust WordPress websites
- Hosting and maintaining your website long-term
- Business digital strategy & marketing
- Developing custom features and plugins

Whether you are a recruiter, business owner, or just want to ask me a question, contact me at <a href="mailto:finleyjchen@gmail.com">finleyjchen@gmail.com</a>.



## Posts 
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





