# EUTRO∞KIN – Regressionscheckliste Testversion (20.11.2026)

## Geltungsbereich
Nur die isolierte Vorschau unter `/Eutrokin/test/`. Dies ist ein **manueller Prüfplan**, kein Nachweis bereits bestandener Tests. Keine privaten Fotos, Gesundheitsdaten oder echten Dienstplandateien für die Tests verwenden.

## Voraussetzungen
- Safari auf iPhone; Testdaten ausschließlich in der Testversion erzeugen.
- Produktive `/Eutrokin/index.html` nicht ändern, keine produktiven Browserdaten löschen.
- Nach Möglichkeit zusätzlich Safari mit neuem Tab und bestehende Homescreen-PWA vergleichen.

## Prüfungen
| Bereich | Vorgehen | Erwartung |
|---|---|---|
| Isolation | Testversion öffnen, Testeintrag erstellen, Live-App getrennt öffnen | Testeintrag taucht nicht in Live auf |
| Navigation | Alle unteren Tabs und Rückkehr zum Dashboard durchgehen | Keine abgeschnittenen Inhalte oder leeren Seiten |
| Tastatur | Eingabefeld fokussieren, Text eingeben, Tastatur schließen | Kein dauerhaft vergrößerter Zoom oder verdeckter Speichern-Button |
| Barcode | Nicht-sensibles verpacktes Lebensmittel scannen, horizontal/vertikal | Scanner meldet erkennbar Erfolg oder verständlichen Fehler; keine stillen Hänger |
| Foto | Apfel einzeln, Banane einzeln, beide zusammen fotografieren | Vorschau erscheint; keine automatische Übernahme unsicherer Referenznamen |
| Foto-KI | Klassifikation starten, auch bei fehlendem Netz erneut versuchen | Lade-/Fehlermeldung, Button wird wieder nutzbar; keine erfundenen Kalorien |
| Offline | Nach erstem Laden Flugmodus einschalten und Testversion öffnen | Verfügbarkeit/Fehler klar dokumentieren; nicht ungeprüft als offlinefähig markieren |
| Persistenz | Unkritischen Testeintrag erstellen, Seite neu laden | Testeintrag bleibt erhalten, sofern Speicher verfügbar |
| Abbruch | Kamera/Dateiauswahl ohne Foto abbrechen | Kein falscher Erfolg und kein Datenverlust |
| Training | Übungstimer starten, pausieren, fortsetzen und stoppen | Sichtbarer, nachvollziehbarer Timerzustand |
| Service Worker/Cache | Version im Safari-Tab und Homescreen vergleichen | Abweichungen dokumentieren; keine Browserdaten löschen |

## Protokollfelder je Test
Datum, iPhone-Modell, iOS-Version, Safari oder Homescreen, Netzwerkzustand, Testfall, beobachtetes Verhalten, bestanden/fehlgeschlagen/nicht geprüft, Fehlermeldung. Keine Bilder oder persönlichen Daten in öffentliche GitHub-Issues schreiben.

## Freigabegrenzen
Vor Änderungen an Produktivdateien: alle kritischen Testfälle erfolgreich, Cache-/Datenerhalt geprüft und ausdrückliche Nutzerfreigabe. Die Testversion teilt sich die GitHub-Pages-Origin mit Produktion; getrennte Schlüssel reduzieren, beseitigen aber nicht sämtliche Risiken. Kein pauschales Versprechen vollständiger Isolation.

## Status
Checkliste erstellt; **keine** iPhone- oder Browser-Laufzeittests durchgeführt. Keine Änderung an ausführbarem Code, Produktivdateien oder gespeicherten Nutzerdaten.
