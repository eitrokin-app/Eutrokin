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

## 2026-11-14 – Synthetische Backup-Regressionschecks

- Neue eigenständige Seite `test/backup-regression.html` angelegt (Commit `09504ac218ad13aa738c1a78e7d911af8e234b9c`).
- Acht manuell startbare Prüfungen: gültige Sicherung, beschädigtes JSON, falsche App-Kennung, fehlende Pflichtliste, Größenlimit, Abbruch, simulierter Speicherfehler, Schreiben unter isoliertem Testschlüssel.
- Kein Zugriff auf localStorage oder produktive Daten; keine Änderungen an `index.html` oder `test/index.html`.
- Prüfregeln sind aus dem aktuellen Test-Import nachgebildet; dies ist **kein** automatisierter End-to-End-Test der tatsächlichen Importfunktion.

### Prüfstand und offene Punkte

- GitHub-Commit für die neue Testseite erfolgreich; Ausführung im iPhone-Browser noch nicht bestätigt.
- Bitte `https://eitrokin-app.github.io/Eutrokin/test/backup-regression.html` öffnen und „Prüfungen starten“ antippen. Erwartet: 8 von 8 bestanden.
- Danach echte Export-/Import- und Offline-Regressionschecks nur mit künstlichen Testdaten ergänzen.
