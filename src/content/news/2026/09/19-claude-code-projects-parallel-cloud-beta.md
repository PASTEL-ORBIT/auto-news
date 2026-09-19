---
title: "Anthropic、Claude Code「Projects」を刷新しクラウド並列実行ベータを開始"
description: "AnthropicはClaude CodeのProjects機能を再設計し、1つの開発目標を複数のクラウドセッションに分割して並列実行できるベータ版を公開した。"
pubDate: 2026-09-19
category: ai
sources:
  - name: "MarkTechPost"
    url: "https://www.marktechpost.com/2026/09/17/anthropic-launches-claude-code-projects-in-beta-parallel-cloud-sessions-that-keep-running-after-you-close-your-laptop/"
tags:
  - Anthropic
  - Claude Code
  - 開発ツール
  - AIエージェント
---

Anthropicは9月17日、Claude Codeの「Projects」機能を再設計したベータ版を公開した。新しいProjectsでは、1つのプロジェクト会話がコーディネーター役となり、開発目標を複数のスレッドに分割。各スレッドはそれぞれ独立したクラウドセッションとして個別のブランチ上で動作し、共有メモリと中央コーディネーターが進捗をまとめて追跡する。

各スレッドは並列で作業を進め、完了すると元の会話に報告する仕組みで、ノートPCを閉じた後もクラウド上で処理が継続する点が特徴。ベータ版は当面、Claude CodeのクラウドセッションをすでにWebやデスクトップ版のプロジェクトを持たない一部のProおよびMaxサブスクライバーに限定して提供され、今後数週間でアクセスを拡大する予定。

並列セッションは開発速度の向上と調整作業の削減につながる一方、各スレッドがフル稼働のClaude Codeセッションとして扱われるため利用枠の消費が早まる点には注意が必要。1サブスクライバーあたり1日200スレッドという上限が設けられている。
