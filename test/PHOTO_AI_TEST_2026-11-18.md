# EUTRO∞KIN – Testprotokoll Foto-KI (18.11.2026)

## Umfang
Nur `test/index.html`, keine produktive Datei, keine Gesundheitsdaten. Die vorhandene MobileNet/ImageNet-Klassifikation bleibt unverändert; keine externe Modellalternative eingebaut.

## Änderung
- Die Ausgabemeldung benennt die Resultate als **allgemeine Bildkategorien**, nicht als verlässliche Lebensmittelerkennung.
- Unter 50 % wird die höchste Modellwahrscheinlichkeit ausdrücklich als unsicher markiert. Über 50 % wird ebenfalls keine Richtigkeit behauptet.
- Warnung für Mehrfachobjekte und Fehlklassen (z. B. Kastanie, Kochgeschirr); keine automatische Übernahme oder Kalorienberechnung.
- Bereits zuvor implementierte Sperre gegen automatische Übernahme des Farbvergleich-Referenznamens bleibt erhalten.

## Prüfung
GitHub-Datei nach Commit erneut abgerufen und Textänderung bytegenau mit dem gesendeten Inhalt verglichen. Keine Browserlaufzeit-, Offline-, iPhone- oder Modellgüteprüfung durchgeführt. Es handelt sich um eine Sicherheits-/UX-Klarstellung, **nicht** um verbesserte KI-Genauigkeit.

## Nächste Schritte
Vor dem Wechsel zu einem anderen Modell: Lizenz, tatsächliche Lebensmittelklassen, Mehrfachobjekterkennung, iPhone-Speicherbedarf, Safari-Kompatibilität, Caching und lokale Verarbeitung prüfen. Alternative nur separat in `test/` testen; keine Bildübertragung und keine kostenpflichtigen Dienste ohne Freigabe.

## Testadresse
https://eitrokin-app.github.io/Eutrokin/test/
