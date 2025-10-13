+++
author = "Yuichi Yazaki"
title = "バブル・チャート"
slug = "bubble-chart"
date = "2025-10-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

バブル・チャート（Bubble Chart）は **散布図（Scatter Plot）を拡張した多次元データの可視化手法** です。基本的な散布図では、横軸（X軸）と縦軸（Y軸）の2変数でデータ点をプロットしますが、バブル・チャートではさらに **「円（バブル）の大きさ」** で3つ目の変数を表現します。場合によっては色や透明度を使って4つ目、5つ目の変数を同時に可視化することも可能です。

このように、バブル・チャートは **「3次元以上の情報を2次元平面上で表す」** ことを目的としています。


<!--more-->



## チャートの見方
各データ点は「円（バブル）」として表されます。

- **X軸**：1つ目の変数（例：GDP）
- **Y軸**：2つ目の変数（例：平均寿命）
- **円の大きさ（面積）**：3つ目の変数（例：人口）
- **円の色**（オプション）：4つ目の変数（例：地域、産業区分など）

たとえば、有名な例として「Gapminderの世界開発データ」では、X軸をGDP、Y軸を平均寿命、バブルの大きさを人口とし、各国を一つの円として表示します。これにより、国ごとの経済力、健康水準、人口規模を**同時に**理解することができます。

## 特徴と応用
バブル・チャートは以下のような特徴を持ちます。

| 特徴 | 説明 |
|------|------|
| 情報量が多い | 3〜5変数を一枚の図で可視化できる |
| 直感的理解が可能 | 面積による数量表現は視覚的に分かりやすい |
| 比較が容易 | 同一カテゴリ間の差異や傾向を直感的に捉えられる |

主に以下の分野で利用されます。

- 経済データ（GDP、人口、寿命など）の国際比較  
- マーケティング分析（市場規模×成長率×シェア）  
- 環境データ（CO₂排出量、人口密度、エネルギー消費量など）

## デザイン上の注意点
- バブルの**面積が値に比例する**ように設定すること（半径ではない）。
- バブルが重なりすぎる場合は、透明度（opacity）を下げる。
- 色の選択にはカテゴリや値の意味を考慮し、**連続値ならグラデーション、離散値なら明確な色分け**を使う。
- 数値スケールをログ変換するなどして、極端な値の偏りを抑える。

## 歴史的背景
バブル・チャートという形式自体は20世紀後半から普及しましたが、概念的には **ウィリアム・プレイフェア（William Playfair）** による散布図（18世紀末）を継承しています。プレイフェアが確立した軸構造を基礎に、「面積を変数として使う」発想を加えたことで、より多次元的な表現が可能になりました。

現代では、Hans Rosling（ハンス・ロスリング）が **Gapminder** プロジェクトでこの形式を広く一般に知らしめ **「動的バブル・チャート」** としてアニメーション表示を行ったことが特に有名です。

### まとめ
バブル・チャートは、散布図の拡張として **多変量データを直感的に理解できる** 強力な可視化手法です。適切なスケール設定とデザイン上の配慮を行うことで、複雑な社会・経済・環境データを視覚的にわかりやすく表現できます。特に、変化や比較を強調したい場合には非常に効果的です。



## 参考・出典

- [“Bubble chart” — Wikipedia](https://en.wikipedia.org/wiki/Bubble_chart)  
- [“Bubble Chart” — The Data Visualisation Catalogue](https://datavizcatalogue.com/methods/bubble_chart.html)  
- [“A Complete Guide to Bubble Charts” — Atlassian (data/charts)](https://www.atlassian.com/data/charts/bubble-chart-complete-guide)  
- [“Present your data in a bubble chart” — Microsoft サポートページ](https://support.microsoft.com/en-us/office/present-your-data-in-a-bubble-chart-424d7bda-93e8-4983-9b51-c766f3e330d9)  
- [“Bubble Charts Explained” — NetSuite（Ultimate Guide to Bubble Charts）](https://www.netsuite.com/portal/resource/articles/erp/bubble-charts.shtml)  
- [“Motion chart” — Wikipedia（動的バブル・チャート）](https://en.wikipedia.org/wiki/Motion_chart)  
- [“Trendalyzer” — Wikipedia（Gapminder の可視化手法）](https://en.wikipedia.org/wiki/Trendalyzer)  