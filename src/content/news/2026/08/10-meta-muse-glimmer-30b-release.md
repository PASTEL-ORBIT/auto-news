---
title: "Meta、コンシューマーGPUで動く300億パラメータのオープンモデル「Muse Glimmer」を公開"
description: "MetaがApache 2.0ライセンスで新しいマルチモーダルAIモデル「Muse Glimmer」を発表。単体のコンシューマーGPUで動作するローカルエージェント用途に最適化されている。"
pubDate: 2026-08-10
category: ai
sources:
  - name: "VentureBeat"
    url: "https://venturebeat.com/technology/meta-returns-to-open-source-with-muse-glimmer-an-apache-2-0-licensed-30b-parameter-ai-model-optimized-for-agents-available-now"
  - name: "Hugging Face Blog"
    url: "https://huggingface.co/blog/muse-glimmer"
tags:
  - Meta
  - オープンソースAI
  - マルチモーダル
  - エージェント
---

Metaは8月10日、新しいオープンウェイトAIモデル「Muse Glimmer」を発表した。300億パラメータの密なマルチモーダルモデルで、Apache 2.0ライセンスの下で公開されている。

Muse Glimmerは専用の知覚エンコーダーを備えた因果言語モデルで、上位モデル「Muse Spark」から蒸留された。多段階の推論、ツール利用、マルチモーダル理解、失敗からの復帰を単一モデルに統合し、常時稼働型のローカルエージェント用途に最適化されている。4bit量子化により24GB未満のVRAMに収まり、DFlashによる投機的デコードで最大3.1倍の高速化を実現、単体のコンシューマーGPUやMac上でネットワーク接続なしに動作する。文脈長は131,000トークン超で、100以上の言語をサポートする。

大手テック企業によるオープンウェイトモデルの公開競争が続く中、ローカル環境で完結するエージェント特化モデルの登場は、クラウド依存を減らしたい開発者にとって選択肢を広げるものとなる。

Sources:
- [Meta returns to open source with Muse Glimmer, an Apache 2.0 licensed 30B parameter AI model optimized for agents — available now](https://venturebeat.com/technology/meta-returns-to-open-source-with-muse-glimmer-an-apache-2-0-licensed-30b-parameter-ai-model-optimized-for-agents-available-now)
- [Meta is back with Muse Glimmer: local, agentic, multimodal, and open source](https://huggingface.co/blog/muse-glimmer)
