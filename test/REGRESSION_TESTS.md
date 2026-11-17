# EUTRO∞KIN – Regressionstestplan (isolierte Testversion)

Stand: 2026-11-16. Gilt ausschließlich für `test/`; keine echten Gesundheitsdaten verwenden. Dies ist eine **Prüfanleitung**, kein Nachweis bestandener iPhone-Tests.

## Vorbedingungen

- Testseite im Safari-Privatmodus oder mit ausdrücklich fiktiven Testdaten öffnen.
- Produktivseite nicht öffnen oder verändern. Keine realen Fotos, Kalenderlinks, medizinischen Angaben oder persönlichen Daten eingeben.
- Auf dem iPhone sowohl Safari als auch gegebenenfalls den Homescreen-Modus getrennt testen.

## Manuelle Prüffälle

| ID | Test | Erwartung |
| --- | --- | --- |
| R01 | Testseite öffnen und zwischen allen unteren Tabs wechseln | Kein abgeschnittener Header, keine leeren Bereiche oder horizontales Scrollen |
| R02 | Textfeld fokussieren und Tastatur schließen | Kein unerwarteter Zoom; Eingaben bleiben erreichbar |
| R03 | Fotoaufnahme abbrechen | Keine falsche Mahlzeit gespeichert, verständlicher Status |
| R04 | Fiktives Essensfoto auswählen, unbekanntes Gericht | Keine erfundene sichere Erkennung oder Kalorienangabe |
| R05 | Eigenes **fiktives** Referenzgericht lokal anlernen und erneut vergleichen | Erkennungsgrenzen klar angezeigt, kein automatisches Hochladen |
| R06 | Mahlzeit ohne gesicherte Kalorien speichern | Keine erfundene kcal-Zahl |
| R07 | Barcode-Scan abbrechen und Kamera schließen | Kamera stoppt, Oberfläche bleibt bedienbar |
| R08 | Offline neu laden | Verhalten dokumentieren; Offlinefähigkeit nicht voraussetzen |
| R09 | Seite aktualisieren | Fiktive Testeinträge bleiben erhalten, soweit Speicherung erfolgreich war |
| R10 | Produktivseite separat öffnen | Produktive Einträge unverändert; Testdaten nicht sichtbar |
| R11 | Yoga-Timer starten, pausieren, fortsetzen und stoppen | Status und Zeit bleiben konsistent |
| R12 | Theme wechseln, Tabs und Eingabefelder prüfen | Texte und Schaltflächen lesbar |

## Prüfdokumentation

Pro Prüffall festhalten: Datum, Gerät/iOS, Safari oder Homescreen, Ergebnis (bestanden/fehlgeschlagen/nicht getestet), reproduzierbare Schritte, optional Screenshot **ohne personenbezogene Daten**.

## Datenschutz und Release-Grenzen

- Die Testseite und Produktivseite liegen auf derselben Origin. Getrennte lokale Speicherschlüssel reduzieren Verwechslungen, sind aber **keine vollständige Sicherheitsisolation**.
- Externe Bibliotheken und Produktdatenabfragen können Netzwerkverbindungen auslösen; nicht als vollständig offline oder vollständig lokal bezeichnen.
- Kein automatisches Deployment nach Produktion. Eine Übernahme in die produktive `index.html` erfordert ausdrückliche Freigabe.
- Vor Änderungen am Datenschema zuerst Backup/Export und Wiederherstellung prüfen.

## Status

2026-11-16: Testfälle und erwartete Ergebnisse dokumentiert. **Keine iPhone-Ausführung oder erfolgreiche Regression behauptet.**

## 17. November 2026 – Schutz vor überholten Fotoergebnissen

Test-Commit `8785bd09d22166707fdbfc04a9782f9f0ac93687`: Beim Auswählen eines neuen Fotos wird die alte Vorschau ausgeblendet und der bisherige Foto-Vektor verworfen. Wenn eine ältere Bilddekodierung erst nach einer neueren abgeschlossen wird, wird ihr Ergebnis ignoriert. Dadurch soll keine alte Mahlzeit versehentlich unter einem neuen Foto übernommen werden. Die produktive App wurde nicht verändert.

**Zusatztest R13 (noch nicht auf iPhone geprüft):** Zwei unterschiedliche Fotos zügig nacheinander auswählen; nur das zuletzt gewählte Foto darf als Vorschau und Übernahmegrundlage erscheinen. Anschließend den Mahlzeiten- und Barcode-Ablauf wie bisher prüfen.

## 17. November 2026 – iPhone-Barcodeerkennung

Nutzer meldet: Kameravorschau läuft, aber Barcodes werden nicht erkannt. Test-Commit `4726290026282d78a280c1f59889f388477910aa` fordert über ZXing `decodeFromConstraints` explizit die rückseitige Kamera (`facingMode: environment`) und bevorzugt 1280×720 Videoauflösung an. Die Geräte können diese Idealwerte abweichend erfüllen. Ein Hinweis zu Abstand und Schärfe erscheint. **Ursache nicht bewiesen; iPhone-Abnahme ausstehend.** Kein Eingriff in Produktion.

**R14:** Nach erneutem Öffnen des Scanners Rückkamera und Schärfe prüfen; EAN-13 eines unkritischen Testprodukts scannen, Barcodefeld und anschließende Open-Food-Facts-Abfrage prüfen. Bei Fehlschlag Screenshot der Statuszeile und Angabe Safari vs. Homescreen erfassen. Auch Abbrechen und Wiederöffnen prüfen.

## 17. November 2026 – optionaler Rotationsscan

Nutzer bestätigt: EAN-Barcode wird mit waagerechten Ziffern erkannt; Produktdaten und Kalorien werden geladen. Mit senkrechten Ziffern keine Erkennung. Test-Commit `55c07ce04b166ebef289d1c1c6773abe0165f6ff` ergänzt **optional** eine zweite lokale Auswertung: Wenn der Browser `BarcodeDetector` mit EAN/UPC unterstützt, wird das Kamerabild periodisch um 90° gedreht auf einem Canvas geprüft. ZXing bleibt unverändert als Hauptscanner; der zusätzliche Timer wird beim Schließen beendet. Keine Bildübertragung durch diesen Zusatz. **Nicht auf dem iPhone getestet; iOS-Safari-Unterstützung von BarcodeDetector ist nicht garantiert.**

**R15:** EAN mit waagerechten und senkrechten Ziffern scannen; Produktdaten kontrollieren; Scanner schließen und erneut öffnen; bei ausbleibender Rotationsfunktion Browser/Version notieren. Nur fiktive Testdaten.

## 17. November 2026 – Rotationsscan mit ZXing (Experiment)

Nach Nutzerprüfung funktioniert die native Rotationslösung auf dem iPhone nicht. Commit `6cab8818d98b1e179a8d0604d4b8a08b5a9384e2` ersetzt deren Aufruf durch einen optionalen ZXing-Canvas-Decoder: jeweils um +90° und −90° gedrehte Videoframes werden zusätzlich geprüft, falls `decodeFromCanvas` in der geladenen ZXing-Version vorhanden ist. Andernfalls erscheint ein Hinweis und der bewährte Hauptscanner läuft weiter. **Die Verfügbarkeit und tatsächliche Funktion von `decodeFromCanvas` auf dem iPhone sind noch nicht bestätigt.** R16: Waagerechte und senkrechte EAN-Ziffern, Datenabruf und Schließen/erneutes Öffnen prüfen. Keine Produktionsänderung.

## 17. November 2026 – R17 ZXing-Bilddekodierung

Nutzer bestätigt, dass die vorherige `decodeFromCanvas`-Variante auf dem iPhone als nicht verfügbar gemeldet wird. Test-Commit `8f952413ce7a943acaec9606cac7b4748bfa2089` verwendet stattdessen versuchsweise `decodeFromImageElement` mit einem lokal erzeugten, um ±90° gedrehten Canvas-Bild. Die Hauptkameraerkennung bleibt bestehen; Bilder werden durch diese Funktion nicht an einen Server geschickt. **iPhone-Kompatibilität und Erfolg sind ungetestet.** R17: Senkrechte Ziffern prüfen, danach waagerechte; bei Fehler Statusmeldung und Browsermodus notieren. Produktion unverändert.

## 18. November 2026 – R18 Foto-KI: Mehrfachstart verhindern

Nach Codeprüfung wurde festgestellt, dass `analyzeFoodWithAI()` zwar einen Lade-/Deaktivierungszustand für `foodAIButton` besitzt, der Button im HTML aber keine entsprechende ID hatte. Test-Commit `d12ccb238a1de5d6a1b14567f8be3cb2f10aade0` ergänzt die ID und vereinfacht den Startaufruf. Während der laufenden Analyse wird die Schaltfläche nun über den vorhandenen Funktionscode deaktiviert und anschließend wieder freigegeben. Das bestehende `foodAIAnalyzing`-Flag bleibt als zweite Sperre erhalten. **Statisch geprüft:** genau eine passende Button-ID im HTML, Commit durch erneutes Lesen bestätigt. **Nicht auf iPhone getestet.**

**R18 (bei nächstem Foto-KI-Test):** Ein Foto auswählen, KI starten, prüfen, dass der Button während des Ladevorgangs deaktiviert und anschließend wieder bedienbar wird. Bei einem fehlgeschlagenen Modell-Download muss eine verständliche Fehlermeldung erscheinen. Keine automatischen Kalorienwerte übernehmen; keine privaten Fotos verwenden. Produktive `index.html` unverändert.
