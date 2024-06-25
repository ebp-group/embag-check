---
title:  Technische Grundlagen
---

<dl>

{% for para in site.tech %}
    {% include hidden-detail.html claim=para.claim details=para.content badge=para.badge %}
{% endfor %}

</dl>