# EUTRO∞KIN – iPhone-Testprotokoll (isolierte Testversion)

Stand: 15. November 2026. Diese Datei enthält keine persönlichen Daten.

## Fotoanalyse: reproduzierbarer Funktionstest

1. Testversion `/Eutrokin/test/` in Safari öffnen, Bereich **Ernährung** wählen.
2. Ein Testfoto eines Lebensmittels aufnehmen oder auswählen.
3. Kontrollieren, dass die Bildvorschau und **KI-Bildanalyse lokal starten (Modell-Download)** erscheinen.
4. KI-Button einmal drücken; die Statuszeile muss eine Rückmeldung liefern. Netzwerkzugriff kann für den erstmaligen Download der Modellbibliothek und Modellgewichte nötig sein; die Bilddaten dürfen dabei nicht hochgeladen werden.
5. Das Ergebnis als **unverbindlichen Klassifikationsvorschlag** behandeln: Das derzeitige MobileNet-Modell erkennt unter Umständen Kochgeschirr statt Speisen. Keine Kalorien oder Zutaten aus diesen Vorschlägen ableiten.
6. Lokalen Fotovergleich mit angelernten Bildern getrennt testen; Fehlklassifikationen dokumentieren, ohne Fotos oder private Nutzerdaten im öffentlichen Repository abzulegen.
7. Barcode-Erkennung und Produktabruf als Regression prüfen.

## Bekannte Einschränkungen

- MobileNet ist kein spezialisiertes Lebensmittelmodell; semantisch falsche Treffer sind möglich.
- Die Funktion ist nicht vollständig offline, solange benötigte Modellressourcen noch nicht im Browsercache liegen.
- Safari/PWA-Cache kann alte Oberflächen ausliefern; einen neuen Testlink vor Weitergabe auf HTTP-Erreichbarkeit und sichtbare Versionsmerkmale prüfen.
- **Nicht** in Produktion übernehmen, bevor iPhone-Tests, Datenschutzprüfung und ausdrückliche Freigabe vorliegen.

## Abnahmebedingungen für einen späteren Modellwechsel

- Verarbeitung der Fotos ausschließlich auf dem Endgerät; externe Ressourcen nur Modellcode/-gewichte, keine Bildübertragung.
- Modellquelle, Lizenz, Downloadgröße und Kompatibilität mit iOS Safari dokumentiert.
- Messbare Trefferqualität mit nicht-personenbezogenen Testbildern; sichtbarer Hinweis bei unsicherer Klassifikation.
- Fehler bei fehlendem Netz, Downloadabbruch und unzureichendem Gerätespeicher verständlich anzeigen.
- Bestehende Barcode-, Referenzfoto- und lokale Speicherfunktionen unverändert.

## Status

Dokumentationspaket, keine Laufzeitänderung. Der aktuelle Modellwechsel ist **nicht** implementiert und erfordert weitere technische Prüfung.

## 16. November 2026 – Sicherung der Bildanalyse-Bedienung

Commit `66743030565730563ef8a80394328d0a3f0e9dd3` in `test/index.html`:
- Während einer KI-Analyse ist der Startbutton deaktiviert, um versehentliche parallele Modellaufrufe zu vermeiden.
- Bei Foto-Wechsel während einer laufenden Analyse werden alte Ergebnisse nicht mehr als Ergebnis des neuen Fotos angezeigt.
- Bei einer Top-Kategorie unter 50 % wird die geringe Modellkonfidenz ausdrücklich benannt; außerdem klare Warnung vor Kochgeschirr-Treffern und fehlender Zutaten-/Kalorienbestimmung.
- Barcode und Referenzspeicher wurden nicht absichtlich verändert; iPhone-Regressionsprüfung steht aus. Keine Änderung an der produktiven App.

**Manueller iPhone-Test:** Foto auswählen, KI-Button doppelt tippen (nur ein Lauf), während der Analyse ein anderes Foto auswählen (kein altes Ergebnis), Ergebnis mit Warnhinweis prüfen. Modellwechsel weiterhin offen.
