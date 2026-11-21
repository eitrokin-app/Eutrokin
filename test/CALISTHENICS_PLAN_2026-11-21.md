# EUTRO∞KIN – Calisthenics: neues Trainingsmodul (Planung, 21.11.2026)

Status (22.11.2026): Testmodul mit sechs Übungskarten, zwei Stufen und schematischen Start-/Endpositionen unter `test/index.html` vorhanden. Noch keine fachlich geprüften Profi-Illustrationen oder Avatar-Funktion. Produktivversion unverändert.

## Ziel
Neue Rubrik „Calisthenics“ innerhalb des vorhandenen Tabs „Training“, neben HIIT und Dehnen & Yoga. Eigengewichtstraining für Anfänger, Fortgeschrittene und Profis; keine Planks gemäß bisheriger Präferenz.

## Übungsdarstellung
- Jede Übung: Name, Ziel, Ausgangsposition, Bewegung in nachvollziehbaren Einzelschritten, Atmung, Wiederholungen oder Dauer, Sätze, Pausen, typische Fehler, einfachere Alternative.
- Illustrationen zeigen Anfangs- und Endposition; später kurze Animation, sofern technisch zuverlässig und mit geklärten Nutzungsrechten möglich.
- Muskelansicht: Rot = Hauptbelastung, Gelb = mittel, Grün = leicht; zusätzlich ausgeschriebene Muskelgruppen, fachliche Prüfung vor Veröffentlichung.
- Optionaler personalisierter 3D-Comic-Avatar als spätere Funktion. Kein Foto-Upload an Dritte und keine automatische Avatar-Erzeugung ohne separate Zustimmung. Bis dahin neutrale Übungsfigur.
- Touchfreundliche Timer- und Fortschrittsansicht, mobil auf iPhone; bestehende Datenformate und Timer nicht beschädigen.

## Beispielübungen für einen ersten Testkatalog (noch fachlich/visuell zu prüfen)
- Anfänger: Kniebeugen ohne Zusatzgewicht, Liegestütze an erhöhter Fläche, Glute Bridge, Dead Bug.
- Fortgeschritten: klassische Liegestütze, Ausfallschritte, kontrollierte Step-ups.
- Profi: fortgeschrittene Varianten erst nach technischer und sicherheitsbezogener Prüfung. Kein implizites Leistungsversprechen.
- Bei Übungen mit Geräten (z. B. Klimmzugstange) Gerätebedarf explizit ausweisen.

## Entwicklungspakete
1. Nur unter test/ Datenstruktur und navigierbare Übungskarten mit Textanleitungen vorbereiten.
2. Korrekte Illustrationen und sichere Alternativen prüfen; keine anatomisch unbelegten Farbmarkierungen.
3. Timer und Fortschritt mit getrenntem Testdatenspeicher; iPhone-Regressionsprüfung.
4. Avatar-Option zunächst als deaktivierte Vorschau; echte Animation erst nach Machbarkeitsprüfung und Einwilligung.
5. Keine Übernahme nach Produktion ohne ausdrückliche Freigabe.

## Sicherheitsgrenzen
Keine Gesundheitsdaten erheben oder auswerten; keine medizinischen Individualempfehlungen. Keine kostenpflichtigen Dienste. Belastung und Bewegungsumfang müssen vom Nutzer angepasst werden können.

## Testlink (bestehende Testumgebung; Modul noch nicht implementiert)
https://eitrokin-app.github.io/Eutrokin/test/


## Prüfprotokoll 22.11.2026 – Illustrationen (ohne Bildfreigabe)

**Repositoryprüfung:** `test/index.html` enthält die Calisthenics-Rubrik, den Einstieg über Training, drei Anfänger- und drei Fortgeschrittenen-Übungen, je zwei SVG-Posen. Bestehende Testdaten liegen unter dem separaten Präfix `eutro-test-v1:`. Die bisherige Zeichnung ist ausdrücklich schematisch, nicht anatomisch geprüft.

**Qualitätsschranke vor Bildersatz:**
- Für jede der sechs Übungen zwei getrennte, klar zuordenbare Ansichten erstellen (Start/Ende), keine Collage mit abweichenden Übungen.
- Übungsnamen und tatsächliche Anleitung müssen übereinstimmen; keine Planks, Bench Dips oder andere ungewünschte Ersatzübungen.
- Perspektive, Gelenkpositionen, Geräte/Stabilität und Bewegungsrichtung fachlich prüfen; KI-generierte Anatomie nicht ungeprüft übernehmen.
- Muskelmarkierungen nur nach Prüfung; Farbcodes zusätzlich beschriften.
- Bilder unter `test/` lokal bereitstellen, keine externen Bild-CDNs oder Uploads von Nutzerfotos.
- Dateigrößen für iPhone und Offlinebetrieb optimieren; Bilder mit aussagekräftigem Alternativtext versehen.
- Vor Ersetzung auf iPhone prüfen: beide Stufen, sechs Übungen, Hoch-/Querformat, Ladeverhalten und Zurück-Navigation.

**Noch offen:** Die zuletzt gezeigte Design-Collage ist keine geprüfte Übungsillustration und darf nicht als fertiges Asset eingebaut werden. Kein iPhone-Test für einen neuen Bildersatz erfolgt. Nächster Entwicklungsschritt: einzelne fachlich prüfbare Illustrationen als Dateien erstellen, anschließend erst `test/index.html` darauf umstellen.
