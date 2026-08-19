# Anthony Kor — Portfolio

Interactive RPG-style portfolio built with [Kaboom.js](https://kaboomjs.com/). Walk around the map, interact with objects, and explore my projects, experience, and skills.

Live site: **https://anthonykor.github.io**

---

## How to edit your profile

Everything recruiter-facing lives in `src/data/`. You never need to touch game code to update your profile.

| File | What it controls |
|------|-----------------|
| `src/data/projects.js` | Projects shown in the in-game computer |
| `src/data/experience.js` | Work experience shown in the in-game computer |
| `src/data/skills.js` | Technical and soft skills with star ratings |
| `src/data/profile.js` | Dialogue for About, Degree, and object interactions (bag, food, music, art) |

Each file has comments explaining the fields.

To update your resume, replace `public/resume/Anthony-Kor-Resume.pdf` with your new PDF (keep the same filename).

---

## How to edit the RPG game

| File | What it controls |
|------|-----------------|
| `src/game/config.js` | Mini-game tuning: gravity, jump height, pipe speed/gap |
| `src/game/scenes.js` | Full game scene logic (start screen, gameplay, game over) |
| `src/main.js` | Main RPG world: player movement, camera, boundary collisions |
| `public/map.json` | Map layout — edit with [Tiled](https://thorbjorn.itch.io/tiled) |
| `public/map.png` | Map tileset image |
| `public/spritesheet-player.png` | Player character sprite |
| `public/spritesheet-map.png` | Map sprite sheet |
| `public/console/` | Mini-game assets (sprites, sound) |
| `public/computer/` | In-game computer UI assets |

---

## Local development

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run deploy
```

This builds the site with Vite and pushes the output to the `gh-pages` branch, which GitHub Pages serves automatically.

---

## Tech stack

- [Kaboom.js](https://kaboomjs.com/) — game engine
- [Vite](https://vitejs.dev/) — build tool
- [NES.css](https://github.com/nostalgic-css/NES.css) — retro UI components
- [system.css](https://github.com/sakofchit/system.css) — OS-style UI components
- Map built with [Tiled](https://thorbjorn.itch.io/tiled)

## Asset credits

- https://kenmi-art.itch.io/cute-fantasy-rpg
- https://emanuelledev.itch.io/farm-rpg
- https://momen-games.itch.io/happy-la-v2-ts
- https://danieldiggle.itch.io/sunnyside
- https://penzilla.itch.io/top-down-retro-interior
- https://datagoblin.itch.io/monogram
