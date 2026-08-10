---
title: "Google、Gemini搭載のAIパイプラインでChromeの脆弱性1,072件を修正"
description: "GoogleはChrome 149・150の2リリースで、AIを活用したセキュリティパイプラインにより過去23リリース分を上回る1,072件の脆弱性を修正したと発表した。"
pubDate: 2026-08-10
category: tech
sources:
  - name: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/google/google-says-ai-helped-chrome-fix-1-072-security-bugs-in-two-releases/"
  - name: "Google公式ブログ"
    url: "https://blog.google/security/chrome-stronger-with-every-update/"
tags:
  - Google
  - Chrome
  - セキュリティ
  - Gemini
---

Google Chromeセキュリティチームは、Geminiを活用したAIパイプラインにより、6月にリリースされたChrome 149・150の2バージョンで1,072件の脆弱性を修正したと発表した。これは直前23回分の安定版リリースで修正された件数の合計を上回る規模だという。

このパイプラインは2026年初頭に構築されたもので、Chromiumコードベース全体を効率的にスキャンし誤検知を抑えるエージェントを活用する。オープンウェイトモデルと独自モデルを組み合わせて複数回のパスを実行し、Chromeの全Git履歴と過去に発見された脆弱性のナレッジベースを参照する仕組みになっている。発見された事例の中には、圧縮されたレンダラープロセスがブラウザを騙してローカルファイルを読み取らせるサンドボックス脱出の脆弱性があり、13年以上コード内に存在していたという。

急増するバグ報告に対応するため、GoogleはAIエージェントが問題を自動的にトリアージし、修正コード案を作成し、レビュアー役を担い、クロスプラットフォームのテストを書くマルチエージェント体制を導入した。Googleはこの自動化により、開発者の作業時間を月あたり数百時間削減できていると見積もっている。AIによる脆弱性の発見と修正の高速化は、ブラウザセキュリティ全体の運用モデルを変えつつある。

Sources:
- [Google says AI helped Chrome fix 1,072 security bugs in two releases](https://www.bleepingcomputer.com/news/google/google-says-ai-helped-chrome-fix-1-072-security-bugs-in-two-releases/)
- [Stronger with every update: How we're making Chrome and the web safer in the AI Era](https://blog.google/security/chrome-stronger-with-every-update/)
