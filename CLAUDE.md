# BO7 Zombies Field Guide

Static site (plain HTML + vanilla JS, no build step, no dependencies) deployed to GitHub Pages. See README.md for user-facing docs.

## Layout
- `index.html` — markup shell and all CSS. Per-map tint comes from the `--map` CSS variable.
- `js/common.js` — `window.MAPS`, image URL helpers (`PX`, `SK`, `E`, `K`, `MIX`, `RL`, `MGMAP`), `LOCAL()` (URL → `Images/` file name), and `PIN_CATS`.
- `js/maps/<map>.js` — one `MAPS.push({...})` per map holding all guide content. Script order in index.html matters: common → maps → extra-photos → app.
- `wwInfo.steps` (Wonder Weapon tab) are objects: `{t, loc, gate, b:[...], spots:[{h, list:[[label,url,page]]}], ph:[...], q:[main-quest step ids]}`. `spots` render as an always-visible thumbnail grid (every possible location of a part); `ph` and the photos of the `q` steps stay collapsed. Photo URL helpers `CZ`/`CZQ` (codzombiesguides) and `MKP`/`MKQ` (mmmrkennedy) live in common.js.
- `js/maps/extra-photos.js` — extra screenshots keyed by `step:<id>`, `side:<title>`, `relic:<name>`, `toy:<index>`.
- `js/app.js` — all rendering and interaction (tabs, route toggle, map viewer, photo toggles, code tools). Progress is saved in localStorage under the `bo7fg:` prefix. Hash routing: `#<mapId>/<tab>`, `#boss`.

## Images
- `image-list.txt` lists `name<TAB>url<TAB>source page`; file names must match `LOCAL()` in common.js (non-legacy hosts get an FNV-1a hash prefix). If you add image URLs, add matching rows.
- `Images/` is filled by `download_images.*`; missing files fall back to the original URL, so 404s for `Images/...` in the console are expected locally.

## Running
`python -m http.server 8000` from the repo root (also configured as "guide" in `.claude/launch.json`), then open http://localhost:8000.
