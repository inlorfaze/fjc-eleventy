---
layout: layouts/base.njk
pageClass: projects
templateEngineOverride: njk, md
---

  <a class="url" href="{{ url }}">Visit Website</a>
<article>
  {{ content | safe }}
  <div class="footnote">
    <img src="/images/profile-image-min.png" />
    <p>
      Thanks for reading.
      <br>
      This content was written by Finley Chen.
    </p>
  </div>
</article>
