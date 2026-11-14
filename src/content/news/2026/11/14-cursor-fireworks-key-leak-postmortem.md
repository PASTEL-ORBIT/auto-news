---
title: "Cursor、10月のセキュリティ事故の事後報告を公開　委託先Fireworksから鍵が漏れ、改ざん拡張機能が配信"
description: "AIコードエディターのCursorは11月13日、10月に起きたセキュリティ事故の事後報告を公開した。推論の委託先から漏れたアクセスキーを足がかりに、マーケットプレイスで改ざんされた拡張機能が約11時間配信されていた。"
pubDate: 2026-11-14
category: tech
sources:
  - name: "Cybersecurity News"
    url: "https://cybersecuritynews.com/cursor-data-breach/"
  - name: "AI Weekly"
    url: "https://aiweekly.co/alerts/cursor-confirms-fireworks-leak-enabled-malicious-claude-code"
tags:
  - Cursor
  - セキュリティ
  - サプライチェーン攻撃
  - 開発ツール
---

AIコードエディター「Cursor」は11月13日、10月に起きたセキュリティ事故の詳しい事後報告（ポストモーテム）を公開した。原因は、Cursorが推論の委託先であるFireworks AIに発行していたアクセスキーが、Fireworks側から漏れたことだった。

攻撃者はこの鍵を使い、共有ストレージに読み取り専用で入った。そこに保存されていたトレースの一部には、伏せられていない認証情報が含まれており、攻撃者はそれを使ってCursorが使う複数のSaaSツールに侵入した。さらに、盗んだ認証情報でCursorのVS Code拡張機能マーケットプレイスのキャッシュに手を加え、「Anthropic.claude-code」拡張機能の改ざん版（2.1.312と2.1.313）を置いた。改ざん版は10月29日に約11時間公開され、最大5,000人の開発者がダウンロードした可能性がある。改ざん版は、SSH鍵を仕込んで遠隔から操作できる状態を作ろうとするものだった。

Cursorによると、本番システム、公式アップデート、顧客のコードリポジトリ、リリース署名鍵には影響がなかった。Anthropicがこのパッケージを公開したわけではなく、Open VSXもマルウェアを配信していない。Cursorはマーケットプレイスを止めて作り直し、推論をFireworks以外へ移し、漏れた認証情報を無効化した。攻撃者が最後に活動したのは11月1日で、事故は収束したとしている。AI開発ツールでは、委託先も含めたサプライチェーン全体を管理する必要があることを示す事例となった。
