# Testversion – Entwicklungsprotokoll

## 2026-11-14 – Sicherungsimport absichern

- Nur `test/index.html` geändert (Commit `c3d387769168234fb7da39680c6e5b17a7453282`).
- Import begrenzt JSON-Dateien auf 10 MiB; prüft Grundstruktur, Profil und Einstellungen vor einer Änderung.
- Bestätigung nennt ausdrücklich TEST-Daten und empfiehlt vorherigen Export.
- Beim Speichern wird zuerst der getrennte Testschlüssel geschrieben, erst danach die Daten im Arbeitsspeicher ausgetauscht. Bei Speicherfehler bleibt der bisherige Zustand im Arbeitsspeicher erhalten; Fehlermeldung wird angezeigt.
- Nach erfolgreichem Import wird die Testansicht neu geladen, damit alle Oberflächenelemente aus den importierten Daten initialisiert werden.
- Kein Zugriff auf den produktiven Schlüssel `eutrokin-v1`; Testschlüssel ist `eutro-test-v1:eutrokin-v1`.

### Prüfstand

- Quelltext-Anker und erfolgreiche GitHub-Übernahme geprüft.
- Kein Browser-/iPhone-Laufzeittest durchgeführt. Insbesondere alte Backups, sehr große Bilder, Safari-Speichergrenzen und Offlinebetrieb müssen mit synthetischen Testdaten geprüft werden.
- Diese Version ist nicht zur Verarbeitung echter Gesundheitsdaten freigegeben.

### Nächster Schritt

- Testdaten exportieren und importieren; beschädigte JSON-Datei, Abbruch und Speichermangel testen. Danach sichere Export-/Import-Regressionschecks ergänzen.
