---
title: "Microsoft、Defenderの特権昇格の脆弱性「RoguePlanet」を修正"
description: "Microsoftは、Windows DefenderのコアエンジンにSYSTEM権限への昇格を許す脆弱性「RoguePlanet」(CVE-2026-50656)を修正するパッチをリリースした。"
pubDate: 2026-07-12
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/07/microsoft-patches-rogueplanet-defender.html"
tags:
  - セキュリティ
  - Windows
  - 脆弱性
---

Microsoftは、Windows Defenderの中核であるMalware Protection Engineに存在する特権昇格の脆弱性「RoguePlanet」(CVE-2026-50656)を修正するアップデートをリリースした。この脆弱性はファイルアクセス前のリンク解決処理に起因するレースコンディションで、ローカルからの低複雑度の攻撃によりSYSTEM権限でシェルを起動できる恐れがあった。CVSS基本値は7.8で、Microsoftは悪用可能性を「高い」と評価している。

脆弱性は研究者Chaotic Eclipse氏によって公開され、完全にパッチ適用済みのWindows 10/11環境でも影響を受けることが確認されていた。修正はMalware Protection Engineのバージョン1.1.26060.3008として配信され、Defenderは自動更新されるため利用者側の追加対応は不要という。
