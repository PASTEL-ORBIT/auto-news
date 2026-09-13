---
title: "OpenAI、クラウドAIエージェントを構築する「Agents API」をパブリックベータ公開"
description: "OpenAIがChatGPT WorkのインフラをベースにしたAgents APIをパブリックベータとして公開。長時間セッションの管理やサブエージェント連携をOpenAI側で肩代わりする。"
pubDate: 2026-09-13
category: tech
sources:
  - name: "OpenAI"
    url: "https://openai.com/index/introducing-the-agents-api/"
tags:
  - OpenAI
  - AIエージェント
  - API
---

OpenAIは、Codexハーネスを用いたクラウドAIエージェントをフルマネージドで構築・実行できる「Agents API」をパブリックベータとして公開した。これはChatGPT Workを支えてきたスケールドエージェント基盤を、外部開発者向けAPIとして開放するものである。

同APIはセッションのオーケストレーション、長時間タスクにわたるコンテキストの圧縮、サブエージェント間の連携、ツールの遅延ロード、クラッシュ時の復旧処理などをOpenAI側で肩代わりする。サンドボックス実行環境はOpenAI自身のほか、顧客自身のインフラやVercel・DigitalOceanなどのパートナー環境からも選択可能で、追加料金はモデルのトークン費用やツール利用料、サンドボックス利用料のみとしている。

エージェント起動までの準備時間は1分未満に短縮されており、これまで開発者が自前で構築する必要があった長時間稼働エージェントの基盤整備コストを大幅に下げるものとして注目されている。
