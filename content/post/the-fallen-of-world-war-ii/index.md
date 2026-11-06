+++
author = "矢崎裕一"
title = "1体＝1,000人のまま積み上げ直す──Neil Halloran『The Fallen of World War II』"
slug = "the-fallen-of-world-war-ii"
date = "2026-11-06"
description = "Neil Halloran の映像は、人の形1体を死者1,000人に固定したまま、国・戦域・戦闘ごとに積み上げ直して、約7,000万人の死者を比べられる量にしました。18分の作品です。"
categories = [
    "consume"
]
tags = [
    "データジャーナリズム",
    "動画",
    "インタラクション",
    "正規化",
    "Steven Pinker"
]
image = "images/figures-column-us-flag.jpg"
series = ["dataviz-journalism"]
series_weight = 99
seriesByline = "Neil Halloran"
seriesTitle = "1体＝1,000人で積み直す──The Fallen of World War II"
+++

『The Fallen of World War II』は、人の形1体を死者1,000人に固定したまま、国・戦域・戦闘ごとに積み上げ直して、約7,000万人の死者を比べられる量にした18分の映像です。兵士と民間人は別々に数えます。米兵から始めて欧州、アジアへ進み、最後は過去の戦争や戦後の紛争と並べます。

作者は Neil Halloran（ニール・ハロラン）で、2015年に公開しました。以下は、公式ページ、ナレーションの英語字幕、ブラウザ版の JavaScript、Vimeo の公開情報に沿います。受賞と反響は、Information is Beautiful Awards と報道によります。

<!--more-->

## 2015年5月、ブラウザで動く18分の映像

公式ページのクレジットによると、脚本・監督・コーディング・ナレーションは Halloran 本人です。音楽と音響は Andy Dollerson（アンディ・ドラーソン）です。Vimeo へのアップロードは2015年5月20日でした。Technical.ly によると、公開は戦没将兵追悼記念日（5月25日）です。

作品には二つの版があります。一つはブラウザで動く「Interactive」版で、three.js と WebGL で描きます。もう一つは動画版で、当初は [Vimeo](https://vimeo.com/128373915)、いまは [YouTube](https://www.youtube.com/watch?v=DwKPFT-RioU) へつながります。

![黒い地に、白い人の形が奥へ向かって何十列も並び、列の手前に米国旗が置かれている](images/figures-column-us-flag.jpg)

Neil Halloran／[The Fallen of World War II 公式ページ](https://fallen.io/ww2/) より引用（共有用の画像）

尺は、資料によって違います。

| 資料 | 尺の書き方 |
|---|---|
| Vimeo の公開情報（API） | 1,096秒（約18分16秒） |
| 公式ページ | 「Across 18 minutes」 |
| Information is Beautiful Awards の紹介文 | 「The 15-minute data visualization」 |
| Open Culture（2015年10月7日） | 「15 minute film」 |

15分の版が別にあったかどうかは、確かめられませんでした。

観客には、任意の「ticket price」（推奨額2.50ドル）を呼びかけました。PhillyVoice は作者の集計として、最初の100万再生で1,392人が計8,620ドルを払ったと伝えています。再生は公開後2週間半で400万回でした（Technical.ly）。2015年秋には、日本語を含む7言語の版が出ています（[日本語版](https://www.neilfilms.com/ww2/ja/)）。

## 1体＝1,000人を、総計まで変えない

ナレーションは冒頭で、何をしない作品かを言います。

> "This project is not about individual war stories, and it's not about survivors. We are going to tally up the tens of millions of people whose lives were cut short by the war, and see how these numbers stack up to other wars in history, including trends in recent conflicts."

個々の体験や生存者の話ではなく、命を絶たれた何千万人を数え上げ、他の戦争と比べる、という宣言です。

続けて単位を決めます。「Each of these figures will represent 1000 people who died.」。人の形1体が、死者1,000人です。casualty は負傷も含む語なので、ここでは死者だけを数える、とも断ります。

データと見た目の対応は、字幕と作品の JS から次のように読み取れます。

| データ | 見た目・対応 | 根拠 |
|---|---|---|
| 死者1,000人 | 人の形1体 | 字幕 |
| 兵士と民間人 | 別の人形・別の層で数える | 字幕、JS |
| 国ごとの軍の死者 | 人形を積んだ縦の柱。米国から始める | 字幕 |
| 時間 | 横軸の時間線に、人形を並べ直す | 字幕 |
| 個々の戦闘 | 時間線上の戦闘名。触ると国・死者数・日付が出る | JS、HTML |
| 歴史上の約20の戦争 | 棒グラフ。次に世界人口に対する割合へ | 字幕 |
| 戦後の戦死者 | 年ごとの棒を4分類で色分け。次に世界人口で割る | 字幕、JS |

ピクトグラムの数で量を見せる点は、[アイソタイプ・チャート](/isotype-chart/)と同じ考え方です。この作品で目立つのは、総計に至るまで、場面が変わっても単位を変えないことだと読めます。**米兵の柱も、スターリングラードも、ホロコーストも、同じ1体＝1,000人で数えます。**

## 国・戦域・戦闘ごとに、積み上げ直す

数え方は、米兵から始まります。死者は40万人超で、約4分の1が太平洋戦域でした。時間線に並べると、死者は戦争の終盤に多いと分かります。

そこで、身近な数と並べます。オマハ・ビーチでは、米兵2,500人が死にました。ナレーションは、アフガニスタンでの13年間の米兵の死者とほぼ同じだと言います。

欧州では、国を一つずつ足します。スターリングラードでは、ドイツ兵50万人が死にました。ソ連兵の数で、ナレーションは数の確かさに触れます。

> "8.7 million is the official tally by the Russian military, a hotly disputed number. Some studies have calculated as many as 14 million dead."

ロシア軍の公式集計は870万人だが激しく争われ、1,400万人とする研究もある、という説明です。

欧州の軍の死者を時間線に並べたところで、映像は止まります。「You can now interact with the chart to learn more.」。公式ページは、この作りを「pauses at key moments」と説明します。画面には「Interactive Mode」の進行バーと「Pause for more time」のボタンが出ます。

次は民間人です。ホロコーストのユダヤ人600万人を、国別と、殺された場所別に分け直します。ロマの13万〜50万人には「The numbers are disputed.」と添えます。ポーランドは人口の16%超が死に、割合では最大でした。総数ではソ連が上です。

欧州の軍と民間人を合わせて4,000万人を超え、アジアを足して総計に至ります。

> "When you add all the deaths outside of Europe, it brings us a grand total of 70 million for the war - give or take, depending on who's counting, and what civilian deaths get included."

総計は7,000万人。誰が数え、どの民間人の死を含めるかで前後する、という但し書き付きです。同じ人形を、国、戦域、戦闘、場所と切り口を変えて積み直すことで、総数を部分どうしで比べられるようにしていると読めます。

## 最後の章で、分母を変える

総計のあと、映像は第二次大戦を、歴史上の約20の戦争・虐殺と棒グラフで並べます。次に、縮尺を変えます。

> "If we want to compare them in terms what percentage of the world died, we can adjust the chart like this. This rough approximation tells us that there may have been more devastating wars before WW2, proportionally speaking."

世界人口に対する割合では、第二次大戦より大きな戦争があったかもしれない、という説明です。同じ棒を、分母を変えて見せ直しています。

戦後の章でナレーションは、John Gaddis（ジョン・ギャディス）が1989年に言った「長い平和（Long Peace）」を紹介します。戦後の戦争を4つに分け、年ごとの戦死者を第二次大戦と並べます。さらに世界人口で割ると、減り方はより急に見える、とナレーションは言います。

データの出典は、資料によって書き方が違います。

| 対象 | 資料 | 書かれていること |
|---|---|---|
| 第二次大戦の死者 | 公式ページ | 英語版 Wikipedia「World War II casualties」に挙がる出典に近い資料 |
| 戦後の戦死者 | 公式ページ | Uppsala Conflict Data Program（UCDP） |
| 戦後の戦死者 | 作品の JS | 変数名は prioData。1946〜2013年の紛争別の値 |
| 最終章の着想と出典 | 公式ページ | Steven Pinker（スティーブン・ピンカー）の『The Better Angels of Our Nature』 |

prioData という名前は、PRIO（オスロ国際平和研究所）の戦死者データの名残とも読めます。ただ、どのデータのどの版かは確かめられませんでした。個々の数値の出典も、作品の中では示されていません。

ナレーションは「This isn't to infer anything about why this trend is occurring」と、理由の推測を控えます。結びは「Of course this trend may not continue.」と言ったあと、こう続けます。

> "But the longer the long peace grows, the more significant it becomes."

長い平和は、続くほど意味が大きくなる、という締めです。

## 第三者はこの作品をどう見たか

評価は、それぞれ別の点に向いています。一つ目は、映像の語りです。Information is Beautiful Awards 2015 は、Motion infographic 部門で Gold を与えました。

> "The 15-minute data visualization uses cinematic storytelling techniques to provide viewers with a fresh and dramatic perspective of a pivotal moment in history."

映画の語りの技法で、歴史に新しい見方を与えた、という評価です。

二つ目は、受け身の視聴を超える体験です。作品は2016年、SXSW Interactive Innovation Award を受けました。PhillyVoice によると、この賞は「moves beyond passive viewership」な体験を表彰します。止めて触らせる作りが、そこに当たると読めます。

![白い人の形の列と米国旗の画面の左に、IIB Awards の Gold、SXSW Winner など4つの月桂冠の印が並ぶ](images/vimeo-thumbnail-awards.jpg)

Neil Halloran／[Vimeo](https://vimeo.com/128373915) より引用（動画のサムネイル）

サムネイルには4つの印があります。うち Vimeo と Best American Infographics の2つは、賞の側の資料で確かめていません。

三つ目は、最終章が拠った本の著者です。Technical.ly は、Pinker の2015年5月31日の投稿を引いています。

> "Can data be emotionally gripping, visually stunning, world-view-changing? Don't miss @neilhalloran 's Fallen of WWII"

データは心をつかみ、世界の見方を変えられるか、見逃すな、という推薦です。Pinker のデータの見せ方は、[光る折れ線グラフの記事](/pinker-physical-line-charts/)でも読みました。

四つ目は、批判です。ただし、作品の数値への批判ではありません。最終章が依拠した「長い平和」論の前提への批判です。Pasquale Cirillo（パスクァーレ・チリッロ）と Nassim Nicholas Taleb（ナシーム・ニコラス・タレブ）は、2015年5月に論文を出しました。過去2000年の紛争に極値理論を当て、死者は裾の重い分布で、真の平均は標本平均よりかなり大きいとしています。

> "We study inter-arrival times between tail events and find that no particular trend can be asserted. All the statistical pictures obtained are at variance with the prevailing claims about "long peace", namely that violence has been declining over time."

大きな戦争の間隔に傾向は言えず、暴力が減ったという主張とは食い違う、という結論です。

この論文は、ソ連兵が何人かといった個々の数を争っていません。争うのは、戦後数十年の観察から減少を言えるか、という前提です。作品の結びの一文は、この点で論文とぶつかると読めます。Pinker は反論を公開していますが、本稿ではその本文を読んでいません。作品の死者数の出典を名指しで問題にした批評は、今回は見つかりませんでした。

## 使い道

可視化の仕事に持ち帰れる判断は、四つあります。

一つ目は、単位を一つに決めて、総計まで変えないことです。1体＝1,000人を総計まで通したので、別の場面の柱どうしを目で比べられます。[ミナールの図](/minard-napoleon-march-to-moscow/)も、1mm＝1万人を二つの軍に通していました。

二つ目は、総数を見せる前に、部分を積み直すことです。7,000万人をいきなり見せず、切り口を変えて足していきます。オマハ・ビーチとアフガニスタンのように、身近な数との比較も挟みます。

三つ目は、数え方で変わる数を、変わると言うことです。ソ連兵、ロマ、総計の幅を、ナレーションの中で言っています。ただ、数ごとの出典は作品にありません。一覧を作品の外に置けば、確かめたい人が辿れたと読めます。

四つ目は、分母と期間の選び方も主張になる、と心得ることです。作品は、死者数と人口比を自ら並べて見せました。一方で、戦後約70年で減少を言えるかは、Cirillo と Taleb が争った点です。どの分母で割り、どこまでの期間を見るかで、同じ棒の物語は変わると読めます。

## 参考・出典

**一次情報**

- Neil Halloran, *The Fallen of World War II*, 2015. 公式ページ. [fallen.io/ww2](https://fallen.io/ww2/)（正規 URL：[neilfilms.com/ww2](https://www.neilfilms.com/ww2/)）。最終章の着想と出典として、Steven Pinker『The Better Angels of Our Nature』を挙げている
- 同 日本語版. [neilfilms.com/ww2/ja](https://www.neilfilms.com/ww2/ja/)
- 同 英語字幕（ナレーション全文）. [en.vtt](https://www.neilfilms.com/ww2/assets/subtitles/en.vtt)。John Gaddis が1989年に「Long Peace」と名付けたという記述は、この字幕による
- 同 作品の JavaScript（データ・場面の定義）. [ww2-1462503229819.js](https://www.neilfilms.com/ww2/assets/js/ww2-1462503229819.js)
- Neil Halloran のサイト. [neilfilms.com](https://www.neilfilms.com/)
- Vimeo（作者の説明文、尺、アップロード日）. [動画ページ](https://vimeo.com/128373915) / [API](https://vimeo.com/api/v2/video/128373915.json)
- YouTube. [動画ページ](https://www.youtube.com/watch?v=DwKPFT-RioU)
- 作品が示すデータの出典：英語版 Wikipedia「World War II casualties」. [Wikipedia](https://en.wikipedia.org/wiki/World_War_II_casualties) / Uppsala Conflict Data Program. [UCDP](https://www.pcr.uu.se/research/UCDP/)

**第三者評価**

- Information is Beautiful Awards 2015（Motion infographic 部門 Gold）. [展示ページ](https://informationisbeautifulawards.com/showcase/773-the-fallen-of-ww2)
- *PhillyVoice*, 2016-03-20（SXSW 受賞、再生数と支払いの集計）. [記事](https://www.phillyvoice.com/philly-developer-wins-sxsw-prize-wwii-data-documentary/)
- *Technical.ly*, 2015年6月（再生数、WebGL、Pinker の投稿）. [記事](https://technical.ly/?p=129736)
- *Technical.ly*（SXSW 受賞）. [記事](https://technical.ly/software-development/neil-halloran-fallen-sxsw-award/)
- *Open Culture*, 2015-10-07（7言語版）. [記事](https://www.openculture.com/2015/10/innovative-film-visualizing-the-destruction-of-world-war-ii-now-available-in-7-languages.html)
- Pasquale Cirillo and Nassim Nicholas Taleb, “On the statistical properties and tail risk of violent conflicts,” arXiv:1505.04722, 2015. [arXiv](https://arxiv.org/abs/1505.04722)
- Steven Pinker による Cirillo と Taleb への反論（PDF、本稿では未読）. [PDF](http://stevenpinker.com/files/pinker/files/comments_on_taleb_by_s_pinker.pdf)
