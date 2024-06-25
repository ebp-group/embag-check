---
title:  Schnittstellen / APIs
---

<dl>
{% for para in site.api %}
    {% include hidden-detail.html claim=para.claim details=para.content badge=para.badge %}
{% endfor %}
</dl>