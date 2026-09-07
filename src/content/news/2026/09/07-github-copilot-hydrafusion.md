---
title: "GitHub、複数AIモデルを動的に使い分ける「Project HydraFusion」をCopilotに投入"
description: "GitHubがCopilot CLI向けに複数のAIモデルをタスクに応じて組み合わせる実験機能「Project HydraFusion」を発表。コスト削減と精度向上を両立するという。"
pubDate: 2026-09-07
category: ai
sources:
  - name: "GIGAZINE"
    url: "https://gigazine.net/gsc_news/en/20260907-github-copilot-hydrafusion/"
  - name: "The GitHub Blog"
    url: "https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/"
tags:
  - GitHub Copilot
  - AIエージェント
  - マルチモデル
---

GitHubはCopilot CLI向けの実験的機能「Project HydraFusion」を発表した。単一のAIモデルに依存せず、タスクの内容に応じて複数モデルを動的に組み合わせる仕組みで、単一モデルに処理を任せる「Single」、複数モデルを段階的に連携させる「Cascade」、別モデルが成果物を評価し直す「Critique」という3つの実行パターンを切り替える。

GitHubの評価によると、TerminalBench 2.1においてClaude Opus 5単体と比較して推定コストを67%削減しつつ、タスク完了率を4.9ポイント向上させたという。Copilot CLIの実験的機能として全プランで利用可能で、料金は実際に呼び出された各モデルのトークン使用量に基づいて計算される。

AI開発ツール市場では単一モデルへの依存を避け、コストと精度のバランスを動的に最適化する「モデルオーケストレーション」の潮流が強まっており、HydraFusionはその代表例として今後の展開が注目される。
