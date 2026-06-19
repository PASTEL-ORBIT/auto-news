---
title: "Node.js、認証バイパス含む12件の脆弱性を修正するセキュリティアップデートをリリース"
description: "Node.js v22/24/26系に影響する12件の脆弱性が修正された。TLSワイルドカード認証バイパスとWebCryptoのリモートDoSを含む高深刻度CVE2件への対応が急務となっている。"
pubDate: 2026-06-19
category: tech
sources:
  - name: "Node.js Official Blog"
    url: "https://nodejs.org/en/blog/vulnerability/june-2026-security-releases"
  - name: "Cybersecurity News"
    url: "https://cybersecuritynews.com/node-js-patches-12-vulnerabilities/"
tags:
  - Node.js
  - セキュリティ
  - 脆弱性
  - TLS
  - WebCrypto
---

Node.jsは2026年6月18日、サポート対象バージョン全てに向けたセキュリティリリースを実施した。修正対象バージョンはv22.23.0・v24.17.0・v26.3.1で、計12件の脆弱性が対処されている。

高深刻度と評価された脆弱性は2件。CVE-2026-48933はWebCrypto APIの`subtle.encrypt()`関数に影響し、2GiBの倍数サイズの入力を処理した際に整数オーバーフローが発生することでリモートからのDoS攻撃が可能になる。CVE-2026-48618はTLSのホスト名検証においてUnicodeドット区切り文字の正規化処理が不適切で、ワイルドカード証明書ベースの認証をバイパスされる恐れがある。そのほかHTTP/2の過剰なORIGINフレームによるDoS（CVE-2026-48619）や、TLSセッション再利用によるホスト検証バイパス（CVE-2026-48934）、プロキシ認証情報がエラーメッセージ経由で漏洩する問題（CVE-2026-48615）など中深刻度の脆弱性も含まれる。

Node.jsを利用するWebアプリケーションの開発者・管理者は、速やかに最新バージョンへのアップデートが推奨される。特にインターネットに公開されているサービスや外部からのリクエストを処理するサーバーは優先度が高い。
