---
title: Contact
description: Let's talk about what I can do to help.
layout: layouts/base.njk
---


<form class="contact-form" name="contact" method="POST" data-netlify="true">
<div class="grid-2">
  <p>
    <label>Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Contact Email: <input type="email" name="email" /></label>
  </p>
</div>
  <p>
    <label>Message: <textarea rows="6" name="message"></textarea></label>
  </p>
  <p>
    <button type="submit" class="button">Send</button>
  </p>
</form>