---
title: "PyPIにサプライチェーン型ワーム「Hades」、Microsoftのリポジトリにも波及"
description: "OSSサプライチェーン攻撃「Miasma」の新変種「Hades」がPyPIの19パッケージに混入。Microsoftの73リポジトリが一時無効化された。"
pubDate: 2026-06-12
category: tech
sources:
  - name: "The Register"
    url: "https://www.theregister.com/cyber-crime/2026/06/09/miasma-supply-chain-attack-toolkit-goes-public-on-github/"
tags:
  - セキュリティ
  - サプライチェーン攻撃
  - PyPI
  - OSS
---

ワーム型のサプライチェーン攻撃「Miasma」の新たな変種「Hades」が確認された。PyPI上の19パッケージに含まれる37個の悪意あるPythonホイールを通じて拡散しており、開発者やAIエージェントの利用環境を狙っている。

## 詳細

Hadesは、Pythonの`.pth`起動フックを悪用し、対象パッケージをインポートしなくてもインタプリタ起動時に悪性コードを実行する手法を採る。実行時にはBunランタイムを介してJavaScript製の認証情報窃取プログラムを起動し、クラウドの認証情報やCI/CDのアクセストークンを攻撃者側のGitHubリポジトリへ送信する。6月5日にはMicrosoftの「Azure/durabletask」リポジトリに悪性コミットが混入し、GitHubの自動検知により4つの組織にわたる73のリポジトリが約105秒で無効化される事態となった。Azure Functionsの公式デプロイ用GitHub Actionも一時停止し、世界各地のCI/CDパイプラインに影響が及んだ。Socketはnpm・PyPI合わせて448個のアーティファクトへの影響を追跡している。

## 影響/意義

開発者がClaude CodeやCursorなどのAIコーディングツールでリポジトリを開くだけで攻撃が発動する事例も報告されており、OSSエコシステム全体とAI開発ツールの双方に対する信頼性が問われている。各組織には依存パッケージの監査やCI/CD権限の見直しが急務となっている。
