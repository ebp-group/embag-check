---
title:  Technische Grundlagen
---

![Pflicht: EMBAG Art. 12](https://img.shields.io/badge/Pflicht-EMBAG_Art._12-linen)
<details>
<summary>Es gibt eine Dokumentation der IT-Architektur.</summary>
<br/>

Es ist zentral zu wissen, welche Systeme vorhanden sind und welche Schnittstellen/Abhängigkeiten diese zueinander haben. Dadurch kann auch festgestellt werden, wie der Datenfluss im System funktioniert, welche Systeme sich On-Premise oder in der Cloud befinden und welche Daten vorhanden sind.

Dazu kommen Fragestellungen zur Skalierbarkeit (vertikal oder horizontal) und dem Zugriffsschutz.

EMBAG Art. 12 schreibt vor, die Interoperabilität zu unterstützen und internationale, offene Standards zu verwenden. 

**Folgefragen:**

* Wie wird die Dokumentation aktuell gehalten?
* Wie sind die Systemgrenzen definiert?
* Gibt es eine Strategie bezüglich onPrem/Cloud?
* Wie lässt sich das System skalieren?
  
</details>
<br/>

![Pflicht: EMBAG Art. 14](https://img.shields.io/badge/Pflicht-EMBAG_Art._14-linen)
<details>
<summary>Es gibt eine Übersicht, welche Daten in meiner Organisation vorhanden sind.</summary>
<br/>

Ein Dateninventar kann dabei helfen, Übersicht über alle vorhanden Daten zu erlangen. Typischerweise wird dazu ein Daten-Katalog eingesetzt, der die wichtigsten Metadaten zu den Datensätzen enthält.

**Folgefragen:**

* Was ist ein Datensatz?
* Welche Metadaten braucht ein Datensatz?
* Liefert meine Organisation bereits Daten an andere Stellen (andere Bundesämter, Kantone, I14Y-Plattform, opendata.swiss)?
  
</details>
<br/>

![Pflicht: EMBAG Art. 12](https://img.shields.io/badge/Pflicht-EMBAG_Art._12-linen)
<details>
<summary>Es ist definiert welche Daten in welchem Format bereit gestellt werden.</summary>
<br/>

Für die verschiedenen Arten von Daten sollte jede Organisation definieren, wie diese Daten zugänglich gemacht werden. Z.B. könnten tabellarische Daten als CSV, Parquet oder Excel bereitgestellt werden. Oder Geodaten als GeoPackage oder GeoJSON. Daten, die von einer Webapplikation konsumiert werden, werden am besten als JSON zur Verfügung gestellt.

Wenn es sich um sehr grosse Daten handelt, kann das auch über einen Dienst (API, Datenbank, Data Warehouse etc.) passieren.

**Folgefragen**

* Sind die Werkzeuge, um diese Daten bereitzustellen und zu konsumieren vorhanden?
* Ist das Know-How intern und extern vorhanden um diese Daten zu nutzen?
* Gibt es eine Dokumentation der Daten bzw. für den Zugriff darauf?
  
</details>
<br/>

![Freiwillig: Best Practice](https://img.shields.io/badge/Freiwillig-Best_Practice-blue)
<details>
<summary>Die IT-Systeme sind überwacht und es lassen sich Aussagen zur Nutzung machen.</summary>
<br/>

Beim Thema Monitoring geht es darum im Fehlerfall schnell zur Ursache zu kommen und schnell zu sehen, wenn es Anomalien gibt (ungewöhnliche viele Daten, Login dauert zu lange etc.). Zum anderen kann auch eine Aussage zur Nutzung des System gemacht werden (Analytics) und so die Dimensionierung des ganzen Systems.

**Folgefragen**

* Was wird gemessen?
* Wie oft wird gemessen?
* Wer hat Zugriff auf die Messdaten? Wie?
  
</details>
<br/>

![Freiwillig: Best Practice](https://img.shields.io/badge/Freiwillig-Best_Practice-blue)
<details>
<summary>Regelmässige Arbeiten (z.B. Datenaufbereitungen, Publikation, Deployment) sind automatisiert.</summary>
<br/>

Gerade im Zusammenhang mit Daten und Prozessen lassen sich viele Arbeitsschritte durch Automatisierung vereinfacher. Dies fördert die Standardisierung von Prozessen und vereinfacht die Übergabe an bzw. die Einarbeitung von neuen Mitarbeitern.

Sowohl in der Softwareentwicklung wie auch bei der Datenverarbeitung haben sich entsprechende Praktiken (DevOps, Continuous Integration, Data Engineering, Daten-Pipelines) etabliert.

**Folgefragen**

* Wer ist für die Automatisierung zuständig?
* Ist es sinnvoll gewisse Automatisierungen zentral bereitzustellen?
* Haben alle meine Systeme eine Schnittstelle, die für die Automatisierung nötig ist?
  
</details>