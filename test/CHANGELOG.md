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

## 2026-11-14 – Backup-Regressionschecks erweitert

- `test/backup-regression.html` von 8 auf 13 synthetische Prüfungen erweitert (Commit `855f78ff09b164a9f2c1401093d67c2bf9dac5c8`).
- Zusätzliche Negativfälle: fehlendes Profil, fehlende Einstellungen, Objekt statt Liste, `null`-Datensatz und Weitergabe eines simulierten Speicherfehlers.
- Darstellung an Anthrazit/Blau angepasst; keine Produktivdatei verändert.
- Weiterhin nur nachgebildete Importlogik, kein End-to-End-Test der echten App; Browserlaufzeit und iPhone-Test ausstehend.

## 2026-11-15 – Synthetischer Export-Import-Rundlauf

- `test/backup-regression.html` um drei Prüfungen auf insgesamt 16 erweitert (Commit `00476d68de4365a32ba33b8dd9c9e86a9000a736`): JSON-Rundlauf mit Testgewicht und Testmahlzeit, unveränderlicher Export-Snapshot, keine Schreiboperation bei defektem JSON.
- Nur die isolierte, rein synthetische Prüfseite verändert; kein Zugriff auf `localStorage`, produktive Dateien oder Gesundheitsdaten.
- Quelltext und GitHub-Commit geprüft. **Noch offen:** Ausführung der 16 Tests auf dem iPhone sowie echter Datei-Export/-Import und Offline-Test in der Test-App. Diese Tests verwenden weiterhin eine Nachbildung, nicht den echten Import-Code.
- Testlink: https://eitrokin-app.github.io/Eutrokin/test/backup-regression.html?v=20261115-16

## 2026-11-15 – Ernährung anpassen: gezielte Navigation

- `test/index.html`: Button „Ernährung anpassen“ öffnet weiterhin Einstellungen, scrollt nun aber direkt zum Feld `profileDiet` und setzt den Fokus darauf (Commit `821bb94f09dd5aef8555dab9179a5b4990adfb05`).
- Quelltextanker und GitHub-Commit geprüft; iPhone-Laufzeittest steht aus.
- Produktive `index.html` und Nutzerdaten unverändert.

## 2026-11-15 – Ernährung anpassen: Kamera statt Profil

- Nutzerwunsch präzisiert: Button öffnet jetzt über ein iPhone-kompatibles Datei-Eingabefeld (`accept=image/*`, `capture=environment`) die Kamera bzw. den iOS-Auswahldialog; ersetzt vorherigen Profil-Sprung (Commit `640dee7d7f92ea43ff96d9d912fbe162e6aeb307`).
- Aufnahme wird weder hochgeladen noch gespeichert oder analysiert. Nach Auswahl erscheint nur ein Hinweis zur manuellen Beschreibung.
- iOS entscheidet über Kamera-/Auswahldialog und Berechtigungen; eine separate Berechtigungsabfrage wird durch diese Technik nicht garantiert.
- Quelltextänderung auf GitHub gespeichert; tatsächlicher iPhone-Kameratest offen. Produktivversion unverändert.

## 2026-11-15 – Portionsrechner (Test)

- Lokaler Rechner in `test/index.html`: Produktname, optionaler Barcode als Notiz, Roh-/Trocken- oder Gekocht-Basis, kcal/100 g und Grammzahl. Berechnet kcal = kcal/100 g × Gramm / 100 und übernimmt Ergebnis in vorhandenes Mahlzeitenformular (Commit `7ef0cc34b0311df7b956221edb1ffe442c670f4a`).
- Kein Barcode-Kamerascan, keine Produktdatenbankabfrage und keine automatische Nährwerterkennung; Werte werden manuell eingegeben. Speicherung erfolgt erst mit dem vorhandenen Button „Mahlzeit speichern“.
- GitHub-Commit und Quelltext geprüft; iPhone-Funktionstest offen. Nur `test/`, keine Produktionsdaten geändert.
