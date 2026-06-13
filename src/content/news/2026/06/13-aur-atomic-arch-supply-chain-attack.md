---
title: "Arch LinuxのAURで大規模サプライチェーン攻撃「Atomic Arch」 約1500パッケージが侵害"
description: "Arch User Repository（AUR）で放置パッケージの管理権限を乗っ取る手口により、約1500件のパッケージが認証情報窃取マルウェアとルートキットに改変された。"
pubDate: 2026-06-13
category: tech
sources:
  - name: "Bleeping Computer"
    url: "https://www.bleepingcomputer.com/news/security/over-400-arch-linux-packages-compromised-to-push-rootkit-infostealer/"
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/06/over-400-arch-linux-aur-packages.html"
tags:
  - Arch Linux
  - サプライチェーン攻撃
  - セキュリティ
  - マルウェア
---

Arch Linuxのユーザーリポジトリ（AUR）で、約1500件のパッケージが改変され、認証情報窃取マルウェアとeBPFルートキットを配布する大規模なサプライチェーン攻撃「Atomic Arch」が確認された。

## 詳細

攻撃者は、メンテナーに放棄された「孤児パッケージ」の所有権申請プロセスを悪用し、コミュニティで信頼を獲得済みのパッケージの管理権限を乗っ取った。パッケージ名や履歴はそのまま維持しつつ、ビルドスクリプト（PKGBUILD）のみを改変。改変されたスクリプトは不正なnpmパッケージを取得し、ブラウザの認証情報、SSHキー、環境変数、暗号資産ウォレット情報を窃取するRust製マルウェアを展開する。root権限を得た場合はeBPFルートキットを読み込み、自身を隠蔽する仕組みも備えていた。攻撃は6月11日頃に発見され、メンテナー側は不正なコミットを差し戻し、攻撃者アカウントを永久追放するとともに、影響を受けたパッケージの一覧を公開した。なお、厳格な審査体制を持つArchの公式リポジトリ自体は影響を受けていない。

## 影響/意義

コミュニティ主導のパッケージリポジトリにおける「孤児パッケージの引き継ぎ」という善意の仕組みが、信頼関係を逆手に取る攻撃の足がかりとして悪用された点が大きな懸念材料となっている。AURパッケージを利用していたユーザーは、影響パッケージ一覧を確認した上で、認証情報のローテーションやシステムの再確認が推奨される。
