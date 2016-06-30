---
layout: notes
title: PJ Tatlow | Notes
permalink: /notes/
---

<div class="main-heading">
        <div class="text-center">
          <h1 class="name-big">Notes</h1>
          <h4>Some things I've thought at one point or another.<br><small>Press Shift+Space to search</small></h4>
        </div>
</div>  
<script src="{{ "/js/masonry.pkgd.min.js" | prepend: site.baseurl }}"></script>
<div class="container grid">

    {% for post in site.posts %}
      <a class="list-post hvr-grow" href="{{ post.url | prepend: site.baseurl }}">
        <h2>{{ post.title }}</h2>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <div class="excerpt">
        {{ post.excerpt }}
        
        </div>
      </a>
    {% endfor %}

</div>

<script>

$('.grid').masonry({
  // options
  itemSelector: '.list-post',
  columnWidth: '.list-post'
});

</script>