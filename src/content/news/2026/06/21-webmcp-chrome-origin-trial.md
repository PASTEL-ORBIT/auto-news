---
title: "GoogleのAIエージェント向けWeb標準「WebMCP」がChrome 149でオリジントライアル開始"
description: "GoogleがGoogle I/O 2026で発表したWebMCPのオリジントライアルがChrome 149でスタート。WebページをAIエージェントが直接操作できる新しいオープンWeb標準の実証が始まった。"
pubDate: 2026-06-21
category: tech
sources:
  - name: "Chrome for Developers - WebMCP Early Preview"
    url: "https://developer.chrome.com/blog/webmcp-epp"
  - name: "Chrome for Developers - WebMCP"
    url: "https://developer.chrome.com/docs/ai/webmcp"
tags:
  - WebMCP
  - Chrome
  - AIエージェント
  - Web標準
  - Google
---

GoogleはChrome 149においてWebMCPのオリジントライアルを開始した。WebMCPはGoogle I/O 2026で発表されたオープンWeb標準の提案で、WebページがAIエージェントに対して構造化されたツール（JavaScriptの関数やHTMLフォーム）を公開できるようにする仕組みだ。エージェントはこれらのAPIを通じてWebページの機能を高い精度と信頼性で操作できるようになる。

WebMCPは2つの新しいAPIを提案している。HTMLフォームに直接定義できる標準的なアクション向けの「宣言的API（Declarative API）」と、JavaScript実行が必要な複雑・動的なインタラクション向けの「命令的API（Imperative API）」だ。これにより、Webサービス側がエージェント向けの専用インターフェースを提供しやすくなる。

Chrome DevTools for Agents 1.0も同時期にリリースされており、AIコーディングエージェントがコンソールログやネットワークトラフィック、パフォーマンストレースに直接アクセスできるMCPサーバーが付属している。新設されたWebMCPパネルも含まれる。Firefoxは2026年第3四半期での対応を約束しており、Safariは第4四半期の対応が見込まれている。
