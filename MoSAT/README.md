# MoSAT project page

This folder is part of the existing `xsy27.github.io` repository. Its public URL
after deployment is **https://xsy27.github.io/MoSAT/**. Keep the capital letters
in `MoSAT` when linking to it.

## Preview locally

Open `index.html` in this folder in a browser. For a local web server, run:

```powershell
cd F:\xsy27.github.io
python -m http.server 8000
```

Visit **http://localhost:8000/MoSAT/**. Refresh after editing. Stop the server
with `Ctrl+C`. A local preview does not update the published website.

## Editing

- `index.html`: project text, authors, links, and result figures.
- `style.css`: appearance and responsive layout.
- `script.js`: result tabs and the citation copy button.
- `citation.bib`: downloadable citation; keep it in sync with the displayed one.
- `assets/`: paper figures on white SVG canvases; the embedded original figure
  pixels are preserved. To replace a figure, update its path and dimensions in HTML.

Only public resources have buttons. Add Code or Dataset links when you have
their public URLs. A public project video can be inserted after the hero section
using a native `<video controls playsinline preload="metadata">` element.

## Publish

The existing GitHub Pages settings (`main`, repository root) also publish this
folder. No new repository or custom routing is required.

```powershell
cd F:\xsy27.github.io
git add index.html MoSAT
git commit -m "Add MoSAT project page"
git push
```

Wait for the Pages deployment in GitHub's Actions tab to finish, then open
**https://xsy27.github.io/MoSAT/**. The homepage publication card links here.
