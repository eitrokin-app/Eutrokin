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

## 2026-11-15 – Barcode-Produktabfrage (Test)

- In `test/index.html` lässt sich eine Barcode-Nummer (8–14 Ziffern) nach ausdrücklichem Tippen auf „Produktdaten abrufen“ über die öffentliche Open-Food-Facts-API abfragen. Name und kcal/100 g werden bei vorhandenen Daten in den lokalen Portionsrechner übernommen (Commits `fba4b1b04b02596b3d94fa9b8c2fb0a9f1ee6055`, `53f321ce52c8c1dce324e097f14e53a68528bce9`).
- Bei fehlenden Daten, nicht gefundenem Produkt oder Netzwerkfehler bleibt manuelle Eingabe möglich. Keine automatische Speicherung und keine Übertragung von Gesundheitsdaten; die eingegebene Barcode-Nummer wird bei Abfrage an Open Food Facts übertragen.
- Ein Kamerascan von Barcodes ist **noch nicht** umgesetzt. iPhone-/Netzwerktest und API-Verfügbarkeit stehen aus. Keine Änderung an Produktion oder produktiven Nutzerdaten.

## 2026-11-15 – Barcode-Kamerascan (Test)

- Schaltfläche „Barcode mit Kamera scannen“ in `test/index.html`: startet Kamera nach Nutzeraktion und versucht EAN/UPC/ITF-Barcodes über die native Browser-API `BarcodeDetector` zu erkennen; erkannte Nummer wird ins Barcode-Feld übernommen. Online-Abfrage bleibt separate ausdrückliche Aktion.
- Fallback auf manuelle Barcode-Eingabe bei fehlender API, verweigerter Berechtigung oder Kamerafehler. Kamerastream wird beim Schließen und beim Wechsel aus Ernährung beendet (Commits `a3ec0d04e8d9bfe48e96c9d694b4108c18bebd21`, siehe Folgecommit).
- **Offen:** `BarcodeDetector` ist nicht in jedem iPhone-/Safari-Kontext verfügbar; realer iPhone-Test noch ausstehend. Keine externe Scanner-Bibliothek und keine Bildübertragung. Produktivversion unverändert.

## 2026-11-15 – ZXing-Scanner als Alternative (Test)

- Native BarcodeDetector-Erkennung in `test/index.html` durch ZXing BrowserMultiFormatReader ersetzt (Commit `a0f9de3f6c519d05c5104e8ae3202965dad068f7`). Kamera wird erst nach Nutzeraktion geöffnet; ZXing wird bei Bedarf über jsDelivr CDN geladen. Der externe CDN-Aufruf übermittelt technische Verbindungsdaten, aber keine Kamerabilder. Barcode wird lokal erkannt und nur nach separatem Klick bei Open Food Facts abgefragt.
- Stoppt Scan beim Schließen/Tabwechsel; manuelle Eingabe bleibt möglich. Keine zusätzlichen Gebühren, aber Scanner benötigt Internet zum Nachladen der Bibliothek.
- **Offen:** CDN-Datei und reale Erkennung auf Safari/iPhone noch nicht verifiziert; bei Ladefehler erscheint eine Meldung. Produktivversion und Nutzerdaten unverändert.
