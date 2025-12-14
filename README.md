# Linh Chàn — Personal Blog (Astro)

A minimal personal blog built with Astro and Tailwind CSS. This repository contains the site source, content (Markdown posts), and small utilities for rendering a clean, responsive blog.

## Introduction

This project is a personal blog template based on Astro. It's optimized for fast page loads by using static rendering where possible and server-side rendering for dynamic routes. Content is authored as Markdown files stored under `src/content/posts` and displayed with a flexible article layout, table of contents, and responsive design.

Key features:

- Markdown-based posts with frontmatter metadata (title, date, tags, description, timeToRead, etc.)
- Table of contents generated from headings
- Responsive layout with accessible typography and Tailwind CSS
- Optional server rendering for dynamic pages

## Tech stack

- Astro — framework for building fast websites
- Tailwind CSS — utility-first styling
- PostCSS + Autoprefixer — CSS processing
- Zod + `astro:content` — content collections and schema validation
- Optional: Vue integration (installed in `astro.config.mjs`)

## Project structure

```
astro-project/
├── astro.config.mjs          # Astro configuration (integrations, Vite plugins)
├── package.json              # npm scripts and dependencies
├── src/
│   ├── content/              # Markdown posts (collection: blog)
│   │   └── posts/
│   ├── components/           # Reusable UI components (Toc, ListPost, etc.)
│   ├── layouts/              # Page layouts (Header, Footer, Layout.astro)
│   ├── pages/                # Route files (index.astro, blog/[slug].astro)
│   └── styles/               # CSS files (global.css, post.css)
├── public/                   # Static assets served at root
└── src/content.config.ts     # Content collection config and schemas
```

## Commands

Run these from the project root (PowerShell on Windows):

```powershell
npm install          # install dependencies
npm run dev          # start local dev server (http://localhost:4321)
npm run build        # build production files
npm run preview      # preview built site
npm run astro -- --help   # get help for Astro CLI
```

## Content authoring

- Place Markdown posts in `src/content/posts/`.
- Use frontmatter YAML at the top of each post with required fields.
- Example frontmatter:

```md
---
id: "post-slug"
title: "My Post Title"
date: "2025-12-14"
tags: ["tag1", "tag2"]
description: "Short summary"
timeToRead: 5
---
```

## Deployment

Build with `npm run build` and deploy the output according to your hosting provider. If using server output (see `astro.config.mjs` with `output: 'server'`), deploy to a Node-compatible host or adapt the output to a static site by switching `output` to `static`.

---

If you want, I can also:

- Add a contributing guide for writing posts
- Add a GitHub Actions workflow for CI + deployment
- Add a script that scaffolds a new post file with frontmatter
