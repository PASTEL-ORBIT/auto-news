---
title: "AIコーディングエージェント4製品に「Plugin4Shell」脆弱性、SHA固定が無効化される"
description: "Claude Code・Codex・GitHub Copilot・Gemini CLIのプラグイン検証に、SHA固定を回避してゼロクリックでコード実行を許す脆弱性「Plugin4Shell」が発見された。"
pubDate: 2026-09-19
category: tech
sources:
  - name: "Help Net Security"
    url: "https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/"
  - name: "Air Security"
    url: "https://www.air.security/blog-posts/plugin4shell"
tags:
  - セキュリティ
  - Claude Code
  - サプライチェーン攻撃
  - AIエージェント
---

セキュリティ企業Air Securityは、主要なAIコーディングエージェント4製品に影響する脆弱性「Plugin4Shell」を公表した。対象はClaude Code、OpenAI Codex、GitHub Copilot、Gemini CLIで、いずれもプラグインを特定のコミット（SHA）に固定する仕組みを備えているが、実際にチェックアウトされた作業ツリーが固定先と一致しているかを確認していなかった。

攻撃者はプラグインのリポジトリを制御できれば、Gitの参照解決を悪用し、承認済みのSHA固定を守っているように見せかけながら悪意あるブランチをチェックアウトさせられる。信頼済み拡張機能のバックグラウンド更新がこの経路を通ると、ユーザーの新たな承認なしにコードが実行されるため、事実上ゼロクリックの攻撃となる。

Anthropicはバージョン2.1.179でClaude Codeを、OpenAIはバージョン0.146.0でCodexを修正済み。一方Microsoftは同じ欠陥を通知されたもののCopilotのパッチを未提供、GoogleはGemini CLI自体を廃止する対応を取ったため、既存導入環境は無期限に脆弱なままとなる。AIエージェントの普及に伴うサプライチェーンリスクの深刻さを示す事例として注目されている。
