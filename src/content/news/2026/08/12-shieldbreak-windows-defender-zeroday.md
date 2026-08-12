---
title: "Windows Defenderの新ゼロデイ「ShieldBreak」公開　Microsoftの法的圧力後に発表"
description: "研究者「Nightmare Eclipse」が、MicrosoftのDefenderパッチを回避しSYSTEM権限を奪取できる新たなゼロデイ脆弱性「ShieldBreak」を公開した。Microsoftからの法的措置の警告を受けての発表となった。"
pubDate: 2026-08-12
category: tech
sources:
  - name: "TechCrunch"
    url: "https://techcrunch.com/2026/08/12/after-microsoft-threatened-legal-action-a-security-researcher-publishes-a-new-windows-zero-day-bug/"
  - name: "Cybernews"
    url: "https://cybernews.com/security/microsoft-defender-patch-bypass-shieldbreak-exploit/"
tags:
  - セキュリティ
  - Microsoft
  - Windows
  - ゼロデイ
---

セキュリティ研究者「Nightmare Eclipse」は8月12日、Windows Defenderの脆弱性を突く新たなゼロデイ「ShieldBreak」の詳細を公開した。6月に公表され7月にMicrosoftが修正した権限昇格の脆弱性「RoguePlanet」（CVE-2026-50656）に対するパッチ回避手法で、Windows 10、Windows 11（25H2含む）、Windows Server 2025が影響を受ける。悪用されると一般ユーザー権限からSYSTEM権限への昇格が可能になる。

同研究者は今年4月以降、Defenderやビットロッカーなどを対象に複数のゼロデイを継続的に公開してきた元Microsoft社員とされる。Microsoftは「顧客に実害を及ぼす悪意ある行為」への法的措置を警告しており、これが研究者への直接的な圧力と受け止められていた中での今回の公開となった。研究者は自身のバグ報告がMicrosoftに十分対応されなかったと主張している。

Microsoftは本稿執筆時点でShieldBreakの修正パッチを提供しておらず、企業のセキュリティ担当者には注意が呼びかけられている。脆弱性開示を巡る研究者とベンダーの対立が公開の形でエスカレートする事例として注目されている。
