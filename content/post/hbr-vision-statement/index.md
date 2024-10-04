+++
author = "Yuichi Yazaki"
title = "ツイートから価値を発見する6の方法【Streamgraph】"
slug = "hbr-vision-statement"
date = "2019-08-25"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/F1006Z_A_lg.gif"
+++

ツイートにはノイズが多いけども、消費者動向を探ることのできる無料データとみなしてもっと活用できるんじゃないかということで、チャートを使って具体的に示した事例を紹介します。

- [Vision Statement: Six Ways to Find Value in Twitter’s Noise](https://hbr.org/2010/06/vision-statement-six-ways-to-find-value-in-twitters-noise)

iPadがラウンチした直後の週末に、iPadという単語とともに検索された単語の量が、時系列でどう変化していくかを可視化しているチャートです。こういうチャートを **Streamgraph** とよびます。時系列でのボリューム変化の全体感をバクッと掴むのに有効です。

画面左から右へ時間が進んでいて、その中で検索数の多さを面積で示し、色が単語を区別するために使われています。

記事内では「Twitterのノイズから価値を発見する6の方法」として以下の方法をあげています。チャートへのアノテーションとして示しているので、わかりやすいですね。

> - 競合製品の動向を探る
> - 思いもよらなかった単語を発見する
> - 単語の意味をちゃんと確かめる（一見ネガティブな単語でも商品名の一部だったり、バズったジョークツイートの場合もある）
> - ユーザーからの率直な意見として受け止める
> - 顧客の痛みをわかるためにネガティブワードとも向き合う
> - 突然現れた支配的な単語はその大元を探る
> 
> [Vision Statement: Six Ways to Find Value in Twitter’s Noise](https://hbr.org/2010/06/vision-statement-six-ways-to-find-value-in-twitters-noise)

ある週末だけという短い期間ですが、競合製品のKindleが早々に検索されなくなったり、Jailbreakの話があるタイミングから盛り上がったりします。

ただ、この手のStreamgraphは、静止画で仕上げると迫力が出ますが、個別に単語がどういう傾向を辿ったのかを目で追いづらいです。インタラクティブに仕上げると、マウスポインタやタッチされた単語のみをハイライトしたり、絶対値だけでなく相対値で示たり、と伝達の質と量が向上します。
