+++
author = "Yuichi Yazaki"
title = "サーキュラー・チャート（Circular Chart）"
slug = "circular-chart"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

サーキュラー・チャート（Circular Chart）は、時間の経過や周期性を円形に配置して表すチャートの総称です。

線・面・棒などの形式をとり、時間的データの「周期的なパターン」や「季節変動」「日内変化」などを可視化するのに適しています。

極座標系を利用するため、1日の24時間、1年の12か月といった「周期的に繰り返すデータ」を自然に表現できるのが特徴です。


<!--more-->


## チャートの見方

サーキュラー・チャートでは、アナログ時計のように円の外周を時間軸として使用します。たとえば12時の位置を起点とし、時計回りに時間が進行します。半径方向に値を示すことで、1周で1周期のデータを直感的に読み取れます。

![](images/mainvisual.png)

図の左から順に、

- 折れ線で値をつなぐ「サーキュラー折れ線グラフ」
- 面の広がりで値を示す「サーキュラー面グラフ」
- 放射状に棒を配置する「サーキュラー棒グラフ」

と呼ばれます。いずれも中心からの距離（または棒の長さ）で量を表し、角度方向が時間スケールを意味します。



## 背景と活用例

この形式は「極座標（Polar Coordinate）」を基盤としており、線形グラフを円形に変換したものといえます。  
季節や時間帯の繰り返し構造をもつデータの可視化に向いており、気温や日照時間、交通量、電力消費、睡眠時間などの周期的な変化を把握するのに有効です。

ビジネスダッシュボードや環境データの可視化では、Flourish Studio や Tableau などの可視化ツールでも「Circular bar chart」「Radial line chart」として利用可能です。  
特に、データが一周で完結するように配置されるため、1周期の比較や時間帯ごとのピークを直感的に把握できます。



## まとめ

サーキュラー・チャートは、時間や季節のような周期的なデータを「円」という形にマッピングすることで、  
トレンドや繰り返しのパターンを視覚的に理解しやすくするチャートです。  
棒・線・面などのバリエーションを使い分けることで、周期データの特徴を柔軟に表現できます。



## 参考・出典

- [Data Visualization Catalogue – Radial Column Chart](https://datavizcatalogue.com/methods/radial_column_chart.html)
- [Data Visualization Catalogue – Radial Bar Chart](https://datavizcatalogue.com/methods/radial_bar_chart.html)
- [Matplotlib – Bar chart on polar axis](https://matplotlib.org/stable/gallery/pie_and_polar_charts/polar_bar.html)
- [Matplotlib – Polar plot](https://matplotlib.org/stable/gallery/pie_and_polar_charts/polar_demo.html)
- [D3 (d3-shape) – Radial lines](https://d3js.org/d3-shape/radial-line)
- [D3 (d3-shape) – Radial areas](https://d3js.org/d3-shape/radial-area)
- [Observable – d3.lineRadial](https://observablehq.com/@d3/d3-lineradial)
- [Data Viz Project – Radial Area Chart](https://datavizproject.com/data-type/radial-area-chart/)
- [Data Viz Project – Radial Line Graph](https://datavizproject.com/data-type/radical-line-graph/)