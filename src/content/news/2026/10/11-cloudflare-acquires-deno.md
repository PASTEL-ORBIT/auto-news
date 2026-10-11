---
title: "CloudflareがDenoを買収、Workersのセルフホスト対応を強化へ"
description: "CloudflareがJavaScriptランタイム「Deno」の開発チームを迎え入れると発表した。Deno本体の開発は1年後に終了し、Deno Deployは6か月後に終了する。"
pubDate: 2026-10-11
category: tech
sources:
  - name: "Cloudflare Blog"
    url: "https://blog.cloudflare.com/deno-joins-cloudflare/"
  - name: "TechCrunch"
    url: "https://techcrunch.com/2026/10/10/cloudflare-acquires-deno-to-improve-its-workers-programming-model/"
tags:
  - Cloudflare
  - Deno
  - JavaScript
  - Workers
---

Cloudflareは10月9日、JavaScriptランタイム「Deno」を開発するDeno社の買収を発表した。買収条件は公表されていない。

Denoの創業者ライアン・ダール氏とバート・ベルダー氏らのチームはCloudflareに移り、Workersアプリケーションを自社インフラで動かせる公式な手段の整備を担当する。Denoが開発したWorkers・Durable Objects互換実装「celld」の知見をオープンソースの「workerd」に統合し、現在は単一インスタンス内に限られるDurable Objectsのスケール対応を進める方針だ。

一方、Deno本体のランタイム開発は、月次のバグ修正とセキュリティリリースを1年間続けた後に終了する。Deno Deployは6か月後に終了し、有料顧客にはCloudflare Workersへの移行支援が提供される。JSRはCloudflareのインフラ上で運営が続く。

Node.jsの課題の解決を目指して2018年に登場したDenoは、競合関係にあったCloudflareの傘下に入ることになる。
