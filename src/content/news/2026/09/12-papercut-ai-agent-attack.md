---
title: "露語系ハッカー、数百のAIエージェントでPaperCutの脆弱性を悪用"
description: "ロシア語話者とみられる攻撃者がOpenAI CodexとDeepSeekを組み合わせたAIエージェント群を投入し、印刷管理ソフトPaperCutの脆弱性を突く攻撃で48カ国395組織を侵害した。"
pubDate: 2026-09-12
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/09/papercut-attacker-uses-hundreds-of-ai.html"
tags:
  - サイバーセキュリティ
  - PaperCut
  - AIエージェント
---

セキュリティ企業の調査により、ロシア語話者とみられる攻撃者が8月31日以降、印刷管理ソフトウェア「PaperCut NG/MF」の脆弱性CVE-2026-81578とCVE-2026-82078を突く攻撃キャンペーンを行っていたことが判明した。前者はアクセス制御不備、後者は任意のJavaバイトコード実行を許す深刻な欠陥で、両者の連鎖により認証回避からリモートコード実行までを自動化していた。

攻撃にはOpenAIのCodexとDeepSeekのモデルを組み合わせた数百体のAIエージェントが投入され、コンテンツ制限の少ないDeepSeekが攻撃的なタスクの実行に利用されたとみられる。侵害成立までわずか数時間、最速では26秒で複数組織への侵入に成功した例もあった。

被害は48カ国395組織・440台以上のサーバーに及び、教育機関が約半数を占めた。AIエージェントによる攻撃の自動化・高速化が新たな脅威として浮上している。
