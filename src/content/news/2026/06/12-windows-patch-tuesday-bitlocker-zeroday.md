---
title: "Microsoft、6月のセキュリティ更新で過去最多208件の脆弱性を修正、BitLockerのゼロデイにも対応"
description: "Microsoftが2026年6月のセキュリティ更新で過去最多となる208件の脆弱性を修正。公開済みのBitLockerバイパス脆弱性「YellowKey」（CVE-2026-45585）への対応も含まれる。"
pubDate: 2026-06-12
category: tech
sources:
  - name: "BleepingComputer"
    url: "https://www.bleepingcomputer.com/news/microsoft/microsoft-june-2026-patch-tuesday-fixes-6-zero-days-200-flaws/"
tags:
  - Windows
  - セキュリティ
  - BitLocker
  - Microsoft
---

Microsoftは6月9日、月例セキュリティ更新「Patch Tuesday」を公開し、Windowsや関連製品にわたり過去最多となる208件の脆弱性を修正した。このうち6件はゼロデイ脆弱性で、すでに悪用が確認されているものも含まれる。

## 詳細

特に注目されるのが、BitLockerの暗号化ドライブを回避できる脆弱性「YellowKey」（CVE-2026-45585、CVSS 6.8）だ。USBドライブやEFIパーティションに細工したファイルを置き、Windows回復環境（WinRE）起動時にCtrlキーを押し続けることでコマンドシェルを呼び出し、暗号化されたドライブへ無制限にアクセスできてしまう。TPMのみでBitLockerを保護しているWindows 11やWindows Server 2022/2025が影響を受ける。

## 影響/意義

脆弱性が正規の開示プロセス外で公開されたため、Microsoftはホットパッチ対応端末向けにも再起動を伴う更新の適用を求めている。企業のIT管理者には早急なパッチ適用が推奨される。
