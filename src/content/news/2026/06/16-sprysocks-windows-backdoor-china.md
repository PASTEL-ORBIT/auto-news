---
title: "中国系ハッカーグループのLinux専用バックドア「SprySOCKS」、Windows版が新たに発見"
description: "Linuxのみを標的にするとみられていたバックドアマルウェア「SprySOCKS」のWindows亜種2種類が発見された。中国との関連が指摘されるグループFishMongerが関与しているとされる。"
pubDate: 2026-06-16
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/06/china-linked-sprysocks-backdoor-expands.html"
  - name: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/security/windows-version-of-sprysocks-linux-malware-used-to-attack-govt-orgs/"
tags:
  - セキュリティ
  - マルウェア
  - サイバー諜報
  - 中国
---

セキュリティ研究者が、Linuxのみを標的にするとされてきたバックドア「SprySOCKS」の未発見のWindows亜種2種（内部コード名：WIN_DRV・WIN_PLUS）を特定した。ESETが発表した分析によると、このマルウェアは中国拠点のAPTグループ「FishMonger」（委託企業I-Soonとの関連が指摘される）によって開発・運用されているとみられる。

WIN_DRV亜種はカーネルドライバーをルートキットとして利用し、マルウェアのファイル・プロセス・レジストリキー・ネットワーク接続をnetstatなどの一般的な診断ツールから隠蔽する高度なステルス機能を持つ。特定のパケットマーカーを検知すると、公開ポートのトラフィックを密かにバックドアへリルーティングし、実際の転送先を見えなくする機能も備えている。WIN_PLUS亜種はより標準的な構成だが、同等のスパイ機能を持つ。

ESETのテレメトリによると、実際の活動は2023〜2024年にかけて記録されており、主にホンジュラス・台湾・タイ・パキスタンの政府機関が標的とされた。どちらの亜種もC2（コマンド＆コントロール）サーバーのアドレスがハードコードされており、諜報活動を主目的とした包括的な機能を備えている点が特徴的だ。
