+++
author = "矢崎裕一"
title = "表の1列を音階の段に割り当て、1行を1拍で鳴らす──TwoTone"
slug = "twotone-sonification"
date = "2026-11-06"
description = "TwoTone は、表の1列を最小値から最大値まで音階の段に割り当て、1行を1拍として鳴らすツールです。データが決めるのは、音の高さと、鳴らすか黙るかだけです。"
categories = [
    "technology"
]
tags = [
    "ソニフィケーション",
    "データジャーナリズム",
    "オープンソース"
]
image = "images/twotone-editor-honey.png"
series = ["data-sonification"]
series_weight = 99
seriesByline = "Datavized Technologies／Sonify"
seriesTitle = "1列を音の高さにして、1行1拍で鳴らす──TwoTone"
+++

TwoTone（ツートーン）は、表の1列を、最小値から最大値まで音階の段に割り当て、1行を1拍として鳴らすツールです。データが決めるのは、音の高さと、鳴らすか黙るかだけです。初期設定では、値をハ長調の2オクターブ、15段に丸めます。音量・楽器・調・テンポは、使う人がトラックごとに選びます。ブラウザで動く無料のウェブアプリで、コードを書かずに使えます。

TwoTone は2019年3月5日に公開されました。作ったのはニューヨークのデータデザインスタジオ Datavized Technologies で、Google News Initiative（GNI）が支援しました。2021年12月からは Sonify が保守を引き継ぎ、2023年半ばに開発が止まっています。以下は、GitHub のリポジトリ（README とソースコード）、公式サイト twotone.io、開発に関わった人たちの公開記事に沿います。

<!--more-->

## 2019年3月、報道の現場に向けて公開される

TwoTone を依頼したのは、Google の Simon Rogers（サイモン・ロジャース）です。当時は Google News Lab のデータエディターでした。助言は、マイアミ大学の Alberto Cairo（アルベルト・カイロ）が務めました。開発の中心は、Datavized の CEO の Hugh McGrory（ヒュー・マグローリー）と、技術リードの Brian Chirls（ブライアン・チャールズ）です。

公開の日、Rogers は自分の記事にこう書きました。

> "Previously, to make data into music, you'd need to have expert coding skills. Now, anybody can do it."

これまでデータを音楽にするには高度なプログラミングの技術が要ったが、今は誰にでもできる、という話です。

![TwoTone の公式サイトのトップページ。「Welcome to TwoTone」の見出しの上に datavized と Google News Initiative のロゴがあり、下に「Developed by」「What is it for?」「Data」「Music」の4つの説明が並ぶ](images/twotone-homepage-2019.png)

Datavized Technologies／Simon Rogers「Sonification: make beautiful music with your data」（Medium）より引用。画像にライセンスの表記はありません（TwoTone の MPL 2.0 はコードのライセンスで、この画像に当てはまるとは書かれていません）

開発元の書き方は、資料と時期で違います。

| 資料 | 開発元の書き方 |
|---|---|
| 公式サイト（2019年の画面） | 「imagined and made by Datavized Technologies with support from Google News Initiative」 |
| McGrory「An Intro to TwoTone」（2019年） | 「imagined by Datavized with support from Google News Initiative」 |
| 現在の README（sonifydata/twotone） | 「a Sonify project built with support from Google News Initiative」と書き、続けて「originally developed by Datavized Technologies」 |

公開してからの流れは、次のとおりです。

| 日付 | 出来事 | 出典 |
|---|---|---|
| 2019-02-28 | GitHub に最初のコミット（Brian Chirls） | git log |
| 2019-03-05 | 公開。McGrory、Rogers、Cairo が紹介記事を出す | 各記事 |
| 2019年 | Online Journalism Awards の技術革新部門でファイナリスト。Information is Beautiful Awards でロングリスト | 各賞のページ |
| 2021-12-10 | リポジトリが datavized/twotone から sonifydata/twotone へ移る | datavized/twotone の README |
| 2022-01-14 | MIDI 出力を追加（Cristian Vogel） | git log |
| 2023-10-12 | README の冒頭に「As of mid-2023, development on TwoTone has been paused.」を追記 | README、git log |
| 2024-07-27 | 最後のコミット（サンプルデータの追加） | git log |

Sonify は McGrory が共同創業した米国の会社です。2026年11月6日の時点で、旧アプリの datavized.github.io/twotone/ と、MIDI 出力のベータ版は開けました。README が案内する sonify.io/twotone/ は、名前解決ができませんでした。

着想について、McGrory は次のように書いています。

> "The inspiration for Twotone came from a 2016 TED talk by Wanda Diaz Merced 'How A Blind Astronomer Found A Way To Hear The Stars'."

全盲の天文学者 Wanda Diaz Merced（ワンダ・ディアス・メルセド）の2016年の TED トークが着想のもとだ、という話です。開発の途中では、18世紀の「音楽のさいころ遊び」も調べました。グラニュラー合成は動かせたものの、「too complex for the beginner」として外しています。名前は、英国の音楽ジャンル「2 Tone」から取りました。

## 1列を、音階の15段に丸める

使う人は、まず表を読み込みます。形式は .xls、.xlsx、.csv、.ods で、上限は20MB・2,000行です。データはブラウザの中だけで処理し、サーバーには送りません。

![「Select Data Source」の画面。バスク州の時間の使い方、米国のハチミツ生産、火星の天気など7つのサンプルが並び、その下にファイルの形式と、20MB・2,000行の上限が書かれている](images/twotone-select-data-source.png)

Datavized Technologies／Hugh McGrory「An Intro to TwoTone」（Medium）より引用（GIF 動画の1コマ）。画像にライセンスの表記はありません（MPL 2.0 はコードのライセンスで、この画像に当てはまるとは書かれていません）

読み込むと、TwoTone は1本の「Musical Scale」トラックを自動で作ります。README は、トラックをこう説明しています。

> "Generates a sequence of notes with a pitch corresponding to the data value."

データの値に応じた高さの音を、順に鳴らす、という説明です。

ソースコードで確かめると、値は2段階で音になります。まず列の最小値と最大値を使い、値を0〜1に引き伸ばします。次に、その値に「段の数−1」を掛けて四捨五入し、音階の何段目かを決めます。段の数の初期値は15で、コードのコメントは「two whole octaves (inclusive)」です。7音の音階で2オクターブと、上端の1音です。README は、両端をこう書いています。

> "The lowest and highest values will play the tonic note at either end of the given scale."

最小値と最大値は、音階の両端の主音を鳴らす、という説明です。初期設定のハ長調なら、最小値が下のド、最大値が2オクターブ上のドです。

データと音の対応は、次のとおりです。

| データ | 音 | 決め方 | 出典 |
|---|---|---|---|
| 行の順番 | 時間 | 1行＝1拍。拍の長さは全体のテンポ（BPM）で決まる | README「Track Tempo」 |
| 選んだ1列の値（数値・日時） | 音の高さ | 最小〜最大を0〜1にし、`round(値 × (段の数 − 1))` で段に丸める | data.worker.js、scale/index.js |
| 文字列の列 | 音の高さ | 列に出てくる値を並べ、その順位を0〜1にする | data.worker.js |
| 空欄・数値でない値 | 休符 | 音を出さない | scale/index.js |
| 別の列の値の範囲（フィルター） | 鳴る／黙る | 範囲外の行は無音にする | README「Filtering a Track」 |

![TwoTone の編集画面。左に「Musical Scale」と「Narration Audio」の2本のトラックが棒グラフで並び、右に1998年からの年ごとの表があり、再生中の2005年の行と棒がオレンジで示されている](images/twotone-editor-honey.png)

Datavized Technologies／Hugh McGrory「An Intro to TwoTone」（Medium）より引用。画像にライセンスの表記はありません（MPL 2.0 はコードのライセンスで、この画像に当てはまるとは書かれていません）

画面では、上の Musical Scale トラックが「Value of Production ($)」の列を鳴らしています。トラックの棒グラフは行ごとの値で、再生中の行がオレンジになります。下の再生バーには「#8: 2005」と、いま鳴っている行が出ています。

README の例は、100行を60bpm で鳴らすと1秒に1音で、「100秒、または1:20」と書いています。100秒は1分40秒なので、計算が合いません。

段は半音ではなく、音階の段で数えます。そのため、**値の細かな差は、段の数までしか聞き分けられない**と読めます。音域を広げれば段は増えます。README はこう書いています。

> "More octaves will result in finer-grained distinction between values. Fewer octaves will allow different tracks to represent different data at opposing ends of the scale, even using the same instrument, like playing left hand and right hand on a piano."

オクターブを増やせば値の違いが細かく分かれ、減らせば別のトラックを音域の上と下に分けられる、という説明です。ピアノの右手と左手のように、という例えが添えてあります。

1行に何音か鳴らす設定では、アルペジオを選べます。その行の値で決まった音を根音に、音階の1・3・5・8度目を順に重ねます。データの量は増えず、リズムの飾りになると読めます。

## 鳴らすか黙るかを、別の列で決める

高さのほかに、データで決まるのは「鳴るか、黙るか」です。どのトラックにもフィルターがあり、列と値の範囲を選びます。範囲の外の行は無音になります。README は、選んだ範囲を棒グラフで見せ、どこが鳴ってどこが黙るかを示す、と書いています。

![Musical Scale トラックの展開ビュー。Data Source は Time、Instrument は Piano。上の棒グラフの左側が灰色になり、その下に Volume のスライダー、Filter by と Filter Value、Key（C・Major）、Scale Range（2 Octaves）、Start Octave（Auto）、Track Tempo（1x）が並ぶ](images/twotone-track-advanced-controls.png)

Datavized Technologies／Hugh McGrory「An Intro to TwoTone」（Medium）より引用（GIF 動画の1コマ）。画像にライセンスの表記はありません（MPL 2.0 はコードのライセンスで、この画像に当てはまるとは書かれていません）

画面では、Filter Value のつまみが右へ動かされ、棒グラフの左側が灰色になっています。灰色の行は鳴りません。README は、複数のトラックでフィルターを組み合わせると、音や楽器やリズムを重ねられる、と書いています。

もう一つのトラック「Narration Audio」は、録音や取り込んだ音声を流します。再生のしかたは二つです。Loop は全体を通して繰り返し、Active sections はフィルターで鳴る区間の頭ごとに1回流します。後者は、データが音声のきっかけを決めると読めます。

題名を読み上げる機能もあります。Google の Text-to-Speech API で題名を読み、音楽の前に置きます。聞き手に文脈を渡すためです。McGrory は、この機能についてこう書いています。

> "Being pedantic, this means that Twotone can't really be described as 'sonification' since that word refers to 'the use of non-speech audio to convey information or perceptualize data'."

厳密に言えば、言葉の音声を使う以上、TwoTone は「ソニフィケーション」とは呼べない、という断り書きです。

## 音量・楽器・調は、人が選ぶ

トラックごとの残りの設定は、データではなく人が選びます。

| 設定 | 選べるもの | 出典 |
|---|---|---|
| 楽器 | Piano、Church Organ、Mandolin、violin、Marimba、Glockenspiel、Double Bass、Harp、Trumpet、Electric Guitar、Midi Out | samplerInstruments.js |
| 調と旋法 | 調は C〜B の12。旋法は major、minor、dorian など11 | scales.js |
| 音域・開始オクターブ | オクターブの数と、楽器の音域の中での位置 | README |
| テンポ | 全体の長さ・1行の長さ・BPM と、トラックごとの倍率 | README |
| アルペジオ | 上昇・下降・なし | README、constants.js |
| 音量 | トラックごとのスライダー | README、AudioDataEngine.js |

音量がデータに結びつくかどうかは、資料によって書き方が違います。

| 資料 | 音量についての記述 |
|---|---|
| README「What is TwoTone's goal?」 | 「attaching individual time-based data sets and individual columns of data to variables in sound (pitch, volume)」 |
| README「Volume Adjustment」 | 「Every track has a volume slider in the expanded view.」 |
| ソース src/engine/AudioDataEngine.js | トラックに保存した `track.volume` を、そのまま音量（ゲイン）に入れる |
| ソース src/engine/types/scale/index.js | 行の値から決めるのは、音の高さ（周波数か MIDI ノート）だけ |

ソースは2026年11月6日時点の master で確かめました。

作り手は、TwoTone の使い道を二つに分けています。公式サイトと McGrory の記事は、データの理解についてこう書きます。

> "If understanding the data is your goal, you may want to keep things simple and resist the urge to make too many layers or add too many effects."

理解が目的なら、層や効果を重ねすぎないこと、という助言です。もう一つは曲づくりで、1列から自動でトラックを作り、楽器を替え、列を足して試す、と書きます。McGrory は、音楽家たちが「it adds a randomness that sparks new ideas」と気に入っている、とも書いています。データの理解と、偶然から曲を作ることを、一つの道具に同居させていると読めます。

公開の日には、使った例がいくつも出ました。Cairo は、米国の失業率（2009年1月〜2018年12月）を音にしました。Maarten Lambrechts（マールテン・ランブレヒツ）は、1880〜2018年の世界の気温偏差を、グロッケンシュピールのハ短調で鳴らしました。Rogers は、バスク州の時間の使い方のデータを紹介しています。

> "See if you can work out when people get up to go to work, or leave to come home, just from the sound of the data."

音だけで、人が仕事に出る時刻や帰る時刻が分かるか試してほしい、という話です。Cairo は、TwoTone のねらいを、ほかの道具より強力にすることではなく、数分で覚えられる簡単さだ、と書いています。

## 第三者はこのツールをどう見たか

Rogers と Cairo はプロジェクトの依頼者と助言者なので、ここでは開発に関わっていない側の評価を見ます。論点は、それぞれ違います。

一つ目は、報道での入口としての評価です。RJI（Reynolds Journalism Institute）は2024年、報道向けのソニフィケーションの道具を紹介する記事の1本目に、TwoTone を選びました。

> "Both playful and practical, it is an ideal way to explore turning data into audio."

遊べて実用的でもあり、データを音にすることを試すのに向いている、という評価です。記事は、同梱の米国のハチミツ生産のデータを使い、価格が上がるにつれて上昇するアルペジオがそれに応じる、と書いています。同じ記事は、値を音の性質に対応させる「parameter mapping」を基本の型として説明しています。

二つ目は、人文系の研究・教育での使い方です。カナダの McMaster 大学 Sherman Centre for Digital Scholarship は、ソニフィケーションの学習教材で TwoTone の手順を載せています。データ漏えいのデータを使い、日付や年、数値に変えた文字列のデータを複数のトラックで鳴らします。強調したいトラックのほかは静かにする、と音量の使い方も書いています。音量を強調に使うのは人の操作で、データとの連動ではないことが、この例から分かると読めます。

三つ目は、賞の場です。2019年、Online Journalism Awards の「Gannett Foundation Award for Technical Innovation in the Service of Digital Journalism」でファイナリストに残りました。同じ年、Information is Beautiful Awards ではロングリストに入りました。報道界と可視化界の両方で、道具として名前が挙がったことになります。どちらの審査講評も、確かめられませんでした。

TwoTone だけを扱った学術的な評価や比較研究は、見つかりませんでした。

## 使い道

可視化の仕事に持ち帰れる判断は、四つあります。

一つ目は、対応を一つに絞ることです。TwoTone では、行の順番が時間、値が音の高さです。1本の線を左から右へたどる折れ線グラフと、同じ読み方を耳でさせる形だと読めます。初めて音でデータを聞く人には、この狭さが入口になると読めます。

二つ目は、段の数が分解能だと意識することです。初期設定の15段では、値は15通りの高さにしかなりません。差を聞かせたいならオクターブを増やし、複数の列を重ねるなら音域を分ける。README のこの説明は、目盛りの細かさを決めるのと同じ判断と読めます。

三つ目は、最小値と最大値で引き伸ばすことの影響です。両端が音階の両端の主音になるので、大きく外れた値が一つあれば、残りの値は狭い段に集まると読めます。音にする前に、範囲を見ておくとよいと読めます。

四つ目は、データで決まるものと、人が選ぶものを分けて伝えることです。TwoTone では、音量・楽器・調はデータではありません。作り手自身が、理解が目的なら層を重ねすぎないよう書いています。聞かせるときは、何がデータで何が演出かを、題名や説明で先に渡すとよいと読めます。読み上げ機能は、そのための仕組みでした。

音を物の形に写した例として、[Chemo Singing Bowl](/chemo-singing-bowl/) も読めます。移動の記録をレコードにした [Quotidian Record](/quotidian-record/) は、同じ特集の1本です。

## 参考・出典

**一次情報**

- sonifydata/twotone, README（2026-11-06 に取得）. [GitHub](https://github.com/sonifydata/twotone) / [raw](https://raw.githubusercontent.com/sonifydata/twotone/master/README.md)
- sonifydata/twotone のソースコード（src/constants.js、src/util/data/data.worker.js、src/engine/types/scale/index.js、src/engine/types/scale/samplerInstruments.js、src/soundq/src/util/scales.js、src/engine/AudioDataEngine.js、src/engine/speech.js、LICENSE、git log）. [GitHub](https://github.com/sonifydata/twotone)
- datavized/twotone（移管の告知）. [GitHub](https://github.com/datavized/twotone)
- TwoTone 公式サイト. [トップ](https://twotone.io/) / [About](https://twotone.io/about/) / [How it works](https://twotone.io/how-it-works/) / [Examples](https://twotone.io/examples/) / [Tutorials](https://twotone.io/tutorials/)
- Hugh McGrory, "An Intro to TwoTone," 2019-03-05. [Medium](https://medium.com/kinetek/an-intro-to-twotone-dd69305da9c3)
- Simon Rogers, "Sonification: make beautiful music with your data," 2019-03-05. [Medium](https://medium.com/@smfrogers/sonification-make-beautiful-music-with-your-data-d8fd59b84f3f)
- Alberto Cairo, "Sonifying data with TwoTone," *The Functional Art*, 2019年3月. [ブログ](https://thefunctionalart.blogspot.com/2019/03/sonifying-data-with-twotone.html)
- 埋め込みチュートリアル動画（Cairo のブログより）. [YouTube 1](https://www.youtube.com/embed/I0vL_g1DYmY) / [YouTube 2](https://www.youtube.com/embed/QDTTWHNUt1w)
- Sonify. [トップ](https://www.sonify.io/) / [TwoTone](https://www.sonify.io/twotone/)
- Online Journalism Awards 2019, TwoTone の応募ページ. [ページ](https://awards.journalists.org/entries/twotone/)
- Information is Beautiful Awards 2019, TwoTone の掲載ページ. [ページ](https://www.informationisbeautifulawards.com/showcase/4497)
- TwoTone アプリ. [旧アプリ](https://datavized.github.io/twotone/) / [MIDI 出力ベータ](https://twotone-midiout-beta.netlify.app/)

**第三者評価**

- Lamar, "Embracing data-driven audio as a storytelling method," RJI（Reynolds Journalism Institute）, 2024-08-08. [記事](https://rjionline.org/news/embracing-data-driven-audio-as-a-storytelling-method/)
- Sherman Centre for Digital Scholarship, McMaster University, "Data Sonification," Lesson 4（CC BY 4.0）. [教材](https://learn.scds.ca/data-sonification/lessons/lesson4-sonifying-the-data.html)
