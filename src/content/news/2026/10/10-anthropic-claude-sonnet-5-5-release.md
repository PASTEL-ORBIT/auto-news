---
title: "Anthropic、「Claude Sonnet 5.5」を公開　Sonnet 5より30%以上高速でタスクコストは最大30%減"
description: "AnthropicがClaude Sonnet 5.5を公開した。出力速度はSonnet 5比で30%以上向上し、1タスクあたりのコストは最大30%低減するとしている。"
pubDate: 2026-10-10
category: ai
sources:
  - name: "Itdaily"
    url: "https://itdaily.com/news/software/claude-sonnet-5-5/"
  - name: "The New Stack"
    url: "https://thenewstack.io/claude-sonnet-55-launch/"
tags:
  - Anthropic
  - Claude
  - LLM
  - AI開発
---

Anthropicは「Claude Sonnet 5.5」を公開した。Opus 5.5に続くモデルで、日常的な業務向けの高速・低コストな選択肢と位置づけられている。

同社によると、出力速度はSonnet 5より30%以上速く、同じ作業に必要なトークン数が減ることでタスク単価は最大30%下がる。トークン単価は据え置きで、入力100万トークンあたり2ドル、出力10ドル、キャッシュ読み取り0.20ドル。コーディング性能の伸びが大きく、報道ではTerminal-Bench 4.0で70.6%とされる。数値は同社発表によるもので、第三者による検証は今後の課題となる。

Claude Platformのほか、AWS、Google Cloud、Microsoft Azureで利用でき、モデルIDは`claude-sonnet-5-5`。思考をオフにしてSonnetを使う開発者は、移行時に新設定`between_tools`への切り替えが必要となる。Haiku 5.5は後日の提供が予定されている。
