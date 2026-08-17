---
title: "Google、暗号化データ上でAI推論を行うコンパイラ「HEIR」をオープンソース化"
description: "Googleは、暗号化されたデータに対して直接AI推論を実行できるオープンソースコンパイラ「HEIR」を公開。準同型暗号を用いてプライバシーを保護したままAIサービスを実現する。"
pubDate: 2026-08-17
category: ai
sources:
  - name: "Google Developers Blog"
    url: "https://developers.googleblog.com/expanding-our-fully-homomorphic-encryption-offering/"
  - name: "Open Source For You"
    url: "https://www.opensourceforu.com/2026/08/google-open-sources-heir-for-encrypted-ai/"
tags:
  - Google
  - 準同型暗号
  - プライバシー
  - オープンソース
---

Googleは、完全準同型暗号（FHE）を用いて暗号化されたデータのままAI推論を実行できるオープンソースコンパイラ「HEIR」（Homomorphic Encryption Intermediate Representation）を公開した。MLIRをベースとしたツールチェーンで、既存の学習済みAIモデルを暗号化入力に対応する形へ変換できる。

Googleは実証例として、コンテンツ推薦モデル、クレジットカード不正検知、暗号化されたネットワークパケットを解析する侵入検知システム、暗号化音声からウェイクワードを検出するモデルという4種類のアプリケーションを公開した。同社は非専門家でも暗号化推論を組み込めるよう、将来的に「ワンクリック化」を目指すとしている。

サービス提供者がユーザーの機密データに一切アクセスすることなくAI処理を行える技術であり、プライバシー保護AIの実用化を大きく前進させるものと位置付けられる。
