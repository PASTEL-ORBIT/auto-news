---
title: "「BragJack」攻撃、悪意ある拡張機能で5大ブラウザのAIアシスタントを乗っ取り可能に"
description: "セキュリティ研究者が、悪意あるブラウザ拡張機能1つでChromeやEdgeなど5つのブラウザに組み込まれたAIアシスタントを乗っ取れる攻撃手法「BragJack」を報告した。"
pubDate: 2026-09-20
category: tech
sources:
  - name: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/security/bragjack-attacks-hijack-ai-browser-agents-through-malicious-extensions/"
tags:
  - セキュリティ
  - ブラウザ拡張機能
  - AIエージェント
  - 脆弱性
---

セキュリティ研究者のGal Weizman氏(Forever Security)は、悪意あるブラウザ拡張機能1つで、Chrome、Edge、Opera、Perplexity Cometなど5つのブラウザ内蔵AIアシスタントを乗っ取れる攻撃手法「BragJack」を公表した。

攻撃には、広告ブロッカーなどでも使われるdeclarativeNetRequest APIが悪用される。通信を書き換えて未信頼のコードをAIの特権的な実行環境に侵入させる「Prompt Forcing」により、実証実験ではローカルファイルの読み取りやメール要約の外部送信などが可能だった。攻撃には拡張機能の事前インストールが前提となる。

この研究で5社から合計2万ドル超のバグ報奨金とCVE2件が発行された。ブラウザ統合型AIエージェントの権限管理の重要性を改めて示す事例となった。
