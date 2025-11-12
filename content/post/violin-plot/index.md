+++
author = "Yuichi Yazaki"
title = "バイオリン・プロット（Violin Plot）"
slug = "violin-plot"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/cover.png"
+++

バイオリン・プロット（Violin Plot）は、**データの分布と統計的要約を同時に視覚化できるグラフ**です。箱ひげ図（Box Plot）の構造を基礎にしつつ、データの分布形状をカーネル密度推定（Kernel Density Estimation, KDE）によって滑らかに表現します。

データの中央値や四分位範囲といった要約統計量に加え、分布の形状を滑らかに示すことで、より直感的に「データの山（モード）」や「広がり」「偏り」を読み取ることができます。

各カテゴリーやグループごとに分布の形が左右対称の「バイオリン」のように描かれるため、この名が付けられました。


<!--more-->


## 歴史的経緯

Violin Plotは、1990年代初頭にヒューバー（Huber, 1993）やHintzeとNelson（1998）らによって提案された比較的新しい可視化手法です。箱ひげ図が主に四分位範囲（IQR）に注目するのに対し、より詳細な **分布の形（多峰性・歪みなど）** を可視化する目的で生まれました。

その後、PythonのMatplotlibやSeaborn、Rのggplot2など、主要なデータ可視化ライブラリで標準的にサポートされるようになり、統計・機械学習分野で広く利用されています。



## データ構造

Violin Plotは主に以下のデータ構造を扱います：

| 要素 | 内容 |
|------|------|
| **変数（X軸）** | カテゴリ変数（グループ、条件など） |
| **値（Y軸）** | 連続変数（測定値、スコアなど） |
| **密度情報** | 各グループの連続値分布をKDEで推定 |



## 目的

バイオリン・プロットの目的は **カテゴリごとのデータ分布を直感的に比較する** ことです。特に以下のような場合に有効です：

- サンプル数が多く、ヒストグラムでは比較が難しい場合  
- 箱ひげ図では見えない分布形状（多峰性や歪度）を確認したい場合  
- グループ間の中央値・広がり・分布形を総合的に比較したい場合  

バイオリン・プロットは、単なる箱ひげ図よりも **分布の形状やモードの数を視覚的に把握できる** 点が優れています。  
特に以下のような場面で有用です。

- グループごとのデータ分布を比較するとき（例：性別別テストスコア）
- データが正規分布でない場合や複数モードを持つ場合
- サンプル数の多いデータにおける偏りの可視化



## ユースケース
- 実験条件ごとの測定値分布（例：薬剤A vs 薬剤Bの反応時間）  
- 学生のテストスコアの学科別比較  
- モデル予測誤差の分布比較（機械学習評価）  
- SNSデータや経済データの分布特性分析  



## 特徴

| 特徴 | 説明 |
|------|------|
| **箱ひげ図＋密度分布** | 中央値・IQRとともに分布形を表示 |
| **多峰性の把握** | 分布が一様でない場合も視覚的に認識可能 |
| **空間効率が高い** | 対称形により複数グループを比較しやすい |
| **個別点の重ね合わせ** | SwarmplotやStripplotとの併用で情報量を増加 |



## チャートの見方

バイオリン・プロットは、中心に箱ひげ図の要素を含み、両側に分布を反映した「バイオリン（弦楽器）」のような形状が描かれます。以下の要素で構成されます。

| 要素 | 意味 |
|------|------|
| 外形（バイオリン部分） | データの分布密度を示す（左右対称のカーネル密度曲線） |
| 太線（中央の黒線など） | 中央値（Median）を示す |
| 箱（四分位範囲） | 第1四分位（Q1）から第3四分位（Q3）の範囲を示す |
| 上下のひげ（Whisker） | 外れ値を除いたデータ範囲を示す |
| 点（外れ値） | 分布から大きく外れた値を示す |


## デザイン上の注意点

- **スムージング（bandwidth）の設定**に注意：過度に平滑化すると特徴が失われ、狭すぎるとノイズが強調されます。  
- **サンプルサイズが極端に小さい場合**は、密度推定が不安定になるため、箱ひげ図やドットプロットの方が適します。  
- **非対称プロット**を用いる場合は、左右の意味（例：左右に異なる群）を明確にする必要があります。  
- **スケール統一**：複数の分布を比較する際は、密度スケールを統一することが望ましいです。  



## 応用例

- Seabornの`violinplot()`を用いた学習データ比較  
- ggplot2の`geom_violin()`でグループ別分布の可視化  
- Plotlyによるインタラクティブなバイオリン・プロット（ツールチップで詳細値を確認）  
- 医療統計・心理学・教育研究などの報告書での分布比較可視化  



## 代替例

| 目的 | 代替となるチャート |
|------|------------------|
| 分布の形を確認 | 密度プロット（Density Plot） |
| 分布＋個々のデータ点を表示 | ビースウォーム・プロット（Beeswarm Plot） |
| 四分位範囲と外れ値のみで十分 | 箱ひげ図（Box Plot） |
| サンプル数が少ない場合 | ドット・プロット（Dot Plot） |



## まとめ

バイオリン・プロットは、単なる中央値や範囲だけでなく **分布の形そのものを「見せる」可視化手法** です。特に、複数のグループや条件でデータの分布を比較する際に、従来の箱ひげ図よりも豊かな情報を伝えることができます。視覚的なわかりやすさと統計的な深みを兼ね備えたこのチャートは、探索的データ分析や教育の現場でも広く活用されています。



## 参考・出典

- [Wikipedia: Violin plot](https://en.wikipedia.org/wiki/Violin_plot)
- [Seaborn Documentation: violinplot](https://seaborn.pydata.org/generated/seaborn.violinplot.html)
- [Matplotlib Violin Plot Guide](https://matplotlib.org/stable/gallery/statistics/violinplot.html)
- [ggplot2: geom_violin](https://ggplot2.tidyverse.org/reference/geom_violin.html)
- [Hintze, J. L., & Nelson, R. D. (1998). Violin plots: a box plot-density trace synergism. The American Statistician, 52(2), 181–184.](https://www.jstor.org/stable/2685478)
- [Seaborn Violinplot — official documentation](https://seaborn.pydata.org/generated/seaborn.violinplot.html)  
- [ggplot2 Reference — geom_violin](https://ggplot2.tidyverse.org/reference/geom_violin.html)  
- [Plotly: Violin Plots in Python](https://plotly.com/python/violin/)  
- [Introduction to Vionlin Plot](https://exploratory.io/note/kanaugust/Introduction-to-Vionlin-Plot-jAq8egs3VC/note_content/note.html)
