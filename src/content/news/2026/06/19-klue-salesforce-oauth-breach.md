---
title: "KlueのOAuthトークン窃取でSalesforce顧客データが大規模流出—「Icarus」恐喝グループが関与"
description: "SaaS競合情報ツールのKlueが侵害され、Salesforce・HubSpot・Slackなど複数SaaSのOAuthトークンが盗まれた。セキュリティ企業Huntressを含む顧客のCRMデータが流出した。"
pubDate: 2026-06-19
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/06/salesforce-disables-klue-app.html"
  - name: "Help Net Security"
    url: "https://www.helpnetsecurity.com/2026/06/19/klue-salesforce-data-breach-huntress/"
tags:
  - セキュリティ
  - OAuth
  - Salesforce
  - SaaSサプライチェーン攻撃
  - データ流出
---

SaaS系競合情報ツールのKlueで発生したセキュリティインシデントにより、SalesforceをはじめとするCRMプラットフォームの顧客データが大規模に流出した。攻撃者はKlueのレガシー認証情報を侵害してインフラに侵入し、悪意のあるコード更新をプッシュすることでOAuthトークンを収集。これによりSalesforce・HubSpot・SharePoint・Zoom・Google Drive・Slackなど複数のSaaSサービスに接続していた顧客環境のデータにアクセスした。

「Icarus」を名乗る恐喝グループがダークウェブのリークサイトにKlueを掲載しており、被害を受けた組織にはサイバーセキュリティ企業Huntressも含まれている。アクセスされたデータにはアカウントレコード・連絡先情報・商談の結果・価格情報といったCRMデータが及ぶ。Salesforceは現在、Klueアプリとの接続を全面停止しており、問題が解決するまで利用不可の状態が続く見込みだ。SalesforceはKlueのApp接続を一時無効化したのはプラットフォーム自体の脆弱性ではなくKlue側に起因するものだと説明している。

今回の事案はSaaSサプライチェーンを経由した攻撃リスクを改めて浮き彫りにした。OAuthを用いたサードパーティ連携においては最小権限の原則に基づくアクセス管理と、未使用トークンの定期的な失効処理が重要となる。
