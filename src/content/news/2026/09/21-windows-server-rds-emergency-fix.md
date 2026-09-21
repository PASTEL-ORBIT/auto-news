---
title: "Windows Server 9月更新でリモートデスクトップ障害、マイクロソフトが緊急修正パッチ公開"
description: "Windows Server 2019/2022/2025向けの9月月例更新適用後、数時間後にリモートデスクトップサービスが停止する不具合が発生し、マイクロソフトが緊急パッチで対応した。"
pubDate: 2026-09-21
category: tech
sources:
  - name: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/microsoft/september-windows-server-updates-break-remote-desktop-services/"
tags:
  - Windows Server
  - Microsoft
  - IT管理
  - セキュリティ更新
---

マイクロソフトが9月8日に配信した月例セキュリティ更新(Windows Server 2019向けKB5122876など)を適用したサーバーで、リモートデスクトップサービス(RDS)が障害を起こす不具合が発覚した。対象はWindows Server 2019、2022、2025の各バージョン。

不具合は更新適用直後ではなく数時間経過後に発生する点が特徴で、既存の接続セッションが切断できなくなったり、新規接続の試行が長時間ハングしたのちタイムアウトしたりする症状が報告された。管理者の間では、影響を受けたサーバーを強制再起動せざるを得ないケースも相次いだ。

マイクロソフトは9月15日、Server 2019・2022・2025それぞれに向けた恒久的な修正を含む定例外(OOB)更新をMicrosoft Update Catalog経由で公開した。更新の巻き戻しは一時的に安定性を取り戻せるものの、同梱されていたセキュリティ修正も失われるため、管理者にはOOB更新の適用が推奨されている。
