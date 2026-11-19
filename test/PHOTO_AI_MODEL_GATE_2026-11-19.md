# EUTRO∞KIN – Entscheidungstor für alternative Foto-KI (19.11.2026)

## Ausgangslage
Die Testversion verwendet TensorFlow.js 4.22.0 und MobileNet 2.1.1 mit allgemeinen ImageNet-Klassen. Der iPhone-Test mit Apfel und Banane zeigte unpassende Kategorien (u. a. Kastanie). Das ist keine zuverlässige Lebensmittelerkennung. Der Farbvergleich ist ebenfalls keine semantische Erkennung.

## Mindestanforderungen vor einem Modellwechsel
1. Lizenz des konkreten Modells und der Laufzeitbibliothek prüfen und dokumentieren; keine kostenpflichtigen Dienste.
2. Modell muss Lebensmittelklassen enthalten; bei mehreren Lebensmitteln im Bild darf ein einzelnes Klassenlabel nicht als vollständige Zutatenliste erscheinen.
3. Safari/iPhone-Kompatibilität, benötigte Modelldateien, Downloadgröße, Speicherverbrauch und Ladezeit auf realem Gerät testen.
4. Nach initialem Download muss die Bildauswertung lokal erfolgen; keine Foto-Uploads, keine privaten Gesundheitsdaten. Netzwerkanfragen beim Modellbezug transparent benennen.
5. Neue Variante unter test/ getrennt und reversibel integrieren. Kein Zugriff auf produktive localStorage-Schlüssel; keine Änderungen an /index.html.
6. Bei Fehler, fehlendem Netz oder nicht unterstütztem Gerät verständliche Meldung und funktionsfähigen Rückweg anbieten.
7. Keine automatischen Kalorien- oder Zutatenangaben ohne belastbare Datenbasis und Bestätigung durch Nutzer.

## Testmatrix mit nicht-sensiblen Bildern
- Ein einzelner Apfel; eine einzelne Banane; Apfel und Banane zusammen; ein Teller mit mehreren sichtbaren Zutaten; ein Nicht-Lebensmittel.
- Pro Fall: erkannte Begriffe, Fehlklassifikation, Rechen-/Ladezeit, Speicher-/Absturzverhalten, Offlineverhalten, Netzwerkanfragen und Gerätemodell notieren.
- Vergleich mit bestehendem MobileNet nur anhand derselben Bilder; keine pauschale Behauptung, dass eine Bibliothek allein die Genauigkeit verbessert.

## Status
Vorprüfung/Prüfplan dokumentiert. Noch **kein alternatives Modell ausgewählt, integriert oder auf iPhone getestet**. Keine Freigabe für Produktion.
