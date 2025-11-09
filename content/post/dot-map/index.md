+++
author = "Yuichi Yazaki"
title = "ドット・マップ（Dot Map）"
slug = "dot-map"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/cover.png"
+++

ドット・マップ（Dot Map）は、地理的なデータを点（ドット）によって表す地図表現手法です。各ドットは、特定の場所における「個別の出来事」や「観測対象そのもの」を示すことが多く **1ドット＝1件（または1単位）** という明確な対応関係を持つのが特徴です。ドット分布マップ（Dot Distribution Map）と呼ばれることもあります。

<!--more-->

1つのドットが1つの観測値を表します。
個別の現象が、どのような地理的分布をしているのかを確認します。

分布に注目するため、ドットの大きさをデータに連動して変更しません。付随して、データを階級分類しないことになります。

何らかの質的特徴を確認するために、着色することもあります。

見た目が似たドット密度マップは、何らかの集計値を表し、ドットの表示位置が実際の発生位置を表しませんので、その点で明確に異なるデータ地図といえます。

たとえば「地震の発生地点」や「美術館の所在地」「感染症の発生場所」など、個別の位置情報をそのままマップ上に可視化する際に使われます。密度の高い領域は視覚的に点が集まり、分布傾向を直感的に読み取ることができます。



## チャートの見方

| 要素 | 説明 |
|------|------|
| ドットの位置 | 観測対象の実際の位置を正確に表す。地図上の地理座標に基づく。 |
| ドットの数 | 観測された事象や対象の数。1点が1件を意味する。 |
| ドットの色 | 分類属性（例：種類、カテゴリー、年次）を示すことがある。 |
| スケール | ドット同士の重なりを避けるため、ズームや透明度を調整する場合もある。 |

ドット・マップでは「位置そのもの」を伝えることが目的であり、ドットの数を地域ごとに統計的に均すことはしません。そのため **点の位置が意味を持つ** ことが最大の特徴です。



## ドット密度マップとの違い

ドット密度マップ（Dot Density Map）は、似た見た目を持ちながら目的が異なります。

| 比較項目 | ドット・マップ（Dot Map） | ドット密度マップ（Dot Density Map） |
|-----------|----------------------------|-------------------------------------|
| ドットの意味 | 1点＝1件など、個別の実体を示す | 統計値を一定の密度に応じてドットで擬似的に配置 |
| ドットの位置 | 実際の位置データに基づく | 行政区画などの内部でランダムまたは均等に配置 |
| 表現目的 | 分布傾向・位置の可視化 | 数量・密度の比較を視覚化 |
| 典型例 | 犯罪発生地点マップ、店舗分布 | 人口密度、農地面積、種族分布 |
| 見方の焦点 | 点の位置に注目 | 点の密度に注目 |

このように、「ドット・マップ」は位置の忠実な可視化であり、「ドット密度マップ」は統計的な面密度の表現という点で明確に区別されます。



## 背景と応用

ドット・マップは19世紀以来の地図表現法であり、地理情報システム（GIS）やオンラインマッピングツール（Mapbox、Leafletなど）によって現在も広く使われています。近年では、インタラクティブなドット・マップが多く登場し、マウスオーバーで属性情報を表示するなど、単なる可視化を超えた分析用途にも活用されています。



## まとめ

- **ドット・マップ** は個々の位置データを正確に示す地図表現。1点が1対象。
- **ドット密度マップ** は集計データを面内に分布させる統計的表現。
- 目的が「位置の表示」か「密度の比較」かで使い分けることが重要。
- 現在では両者とも、GISやWeb地図可視化ツールによって動的に作成できる。



## 参考・出典

- [Dot distribution map - Wikipedia](https://en.wikipedia.org/wiki/Dot_distribution_map)
- [Dot mapping cartograms for detection of infectious disease - NCBI (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5779165/)
- [Creation and evaluation of graduated dot maps - ResearchGate](https://www.researchgate.net/publication/318722017_Creation_and_evaluation_of_graduated_dot_maps)
- [Dot Distribution Map | Data Visualization Standards (XDgov)](https://xdgov.github.io/data-design-standards/visualizations/dot-distribution-map)
- [Racial Dot Maps Based on Dasymetrically Modeled Gridded Population Data - MDPI](https://www.mdpi.com/2076-0760/8/5/157)
- [Scaling the Interactive Dot Map - NSF Public Access Repository](https://par.nsf.gov/servlets/purl/10079287)
- [Automated Dot Mapping: How to Dot the Dot Map - Taylor & Francis Online](https://www.tandfonline.com/doi/abs/10.1559/1523040639117)
