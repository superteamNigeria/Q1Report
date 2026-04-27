# Superteam Nigeria — Homepage

React + Vite port of the Q1 Impact Report design, extended into a full marketing homepage.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/SuperteamNigeriaHomepage.jsx` — the full homepage as a single default-exported component. All styling is scoped via a `.sn-root` wrapper and injected `<style>` block, so dropping the component into any React app works without configuring Tailwind or a CSS pipeline.
- `src/main.jsx` — React 18 entry point.
- `index.html` — Vite entry.

## Design notes

The layout keeps the original cover's split composition (dark left / geometric green right) in the hero, then extends the same palette and module grid across impact stats, three pillars, community, and a closing CTA. The Q1 tile, halftone dot texture, and Nigerian-flag logo detail are carried through as signature elements.
