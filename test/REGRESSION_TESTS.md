# EUTRO∞KIN – Regressionstestplan (isolierte Testversion)

Stand: 2026-11-16. Gilt ausschließlich für `test/`; keine echten Gesundheitsdaten verwenden. Dies ist eine **Prüfanleitung**, kein Nachweis bestandener iPhone-Tests.

## Vorbedingungen

- Testseite im Safari-Privatmodus oder mit ausdrücklich fiktiven Testdaten öffnen.
- Produktivseite nicht öffnen oder verändern. Keine realen Fotos, Kalenderlinks, medizinischen Angaben oder persönlichen Daten eingeben.
- Auf dem iPhone sowohl Safari als auch gegebenenfalls den Homescreen-Modus getrennt testen.

## Manuelle Prüffälle

| ID | Test | Erwartung |
| --- | --- | --- |
| R01 | Testseite öffnen und zwischen allen unteren Tabs wechseln | Kein abgeschnittener Header, keine leeren Bereiche oder horizontales Scrollen |
| R02 | Textfeld fokussieren und Tastatur schließen | Kein unerwarteter Zoom; Eingaben bleiben erreichbar |
| R03 | Fotoaufnahme abbrechen | Keine falsche Mahlzeit gespeichert, verständlicher Status |
| R04 | Fiktives Essensfoto auswählen, unbekanntes Gericht | Keine erfundene sichere Erkennung oder Kalorienangabe |
| R05 | Eigenes **fiktives** Referenzgericht lokal anlernen und erneut vergleichen | Erkennungsgrenzen klar angezeigt, kein automatisches Hochladen |
| R06 | Mahlzeit ohne gesicherte Kalorien speichern | Keine erfundene kcal-Zahl |
| R07 | Barcode-Scan abbrechen und Kamera schließen | Kamera stoppt, Oberfläche bleibt bedienbar |
| R08 | Offline neu laden | Verhalten dokumentieren; Offlinefähigkeit nicht voraussetzen |
| R09 | Seite aktualisieren | Fiktive Testeinträge bleiben erhalten, soweit Speicherung erfolgreich war |
| R10 | Produktivseite separat öffnen | Produktive Einträge unverändert; Testdaten nicht sichtbar |
| R11 | Yoga-Timer starten, pausieren, fortsetzen und stoppen | Status und Zeit bleiben konsistent |
| R12 | Theme wechseln, Tabs und Eingabefelder prüfen | Texte und Schaltflächen lesbar |

## Prüfdokumentation

Pro Prüffall festhalten: Datum, Gerät/iOS, Safari oder Homescreen, Ergebnis (bestanden/fehlgeschlagen/nicht getestet), reproduzierbare Schritte, optional Screenshot **ohne personenbezogene Daten**.

## Datenschutz und Release-Grenzen

- Die Testseite und Produktivseite liegen auf derselben Origin. Getrennte lokale Speicherschlüssel reduzieren Verwechslungen, sind aber **keine vollständige Sicherheitsisolation**.
- Externe Bibliotheken und Produktdatenabfragen können Netzwerkverbindungen auslösen; nicht als vollständig offline oder vollständig lokal bezeichnen.
- Kein automatisches Deployment nach Produktion. Eine Übernahme in die produktive `index.html` erfordert ausdrückliche Freigabe.
- Vor Änderungen am Datenschema zuerst Backup/Export und Wiederherstellung prüfen.

## Status

2026-11-16: Testfälle und erwartete Ergebnisse dokumentiert. **Keine iPhone-Ausführung oder erfolgreiche Regression behauptet.**

## 17. November 2026 – Schutz vor überholten Fotoergebnissen

Test-Commit `8785bd09d22166707fdbfc04a9782f9f0ac93687`: Beim Auswählen eines neuen Fotos wird die alte Vorschau ausgeblendet und der bisherige Foto-Vektor verworfen. Wenn eine ältere Bilddekodierung erst nach einer neueren abgeschlossen wird, wird ihr Ergebnis ignoriert. Dadurch soll keine alte Mahlzeit versehentlich unter einem neuen Foto übernommen werden. Die produktive App wurde nicht verändert.

**Zusatztest R13 (noch nicht auf iPhone geprüft):** Zwei unterschiedliche Fotos zügig nacheinander auswählen; nur das zuletzt gewählte Foto darf als Vorschau und Übernahmegrundlage erscheinen. Anschließend den Mahlzeiten- und Barcode-Ablauf wie bisher prüfen.
