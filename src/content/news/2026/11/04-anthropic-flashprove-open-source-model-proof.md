---
title: "Anthropic、応答を生成したモデルを重み非公開で証明する研究成果「FlashProve」をオープンソース公開"
description: "AnthropicはGitHubで、どのモデルが応答を生成したかを重みを開示せずに証明できる研究用コード「FlashProve」を公開した。検証は一般的なCPUで数秒で行える。"
pubDate: 2026-11-04
category: ai
sources:
  - name: "GitHub: anthropics/FlashProve"
    url: "https://raw.githubusercontent.com/anthropics/FlashProve/main/README.md"
tags:
  - Anthropic
  - FlashProve
  - オープンソース
  - モデル検証
---

AnthropicはGitHubで「FlashProve」を公開した。提供者がモデルの重みを明かさずに、特定のモデルが応答を生成したことを証明できる仕組みの研究成果である。

READMEによると、検証は付属ツール「cp_verify」を使い、一般的なCPU上で数秒、メモリ2GB未満で実行できる。検証にはLinux、bash、g++ 13以上が必要となる。主な対象モデルはLlama 4 Maverickで、1,024トークンのコンテキストを単一のNVIDIA H100で証明する構成が示されている。ただし証明側のフル構成には大容量のGPU環境と約280GBのメモリを要する。同梱の例は合成の重みを用いた動作確認用である。

リポジトリは研究用の成果物で、メンテナンスや外部からの貢献は受け付けていない。ライセンスはApache 2.0。提供者が配信するモデルの同一性を第三者が確認する手段として位置づけられる。
