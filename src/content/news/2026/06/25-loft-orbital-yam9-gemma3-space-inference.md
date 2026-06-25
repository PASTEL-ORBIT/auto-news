---
title: "Loft OrbitalのYAM-9衛星でGemma 3が軌道上推論を初実現——地球観測のAI処理が宇宙へ"
description: "仏米の宇宙インフラ企業Loft Orbitalの衛星YAM-9上で、Google DeepMindのビジョン言語モデルGemma 3が軌道上での推論に成功した。生データの地上送信なしに自然言語での地球観測クエリが可能となる。"
pubDate: 2026-06-25
category: ai
sources:
  - name: "TechCrunch"
    url: "https://techcrunch.com/2026/06/15/a-satellite-just-learned-to-find-things-on-its-own-heres-what-that-means/"
  - name: "AI Weekly"
    url: "https://aiweekly.co/alerts/loft-orbital-yam-9-satellite-deploys-gemma-3-ai-onboard"
  - name: "AlphaSignal"
    url: "https://alphasignal.ai/news/loft-orbital-s-yam-9-runs-google-deepmind-s-gemma-3-directly-in-space"
tags:
  - AI
  - 宇宙
  - 衛星
  - Gemma
  - Google DeepMind
  - 地球観測
  - 軌道上推論
---

仏米の宇宙インフラ企業Loft Orbitalは、自社の地球観測衛星YAM-9においてGoogle DeepMindのビジョン言語モデル「Gemma 3」の軌道上推論を実現したと発表した。視覚と言語を組み合わせたAIモデルが宇宙空間で稼働した世界初の公開事例として注目されている。

2025年11月に打ち上げられたYAM-9には、NVIDIA Jetson Orin AGX GPUが搭載されており、この上でGemma 3が動作する。実装にはGoogle DeepMindのGemma 3に加え、NASA JPLのNAVI-Orbitalソフトウェアハーネス、エージェントオーケストレーションフレームワークのLangGraphが組み合わさった構成が採用されている。

地上チームは自然言語で問い合わせを送信でき、衛星はリアルタイムで撮影した地球の映像をオンボードで処理・分析して英語の回答を返す。従来の地球観測衛星が生の画像データをそのまま地上へ送信していたのに対し、今回の仕組みでは生ピクセルを送ることなく推論結果のみを転送することが可能となり、通信帯域の節約とリアルタイム性の両立が実現した。

Loft OrbitalのAI責任者は、グローバルなリアルタイムカバレッジには同等能力の衛星が50〜100機必要と推計している。同社はすでに欧州防衛AIのHelsingと多センサー衛星コンステレーション展開に向けた戦略的合意を締結しており、軍・政府向けのリアルタイム状況把握サービスを見据えたハードウェア製造も開始済みだ。地球観測の価値の源泉が、センサーやダウンリンクから「軌道上の推論能力」へと移行しつつある潮流を象徴する実証となった。
