---
layout: layouts/base.njk
---

<section class="hero">
  <h1 id="home-title">Front End WordPress Web Developer</h1>
  <p class="description">Hands-on, collaborative development for high converting, quality websites.</p>
</section>

<section class="">
<article class="work-card">
  <a href="https://atownpark.com/">
    <img src="/images/work/Skinny-Kitchen-Logo.png" alt="Skinnykitchen logo">
    <span>Visit Site</span>
  </a>

  <div class="work-info">
  <h3>Skinnykitchen</h3>
    <p>
     Skinnykitchen is a healthy recipe blog run by Nancy Fox. I've built her a custom WordPress theme that can meet her needs, but also be flexible enough for changes. </p>
    <ul>
      <li>January 2020</li>
      <li><a href="https://www.skinnykitchen.com/">https://www.skinnykitchen.com/</a></li>
    </ul>
  </div>
</article>

<article class="work-card">
  <div class="work-info">
  <h3>ATown Park</h3>
    <p>
      ATown Park is an indoor and outdoor skatepark and shop in Atascadero, CA.
      I developed and designed a custom WordPress website.</p>
    <ul>
      <li>January 2020</li>
      <li><a href="https://atownpark.com/">https://atownpark.com/</a></li>
    </ul>
  </div>

  <a href="https://atownpark.com/">
    <img src="/images/work/atownpark-screenshot.png" alt="atown park screenshot">
    <span>Visit Site</span>
  </a>

</article>

<article class="work-card">
  <a href="https://gracebaptistpaso.org/">
    <img src="/images/work/grace-baptist-screenshot.png" alt="grace baptist screenshot">
    <span>Visit Site</span></a>
  <div class="work-info">
  <h3>Grace Baptist Church Paso Robles</h3>
    <p>WordPress development for Grace Baptist Church in Paso Robles, CA. I designed a custom theme, organized the
      content into pages and categories, and optimized SEO. Also designed their website logo.</p>
    <ul>
      <li>May 2019</li>
      <li><a href="https://gracebaptistpaso.org/">https://gracebaptistpaso.org/</a></li>
    </ul>
  </div>
</article>

</section>

<h2 class="text-center">Other Side Projects</h2>
<section class="projects align-wide">
<article class="project-card">
<h3>
<a href="https://haipoo.fjchen.net">
Haipoo
</a>
</h3>
<ul class="dash">
  <li>A website for sharing bathroom poetry in the form of haikus.</li>
  <li>Built with serverless architecture on Gatsby and Firebase</li>
</ul>
<div class="project-links">
<a class="github" href="https://haipoo.fjchen.net">{{ '/src/site/images/icons/external-link.svg' | svgContents | safe }}</a>
</div>
</article>

<article class="project-card">
<h3><a href="https://slotechcompanies.com">SLO Tech Companies</a>
</h3>
<ul class="dash">
  <li>Hand-selected archive of tech companies with offices in San Luis Obispo, CA</li>
  <li>Built in Eleventy with Gatsby</li>
</ul>
<div class="project-links">
<a class="github" href="https://github.com/finleyjchen/slotechcompanies">{{ '/src/site/images/icons/github.svg' | svgContents | safe }}</a>
<a class="github" href="https://slotechcompanies.com">{{ '/src/site/images/icons/external-link.svg' | svgContents | safe }}</a>
</div>
</article>

<article class="project-card">
<h3><a href="https://lolabilities.com">LolAbilities</a></h3>
<ul class="dash">
  <li>Tool for learning the abilities of champions in an active League of Legends game</li>
  <li>Utilizes the Riot Games API and DDragon data</li>
  <li>Built in NextJS, Express</li>
</ul>
<div class="project-links">
<a class="github" href="https://github.com/finleyjchen/lolabilities">{{ '/src/site/images/icons/github.svg' | svgContents | safe }}</a>
<a class="github" href="https://lolabilities.com">{{ '/src/site/images/icons/external-link.svg' | svgContents | safe }}</a>
</div>
</article>

<article class="project-card">
<h3><a href="https://polytalent.net">Polytalent</a></h3>
<ul class="dash">
  <li>A freelance job marketplace for Cal Poly students</li>
  <li>Students with talent can post their services</li>
  <li>Built with Node.js, Express, MySQL, and React</li>
</ul>
<div class="project-links">
<a class="github" href="https://polytalent.net">{{ '/src/site/images/icons/external-link.svg' | svgContents | safe }}</a>
</div>
</article>

</section>


<!-- 
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
</section> -->



<!-- <ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
{%- endfor -%}
</ul> -->





