# Auto News Site

テック・AI・インディーゲームのニュースを毎日自動収集・要約するAstro製静的サイト。  
Claude Routinesが毎朝記事を生成し、GitHub Actionsでビルド・デプロイする。

## プロジェクト構造

```
auto-news/
├── src/
│   ├── content/
│   │   └── news/          # 記事Markdownファイル（Claude Routineが生成）
│   │       └── YYYY/MM/   # 年月ディレクトリで整理
│   ├── content.config.ts  # コンテンツコレクション定義
│   ├── components/        # Astroコンポーネント
│   ├── layouts/           # ページレイアウト
│   ├── pages/             # ルーティング
│   └── data/
│       └── feeds.json     # RSSフィードリスト（Routineが参照）
├── public/                # 静的ファイル
├── astro.config.mjs       # Astro設定
├── package.json
└── ROUTINE_PROMPT.md      # Claude Routine用プロンプトテンプレート
```

## 技術スタック

- **Astro 5** — Static Site Generator
- **TypeScript** — 型安全なコンテンツスキーマ
- **GitHub Pages** — ホスティング
- **Claude Routines** — 毎日の記事自動生成

## 開発コマンド

```bash
# 初回セットアップ
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルド結果プレビュー
npm run preview
```

## コンテンツスキーマ

記事のfrontmatterは以下の形式：

```yaml
---
title: "記事タイトル"
description: "1-2文の要約"
pubDate: YYYY-MM-DD
category: tech | ai | indie-game | general
sources:
  - name: "ソース名"
    url: "https://..."
tags:
  - タグ1
  - タグ2
---
```

## ファイル命名規則

```
src/content/news/YYYY/MM/DD-slug-in-english.md
```

- `YYYY/MM/` — 年月ディレクトリ
- `DD-` — 日付プレフィックス
- `slug-in-english` — 英語のケバブケースslug

## カテゴリ

| カテゴリ | 説明 |
|---------|------|
| `tech` | ソフトウェア開発、Web技術、プログラミング言語 |
| `ai` | 機械学習、LLM、AI製品・サービス |
| `indie-game` | インディーゲーム開発、リリース、開発ツール |
| `general` | 上記に当てはまらない総合ニュース |

## デプロイ

- mainブランチへのpushで自動ビルド・デプロイ
- ワークフロー: `.github/workflows/deploy.yml`
- URL: `https://pastel-orbit.github.io/auto-news/`
- 独立したGitHub Pagesサイトとして配信

## リポジトリ運用方針
- branch作成不要。常にmainブランチが対象
- PR作成不要
- 即時push
- このルーティンが実行された場合、既に同日の記事がある場合でも更に追加。但し同じネタは使わない

## Claude Routine連携

- Routine設定はclaude.aiのWeb UIで管理
- プロンプトテンプレートは `ROUTINE_PROMPT.md` を参照
- RSSフィードリストは `src/data/feeds.json` で管理
- Routineは記事MDファイルを生成してGitHubにコミット
