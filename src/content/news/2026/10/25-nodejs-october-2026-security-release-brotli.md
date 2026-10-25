---
title: "Node.js、Brotliデコーダの重大な脆弱性を含む10件の修正をリリース"
description: "Node.jsは10月21日にセキュリティリリースを公開し、リモートコード実行につながるBrotliデコーダの境界外書き込み（CVE-2026-111497）など計10件の脆弱性を修正した。"
pubDate: 2026-10-25
category: tech
sources:
  - name: "SecurityOnline"
    url: "https://securityonline.info/nodejs-security-release-october-2026/"
  - name: "Konfirmity"
    url: "https://www.konfirmity.com/advisories/nodejs-october-2026-security-releases"
tags:
  - Node.js
  - セキュリティ
  - 脆弱性
  - Brotli
---

Node.jsプロジェクトは10月21日、計10件の脆弱性に対処するセキュリティリリースを公開した。修正版は22.23.4、24.22.1、26.12.1で、高深刻度の脆弱性が4件含まれる。

中心となるCVE-2026-111497は、Brotliデコーダにおける境界外書き込みで、リモートコード実行につながる可能性がある。同リリースにはTLSのホスト名検証を回避できる問題の修正も含まれ、同梱のCA証明書ストアからはeMudhraの中間CA侵害に関連する信頼が削除された。

Node.jsチームは悪用の確認はなく、回避策も提示されていないとしている。ホストを更新するだけでは不十分で、Dockerイメージや単一実行ファイルはそれぞれ独自のランタイムを内包するため、修正版での再ビルドが必要となる。2026年4月30日にサポートが終了したNode.js 20以前には修正が提供されない。該当環境を運用する組織には、対応版への移行が求められる。
