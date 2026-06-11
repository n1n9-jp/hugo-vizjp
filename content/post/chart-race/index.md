+++
author = "Yuichi Yazaki"
title = "棒グラフレース（Bar Chart Race）とは"
slug = "chart-race"
date = "2026-06-11"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/bar-chart-chart.png"
+++

棒グラフレースは、時間とともに変化するデータを棒グラフでアニメーション表示し、順位や値の変動を「レース」のように視覚化する手法です。2019年にFinancial Timesのデータビジュアライザー、John Burn-Murdoch氏が作成した作品が爆発的に普及しました。

<!--more-->

![John Burn-Murdoch氏](images/John-Burn-Murdoch-1-771x505.jpg)


## 作品の見方

このアニメーションでは、横軸に時間（年など）が進み、縦方向に各項目（都市やブランドなど）の値を示す棒が並びます。時間経過とともに棒の長さが変わり、順位が入れ替わる様子が滑らかにアニメーションされます。視聴者は上位の項目がどのように台頭・交代していくかを一目で把握できます。再生速度を調整したり、一時停止して特定の時点を確認したりしながら、データのダイナミズムを楽しむことができます。

特に、John Burn-Murdoch氏の「世界の最も人口の多い都市の変遷（1500年以降）」では、欧米の都市から新興国の都市へのシフトが視覚的にわかりやすく表現されています。

## 背景知識

以前から似たアニメーションは存在していましたが、Burn-Murdoch氏の作品がTwitter（現X）でバズり、「bar chart race」という名称が定着しました。これにより、データ可視化の新しい表現手法として世界的に注目を集めました。Mike Bostock氏（D3.js作者）がObservableで解説ノートブックを提供したことも普及に寄与しています。

## ライン・チャート・レース（Line Chart Race）とは

ラインチャートレース（別名：Horserace chart）は、複数の項目の値や順位をラインで追跡し、時間とともに変化する競争の様子をアニメーションで表現します。Flourishが2019年頃にテンプレートとして提供・普及させた形式です。

![](images/resource-lcr-101.png)

## 作品の見方

各ラインが参加者（選手、ブランド、政治家など）を表し、時間軸に沿って値や順位が上下します。ラインが交差したり、上昇・下降する様子がレースのように描かれます。Flourishのテンプレートでは、Scoresモード（実際の値）とRanksモード（順位）を切り替え可能で、画像を付与したり、キャプションを追加したりできます。アニメーションを再生しながら、特定のラインをフォーカスして追うと、競争の激しさや逆転劇が詳細に理解できます。スポーツの順位変動や選挙情勢、市場シェアなどに特に適しています。

## 背景知識

Bar Chart Raceの人気を受けて登場した派生形式で、Flourishの使いやすいテンプレートにより誰でも簡単に作成可能になりました。データに時間軸と複数の系列があれば、インタラクティブなストーリーテリングに活用できます。

## 作成方法の概要

- **Bar Chart Race**: Flourishのテンプレート、Pythonのbar_chart_raceライブラリ、Observableなどで作成可能です。
- **Line Chart Race**: 主にFlourishの専用テンプレートが便利です。データをCSVでアップロードし、カスタマイズして公開できます。

これらの手法は、静的なグラフでは伝わりにくい「時間変化の物語」を効果的に伝える強力なツールです。

## まとめ

棒グラフレースとラインチャートレースは、データ可視化のアニメーションとして非常に魅力的な手法です。John Burn-Murdoch氏やFlourishの貢献により普及したこれらの形式を、ぜひあなたのデータ分析やブログ、プレゼンテーションに取り入れてみてください。


## 参考・出典

- [Bar chart race: the most populous cities through time (FT)](https://www.ft.com/video/83703ffe-cd5c-4591-9b4f-a3c087aa6d19)
- [Bar chart race — the most populous cities in the world (Observable)](https://observablehq.com/@johnburnmurdoch/bar-chart-race-the-most-populous-cities-in-the-world)
- [Line chart race (Flourish)](https://flourish.studio/visualisations/line-chart-race/)
- [Line chart race template (Flourish)](https://app.flourish.studio/@flourish/horserace)