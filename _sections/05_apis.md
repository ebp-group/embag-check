---
title:  Schnittstellen / APIs
---

![Pflicht: EMBAG Art. 13](https://img.shields.io/badge/Pflicht-EMBAG_Art._13-linen)
<details>
<summary>Die gängigen API-Paradigmen und Standards sind bekannt.</summary>
<br/>

Für gewisse Daten gibt es bereits Standards, wie diese als API veröffentlich werden sollen (z.B. OGC für Geodaten oder Abstimmungsdaten als JSON-API).

API (Schnittstelle) kann hier sehr breit aufgefasst werden: vom REST- oder RPC-API, über stabile URLs bis zur Publikation in einem öffentlichen Object-Storage ist alles denkbar.

**Folgefragen**

* Werden gleich/ähnliche Daten bereits von anderen Stellen publiziert?
* Gibt es (in)offizielle Standards, die verwenden werden sollen (z.B. eCH, W3C, OGC)?
* Gibt es in meiner Organisation ein API Management (für API Keys, Caching, Throttling)?
  
</details>
<br/>

![Pflicht: EMBAG Art. 13](https://img.shields.io/badge/Pflicht-EMBAG_Art._13-linen)
<details>
<summary>Grosse Daten und Daten die häufig ändern werden als API angeboten.</summary>
<br/>

Gerade grosse Datenmengen werden sinnvollerweise als API angeboten, so dass Datennutzende einen einfachen und einheitlichen Zugang zu den Daten bekommen. Unter Umständen kann eine Veröffentlichung als Datei-Download **und** Dienst in Betracht gezogen werden, um unterschiedliche Bedürfnisse zu befriedigen. Beispiel: eine Badi-App will die aktuelle Wassertemperatur anzeigen im Gegensatz zu Forschenden die die Wassertemperaturschwankungen der letzten 100 Jahre untersuchen möchten.

**Folgefragen**

* Wie oft werden die Daten aktualisiert?
* Wie oft werden die Daten konsumiert?
  
</details>
<br/>

![Pflicht: EMBAG Art. 14](https://img.shields.io/badge/Pflicht-EMBAG_Art._14-linen)
<details>
<summary>Die angebotenen Schnittstellen sind dokumentiert.</summary>
<br/>

Um Nutzenden den Einstieg in die Nutzung einer API zu erleichtern, ist eine aktuelle, verständliche Dokumentation sehr wichtig. Zentral ist dabei, dass alle relevanten Endpunkte beschrieben sind, insbesondere die Parameter und die Wertelisten, die erwartet werden.

Für REST-APIs hat sich OpenAPI als Standard etabliert, welches dann von geeigneten Tools direkt unterstützt wird (z.B. Swagger für eine interaktive Web-Dokumentation oder Postman als Desktop-Applikation). Für komplexere APIs ist es von Vorteil direkt Beispiel-Code zu veröffentlichen, wie eine API zu verwenden ist (vergleiche z.B. mit der [API-Dokumentation der Stadt Zürich](https://opendatazurich.github.io/#verf%C3%BCgbare-schnittstellenapis))

**Folgefragen**

* Gibt es eine zentrale Stelle, an der die Dokumentation zugänglich gemacht wird (z.B. Developer Portal)?
* Ist die Dokumentation up-to-date bzw. wer ist dafür verantwortlich?
  
</details>
