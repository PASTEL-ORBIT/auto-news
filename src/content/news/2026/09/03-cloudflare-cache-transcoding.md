---
title: "Cloudflare、キャッシュを圧縮したまま保存する「Cache Transcoding」を発表"
description: "CloudflareはCDNキャッシュ内のテキストデータを圧縮したまま保存・転送する「Cache Transcoding」を公開した。対象アセットのディスク使用量を平均で約3分の1に削減する。"
pubDate: 2026-09-03
category: tech
sources:
  - name: "Cloudflare Blog"
    url: "https://blog.cloudflare.com/cache-transcoding/"
tags:
  - Cloudflare
  - CDN
  - インフラ
---

Cloudflareは9月1日、プロキシ基盤「Pingora」上に構築した新機能「Cache Transcoding」を公開した。同社の1.1.1.1インターンプログラムでAashi Patel氏が開発した。

HTML・JSON・CSS・JavaScriptなどのテキスト系アセットをキャッシュミス時にZstandardで圧縮し、圧縮したままディスクに保存してデータセンター間の階層キャッシュを転送、配信直前にエッジで展開する仕組み。初期テストでは対象アセットのディスク使用量が平均で約3分の1に縮小し、CPU負荷の増加は数%にとどまったという。

キャッシュインフラのストレージ効率を大きく改善する取り組みで、同社は今後の全面展開によりペタバイト規模のキャッシュ容量削減を見込めるとしている。
