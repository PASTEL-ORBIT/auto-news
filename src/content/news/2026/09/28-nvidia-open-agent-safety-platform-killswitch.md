---
title: "NVIDIA、AIエージェントを停止する「キルスイッチ」Open Agent Safety Platformを発表"
description: "NVIDIAはオープンソースのランタイム「OpenShell」とBlueField-4上で動作するハードウェア監視機構「Sentry」を組み合わせ、暴走したAIエージェントを数ミリ秒で隔離できるプラットフォームを発表した。"
pubDate: 2026-09-28
category: ai
sources:
  - name: "Bloomberg"
    url: "https://www.bloomberg.com/news/articles/2026-09-28/nvidia-debuts-system-designed-to-stop-ai-agents-from-going-awry"
  - name: "Decrypt"
    url: "https://decrypt.co/379468/nvidia-kill-switch-ai-agents"
tags:
  - NVIDIA
  - AIエージェント
  - AIセーフティ
  - BlueField-4
---

NVIDIAは9月28日、AIエージェントの動作を監視・制御する「Open Agent Safety Platform」を発表した。

同プラットフォームは、エージェントをサンドボックスで包み、アクセス可能なファイル・ネットワーク・ツールを強制的なルールとして適用するオープンソースのランタイム「OpenShell」と、データ処理ユニット(DPU)であるBlueField-4上で動作するハードウェア監視機構「Sentry」で構成される。Sentryはエージェントが動くソフトウェアとは別のチップ上にあるため、エージェント側から到達・無効化されることなく、挙動を監視して数ミリ秒で遮断できるという。NVIDIAは社内テストで、エージェントが認証情報を探し出したり、取り消しの難しい外部リクエストを発行したりする事例が確認されたことを開発の背景としている。

Anthropic、Microsoft、JPMorgan Chase、Palantir、Ciscoなど100社超がローンチパートナーとして参加した。エージェントの自律化が進む中、ソフトウェア層に依存しないハードウェアレベルの安全機構が業界標準となるかが注目される。
