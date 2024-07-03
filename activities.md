---
layout: default
title: Activities
nav-menu: true
permalink: /activities/
---

<div class="container">
    <div class="post-grid">
        {% for post in site.posts %}
            <div class="post-card">
                <a href="{{ post.url }}">
                        {% if post.image %}
                            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
                        {% endif %}
                        <div class="post-info">
                            <h3>{{ post.title }}</h3>
                            <br>
                            <p class="post-date">posted on: {{ post.date | date: "%d %B %Y" }}</p>
                        </div>
                    </a>
            </div>
        {% endfor %}
    </div>
</div>
