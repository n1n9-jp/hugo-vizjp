+++
author = "矢崎裕一"
title = "表から、見る線と聴く線を同時に作る──Highcharts Sonification Studio"
slug = "highcharts-sonification-studio"
date = "2026-11-06"
description = "表のデータを、線グラフとその線をなぞる音に同時に変えるツールです。値を音の高さ・定位・音量などのどれに割り当てるか、コードなしで選べます。開発中に、視覚障害者を交えた評価を3回行いました。"
categories = [
    "technology"
]
tags = [
    "ソニフィケーション",
    "アクセシビリティ"
]
image = "images/app-thumbnail.png"
series = ["data-sonification"]
series_weight = 50
seriesByline = "Highsoft／Georgia Tech Sonification Lab"
seriesTitle = "表を、見る線と聴く線に──Highcharts Sonification Studio"
+++

Highcharts Sonification Studio（ハイチャーツ・ソニフィケーション・スタジオ、以下 HSS）は、表に入れたデータを、線グラフと、その線をなぞる音に同時に変えるツールです。値を音の高さ・定位・音量・長さなどのどれに割り当てるかを、コードを書かずにサイドバーで選べます。開発の途中で、全盲の利用者や、視覚障害のある専門家が加わる評価を3回行っています。

開発は Highcharts の開発元 Highsoft AS（ノルウェー）で、Georgia Tech Sonification Lab と共同で設計しました。ブラウザで動き、無料で、ログインは要りません。以下は、ICAD 2021 の論文（Cantrell, Walker, Moseng）、GitHub のソースとアプリ内チュートリアル（v1.1.1）、Georgia Tech のニュース記事（2021年7月）に沿います。

<!--more-->

## 2019年、Java の Sandbox をブラウザへ移す

HSS には前身があります。Georgia Tech Sonification Lab が約15年保守した Java のアプリ、Sonification Sandbox です。表で操作したデータを、見た目と音のグラフに変えるものでした。論文は、ブラウザに移せば配りやすく、スクリーンリーダーでも使いやすくなると書きます。一方で、凝った音は作りにくい（「advanced audio can still be a challenge」）とも書きます。論文は HSS を「a systematic re-implementation of the Sonification Sandbox」と呼び、Sandbox の機能をすべて移したわけではない、とも書いています。

GitHub の最初のコミットは2019年8月26日で、Highsoft の Øystein Moseng（エイステイン・モーセング）によるものです。論文の著者は Stanley J. Cantrell（スタンリー・カントレル）、Sonification Lab 所長の Bruce N. Walker（ブルース・ウォーカー）、Moseng の3人です。2021年6月の ICAD で発表し、論文の時点（2021年3月）では「public beta」でした。v1.0.0 は2022年9月、最新の v1.1.1 は2025年11月です。

画面は、表のタブとグラフのタブの2面で、設定は右のサイドバーにあります。

![左に再生ボタン、中央に2系列の面グラフ、右に音の全体設定が並ぶ HSS の画面](images/app-thumbnail.png)

Highsoft AS／[sonification-studio（GitHub）](https://github.com/highcharts/sonification-studio)より引用（画面下の表記は v0.1.5-beta）

## 値を、高さ・定位・音量・長さに割り当てる

ランディングページは、目的をこう書きます。

> "We want users to be able to use the tool without having to write code, and without prior sonification expertise."

コードも、ソニフィケーションの知識も要らないようにしたい、という意味です。データは CSV の取り込みや手入力で表に入れ、グラフは線・面・散布図・棒などから選びます。

![上半分に X と Y の2列の表、下半分にその値を結んだ折れ線グラフ](images/table-and-chart.png)

Highsoft AS／[HSS のチュートリアル（GitHub）](https://github.com/highcharts/sonification-studio)より引用

音の設定は系列ごとです。各パラメータを、Default（既定）、Fixed（固定値）、Mapped（データに対応）から選びます。Mapped では、最小値・最大値と、対応させる列、向き（Mapping direction）を決めます。対応づけの元にできる列は、ソースを読むかぎり x と y の2つだけです。

![Volume の設定欄。Note volume が Mapped、最小 0、最大 100、Map volume to が y、Mapping direction が Low to high](images/audio-mapping-volume-y.png)

Highsoft AS／[HSS のチュートリアル（GitHub）](https://github.com/highcharts/sonification-studio)より引用

ソースとチュートリアルから読める、データと音の対応は次のとおりです。

| データ | 音のどこに | 既定値・範囲など |
|---|---|---|
| x か y | 音の高さ（Note pitch） | 最小 36・最大 90（「number of notes from C0」）。向きを反転できる |
| x か y（既定は x） | 定位（Note panning） | 全体設定の「Default panning enabled」で、既定はオン。系列ごとに上書きできる |
| x か y、または固定値 | 音量 | 全体の音量は既定 70% |
| x か y、または固定値 | 音の長さ | flute、trumpet など、長く鳴る楽器でだけ効く |
| x か y | ローパス／ハイパスフィルター、トレモロの深さ・速さ | ― |
| 系列 | 楽器 | データには対応させない。既定は piano |
| 系列 | 音のオン・オフ | 見た目は残したまま、音だけ外せる |

ただし、Default のとき高さが x と y のどちらに対応するかは、確かめられませんでした。

下にある Highcharts のライブラリの文書は、対応づけのコツを「7 tips from science」として挙げます。その一つが「G4 to F6 is the most accurate pitch range for most humans」です。同じ文書は、同じ値を複数の音に重ねる「Dual coding」を勧め、定位だけに頼らないようにとも書いています。

C0 を0と数えると、HSS の既定の 36〜90 は C3 から F#7 に当たると読めます。文書が勧める G4〜F6 より、ずっと広い範囲です。**正確さより、違いが聞き取れる幅を優先した既定値**と読めます。

## 再生の速さと、山を残す間引き

全体の設定は「Global settings」にまとまっています。

| 設定 | 内容 | 既定値など |
|---|---|---|
| Play speed | 全体の再生時間を決める | 既定 79 で約8秒。式から計算すると 100 で約2秒 |
| Play detail | 鳴らす音の数を決める。データも再生時間も変えない | 1〜15、既定 15 |
| Global audio context cues | 背景で鳴る目盛りの音。X の値に基づく | 楽器 chop |
| Play marker | 再生中の位置を、グラフ上の十字線で示す | 既定はオン |
| Text description | 点の数や Y の最小値・最大値などを文にして読み上げる | ― |

![Audio の全体設定の Basic 欄。Play Speed（duration 8s）が 79、Play Detail が 15](images/global-play-speed-detail.png)

Highsoft AS／[HSS のチュートリアル（GitHub）](https://github.com/highcharts/sonification-studio)より引用

Play detail について、チュートリアルはこう書きます。

> "When detail is low, and few notes are played, the tool will group data together and play each group as one. The minimum and maximum of each group will be played, to preserve peaks in the data."

細かさを下げると、点を区間ごとにまとめ、各区間の最小値と最大値を鳴らして山を残す、という説明です。ソースでも、区間の中で y の最小と最大を選ぶ方式（minmax）を指定しています。

目盛りの音は、X 軸の目盛りごとにクリック音を鳴らし、時間の進みをつかみやすくするためのもの、とチュートリアルは書きます。目盛りの音と十字線、文の説明は、音だけでも見た目だけでも、グラフの位置を伝えるための仕掛けと読めます。

## 3回の評価で、何が数えられたか

論文の後半は、3段階の評価の報告です。各段階の結果は Highsoft に渡され、次の版の設計に使われました。

| 段階 | 時期・版 | 誰が評価したか |
|---|---|---|
| Phase 1 | 2020年3月、v0.0.4 | 晴眼の参加者12人と、全盲と自認する参加者1人（VoiceOver と JAWS の利用者）による33課題の調査。別に、法的盲と自認する専門家1人 |
| Phase 2 | 2020年11月、v0.0.9 | 専門家4人（うち3人が法的盲と自認） |
| Phase 3 | 2021年2月、v0.0.11 | 専門家2人（うち1人が法的盲と自認）。Highsoft のアクセシビリティ責任者も加わり、画面を順に見て回る非公式な評価 |

Phase 1 の33課題は、表の操作から、再生・停止、音量や速さの調整、グラフの題や色の変更までです。研究者が各課題を PURE という使いやすさの尺度で採点し、結果を課題の数で報告しています。

| 参加者 | 最良の評価（perfect PURE rating）を受けた課題 | 残りの課題 |
|---|---|---|
| 晴眼の参加者（12人） | 33課題のうち29課題（87.9%） | 4課題が低い評価 |
| 全盲の参加者（1人） | 33課題のうち13課題（39.4%） | 20課題が低い評価。うち4課題は、研究者が手を貸さないと進めなかった |

87.9% と 39.4% は、どちらも「33課題のうち、最良の評価がついた課題の割合」です。人数の割合ではありません。全盲の参加者のデータは、晴眼の参加者と分けて分析されました。手助けが要ったのは、表の最後のセルへ移る、データを打ち込む、再生中に停止する、説明文の読み上げボタンを押す、の4課題です。専門家の評価からは、JAWS や NVDA との相性の改善が必要だとされました。

専門家の指摘には、言葉についてのものもあります。

> "Be cautious about using the terms 'frequency' and 'panning' in the UI; these concepts cannot be assumed to be universally understood, especially students"

「frequency」や「panning」は、特に生徒には通じると思わないほうがよい、という指摘です。Phase 1 の課題には「Adjust the minimum frequency to 10%」がありました。現行版の見出しは「Minimum note」で、チュートリアルは音の高さをピアノの鍵盤にたとえます。ただ、ヘルプの文には「pitch/frequency」が残り、言葉を替えた理由を書いた資料は見つかりませんでした。

## 第三者はこのツールをどう見たか

一つ目は、目の見えない利用者の声です。Georgia Tech のニュースは、目の見えない研究者で起業家の Brandon Biggs（ブランドン・ビッグス）の言葉を載せています。

> "I love how accessible all the components are with a screen-reader and how easy it is to create a sonification,"

部品がすべてスクリーンリーダーで扱え、音を作るのが簡単だ、という感想です。ただし、共同開発元が出した記事の中の発言で、独立した評価ではありません。

二つ目は、表現力の限界です。Hyeok Kim（ヒョク・キム）、Yea-Seul Kim（イェスル・キム）、Jessica Hullman（ジェシカ・ハルマン）は、CHI 2024 の論文で、HSS を含む Sandbox の後継をこう評しました。

> "Sonification Sandbox [53] and its successors [14, 27] support more encoding channels, but developers need to use external sound editors to sequence or overlay multiple sonifications"

割り当てられる音は多いが、作った音を並べたり重ねたりするには外のソフトが要る、という指摘です。サイドバーの操作で完結する設計の裏返しと読めます。

三つ目は、普及と持続性です。グラーツ音楽・舞台芸術大学 IEM の Sofia Vallejo Budziszewski（ソフィア・バジェホ・ブジシェフスキ）と Katharina Gross-Vogt（カタリーナ・グロス＝フォークト）は、ICAD 2025 でソニフィケーションのソフトを見渡しました。

> "Tools such as Tone.js [26], TwoTone [12], and Highcharts Sonification [27] have gained traction due to their ease of use and web-based deployment."

使いやすく、ブラウザで動くことで広まった例として、[TwoTone](/twotone-sonification/) と並べています。同じ節は、大学発のツールの多くが資金と後ろ盾の不足で終わる、とも書きます。HSS の論文は、データの道具を売る会社が支える無料の資源、と自らを位置づけていました。企業が引き継いで保守する形は、更新が続く理由の一つと読めます。ICAD 2025 の論文がそう述べているわけではありません。

資料どうしで食い違う点もあります。

| 点 | 資料ごとの記述 |
|---|---|
| ライセンス | Georgia Tech のニュース（2021年）は「MIT License」。2022年9月7日のコミットで、表記を BSD 3-Clause に書き換えている |
| Highcharts | ニュースは「open-source web application Highcharts」。LICENSE.md は、Highcharts ライブラリを商用ライセンスとする |
| ソースの公開 | 論文（2021年3月時点）は「will be made opensource」と未来形。最初のコミットは2019年8月で、公開の時期は確かめられなかった |

## 使い道

可視化の仕事に持ち帰れる判断は、四つあります。

一つ目は、見た目と音を同じ表から作り、片方だけを外せるようにすることです。系列の音を外しても線は残ります。見る人と聴く人が、同じグラフを共有できる設計と読めます。

二つ目は、割り当てを「どの列を、どの範囲に、どちら向きに」の3つの選択にまとめることです。視覚のスケールの定義域・値域・向きを、そのまま音に移した考え方と読めます。既定の音域を広く取るか、文書が勧める狭い音域に絞るかは、作り手が選ぶ点として残ります。

三つ目は、点を間引くときに山と谷を残すことです。平均でまとめれば、極端な値はならされます。何を残す間引きなのかを先に決めておくとよい、と読めます。

四つ目は、評価の数字を、誰の、何の割合かで分けて見ることです。同じ33課題で、晴眼の参加者では87.9%、全盲の参加者では39.4%の課題が最良の評価でした。晴眼の参加者だけなら、ほぼ使いやすいという結果でした。目の見えない人に使ってもらって初めて見える問題がある、と論文の数字は示していると読めます。

## 参考・出典

**一次情報**

- Highcharts Sonification Studio（公式サイト）. [サイト](https://sonification.highcharts.com)
- highcharts/sonification-studio（GitHub。README、LICENSE.md、`src/app/home/Home.vue`、`src/app/home/TutorialConfigureAudio.vue`、`src/app/editor/` 以下の既定値と対応づけのソース、git の履歴を v1.1.1 で参照）. [リポジトリ](https://github.com/highcharts/sonification-studio)
- Stanley J. Cantrell, Bruce N. Walker, Øystein Moseng, “Highcharts Sonification Studio: An Online, Open-Source, Extensible, and Accessible Data Sonification Tool,” ICAD 2021, pp. 211–216（CC BY-NC 4.0）. [doi:10.21785/icad2021.005](https://doi.org/10.21785/icad2021.005) / [PDF](https://icad2021.icad.org/wp-content/uploads/2021/06/ICAD_2021_5.pdf) / [Georgia Tech リポジトリ](https://repository.gatech.edu/entities/publication/ad4383f6-4aad-48b4-9b30-16128fb591d4)
- Joshua Preston, “New Browser-Based Chart Builder Gives Line Graphs, Scatterplots Their Own Audio Track,” Georgia Tech College of Computing, 2021-07-27. [記事](https://cc.gatech.edu/news/649087/new-browser-based-chart-builder-gives-line-graphs-scatterplots-their-own-audio-track)
- Highcharts Docs, Sonification: Getting started / Mapping. [Getting started](https://www.highcharts.com/docs/sonification/getting-started) / [Mapping](https://www.highcharts.com/docs/sonification/mapping)
- HSS Tutorials（Georgia Tech 側のコミュニティサイト。Bruce Walker によるライブデモなど）. [サイト](https://hss-tutorials.github.io/) / [YouTube](https://www.youtube.com/@HSS-Tutorials)
- Sonification Sandbox（Georgia Tech Sonification Lab）. [ページ](http://sonify.psych.gatech.edu/research/sonification_sandbox/)

**第三者評価**

- Brandon Biggs の発言（上記 Georgia Tech のニュース内。共同開発元の記事）. [記事](https://cc.gatech.edu/news/649087/new-browser-based-chart-builder-gives-line-graphs-scatterplots-their-own-audio-track)
- Hyeok Kim, Yea-Seul Kim, Jessica Hullman, “Erie: A Declarative Grammar for Data Sonification,” CHI 2024. [arXiv:2402.00156](https://arxiv.org/abs/2402.00156)
- Sofia Vallejo Budziszewski, Katharina Gross-Vogt, “Legacy, Active & Future Software Tools in Sonification Research,” ICAD 2025. [PDF](https://repository.gatech.edu/server/api/core/bitstreams/24d4ff78-cbfa-4020-9e48-fd3cd8efd4a8/content)
