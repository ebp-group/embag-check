---
title: Organisatorische Aspekte
---

<dl>

{% for para in site.org %}
    {% include hidden-detail.html claim=para.claim details=para.content badges=para.badges %}
{% endfor %}

</dl>
