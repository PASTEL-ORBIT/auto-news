---
title: "LibreOfficeとOpenOfficeに脆弱性 細工した表計算ファイルがマクロ警告なしでコード実行"
description: "Java機能が有効な場合、悪意あるスプレッドシートがマクロ警告なしでコードを実行できる脆弱性が公表された。LibreOfficeは修正済みで、OpenOfficeは未修正。"
pubDate: 2026-10-18
category: tech
sources:
  - name: "The Hacker News"
    url: "https://thehackernews.com/2026/10/libreoffice-and-openoffice-flaws-let.html"
  - name: "eSecurity Planet"
    url: "https://www.esecurityplanet.com/news/news-libreoffice-openoffice-spreadsheet-code-execution/"
tags:
  - セキュリティ
  - LibreOffice
  - OpenOffice
  - 脆弱性
---

LibreOfficeとApache OpenOfficeに、細工されたスプレッドシートを開くだけでコードが実行される脆弱性が見つかった。

Java対応が有効な場合、スプレッドシートがリモートのODBファイルを参照し、攻撃者が用意したJavaアーカイブからJDBCドライバーを読み込ませる手口で、マクロの警告は表示されない。LibreOfficeはCVE-2026-63277として、10月5日公開の26.2.5と26.8.0で修正された。OpenOfficeはCVE-2026-59265で、現行の4.1.16までの全バージョンが影響を受け、修正を含む4.1.17はテスト中とされる。

現時点で確認されているのは概念実証にとどまり、実被害は報告されていない。OpenOffice利用者は、Javaを無効にするか、信頼できないファイルを開かない対応が当面の回避策となる。
