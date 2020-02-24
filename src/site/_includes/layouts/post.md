---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<p class="date">
  Posted on <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</p>
<main>
  {{ content | safe }}
  <div class="footnote">
    <img src="/images/profile-image-min.png" />
    <p>
      Thanks for reading.
      <br>
      This content was written by Finley Chen.
    </p>
  </div>
</main>
