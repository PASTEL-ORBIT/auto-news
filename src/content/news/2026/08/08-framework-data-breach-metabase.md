---
title: "PCメーカーFramework、全顧客対象のデータ漏えいを通知　連携先MetabaseのSQLインジェクション0dayが原因"
description: "モジュール式PCで知られるFrameworkは、分析ツールMetabaseのゼロデイ脆弱性を突いた攻撃により全顧客の情報が流出したと発表した。決済情報の流出はないという。"
pubDate: 2026-08-08
category: tech
sources:
  - name: "TechCrunch"
    url: "https://techcrunch.com/2026/08/07/computer-maker-framework-notifies-all-customers-of-a-data-breach/"
  - name: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/security/framework-tally-disclose-metabase-data-theft-attacks/"
tags:
  - データ漏えい
  - セキュリティ
  - Framework
  - サプライチェーン攻撃
---

モジュール式・修理可能なノートPCで知られるFrameworkは8月7日、業務で利用するBIツール「Metabase」を経由したデータ漏えいにより、全顧客の情報が影響を受けたと発表した。Metabase側は8月3日、バージョン1.58以降に存在する未認証のSQLインジェクションのゼロデイ脆弱性を悪用した攻撃を検知し、8月6日にFrameworkへ侵害を通知したという。

流出したのは氏名、メールアドレス、ログイン時のIPアドレス、請求先・配送先住所、電話番号、会社名などで、決済情報は含まれていないとしている。Metabaseは自己ホスト型ユーザーに対し早急なパッチ適用を呼びかけている。

直接契約のないSaaSベンダーの脆弱性が末端顧客の個人情報流出にまで波及した事例であり、サプライチェーン全体でのセキュリティ管理の重要性を改めて浮き彫りにしている。
