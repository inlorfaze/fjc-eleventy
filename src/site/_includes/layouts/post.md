---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---
<article>
  {{ content | safe }}
  <!-- <div class="footnote">
    <img src="/images/profile-image-min.png" />
    <p>
      Thanks for reading.
      <br>
      This content was written by Finley Chen.
    </p>
  </div> -->
<a href="/" class="button">&larr; Return to home</a>
</article>
