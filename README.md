# Sito — Luca Salemme, Consulenza Legacy IBM

Sito statico (HTML/CSS/JS puro, nessuna build necessaria) pronto per essere
pubblicato su qualsiasi CDN o hosting statico: Cloudflare Pages, Netlify,
Vercel, GitHub Pages, S3+CloudFront, ecc.

## Struttura

```
index.html        Home
servizi.html       Dettaglio servizi (COBOL, CICS, DB2, VSAM)
chi-sono.html      Bio professionale
contatti.html      Contatti + QR code Signal
css/style.css      Foglio di stile unico
js/main.js         Menu mobile + generazione QR code Signal
sitemap.xml        Mappa del sito per i motori di ricerca
robots.txt         Direttive per i crawler
```

## Cose da personalizzare prima della pubblicazione

1. **Contatto Signal** — file `js/main.js`, variabile `SIGNAL_CONTACT`:
   sostituisci `https://signal.me/#p/+39XXXXXXXXXX` con il tuo link reale
   (basato su numero o su username Signal). Il QR code nella pagina
   Contatti si aggiorna automaticamente, nessun'altra modifica necessaria.

2. **Dominio** — sostituisci `tuodominio.it` con il dominio reale in:
   - il tag `<link rel="canonical">` di ogni pagina
   - i tag `og:url` di ogni pagina
   - `sitemap.xml` e `robots.txt`

3. **Email di contatto** — in `contatti.html`, sostituisci
   `info@tuodominio.it` con l'indirizzo reale.

4. **Bio in "Chi sono"** — in `chi-sono.html` sono presenti due paragrafi
   segnaposto tra parentesi quadre `[...]`: vanno sostituiti con il
   percorso professionale reale (anni di esperienza, settori seguiti,
   eventuali certificazioni).

## Note SEO / performance

- Ogni pagina ha title, meta description e parole chiave dedicate
  (COBOL, CICS, DB2, VSAM, mainframe IBM, legacy, z/OS).
- Markup strutturato JSON-LD (`ProfessionalService`, `Service`, `Person`)
  per una migliore comprensione da parte dei motori di ricerca.
- Font IBM Plex caricati da Google Fonts con `preconnect` e `font-display: swap`.
- Nessun framework JS: peso minimo, ottimo per la distribuzione via CDN.
- Il QR code Signal è generato via libreria client-side (cdnjs), non è
  un'immagine statica: aggiornare il contatto richiede una sola riga di
  codice, non un nuovo file immagine.

## Deploy rapido

Qualsiasi hosting statico va bene. Ad esempio, con Cloudflare Pages o
Netlify è sufficiente trascinare l'intera cartella nel pannello di
deploy, oppure collegare un repository Git contenente questi file.
