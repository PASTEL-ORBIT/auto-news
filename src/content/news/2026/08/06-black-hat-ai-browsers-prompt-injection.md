---
title: "Black Hat 2026、AIブラウザ全種がプロンプトインジェクションに脆弱と報告"
description: "Brave社の研究者がBlack Hat USA 2026で、Atlas・Comet・Opera Neonなど主要AIブラウザすべてがプロンプトインジェクション攻撃に対して脆弱だと報告した。"
pubDate: 2026-08-06
category: tech
sources:
  - name: "Dark Reading"
    url: "https://www.darkreading.com/application-security/no-perfect-fix-ai-browser-prompt-injection-flaws"
tags:
  - セキュリティ
  - AIブラウザ
  - プロンプトインジェクション
---

Black Hat USA 2026において、Brave社のセキュリティエンジニアであるアルテム・チャイキン氏が「Attacking and Defending AI Browsers」と題したセッションを実施し、調査対象とした主要AIブラウザのすべてでプロンプトインジェクション攻撃への脆弱性が確認されたと報告した。

セッションではOperaのAIブラウザ、Perplexity「Comet」、OpenAI「ChatGPT Atlas」に対する実演デモが行われ、悪意あるWebページを経由した間接的なプロンプトインジェクションにより、データ窃取やアカウント乗っ取りにつながり得ることが示された。同種の脆弱性は「Claude in Chrome」や「Gemini in Chrome」、Copilot Edgeなど他のAI統合ブラウザにも及ぶとされる。

エージェントがユーザーの認証済みセッションで自律的にWeb操作を行うAIブラウザの普及が進む一方、業界横断的な根本的解決策は依然として確立されておらず、利用企業・個人には慎重な運用が求められる。
