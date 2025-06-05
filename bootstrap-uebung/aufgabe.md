## Schritte zur Umsetzung des Designs mit Bootstrap

**1. Bootstrap einbinden**
- Stelle sicher, dass das Bootstrap-CSS im `<head>`-Element eingebunden ist (CDN-Link).

**2. Navigation umsetzen**
- Baue die Navigation mit der Bootstrap-Komponente `navbar` auf.
- Verwende `navbar-dark` und `bg-dark` für den dunklen Hintergrund.
- Mache die Navigation responsiv mit `navbar-expand-md`.
- Setze die Navigationslinks mit `nav-item` und `nav-link` um.
- Füge das Suchformular mit `form-control` und `btn btn-outline-light` ein.
- Platziere die Navigation mit einem Container und sorge für die richtige Ausrichtung der Elemente.

**3. Hero-Bereich gestalten**
- Erstelle einen Container für den Hero-Bereich.
- Runde die Ecken mit `rounded-3`.
- Lege einen weißen, halbtransparenten Hintergrund für den Textbereich über das Bild (z.B. mit `bg-light` und Utilities für Padding).
- Setze die Überschrift mit `display-4` und `fw-bold`.
- Gestalte den Button mit `btn btn-primary`.
- Achte auf die Abstände (`p-5`, `mb-4`, etc.).

**4. Angebotsbereich (Produktkarten)**
- Erstelle einen Container mit Überschrift.
- Nutze das Bootstrap-Grid-System (`row`, `col-md-3`) für die Produktkarten.
- Baue jede Produktkarte mit der Bootstrap-Komponente `card` auf:
  - Produktbild mit `card-img-top`
  - Titel und Text mit `card-title` und `card-text`
  - Preis: aktueller Preis fett, alter Preis mit `text-decoration-line-through` und `text-muted`
  - Button mit `btn btn-primary`

**5. Footer gestalten**
- Erstelle einen Footer mit einem Container.
- Verwende das Grid-System (`row`, `col-md`) für die vier Spalten.
- Überschriften mit `h5`, Listen mit `list-unstyled text-small`.
- Setze die Links mit `link-secondary`.
- Füge Copyright-Text mit `text-muted` hinzu.

**6. Feinschliff**
- Kontrolliere alle Abstände (`mb-4`, `py-5`, `my-4`, etc.).
- Prüfe die Responsivität der Seite.
- Vergleiche dein Ergebnis mit dem Screenshot und passe Details an (z.B. Textgrößen, Farben, Abstände).
