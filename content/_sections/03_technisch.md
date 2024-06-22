---
title:  Technische Grundlagen
---

{% for para in site.tech %}
    {% include hidden-detail.html claim=para.claim details=para.content badge=para.badge %}
{% endfor %}
