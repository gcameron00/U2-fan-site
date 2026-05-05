# U2 Fan Site

A personal fan site dedicated to U2 — the greatest rock band in the world. Built with static HTML, CSS, and vanilla JavaScript. Hosted on Cloudflare Pages.

## What This Site Is

This is a labor of love from a lifelong U2 fan. It's a place to celebrate the music, the concerts, the memories, and the four men from Dublin who changed rock and roll forever. The site covers everything a true U2 fan cares about:

- **Discography** — Deep dives into all 14 studio albums
- **Concerts** — A personal log of every show attended
- **My Story** — How U2 became a soundtrack to a life
- **The Band** — History and profiles of Bono, The Edge, Adam Clayton, and Larry Mullen Jr.
- **Media** — A photo library from concerts and the archive

## Tech Stack

| Layer | Choice |
|-------|--------|
| HTML | Semantic HTML5 |
| CSS | Custom properties, CSS Grid, Flexbox |
| JavaScript | Vanilla JS (no frameworks) |
| Hosting | Cloudflare Pages |
| Fonts | Google Fonts (Oswald + Inter) |

No build tools, no bundlers, no dependencies. Just files.

## Site Structure

```
/
├── index.html              Home / landing page
├── discography/
│   └── index.html          All 14 studio albums
├── concerts/
│   └── index.html          Concerts attended log
├── history/
│   └── index.html          Personal history with U2
├── band/
│   └── index.html          About the band and members
├── media/
│   └── index.html          Photo library
├── about/
│   └── index.html          About this site
├── assets/
│   ├── css/styles.css      Global stylesheet
│   ├── js/main.js          Site JavaScript
│   └── favicon.svg         Site favicon
├── README.md               This file
└── PLAN.md                 Implementation roadmap
```

## Local Development

No build step required. Serve any static file server from the project root:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .

# Caddy
caddy file-server --listen :8080
```

Then open `http://localhost:8080` in your browser.

## Deployment

This site deploys automatically to Cloudflare Pages on push to `main`.

**Manual deploy:**
1. Push changes to the `main` branch
2. Cloudflare Pages picks up the change and deploys within ~30 seconds
3. No build command needed (publish directory: `/`)

## Customizing Content

### Adding Your Own Concerts

Edit `concerts/index.html` — each concert is a `.concert-item` div. Copy an existing one and update the date, venue, city, tour, and your notes.

### Adding Photos to the Media Library

1. Add image files to `assets/images/` (create the folder)
2. In `media/index.html`, replace the `.media-placeholder` divs with `<img>` tags
3. Add `data-lightbox="assets/images/your-photo.jpg"` to enable the lightbox

### Updating Your Story

Edit `history/index.html` — the timeline items are `.timeline-item` divs. Update the years, headings, and narrative text to match your own U2 journey.

### Updating Band Info

Edit `band/index.html` to add awards, tour statistics, or anything notable you want to highlight.

## Credits

- Photography placeholders are for layout only — replace with your own photos
- Concert data is a sample based on major U2 tours — update with your own attended shows
- All band and album information is factual and in the public record
- Not affiliated with U2, Live Nation, or Universal Music Group
