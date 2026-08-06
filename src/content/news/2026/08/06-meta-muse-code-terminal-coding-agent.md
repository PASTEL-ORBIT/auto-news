---
title: "Meta、ターミナル型コーディングエージェント「Muse Code」をベータ公開"
description: "MetaがMuse Spark 1.2モデルを搭載したターミナル向けコーディングエージェント「Muse Code」をmacOS・Linux向けにベータ公開。Claude CodeやCodexと競合する。"
pubDate: 2026-08-06
category: ai
sources:
  - name: "MarkTechPost"
    url: "https://www.marktechpost.com/2026/08/05/meta-superintelligence-labs-releases-muse-code/"
  - name: "The Register"
    url: "https://www.theregister.com/ai-and-ml/2026/08/06/meta-wants-to-get-inside-your-terminal-with-its-new-coding-agent/5283717"
tags:
  - Meta
  - コーディングエージェント
  - Muse Spark
---

Metaは、新モデル「Muse Spark 1.2」を搭載したターミナル型コーディングエージェント「Muse Code」のベータ版をmacOSおよびLinux向けに公開した。インストールはシェルスクリプト経由で行え、Meta Model API経由でもMuse Spark 1.2へのアクセスが可能になっている。

Muse Codeは大規模リポジトリを対象に、変更計画の立案からコード生成、検証までを一貫して行う設計。セッション中は非同期のバックグラウンドエージェントが常駐し、すべてのモデル呼び出しやツール実行、承認、編集を追記専用のイベントログに記録することで、再現性とクラッシュ後の復旧性を担保している。

この投入により、Anthropic「Claude Code」、OpenAI「Codex」、Google「Gemini CLI」に続きMetaもターミナル型エージェント市場に本格参入した形で、開発者向けAIツール競争が一段と激化している。
