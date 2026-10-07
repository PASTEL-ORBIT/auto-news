---
title: "OpenAI「GPT-6 Astra Ultrafast」がAPIで提供開始、NVIDIA Blackwell上で最大8倍高速と発表"
description: "NVIDIAは、OpenAIの高速推論ティア「GPT-6 Astra Ultrafast」がBlackwell GPU上で動作し、標準モードより最大8倍速くトークンを生成できると発表した。"
pubDate: 2026-10-07
category: ai
sources:
  - name: "NVIDIA Blog"
    url: "https://blogs.nvidia.com/?p=98527"
  - name: "IBTimes UK"
    url: "https://www.ibtimes.co.uk/nvidia-blackwell-openai-gpt6-astra-ultrafast-1823314"
tags:
  - OpenAI
  - NVIDIA
  - GPT-6
  - 推論高速化
---

NVIDIAは、OpenAIの「GPT-6 Astra Ultrafast」がNVIDIA Blackwell GPU上で動作し、OpenAI APIで利用可能になったと発表した。トークン生成速度は標準のAstraモードと比べて最大8倍とされる。

APIではモデルに「gpt-6-astra」、サービスティアに「ultrafast」を指定して利用する。HTTPとWebSocketの両方に対応し、遅延低減の効果を得るにはWebSocketが推奨されている。対象のChatGPT WorkおよびCodexユーザーも利用できる。

8倍という数値はNVIDIAが示す最大値で、すべてのタスクで同等の速度が出ることを保証するものではない。価格、コンテキスト長、ベンチマーク結果は公表されていない。また、Blackwellとの関係はNVIDIA側の説明に基づくもので、OpenAIのドキュメントはGPUの種類に言及していない。

エージェント処理やコード生成など、応答速度が重視される用途で、高速推論ティアの需要が高まっていることがうかがえる。
