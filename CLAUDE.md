# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint (flat config, eslint.config.mjs)

No test runner is configured yet.

## Architecture

Next.js 16 App Router project with React 19, TypeScript, and Tailwind CSS v4.

- **App Router only** — all routes live under `app/`. No `pages/` directory.
- **Tailwind v4** — uses `@tailwindcss/postcss` plugin (no `tailwind.config`). Theme tokens defined via `@theme inline` in `app/globals.css`.
- **Path alias** — `@/*` maps to the project root (configured in tsconfig.json).
- **Fonts** — Geist and Geist Mono loaded via `next/font/google` in `app/layout.tsx`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.

## Next.js 16 — Read the Docs First

This project runs Next.js 16, which has breaking changes from earlier versions. Before writing or modifying Next.js code, consult the bundled docs at `node_modules/next/dist/docs/` — especially `01-app/` for App Router APIs and conventions.
