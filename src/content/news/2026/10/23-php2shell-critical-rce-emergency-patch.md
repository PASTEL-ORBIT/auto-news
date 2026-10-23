---
title: "PHPに認証不要のRCE脆弱性2件「PHP2Shell」、緊急パッチを公開"
description: "PHP Foundationが、認証なしでリモートコード実行が可能な重大な脆弱性2件（CVE-2026-109618、CVE-2026-109619）の修正版を前倒しで公開した。"
pubDate: 2026-10-23
category: tech
sources:
  - name: "BleepingComputer"
    url: "https://bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws"
  - name: "Help Net Security"
    url: "https://helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619"
tags:
  - セキュリティ
  - PHP
  - 脆弱性
  - RCE
---

PHP Foundationは10月21日、認証なしでリモートコード実行（RCE）が可能な脆弱性2件（CVE-2026-109618、CVE-2026-109619）の緊急修正版を公開した。通称「PHP2Shell」と呼ばれ、CVSS v4.0のスコアはいずれも9.2とされる。

どちらもリクエストが異常終了した際にPHPのメモリが破損した状態で残る問題に起因する。PHP-FPM、Apache（mod_php）、php-cgi、FrankenPHP、LiteSpeedなど、Webリクエストを処理するPHP環境が影響を受ける。修正はPHP 8.5.12、8.4.27、8.3.36、8.2.35で提供され、7.4、8.0、8.1向けには最小限のバックポートも用意された。

当初の公開予定より前にエンバーゴが破られ、概念実証ツールが出回った。Palo Alto Networksは2,260万件超の公開インスタンスが影響を受ける可能性があると推定している。オランダのNCSCを含む一部の組織は、予防措置としてWebサイトを停止した。CERT-EUは、直ちにパッチを適用できない場合は該当サイトの停止を検討するよう呼びかけている。
