+++
author = "矢崎裕一"
title = "駅の間の距離を曲の長さに、所得を楽器の数に──Brian Foo「Two Trains」"
slug = "data-driven-dj-two-trains"
date = "2026-11-06"
description = "Brian Foo の Two Trains は、地下鉄2号線の駅と駅の距離を曲の長さに、駅周辺の所得の中央値を、鳴る楽器の数と種類、強さに対応させた曲です。"
categories = [
    "consume"
]
tags = [
    "ソニフィケーション"
]
image = "images/wall-street-station-two-trains.jpg"
series = ["data-sonification"]
series_weight = 20
seriesByline = "Brian Foo"
seriesTitle = "距離を長さに、所得を楽器の数に──Two Trains"
+++

Brian Foo（ブライアン・フー）の「Two Trains」は、ニューヨークの地下鉄2号線の駅と駅の距離を曲の長さに、駅周辺の所得の中央値を、鳴る楽器の数と種類、強さに対応させた曲です。作者は「The number and type of instruments are selected based on that station's surrounding median income」と書いています。曲は49駅を結ぶ48の区間でできていて、全体で約4分半です。音は、地下鉄のドアチャイムにちなんだ E メジャーの音が大半を占めます（作者は「Most of the notes」と書いています）。

作品は、Foo の音楽シリーズ「Data-Driven DJ」の1曲目で、2015年1月に公開されました。以下は、作者の作品ページと FAQ、GitHub のコードとサンプルデータ、第三者の記事3本に沿います。数字が資料ごとに違う点は、並べて示します。データを音にした作品は、[Chemo Singing Bowl](/chemo-singing-bowl/) と [Quotidian Record](/quotidian-record/) でも読んでいます。

<!--more-->

## 2015年、2号線に乗る曲を作る

Foo はニューヨーク在住のプログラマーで、ビジュアル・アーティストです。Data-Driven DJ は全10曲のシリーズで、トップページは「データ、アルゴリズム、借りてきた音」を組み合わせる音楽の実験だと説明しています。動画は2015年1月31日に Vimeo に上がりました。曲は CC BY 4.0、コードは MIT License で公開されています。

2号線を選んだ理由を、Foo は作品ページで挙げています。ブルックリン、マンハッタン、ブロンクスの3区を通り、Broadway に沿って走ること。そして所得のグラフです。

> "When I was looking at a graph of income inequality along the 2 Train, it looked like the perfect song composition with a build-up, climax, and falling action."

2号線沿いの所得格差のグラフが、盛り上がり、頂点、下りのある曲の構成に見えた、という話です。曲を組む前に、可視化を下見に使ったと読めます。

Foo は時間も理由に挙げています。データの音化には時間の経過が要る。だからグラフで一度に見るのではなく、電車に乗るようにデータを順に体験できる、という説明です。

データは二つです。所得は、米国国勢調査局 American Community Survey 2011 Release の、駅周辺の世帯所得の中央値です。駅の位置は、NYC Open Data の「Subway Entrances」の緯度と経度です。駅は Flatbush Ave.–Brooklyn College から Wakefield–241 St. までの49駅です。

## 距離を長さに、所得を「予算」に

作品ページによると、実際の乗車は約1時間45分かかります。曲はこれを約4分半に縮めていて、時速約336マイル（540 km）で止まらずに走る電車にあたります。コード（subway.py）では、区間の拍数を、距離（m）を75で割って四捨五入した値にしています。テンポは120 BPM で、1拍は0.5秒です。1秒で150 m 進むので、時速540 km と一致します。

所得の写し方は、買い物の形をしています。README によると、駅の月額所得（年額を12で割った値）が、その駅の「budget」です。楽器の表には、楽器ごとに 0〜400 の「値段」が付いています。スクリプトは表を上から順に見て、値段が残りの予算より安ければ買い、予算から引きます。高い楽器に当たったら、そこで打ち切ります。

もう一つの仕組みが、所得の百分位です。楽器ごとに、使える駅の範囲が49駅の中の順位で決めてあります。サンプルの表では、同じクラリネットでも、百分位0〜60の駅向けは最大音量0.2、60〜100の駅向けは0.4です。ボーカル1は3段階で、最大音量が0.05、0.1、0.2と上がります。

作品ページは、金融街のような裕福な地域を通ると、楽器の数、音量、力強さが増すと書いています。

![地下鉄 Wall Street 駅のホーム。左に駅名の看板があり、右では電車の窓から男性が顔を出している](images/wall-street-station-two-trains.jpg)

[Data-Driven DJ「Two Trains」](https://datadrivendj.com/tracks/subway/) 作品ページより引用（撮影者の表記なし）

データと音の対応を、作品ページとコードからまとめます。

| データ | 音での表し方 | 規則・値 | 出典 |
|---|---|---|---|
| 次の駅までの距離 | 区間の長さ | 拍数＝距離（m）÷75。120 BPM | 作品ページ、subway.py |
| 駅周辺の所得（月額） | 鳴る楽器の数 | 月額を予算に、楽器を上から買う | subway.py、README |
| 所得の百分位 | 楽器の種類と音量の上限 | 上の範囲ほど最大音量が大きい | サンプルの表 |
| 所得（作者の要約） | 楽器の数と強弱 | 各区間で3〜30の楽器 | 作品ページ |
| ―（時間の経過） | 音量とテンポの揺れ | 楽器ごとの周期の正弦曲線 | subway.py |
| ―（ゆらぎ） | 発音の時刻のずれ | ±20 ms。Halton 数列 | subway.py |
| ―（音の高さ） | 音階・和音 | 大半が E メジャーの音 | 作品ページ |
| 区（Borough） | 音には使わない | 付属の映像で表示 | subway.py |

![動画の一場面。左に2号線の赤い線を引いた地図、右に「BRONX」の区名と、横線上の赤い丸、駅名「Intervale Ave.」が出ている](images/video-still-map-intervale-ave.jpg)

Brian Foo（動画の静止画）／[Hyperallergic](https://hyperallergic.com/180725/data-driven-music-to-for-the-disharmony-of-new-yorks-income-inequality/) より引用

区の名前は、音ではなく、Processing で作った付属の映像で示されます。

## 所得を音高には直接対応させない──チャイムと Steve Reich

曲の音階は、所得とは別の理由で選ばれています。作品ページによると、地下鉄のドアチャイムは Westminster Chimes の G# と E の2音から来ています。作者は、その調の E メジャー（E, F#, G#, B）について「Most of the notes in my song also come from this scale.」と書いています。曲の音の大半が、この音階から来ているということです。

様式の手本は、Steve Reich（スティーヴ・ライヒ）の「New York Counterpoint」です。11本のクラリネットの曲です。Two Trains のクラリネットとバスクラリネットの40個のサンプルは、D メジャーと E メジャーの和音の音を鳴らします。

作品ページは、フェーズ・シフトを曲の柱のひとつに挙げています。同じ旋律をわずかに違うテンポで繰り返し、ずれては戻る技法で、作者は Terry Riley（テリー・ライリー）と Reich が1960年代に切り開いたと説明しています。

> "I felt this was the perfect metaphor for the NYC Subway: constantly looping but at different tempos, always running but never on time, phasing between order and chaos."

違うテンポで回り続け、いつも走っているのに時間どおりではない。それが地下鉄の比喩にぴったりだった、という話です。コードでは、この揺れを正弦曲線で作っています。データではなく、曲の様式です。

作曲はすべてアルゴリズムで、作品ページには「I did not manually compose any part of this song.」とあります。音素材は63個のサンプルで、ニューヨークの音楽家の曲から16個、クラリネット類40、木琴6、電車の警笛1です。

では、なぜ所得に音量と強さを選んだのか。Foo はこう書きます。

> "To be as objective as possible, the same rules are applied throughout the whole song. Also, I tried to select agnostic sound traits (e.g. volume, force) to correlate to median income rather than biased ones (e.g. sad vs happy sounds, vibrant vs dull sounds) to further let the data "speak for itself.""

客観的であるため、曲の最初から最後まで同じ規則を当てた。所得には、悲しい／楽しいのような偏った性質ではなく、音量や強さのような中立な性質を選んだ、という要旨です。**気分を変える音の性質を、所得の表現から外した**ということです。

コードを読むかぎり、所得が変えるのは、どのサンプルが鳴るかと、音量の上限です。サンプルのファイル名には pianissimo から fortissimo までの奏法が入っています。強さの違いは、買えたサンプルと音量の上限の両方から生まれると読めます。

音の高さについても、コードを読むかぎり、所得を音高に直接割り当てる規則は見当たらないと読めます。ただし、鳴るサンプルは所得で変わり、サンプルごとに音高が違います（Gs4、E3、D2 など）。そのため、聞こえる音高の組み合わせは、所得で間接的に変わります。

一方、シリーズの FAQ は、音楽で表す利点を「the creator can manipulate mood」と書いています。シリーズは気分を使うと言い、この曲は所得について気分を使わないと言う。二つの文のあいだには、緊張関係があると読めます。

## 「3〜30の楽器」と「1:37」──資料ごとの数字

作品ページは、各区間で「between 3 and 30 instruments」が鳴ると書いています。本記事の調査担当が、GitHub のサンプルの表を subway.py と同じ規則で数え直すと、別の数字になりました。作者の数字ではなく、参考値です。

| 資料 | 数えたもの | 値 |
|---|---|---|
| 作品ページ（作者） | 各区間で鳴っている楽器 | 3〜30 |
| 調査担当の再計算 | 1駅に割り当てられる楽器の表の行 | 9（E 180 St. ほか）〜62（Wall St.、Chambers St. ほか） |

二つは同じ数え方ではないと読めます。表には値段0のボーカルがあり、同じ音色が百分位ごとに別の行になっています。作品ページは最終データとして Google スプレッドシートにリンクしていて、サンプルの表がそれと同じかは確かめていません。

時刻もずれます。作者は、いちばん大きい部分を Park Place〜Chambers St.（所得 $205,192）の 1:37、いちばん静かな部分を E 180 St.〜Bronx Park East（$13,750）の 3:53 と書いています。

| 資料 | 対象 | 値 |
|---|---|---|
| 作品ページ（作者） | 曲の長さ | 約4分半 |
| Vimeo の動画 | 動画の長さ | 286秒 |
| 調査担当の再計算 | 本編の長さ | 261.5秒 |
| 作品ページ（作者） | いちばん大きい部分 | 1:37 |
| 調査担当の再計算 | Park Place→Chambers St. の区間の始まり | 1:16 |
| 作品ページ（作者） | いちばん静かな部分 | 3:53 |
| 調査担当の再計算 | E 180 St. の区間の始まり | 3:32 |

再計算の時刻は、どちらも作者の時刻より約21秒早くなります。動画は本編より約24秒長いので、冒頭の導入か余白のためと読めますが、原因は確かめていません。

## 第三者はこの曲をどう見たか

三つの記事は、別々の点を見ています。一つ目は先行例との比較です。Hyperallergic の Allison Meier（アリソン・マイヤー、2015年2月）は、Daniel Crawford の「A Song of Our Warming Planet」（2013）と並べました。

> "Both projects make what can be abstract data into a narrative aural experience."

どちらも抽象的になりがちなデータを、物語のある聴く体験にしている、という評です。コードの公開で、誰でも自分の路線を曲にできる点も評価しました。

二つ目は、音楽の側からの問いです。New Music USA の Molly Sheridan（モリー・シェリダン、2015年7月）は、Reich を知っていれば音のつながりがすぐ分かる、と素材の選び方を評価しました。そのうえで、こう問います。

> "Should the music sound "better" when passing through rich neighborhoods in his presentation of income? ... Where is the line between representation and judgment?"

裕福な地域を通る音楽は「より良く」聞こえるべきか、表現と判断の境目はどこか、という問いです。Sheridan は、Foo が一部だけを良く聞かせる手直しをせず、曲全体をデータに忠実に保つことも伝えています。

三つ目は、可視化との関係です。Science Friday（2017年2月）は Foo を例に挙げ、こう書きました。

> "so-called "data sonifiers" don't expect their work to replace data visualizations, but rather complement the facts and figures they depict"

データを音にする人たちは、可視化に代わるのではなく、補おうとしている、という見方です。

## 使い道

可視化の仕事に持ち帰れる判断は、四つあります。

一つ目は、データに使う要素を絞り、残りを固定することです。Two Trains では、時間の長さが距離を、楽器の数と強さが所得を表します。フェーズ・シフトや発音のゆらぎは、データとは関係のない様式です。音階も、所得には直接は割り当てていないと読めます。棒グラフで長さだけをデータに使い、色を飾りとして固定するのと同じ組み立てだと読めます。

二つ目は、価値の判断を呼ぶ変数に、気分を左右しない性質を当てることです。それでも Sheridan の問いは残ります。大きい音が「豊か」に聞こえることまでは、避けきれないと読めます。図でも、色の明るさが良し悪しに見えないかを確かめるとよいと筆者は考えます。

三つ目は、順序のあるデータを時間に載せることです。路線には駅の順があり、そのまま曲の時間になります。時間軸を使う表現では、データの側に自然な順序があるかを先に見るとよいと読めます。

四つ目は、規則とコードを公開し、数え方と基準を添えることです。コードとサンプルデータが公開されていたので、再計算ができました。その結果、作者の数字と、サンプルデータからの再計算が合わないことが分かりました。原因は確かめていません。何を数えたか、時刻は導入を含むか。そこまで書いてあれば、聴き手は数字を照らし合わせられると筆者は考えます。

## 参考・出典

**一次情報**

- Brian Foo, Data-Driven DJ（シリーズの説明、目次、Press 欄）. https://datadrivendj.com/
- Brian Foo, "Two Trains — Sonification of Income Inequality on the NYC Subway"（作品ページ）. https://datadrivendj.com/tracks/subway/
- Brian Foo, Data-Driven DJ FAQ. https://datadrivendj.com/faq/
- beefoo/music-lab-scripts（GitHub リポジトリ）. https://github.com/beefoo/music-lab-scripts
- 01_subway の README. https://github.com/beefoo/music-lab-scripts/tree/master/01_subway （raw：https://raw.githubusercontent.com/beefoo/music-lab-scripts/master/01_subway/README.md）
- subway.py. https://raw.githubusercontent.com/beefoo/music-lab-scripts/master/01_subway/subway.py
- data/stations.csv.sample. https://raw.githubusercontent.com/beefoo/music-lab-scripts/master/01_subway/data/stations.csv.sample
- data/instruments.csv.sample. https://raw.githubusercontent.com/beefoo/music-lab-scripts/master/01_subway/data/instruments.csv.sample
- LICENSE（MIT）. https://raw.githubusercontent.com/beefoo/music-lab-scripts/master/LICENSE
- Vimeo の動画（2015-01-31 アップロード、286秒）. https://vimeo.com/118358642
- SoundCloud（音声）. https://soundcloud.com/functionfoo/two-trains-sonification-of-income-inequality-on-the-nyc-subway
- データ元：U.S. Census Bureau, American Community Survey 2011 Release. http://www.census.gov/acs/www/data_documentation/2011_release/
- データ元：NYC Open Data, Subway Entrances. https://data.cityofnewyork.us/Transportation/Subway-Entrances/drex-xx56

**第三者評価**

- Allison Meier, "Data-Driven Music for the Disharmony of New York's Income Inequality," *Hyperallergic*, 2015-02-10. https://hyperallergic.com/180725/data-driven-music-to-for-the-disharmony-of-new-yorks-income-inequality/
- Molly Sheridan, "Data-Driven DJ Brian Foo: Statistics That Sing," *New Music USA*, 2015-07-22. https://newmusicusa.org/?p=277105
- "How to Listen to Data," *Science Friday*, 2017-02-07. https://www.sciencefriday.com/articles/how-to-listen-to-data/
- "Hear the Sound of NYC's Income Gap on This Data-Driven Subway Ride," *VICE*（Creators Project）. https://www.vice.com/en/article/hear-the-sound-of-nycs-income-gap-on-this-data-driven-subway-ride/
