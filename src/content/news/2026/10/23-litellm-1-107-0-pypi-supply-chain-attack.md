---
title: "LLMゲートウェイ「LiteLLM」のPyPIパッケージに悪意あるバージョン、認証情報窃取機能を含む"
description: "LiteLLMのバージョン1.107.0が侵害され、ブラウザ・クラウド・AI関連の認証情報を狙うマルウェアが含まれていた。最後の安全なバージョンは1.106.2とされる。"
pubDate: 2026-10-23
category: ai
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/10/litellm-compromised-in-supply-chain.html"
  - name: "Wiz"
    url: "https://www.wiz.io/blog/litellm-compromised-steals-credentials"
tags:
  - AI
  - LiteLLM
  - サプライチェーン攻撃
  - セキュリティ
---

複数のLLM APIを統一的に扱えるオープンソースツール「LiteLLM」で、10月21日にバージョン1.107.0がPyPIとDockerイメージに公開され、悪意あるコードが含まれていることが判明した。SafeDep、Socket、StepSecurity、Upwindが報告した。

このバージョンには、ブラウザ、クラウド、AI関連の認証情報を盗むスティーラーと、休眠状態のC2機能が含まれていた。PyPIでは同日1時20分（UTC）時点で隔離されている。Wizは、最後の安全なバージョンは1.106.2だとしている。LiteLLMのセキュリティ責任者は、エンジニア3人のGitHubアカウントが使われ、GitHub CLIのOAuthトークンが盗まれた可能性があると説明しており、調査は継続中である。

LiteLLMは3月にも侵害を受けており、AI開発ツールチェーンが繰り返し標的になっている。1.107.0を導入した環境では、環境変数や設定ファイルに含まれる認証情報の更新と、ホストの確認が推奨される。
