# Release-Sprint – technischer Zwischenstand 28.11.2026
Die Roadmap RELEASE_SPRINT_2026-12-01.md bleibt verbindlich. Keine Produktionsfreigabe. Ausschließlich synthetische Testdaten.

## Verifizierte Änderungen
- d9561890bf6b6ce936479fcc605e6a81dd4c3209: acht schematische Übungsillustrationen überarbeitet (Stuhl-Kniebeuge, Ausfallschritt, Wall Slide, Heel Slides, Clamshell, Gewichtsverlagerung, Hüftbeuger, Atmung). Programmgesteuerte Inventur: 6 Calisthenics-, 15 HIIT- und 15 Mobilitätseinträge; alle Standardübungen haben eine Illustration bzw. ein vorhandenes SVG-Asset. Alle drei externen SVG-Dateien gelesen. Keine Planks im Standardkatalog. Fachliche und mobile Sichtprüfung offen; eigene Übungen ohne geprüfte Bilder bleiben ausdrücklich gekennzeichnet.
- 7e22212602fc375ed2a125f20ee33ebd5279a1f1: HIIT-Timer mit eindeutigen Zuständen und Pause bei Navigation/Hintergrund, ISO-Datumsvalidierung, keine zukünftigen Einheiten im Wochenzähler, Profilfelder inkl. Avatar erhalten, Barcode-Abfragen gegen veraltete Antworten abgesichert, vorbereitete Portionen bei Änderungen verworfen. Isolierte JS-Tests: Timer Start/Übungswechsel/Pause/Fortsetzen/Ende/Reset; Schaltjahr/ungültige Daten; Portionsrechnung und ungültige Werte.
- 6505488af0eb7a2e15138587089ca4e703fac9b7: Backup mit TEST-Kennzeichnung, Validierung und Normalisierung vor Bestätigung und Speicherzugriff, lokale Bildquellen abgesichert. Synthetischer Roundtrip, 15 ungültige Fälle, Abbruch, simulierter Speicherfehler und erfolgreicher Restore in isoliertem JS-Test geprüft. Ältere unmarkierte Sicherungen nur nach ausdrücklichem Warnhinweis. Keine Kalender-URL, Foto-Referenzen oder separat gespeicherten Zusatzoptionen im JSON.
- 04e7796e97aa4023b69b8a0408236d5955cd7419 / b191f2360e7ae272702d4a75cc3fcbd6df9b9042 / 24a1f8e546896e8a973341c995d64dbac5bfd8a0: eigenes Manifest und Netzwerk-only-Service-Worker im Scope test/, kein Cache-Schreiben oder Löschen fremder Caches. Offlinebetrieb ausdrücklich nicht freigegeben. Manifest/Worker und index.html vollständig zurückgelesen; alle sieben Inline-JS-Blöcke syntaktisch geprüft. Kein realer Browser- oder iPhone-Test durchgeführt.

## Nächste P0-Abnahme
1. Browser/iPhone: tatsächliche Test-URL erreichbar und neuer Build geladen; Homescreen startet TEST, nicht Produktion; bestehende Produktionsdaten unberührt.
2. Training: alle 36 Standardübungen fachlich und visuell prüfen; HIIT und Mobilität starten, pausieren, fortsetzen, stoppen, Übungen wechseln, Navigation und Hintergrundwechsel testen.
3. Barcode quer/hochkant, unbekannter Barcode, Portionsrechnung (250 g bei 150 kcal/100 g = 375 kcal), Speichern, Foto-Experiment ohne erfundene Kalorien.
4. Synthetische Daten für Gewicht, Profil, Dienstplan, Dashboard, Backup-Dateiexport und Restore auf iPhone; ungültige Datei und Abbruch ohne Datenverlust. Kontrast, Layout und Cache-Verhalten prüfen.
5. Fehlerliste/Release-Kandidat erst nach Abnahme. Keine automatische Produktion.

Quellstand: https://github.com/eitrokin-app/Eutrokin/blob/24a1f8e546896e8a973341c995d64dbac5bfd8a0/test/index.html
Vorgesehene Test-URL: https://eitrokin-app.github.io/Eutrokin/test/ — HTTP-Abruf in diesem Durchlauf nicht verifizierbar. Noch kein gebündelter iPhone-Test angefordert.
