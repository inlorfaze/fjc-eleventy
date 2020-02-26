---
title: About Me
layout: layouts/base.njk
subtitle: Striving for greatness
---

## Introduction
I am a Front-End WordPress developer who has been making websites for small businesses for over 3 years. I have worked on full web applications with strong front-end skills in JavaScript, PHP, and React. 

I'm also an undergraduate Political Science student at California Polytechnic State University, San Luis Obispo. My academic work in political science studies the effects of different social media on an individual's political knowledge and participation. After graduation, I'm interested in decentralization of the web to tackle a slew of political, social, and economic issues. It is in my interest to bridge my political science research goals with a computer-science related project.

## Examples of my Work
<section class="listing">
{%- for page in collections.project -%}
  <article>
    <h3>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    </h3>
  </article>
{%- endfor -%}
</section>


<a href="/files/FinleyChen_Resume_12_2019.pdf">Download Resume</a>