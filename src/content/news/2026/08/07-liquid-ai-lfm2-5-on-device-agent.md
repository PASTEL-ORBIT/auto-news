---
title: "Liquid AI、スマホでも動くオンデバイスAIエージェントモデル「LFM2.5-2.6B」を公開"
description: "Liquid AIは26億パラメータのエージェント特化モデルLFM2.5-2.6Bを発表。クラウド接続なしで計画立案やツール呼び出しをこなし、スマートフォンやRaspberry Piでも動作する。"
pubDate: 2026-08-07
category: ai
sources:
  - name: "VentureBeat"
    url: "https://venturebeat.com/technology/no-cloud-no-gpus-no-problem-liquid-ais-new-model-lfm2-5-2-6b-brings-powerful-ai-agents-to-devices-as-small-as-a-raspberry-pi"
  - name: "Liquid AI Blog"
    url: "https://www.liquid.ai/blog/lfm2-5-2-6b"
tags:
  - Liquid AI
  - オンデバイスAI
  - AIエージェント
  - オープンウェイト
---

Liquid AIは8月4日、クラウドを介さず端末上で完結して動作するエージェント特化モデル「LFM2.5-2.6B」を発表した。約34兆トークンで事前学習された26億パラメータのモデルで、13万トークンの長文コンテキストとツール呼び出し機能を備え、計画立案から複数ステップのタスク実行までを端末単体でこなす。

ベースモデルと事後学習済みチェックポイントの両方をHugging Face上でオープンウェイトとして公開し、llama.cpp・MLX・vLLM・SGLang・ONNXなど主要な推論スタックに初日から対応する。Apple M5 Max上で毎秒約220トークン、スマートフォン上でも毎秒約30トークンの生成速度を実現し、メモリ使用量は2.5GB未満に抑えられている。同クラスの命令追従・ツール利用ベンチマークで上位の成績を示したという。

データが端末外に出ないためプライバシー面での利点があり、オフラインの文書処理や請求書抽出、ロボットの音声コマンド解釈など、通信環境に依存しない用途への応用が見込まれる。
