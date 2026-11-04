---
title: "Google・Microsoft・OpenAI・Anthropicの4社、AI学習の可否を示す共通robots.txtシグナルを尊重へ"
description: "4社は10月30日、サイト運営者がAI学習への意向を1つのrobots.txt記述で示せる共通シグナルを尊重すると発表した。IETFのInternet-Draftで定義され、Anthropicが実装を開始したと報じられている。"
pubDate: 2026-11-04
category: tech
sources:
  - name: "The Next Web"
    url: "https://thenextweb.com/news/ai-training-opt-out-robots-txt-google-openai-microsoft-anthropic"
  - name: "PPC Land"
    url: "https://ppc.land/google-microsoft-openai-and-anthropic-back-one-ai-training-opt-out/"
tags:
  - robots.txt
  - AI学習
  - オプトアウト
  - IETF
---

Google、Microsoft、OpenAI、Anthropicの4社は10月30日、サイト運営者がAI学習に関する意向を示す共通のrobots.txtシグナルを尊重すると発表した。

このシグナルはIETFのInternet-Draftで定義され、起草者はAnthropicのKevin Kelley氏とされる。サイト側は「__usage_ai-training」というポリシートークンを指定したルールグループで意向を表明する。新しいディレクティブや文法は追加せず、RFC 9309のパス規則もそのまま使う。ワイルドカード（User-Agent: *）のグループはこのトークンに一致しないと定められている。

実装時期は社ごとに異なり、Anthropicはすでに対応を開始、OpenAIは今後数か月内の実装を目指すと報じられている。Microsoftも共通シグナルを採用し、ページ単位のグラウンディング設定を別途追加する。なお、このシグナルはクロールの可否を命じるものではなく学習利用に関する「意向」の表明であり、すでに学習データやモデルに含まれた内容を取り除くものではない。
