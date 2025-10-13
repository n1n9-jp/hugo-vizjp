+++
author = "Yuichi Yazaki"
title = "ストリームグラフ"
slug = "streamgraph"
date = "2020-07-07"
description = ""
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/1_8-t2eXWZyBAQ90tCjZEfvA.png"
+++


## 別名

ThemeRiver、Stream Graph、Stacked Graphs

## 特徴

時間の経過とともに変化する数値を、総体と個別を同時に、流れとして把握できることを意図したチャート。流れとして全体感を把握するところから、名称にstreamやriverといった単語が用いられている。初出は2000年ごろで比較的最近登場したチャート。

ベースラインとしての水平軸が存在しないため、データの総体と個別が生み出す造形は、予想できない美しさと傾向や発見の手がかりを生み出す。

## 議論

正確な数値の読み取りやすさが足りないと指摘する声もあり、視覚的な美しさと正確な数値の読み取りやすさのバランスについて、議論になることが多い。レイヤーをどの順序で積み重ねるかはアルゴリズム次第で、データのどの属性を用いるかによって印象は相当変わる。この点も、正確な数値の読み取りやすさのバランスについて懸念される原因の一つとなっている。

#### ディメンションやメジャー
- 時系列（ディメンション）…水平軸
- 数値（メジャー）…（水平・垂直軸を考慮した）面積
- カテゴリー（ディメンション）…色（基本的にはベタ塗りが多いが、記号やテキストで埋め尽くす作例も存在する）

※チャート全体が90度回転させた場合は、時系列と数値の軸が逆になる。

<!--more-->

## 作例

### 「映画の辺境と流れ：ボックスオフィスの領収書 1986–2008」

![](images/1_fIBSrw8bOE6AxsG_6dRa7Q.png)

[The Ebb and Flow of Movies: Box Office Receipts 1986–2008](http://archive.nytimes.com/www.nytimes.com/interactive/2008/02/23/movies/20080223_REVENUE_GRAPHIC.html)

### Stream graph of the most-played music month-by-month

![](images/1_lfRGArscw7aXPXNouf2D5Q.png)

[Stream graph of the most-played music month-by-month](http://blog.last.fm/2010/12/16/the-data-behind-best-of-2010)


### What A Hundred Million Calls to 311 Reveal About New York

![](images/1_DM2ltegeUZ9ZKjdNFHvPzQ.jpeg)

[What A Hundred Million Calls to 311 Reveal About New York](https://www.wired.com/2010/11/ff_311_new_york/all/1/)


### 年代・性別・人種別一日の過ごし方

![](images/How-Different-Groups-Spend-Their-Day.png)

[How Different Groups Spend Their Day](https://archive.nytimes.com/www.nytimes.com/interactive/2009/07/31/business/20080801-metrics-graphic.html)


### Euro 2012 Streamgraph B-sides

![](images/1_7vh_GjGLRbaNJS-x47bqhQ.png)

[Euro 2012 Streamgraph B-sides](http://philogb.github.io/blog/2012/07/02/euro2012-streamgraph-bsides/)


### Top Ten Cars in the UK

![](images/1_8-t2eXWZyBAQ90tCjZEfvA.png)

[Top Ten Cars in the UK](https://www.neoformix.com/2011/TopTenCarsUK.html)


### ミームトラッキングとニュースサイクルのダイナミクス

![](images/meme-tracking.png)

[Meme-tracking and the Dynamics of the News Cycle](http://learning.mpi-sws.org/networks-seminar/papers/kdd09-quotes.pdf)


## 誰が作ったのか？

Susan Havreらが2000年に出願登録したThemeRiverという名称で論文を発表しています。

- [ThemeRiverTM*: In Search of Trends, Patterns, and Relationships](http://www.ifs.tuwien.ac.at/~silvia/wien/gwa/ws05/articles/Havre-InfoVis1999.pdf)

それとは別に、last.fmのユーザー・リスニング履歴を制作したLee ByronとMartin Wattenbergによって、2008年に書かれた論文が存在します。

- [Stacked Graphs – Geometry & Aesthetics](http://leebyron.com/streamgraph/stackedgraphs_byron_wattenberg.pdf)

現在はストリームグラフ（Streamgraph）と呼ばれることが一般的です。

