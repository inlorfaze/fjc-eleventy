---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---
<a href="/">&larr; Return to home</a>
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
