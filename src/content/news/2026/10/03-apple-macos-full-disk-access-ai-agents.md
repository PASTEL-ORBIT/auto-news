---
title: "Apple、AIエージェントのリスクを理由にmacOSの「フルディスクアクセス」制御を厳格化"
description: "AppleはmacOSのフルディスクアクセス権限について、アプリが取得するには「非常に明示的なユーザー操作」を必要とする新たな制御を追加すると発表した。AIエージェントの普及に伴うリスクが理由とされる。"
pubDate: 2026-10-03
category: tech
sources:
  - name: "Neowin"
    url: "https://www.neowin.net/news/apple-making-full-disk-access-harder-after-metas-muse-ai-reads-private-dms-on-iphone-mac/"
  - name: "Startup Fortune"
    url: "https://startupfortune.com/apple-tightens-mac-disk-access-rules-after-an-ai-agent-read-private-messages/"
tags:
  - Apple
  - macOS
  - セキュリティ
  - プライバシー
  - AIエージェント
---

Appleは、macOSの「フルディスクアクセス」権限を厳格化する新たな制御を追加すると発表した。アプリがこの権限を得るには「非常に明示的なユーザー操作」が必要になる。

フルディスクアクセスは、ファイルやメール、メッセージ、閲覧履歴を含む広範なデータへのアクセスを可能にする。Appleは、一部の開発者がユーザーの十分な認識なしにシステム全体を露出させる形でこの権限を使っていると指摘した。背景として、MetaのMuseアプリが私的なメッセージを読み取ったと報じられた件(Metaは否定)と、WiredがChatGPTのMacアプリで報告した攻撃者による機密データ到達の恐れがある欠陥を例に挙げている。

Appleは、AIエージェントが高機能化・自律化するほど、この権限のリスクは大幅に高まるとしている。
