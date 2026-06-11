# Auto News

Automated daily news site covering **Tech/AI** and **Indie Games**, powered by [Claude Routines](https://claude.ai) + [Astro](https://astro.build).

**Live site:** https://pastel-orbit.github.io/auto-news/  
**Main site:** https://pastel-orbit.net

## How It Works

1. **Claude Routine** runs every morning (7:00 AM JST), searches the web and RSS feeds for the latest news
2. It generates 3–5 Markdown articles in Japanese and commits them to this repo
3. **GitHub Actions** automatically builds the Astro site and deploys to GitHub Pages

```
Claude Routine (daily) → Markdown commits → GitHub Actions → GitHub Pages
```

## Tech Stack

- **Astro 5** — Static Site Generator
- **Claude Routines** — Automated content generation (scheduled via claude.ai)
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — Hosting

## Project Structure

```
├── src/
│   ├── content/news/YYYY/MM/   # News articles (auto-generated)
│   ├── content.config.ts       # Content collection schema
│   ├── components/             # Astro components
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Routes
│   └── data/feeds.json         # RSS feed sources
├── Note/                       # note.com article output
├── public/                     # Static assets
├── astro.config.mjs
├── ROUTINE_PROMPT.md           # Claude Routine prompt template
└── CLAUDE.md                   # Developer documentation
```

## Categories

| Category | Description |
|----------|-------------|
| `tech` | Software development, web technologies, programming |
| `ai` | Machine learning, LLMs, AI products & services |
| `indie-game` | Indie game development, releases, tools |
| `general` | General tech news |

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview build output
```

## "Note を書く" Button

Each article page has a "Note を書く" button that copies a Claude Code command to your clipboard. Paste it into Claude Code (from any project) to generate a [note.com](https://note.com)-formatted article from the news content.

## License

Content is auto-generated for personal use. Source code is public.

---

Built by [PASTEL ORBIT](https://pastel-orbit.net)
