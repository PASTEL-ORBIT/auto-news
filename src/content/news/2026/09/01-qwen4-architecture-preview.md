---
title: "アリババ、Qwen4アーキテクチャを先取りした「Qwen3.8-Flash-Next」を公開"
description: "アリババはオープンソースAIモデル「Qwen3.8-Flash-Next」を公開し、次世代モデル「Qwen4」で採用予定のアーキテクチャを先行して開発者に提供した。"
pubDate: 2026-09-01
category: ai
sources:
  - name: "TechNode"
    url: "https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/"
tags:
  - Alibaba
  - Qwen
  - オープンソースAI
  - MoE
---

アリババのAI研究チーム「Qwen」は、次世代モデル「Qwen4」のアーキテクチャを先取りしたオープンソースモデル「Qwen3.8-Flash-Next」を公開した。総パラメータ数1250億のうち実際の計算に使われるアクティブパラメータは60億にとどまるMixture-of-Experts(専門家混合)構成を採用し、前世代の「Qwen3.7-Plus」(総パラメータ3970億、アクティブ170億)と比べて大幅な効率化を実現したという。

新アーキテクチャでは、トークン単位ではなくマイクロブロック単位で処理するスパースアテンション機構や、層間の情報伝達を制御するゲート付き残差接続などが導入されている。開発チームはコーディングやオフィス業務での性能に優れるとしている。

Qwen4本体の詳細な仕様や性能はまだ公表されていないが、今回の先行公開により開発者コミュニティは次世代モデルへの対応準備を進めやすくなる。
