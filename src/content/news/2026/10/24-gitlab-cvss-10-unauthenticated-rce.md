---
title: "GitLabが認証不要でコード実行可能なCVSS 10.0の脆弱性を修正、全バージョン帯に影響"
description: "GitLabは10月21日、セルフマネージド環境で認証なしにコードを実行できるCVSS 10.0の重大な脆弱性（CVE-2026-110264）の修正版を公開した。"
pubDate: 2026-10-24
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/10/critical-gitlab-flaw-cvss-100-could.html"
  - name: "eSecurity Planet"
    url: "https://www.esecurityplanet.com/news/news-gitlab-critical-server-takeover-flaw/"
tags:
  - セキュリティ
  - GitLab
  - 脆弱性
  - RCE
---

GitLabは10月21日、セルフマネージド版で認証なしの攻撃者が任意のコードを実行できる脆弱性（CVE-2026-110264）の修正版を公開した。CVSSスコアは最大の10.0で、GitLab 7.0以降の約12年分のリリースが影響を受けるとされる。

修正は9つのリリースラインにバックポートされ、同じ更新で他の11件の問題も解消された。10月12日に別の重大な脆弱性（CVE-2026-97229）向けのパッチを適用済みのサーバーも、今回の問題は対象に含まれる。報道によれば回避策は示されておらず、該当バージョンの修正版へ更新する必要がある。

自社運用のGitLabはソースコードやCI/CDの認証情報を保持するため、サーバーが乗っ取られた場合はサプライチェーン全体に影響が及ぶ可能性がある。なお、修正版の具体的なバージョン番号は報道によって異なるため、適用時はGitLab公式のアドバイザリを確認する必要がある。
