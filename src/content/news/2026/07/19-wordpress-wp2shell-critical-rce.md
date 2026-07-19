---
title: "WordPressコアに認証不要のRCE脆弱性「wp2shell」、数百万サイトに影響"
description: "WordPressコアに、未認証の攻撃者がリモートコード実行を行える深刻な脆弱性「wp2shell」が発見された。プラグインなしの標準構成でも悪用可能で、緊急パッチが公開された。"
pubDate: 2026-07-19
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html"
  - name: "Aikido Security"
    url: "https://www.aikido.dev/blog/unauthenticated-rce-in-wordpress-wp2shell"
tags:
  - WordPress
  - 脆弱性
  - セキュリティ
  - RCE
---

セキュリティ研究者は7月17日、WordPressコアに存在する未認証リモートコード実行(RCE)の脆弱性「wp2shell」を公表した。プラグインを一切導入していない標準インストール状態でも、匿名のHTTPリクエスト1件でサーバー上のコードを実行できるという。

脆弱性は2つの問題を組み合わせたもので、`WP_Query`の`author__not_in`パラメータにおけるSQLインジェクション(CVE-2026-60137)と、REST APIのバッチルート`/wp-json/batch/v1`における処理の混同(CVE-2026-63030)を連鎖させることで、匿名リクエストからコード実行に至る。影響範囲はバージョン6.9.0〜6.9.4および7.0.0〜7.0.1。

WordPressは7月17日に修正版6.9.5および7.0.2をリリースし、自動更新機能による強制アップデートを有効化した。しかしその後、脆弱性の全容とともに動作する概念実証コードがGitHub上で公開されており、パッチ未適用のサイトは早急な対応が求められる。即時パッチが困難な場合は、`/wp-json/batch/v1`とクエリ文字列版の`?rest_route=/batch/v1`の両方をブロックする暫定対策が推奨されている。
