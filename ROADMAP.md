# EUTRO∞KIN – Produkt- und Entwicklungsroadmap

**Stand:** 13. November 2026 · **Status:** lebendes Planungsdokument · **Projekt:** kostenlose iPhone-Web-App (PWA), zunächst für privaten Testkreis, später eventuell öffentlich und kommerziell.

> **Wichtig:** Diese Datei enthält ausschließlich Produktideen und Entwicklungsstände, **keine persönlichen Gesundheitsdaten, Kalenderdaten, Fotos oder Zugangsschlüssel**. Das Repository ist öffentlich. Einträge sind aus bisherigen Projektgesprächen zusammengeführt; Vollständigkeit über alle früheren Chats ist nicht garantiert. **„Geplant“ bedeutet nicht „implementiert“.**

## Leitlinien und feste Entscheidungen

- **Produktname:** EUTRO∞KIN (Unendlichkeitszeichen zwischen EUTRO und KIN). Namens- und Markenschutz später prüfen; keine Aussage über rechtliche Verfügbarkeit.
- **Plattform:** iPhone zuerst; Safari/PWA, möglichst ohne PC bedienbar; GitHub Pages, möglichst **0 € laufende Zusatzkosten**.
- **Privatsphäre:** Gesundheitsdaten möglichst lokal; keine Weitergabe an Dritte ohne ausdrückliche Einwilligung. Öffentliche GitHub-Dateien enthalten niemals Nutzerdaten. Sensible Anamnese erst nach Datenschutz- und Sicherheitskonzept.
- **Designrichtung:** **Black Edition**: tiefschwarzer Hintergrund, kräftiges Rot und Blau, weiße kontrastreiche Schrift, keine Pastellfarben; ältere Darstellung als Rückfalloption bis nach Tests. Lesbarkeit, iPhone-Safe-Areas, keine abgeschnittenen Header, keine Tastatur-Zoom-Probleme.
- **Navigation:** Startseite **nur Dashboard** (Begrüßung, Tagesziel, Motivation, Dienstkontext, Fortschritt); untere Tabs sind die Hauptnavigation. Dehnen & Yoga über Training.
- **Release-Regel:** Änderungen zunächst in isolierter Testversion / Feature-Branch; produktive App erst nach expliziter Freigabe. Bestehendes lokales Datenformat `eutrokin-v1` und vorhandene Einträge nicht beschädigen.
- **Training/Ernährung:** Alltagstauglichkeit bei 12-h-Wechselschichten; flexibel statt starrer Essenszeiten. Medizinische Warnhinweise und keine unbegründeten Gesundheitsversprechen.
- **Vermarktung:** Zuerst funktionierendes, nützliches Produkt und Tests im kleinen Kreis; Monetarisierung erst später anhand realer Nachfrage.

## Status-Legende

- **[LIVE]** Bestandteil der regulären App (nicht gleichbedeutend mit vollständig getestet).
- **[TEST]** In separater iPhone-Testversion vorhanden, vom Nutzer teilweise oder vollständig getestet.
- **[BAU]** In Entwicklung / experimentell, nicht als fertig freigegeben.
- **[PLAN]** Gewünscht, noch nicht implementiert.
- **[PRÜFEN]** Technische, rechtliche oder finanzielle Machbarkeit offen.

## Phase 0 – Bestehende Grundlage und Stabilität

- [x] **[LIVE]** PWA über GitHub Pages, iPhone-Homescreen-Nutzung.
- [x] **[LIVE]** Lokale Datenspeicherung, Profil, Profilfoto, Gewicht und Zielgewicht.
- [x] **[LIVE]** Gewichtsverlauf, Körpermaße, datierte Vorher-/Nachher-Fotos (lokal); weitere Qualitätsprüfung offen.
- [x] **[LIVE]** Mahlzeiten manuell erfassen; Trainings-/Aktivitätsdokumentation.
- [x] **[LIVE]** HIIT-Plan mit 3 Trainingstagen und Timer; Übungen individuell anpassbar, soweit bestehende Oberfläche dies ermöglicht.
- [x] **[LIVE]** Dienstplanbereich und CareMan-/ICS-Importfunktion; Zuverlässigkeit mit realen Kalenderdateien weiter testen.
- [x] **[LIVE]** Darstellungs-/Farbeinstellungen, Profilbild-Upload, iPhone-Layoutkorrekturen.
- [x] **[TEST]** Getrennte Vorschau unter `/Eutrokin/test/` mit separatem lokalem Testdatenspeicher; reguläre App bleibt unberührt.
- [x] **[TEST]** Täglicher Motivationsspruch mit optionaler Anzeige.
- [x] **[TEST]** Schichtbezogene Tageshinweise, manuelle Korrektur der Dienstart.
- [x] **[TEST]** Startseite als Dashboard ohne doppelte Schnellnavigation.
- [x] **[TEST]** Dehnen & Yoga: drei Routinen, Timer, Fortschritt, aktuelle Übung, Pause/Fortsetzen, automatische Pause und aufklappbare Textanleitungen.
- [ ] **[PLAN]** Regressionstests für Navigation, iPhone/PWA, Offlinebetrieb, Service Worker, Datenerhalt und Kalenderimport; testbaren Releaseprozess dokumentieren.
- [ ] **[PLAN]** Sichere Export-/Import-/Backup-Funktion für lokale Nutzerdaten, bevor größere Schemaänderungen erfolgen.
- [ ] **[PLAN]** Fehlerbehandlung bei vollem iPhone-Speicher, Offline-Nutzung, abgebrochenem Foto-Upload und Safari-Cache.
- [ ] **[PLAN]** Testfunktionen nach Abnahme kontrolliert in reguläre App übernehmen.

## Phase 1 – Black Edition und Trainingserlebnis

- [ ] **[PLAN]** App-weites Schwarz/Rot/Blau-Theme (inklusive Tabs, Formulare, Diagramme, Start/Pause/Stopp), alte Farbpalette als Rückfalloption.
- [ ] **[PLAN]** Responsive Design, ausreichend große Touchflächen, Kontrastprüfung, Dark/Light/Color-Themes weiterhin optional.
- [ ] **[PLAN]** Yoga-/Mobilitätsübungen mit geprüften, eindeutigen Illustrationen und später animierten Bewegungsabläufen (GIF/Animation), korrekter Ausgangsposition und Bewegungsrichtung.
- [ ] **[PLAN]** Anatomische Muskelansicht: **Rot = Hauptbelastung, Gelb = mittlere, Grün = leichte Aktivierung**; Zuordnung vor Veröffentlichung fachlich prüfen.
- [ ] **[PLAN]** Kurze Beschreibung von Zweck, beteiligten Muskelgruppen, Ausführung, typischen Fehlern und sicheren Alternativen.
- [ ] **[PLAN]** Yoga-/Dehn-Rubrik weiterentwickeln: Programme nach Dauer, Schichtdienst, Erholung, Beweglichkeit.
- [ ] **[PLAN]** HIIT-Plan: **3 × 15 Minuten/Woche**; Tag 1 Bauch/Rücken, Tag 2 tiefe Stabilisationsmuskulatur/Core, Tag 3 Schultern/Beine. **Keine Planks**; Alternativen mit nachvollziehbarer fachlicher Grundlage.
- [ ] **[PLAN]** Intervalltimer pro Übung, Start/Pause/Stop, ggf. Audio-/Vibrationshinweise nur soweit PWA zuverlässig unterstützt.
- [ ] **[PLAN]** Weitere Sportarten: Laufen, Wandern, Radfahren, Gewichtheben/Krafttraining, frei definierbare Aktivitäten.

## Phase 2 – Ernährung und Alltag

- [ ] **[PLAN]** Mediterrane/italienische, gemüsereiche Mahlzeitenplanung; Kohlenhydrate als Beilage, Fisch gern, Wild/Fleisch etwa einmal pro Woche, kein Bulgur/Quinoa, wöchentlicher Pizza-Tag mit später ergänztem eigenem Rezept.
- [ ] **[PLAN]** Zwei Hauptmahlzeiten (Frühstück und Abendessen) als persönliche Präferenz, flexibel bei Tag-/Nachtdienst.
- [ ] **[PLAN]** Mahlzeitenvorschläge nach vorhandenen Lebensmitteln; Einkauf → Mahlzeit.
- [ ] **[PLAN]** Foto-, Barcode- und Etikett-Erfassung; Produkt-/Nährwertdaten und Datenquellen prüfen. Keine erfundenen Kalorien.
- [ ] **[PLAN]** Portionsgrößen in Gramm, Kalorien und Makronährstoffe mit nachvollziehbaren Berechnungen.
- [ ] **[PLAN]** Einkaufslisten, Meal-Prep-Vorschläge und schichtgeeignete Essensplanung.
- [ ] **[PLAN]** Flexible Kalorien-/Gewichtsziele, Fortschrittsansicht und Anpassungen an Training und Alltag.
- [ ] **[PRÜFEN]** Wissenschaftlich fundierte Supplement-Informationen; keine pauschalen Einnahmeempfehlungen oder ungeprüften Gesundheitsversprechen.

## Phase 3 – Onboarding, Gesundheit und Motivation

- [ ] **[PLAN]** Freiwillige Erstanamnese: körperliche Einschränkungen, Medikamente, Vorerkrankungen, Nahrungsmittelallergien/-unverträglichkeiten, ärztliche Einschränkungen.
- [ ] **[PRÜFEN]** Datenschutz-/Sicherheitskonzept **vor** Speicherung sensibler Anamnesedaten: Datenminimierung, Einwilligung, Löschung, Schutz auf gemeinsam genutzten Geräten, ggf. Verschlüsselung und rechtliche Anforderungen.
- [ ] **[PLAN]** Individualisierte Trainingsempfehlungen nur innerhalb sicherer, klar beschriebener Grenzen; kein Ersatz für ärztliche Diagnostik.
- [ ] **[PLAN]** **Mission 21**: freiwillige 21-Tage-Routine, Punkte/XP, Abzeichen, Fortschritt, virtuelle und selbst definierte reale Belohnungen; kein Bestrafen ausgelassener Tage.
- [ ] **[PLAN]** Persönliche Tagesziele, motivierende Begrüßung, tägliche Impulse, optional aktivierbare Erinnerungen.
- [ ] **[PLAN]** Profilbild, datierte Fortschrittsbilder, Körper-/Taillenentwicklung, Motivations-Dashboard.
- [ ] **[PRÜFEN]** „Wunschgewicht“-Bildvisualisierung als ausdrücklich **hypothetisches** Motivationsbild, nicht als Prognose.

## Phase 4 – Personalisierter Comic-Avatar

- [ ] **[PLAN]** Beim Profilfoto-Upload freiwillige, verständliche Option anzeigen: „Aus meinem Foto einen persönlichen Comic-Avatar erstellen“ oder „Originalfoto behalten“.
- [ ] **[PLAN]** **3D-Comic-Stil**: markante, sympathisch überzeichnete Gesichtszüge; sportlicher Körper, wiederverwendbarer Avatar; optisch angelehnt an die vom Nutzer gezeigte Karikatur.
- [ ] **[PLAN]** Vorschau und ausdrückliche Zustimmung vor Avatar-Erstellung; Originalbild nicht ohne Einwilligung an externe Dienste übertragen.
- [ ] **[PRÜFEN]** Kostenlose, möglichst lokale Gesichtspersonalisierung aus einem Foto; Qualitätsgrenzen und Geräteperformance untersuchen.
- [ ] **[PLAN]** Avatar in Übungsvorführungen, Mission 21 und Fortschrittsanzeigen wiederverwenden; keine Neugenerierung jedes Videos.
- [ ] **[PRÜFEN]** Bewegliche 3D-Modelle mit anatomisch korrekten Animationen; fotorealistisches Face-Swapping **nicht** als zugesicherte Funktion behandeln.
- [ ] **[PLAN]** Avatar-Funktion bis zur funktionierenden Implementierung klar als „in Vorbereitung“ kennzeichnen, keine funktionslosen Aktionsbuttons.

## Phase 5 – Lauf-Coach, Geräte und Audio

- [ ] **[PLAN]** Virtueller Lauf-Coach mit Einsteiger-/Fortgeschrittenen-/Profi-Stufen, Audioansagen über Kopfhörer/AirPods.
- [ ] **[PLAN]** Laufzeit, Strecke, Tempo und ggf. GPS-Aufzeichnung mit expliziter Standortfreigabe.
- [ ] **[PRÜFEN]** Herzfrequenzbasiertes Feedback und Belastungssteuerung; Datenquelle, medizinische Grenzen und Einwilligung prüfen.
- [ ] **[PRÜFEN]** Apple Watch/Apple Health: Trainings-, Puls-, Aktivitäts- und Kalorienwerte. **Automatische HealthKit-/Watch-Hintergrundintegration ist mit einer reinen PWA nicht ohne Weiteres möglich**; ggf. native App/Bridge erforderlich.
- [ ] **[PLAN]** Zunächst manueller Apple-Health-Export/-Import als kostengünstiger Zwischenschritt.
- [ ] **[PRÜFEN]** Optionale Musik-/Spotify-Anbindung, Lizenz- und API-Bedingungen.
- [ ] **[PLAN]** Aktivitätserkennung/Trainingsstart über Watch als langfristiges Ziel, nicht als PWA-Versprechen.
- [ ] **[ENTSCHEIDUNG]** Keine Schlafanalyse aus unzuverlässigen Watch-Daten, solange die Uhr nachts nicht getragen wird; Schlafangaben höchstens manuell/freiwillig.

## Phase 6 – Privatpilot, Veröffentlichung und Geschäftsmodell

- [ ] **[PLAN]** Kleine Pilotgruppe aus Familie/Freunden per Link; Feedback, Fehlerliste und Prioritäten dokumentieren.
- [ ] **[PLAN]** Verständliche Datenschutzhinweise, Impressum (Name dezent), Einwilligungs-/Löschkonzept und Sicherheitsprüfung vor öffentlichem Launch.
- [ ] **[PRÜFEN]** Name, Logo und mögliche EU-Markenregistrierung; Verfügbarkeit und Rechte vor kommerzieller Nutzung prüfen.
- [ ] **[PLAN]** Markenauftritt: EUTRO∞KIN mit Unendlichkeitszeichen, mediterraner Herkunftsbezug; Logoideen mit Zitrone (gelb), Olivenblättern (grün), EKG/Leiterbahnen. Mit Black Edition konsistent weiterentwickeln.
- [ ] **[PLAN]** Nachfrage und Nutzung anhand echter Rückmeldungen validieren.
- [ ] **[PRÜFEN]** Spätere Monetarisierung: kostenlose Basis und eventuell freiwillige Premiumfunktionen; Kosten, App-Store-Regeln, Datenschutz, Steuern und Rechtsform erst vor Umsetzung bewerten.
- [ ] **[PLAN]** Keine externen kostenpflichtigen Dienste ohne vorherige Zustimmung.

## Technische Schulden und offene Entscheidungen

1. **Sicherheitsgrenze:** `localStorage` ist keine verschlüsselte Gesundheitsdatenbank; vor Anamnese und größerer Veröffentlichung prüfen.
2. **Releaseprozess:** Testpfad liegt derzeit auf derselben GitHub-Pages-Origin wie die Live-App, nutzt aber einen getrennten lokalen Schlüssel. Service-Worker-Scopes und Caching gründlich prüfen.
3. **Offline/PWA:** Aktualisierungslogik und Cache-Versionierung reproduzierbar machen.
4. **Animationen:** Bewegungsqualität, Urheber-/Nutzungsrechte und mobile Performance vor Einbau klären.
5. **Datenquellen:** Kalorien, Nährwerte, Evidenz zu Übungen und Supplementen müssen überprüfbar sein.
6. **Barrierefreiheit:** Farben nicht als einzige Bedeutungsträger verwenden; Text/Icons und Kontraste ergänzen.
7. **Backups:** Datenexport vor Änderungen am Datenschema und bei Wechsel auf neues iPhone.
8. **Keine Hintergrundarbeit ohne Ausführung:** Entwicklungsfortschritt erfolgt in aktiven Sitzungen oder mit gesondert eingerichteter Automatisierung.

## Nächste konkrete Arbeitspakete

1. Black-Edition-Theme in der isolierten Testversion umsetzen und auf dem iPhone prüfen.
2. Erste geprüfte Übungsillustrationen erstellen und in Dehnen & Yoga integrieren.
3. Avatar-Option im Profil **als Vorschau/Ankündigung** einbauen; echte Generierung bleibt deaktiviert.
4. Datenexport und Regressionstests vorbereiten.
5. Erst danach Gesundheitsanamnese und komplexere Personalisierung angehen.

---

**Pflegehinweis:** Neue Ideen hier mit Datum, Priorität, Status, Abhängigkeiten und Entscheidung ergänzen. Änderungen an `main` für die produktive App bleiben freigabepflichtig; diese Markdown-Datei enthält nur die Planung.
