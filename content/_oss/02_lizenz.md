---
claim: "Es ist definiert, unter welcher Lizenz die Software veröffentlicht wird."
badges:
- "Pflicht: EMBAG Art. 9"
---

Das EMBAG macht klar: «[Die Behörden] erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren» und «soweit möglich und sinnvoll sind international etablierte Lizenztexte zu verwenden» (_[EMBAG Art. 9](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)_). Somit sind alle etablierten OSS-Lizenzen denkbar (zum Beispiel mit [«Copyleft»](https://de.wikipedia.org/wiki/Copyleft)). Wichtig ist dabei auch die lizenzrechtliche Kompatibilität aller eingesetzten Komponenten (zum Beispiel Programmbibliotheken).

**Bekannte OSS-Lizenzen:**

* Open Source-Lizenzen mit «Copyleft» (diese verlangen, dass alle Änderungen der Software frei verfügbar bleiben)
    * [GPL (GNU General Public License)](https://choosealicense.com/licenses/gpl-3.0/): die am weitesten verbreitete Copyleft-Lizenz, aktuell nur in Englisch vorhanden
    * [AGPL (GNU Affero General Public License)](https://choosealicense.com/licenses/agpl-3.0/): ideal für Webanwendungen
    * [EUPL (European Union Public License)](https://choosealicense.com/licenses/eupl-1.1/): verfügbar in 22 Sprachen

* Permissive Open Source-Lizenzen ohne «Copyleft» (freizügig):
    * [MIT (Massachusetts Institute of Technology License)](https://choosealicense.com/licenses/mit/): nur Haftungsausschluss
    * [BSD (Berkley Software Distribution License)](https://choosealicense.com/licenses/bsd-3-clause/): Haftungsauschluss und «Werbeverbot», dadurch ist kein ungewolltes Endorsement von Software möglich

Die Webseite [ChooseALicense.com](https://choosealicense.com/) von GitHub kann bei der Auswahl der passenden Lizenz helfen.

**Use Cases**

* Software basiert auf einer bestehenden, als Open Source unter Copyleft lizenzierten Lösung
   * _Empfehlung: die bestehende Copyleft Lizenz verwenden_
* Es soll eine Community rund um die Software entstehen, die am Code mitarbeitet
   * _Empfehlung: Lizenz mit Copyleft verwenden (z.B. GPL, AGPL)_
* Beim Code handelt es sich um eine Referenzimplementierung, die möglichst breit eingesetzt werden soll
   * _Empfehlung: permissive Lizenz ohne Copyleft verwenden (z.B. MIT, BSD)_
* Die Software soll einmal publiziert werden, und danach will man nichts mehr damit zu tun haben 
   * _Empfehlung: permissive Lizenz ohne Copyleft verwenden (z.B. MIT, BSD)_

Diese Use Cases basieren auf einen [Referat von Simon Schlauri](https://pretalx.com/it-beschaffungskonferenz-2024/talk/FXVUTW/).

**Folgefragen**

* Welche Lizenz(en) haben wir in unserer Organisation bislang eingesetzt? Weshalb?
* Wünschen wir starkes «Copyleft»?
* Wo wird die mit einer Lizenz zu versehene Software künftig zum Einsatz kommen?
* Ist allenfalls eine «Dual License» möglich und sinnvoll?
