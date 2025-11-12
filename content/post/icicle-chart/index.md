+++
author = "Yuichi Yazaki"
title = "つららチャート（Icicle Chart）"
slug = "icicle-chart"
date = "2020-08-09"
description = ""
categories = [
    "chart"
]
tags = [
    "ツリー",
]
image = "images/MonashUniversity_IcicleChart.png"
+++

つららチャート（Icicle Chart）は、階層構造データを長方形の積み重ねで表現する可視化手法です。ツリー構造の各ノードを矩形で表し、親ノードの下に子ノードを配置します。表示方向は通常上から下（つららのように垂れ下がる）ですが、左右方向に展開する場合もあります。階層全体を俯瞰できる点で、サンバーストチャートやツリーマップに近い性質を持ちます。

<!--more-->

## 歴史的経緯

Icicle Chartは、1980年代にH. KruskalとJ. Landwehrらによって提案された「表示密度の高い階層構造可視化」の一種として登場しました。その後、Ben Shneiderman（1992年）のツリーマップとともに階層構造の可視化研究で発展し、現在はD3.jsやPlotlyなど多くの可視化ライブラリで標準的に実装されています。


## データ構造

つららチャートは階層（ツリー）構造を持つデータを可視化します。各ノードには「ラベル名（name）」と「値（value）」があり、親ノードの下に子ノードを入れ子状に配置します。ノードの大きさは値の大きさに比例し、階層の深さによって色や位置が変化します。

| キー | 内容 |
|------|------|
| name | ノード名（カテゴリやラベル） |
| value | ノードの値（数値的な大きさ） |
| children | 子ノード（配列） |


## 目的

Icicle Chartの主な目的は、階層構造の中で「どの階層がどのくらいの比率を占めているか」を一目で理解することです。各ノードの矩形の長さや面積は、値（value）に比例しており、上位階層から下位階層への分解を直感的に追うことができます。


## ユースケース

- 組織構造や製品カテゴリなどの階層データの可視化  
- ファイルシステムの容量分析（フォルダごとのサイズ比較）  
- 売上構成や地域別市場シェアの内訳  
- Webサイトのページ階層構造の可視化  

## 特徴
| 特徴 | 説明 |
|------|------|
| 構造の明示性 | 階層関係を矩形の入れ子構造で明確に示す |
| 比率の可視化 | 各ノードの値に応じて長さを調整し、構成比を視覚化 |
| コンパクト性 | サンバーストチャートに比べて省スペースで表示可能 |
| 相互作用 | ツールチップやズーム機能を追加しやすい |


## チャートの見方

上端（または左端）が階層の根（root）にあたり、下に行くほど詳細な階層（子ノード）が現れます。各矩形の長さはノードの値を表し、色やグラデーションでカテゴリや深さを区別することが一般的です。ユーザーは矩形をクリックして階層を展開・折りたたむこともできます。


## デザイン上の注意点

- **深すぎる階層は避ける**：情報密度が高くなり、判読性が落ちる。  
- **色の設計**：階層の深さをHueではなくSaturationやBrightnessで表現すると、統一感が出やすい。  
- **ラベル配置**：矩形が小さい場合、ツールチップやインタラクションで補う。  
- **方向性の選択**：縦方向（Icicle）・横方向（バー状）いずれも可、用途に応じて選ぶ。  


## 応用例

- D3.jsの`d3.partition()`を利用したインタラクティブなツリー構造表示  
- PlotlyやEChartsでの「Sunburst ↔ Icicle」切り替え型ダッシュボード  
- 組織構造、顧客層分析、分類体系（taxonomy）の可視化  


## 代替例

| チャート種別 | 比較ポイント |
|---------------|--------------|
| ツリーマップ（Treemap） | 面積を使うが、全体構造の階層深度が見えにくい |
| サンバーストチャート（Sunburst） | 放射状で視覚的だが、スペース効率が低い |
| 階層エッジバンドル（Hierarchical Edge Bundle） | 構造間の関係強調に向くが、数量比較には不向き |


## まとめ

つららチャートは、階層構造を明快に視覚化し、構成比や分解構造を一目で理解できる優れた手法です。ツリーマップよりも階層構造を保持しやすく、サンバーストよりも省スペースであるため、構造理解を重視する情報デザインに適しています。


## 参考・出典

- [D3.js Partition Layout Official Documentation](https://github.com/d3/d3-hierarchy#partition)
- [Observable HQ – Icicle Chart Example](https://observablehq.com/@d3/icicle)
- [ECharts – Icicle Diagram](https://echarts.apache.org/en/option.html#series-icicle)
- [Ben Shneiderman: Tree Visualization with Tree-maps (1992)](https://www.cs.umd.edu/hcil/treemap-history/)
- [Icicle Plots: Better Displays for Hierarchical Clustering](https://www.cs.middlebury.edu/~candrews/showcase/infovis_techniques_s16/icicle_plots/icicleplots.html)

