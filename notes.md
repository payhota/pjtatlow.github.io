---
layout: notes
title: PJ Tatlow | Notes
permalink: /notes/
---

<div class="main-heading">
        <div class="text-center">
          <h1 class="name-big">Notes</h1>
          <h4>Just some things I've picked up along the way.</h4>
        </div>
</div>  

<div class="container">

    <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>

