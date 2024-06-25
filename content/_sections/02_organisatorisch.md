---
title: Organisatorische Aspekte
---

<dl>

{% for para in site.org %}
    {% include hidden-detail.html claim=para.claim details=para.content badge=para.badge %}
{% endfor %}

</dl>
