---
title: "Microsoft、過去最多622件の脆弱性を修正 悪用中のゼロデイも2件"
description: "Microsoftの7月Patch Tuesdayで過去最多となる622件の脆弱性が修正された。SharePoint ServerとAD FSの権限昇格ゼロデイ2件が実際に悪用されていたことも判明した。"
pubDate: 2026-07-15
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html"
tags:
  - Microsoft
  - セキュリティ
  - 脆弱性
  - Patch Tuesday
---

Microsoftが7月の月例セキュリティ更新（Patch Tuesday）で622件の脆弱性を修正した。これまで最多だった6月の約200件を大きく上回り、プログラム史上最大規模の更新となった。内訳はWindowsが416件、Officeが82件、Edgeが46件などとなっている。

このうち実際に悪用が確認されているゼロデイは2件。オンプレミス版SharePoint Serverの「CVE-2026-56164」は未認証の攻撃者がネットワーク経由で権限を昇格できる欠陥で、Active Directory Federation Servicesの「CVE-2026-56155」は認証済みの攻撃者がアクセス制御の不備を突いてローカルで権限昇格できる欠陥。物理アクセスを要するBitLocker回避のゼロデイも別途確認された。

Microsoftは、AIを活用した多モデル型の自動スキャンシステムが新たな脆弱性発見に寄与しているとして、今後も更新件数が増加傾向にあると顧客に注意を呼びかけている。
