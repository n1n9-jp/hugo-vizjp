+++
author = "Yuichi Yazaki"
title = "箱ひげ図（Box-and-Whisker Plot）"
slug = "box-and‐whisker-plot"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/cover.png"
+++

箱ひげ図（Box-and-Whisker Plot）は、データの分布・散らばり・偏り・外れ値を一目で把握できる統計グラフです。箱とひげで構成され、データの「代表値（中央値）」と「ばらつき（四分位数）」を同時に表します。1970年代にジョン・テューキー（John Tukey）によって提案され、探索的データ解析（EDA）の基本的な可視化手法として広く使われています。


<!--more-->

![](images/mainvisual.png)

## チャートの見方

| 要素 | 意味 | 表現 |
|------|------|------|
| 最小値 (Minimum) | データの最も小さい値 | 左端のひげの先端 |
| 第1四分位数 (Q1) | 下位25%の境界 | 箱の左端 |
| 中央値 (Median, Q2) | データの中心 | 箱内の線 |
| 第3四分位数 (Q3) | 上位25%の境界 | 箱の右端 |
| 最大値 (Maximum) | データの最も大きい値 | 右端のひげの先端 |
| 四分位範囲 (IQR = Q3 - Q1) | 中央50%のばらつき | 箱の幅 |
| 外れ値 (Outliers) | 1.5×IQRを超える値 | ひげの外に点で表示 |

箱の中の線が箱の中央より左にある場合は分布が右に歪んでおり、右にある場合は左に歪んでいると読み取れます。ひげの長さの非対称性は分布の偏りを、箱の大きさは中間データの散らばりを示します。


## 背景と応用

箱ひげ図は、複数のカテゴリやグループ間で分布を比較する際に非常に有効です。例えば、男女別の試験点数や年度別の売上分布などを同一スケールで比較できます。また、外れ値（異常値）の検出にも適しており、データ品質確認や異常検知の初期分析でもよく用いられます。

近年では **変形版として「バイオリンプロット（Violin Plot）」や「ビーズプロット（Beeswarm Plot）」** など、分布形状の情報をより詳細に付加したバリエーションも登場しています。ただし、箱ひげ図はあくまで5点要約（five-number summary）に基づく可視化であり、分布の形状（例えば双峰性や歪度）を完全に表現するものではありません。




## まとめ

箱ひげ図は、分布の特徴を簡潔に要約し、比較や外れ値検出を支援する基本的な統計グラフです。データの散らばりや偏りを直感的に理解できるため、探索的データ分析やレポート作成、教育など幅広い分野で利用されています。ただし、平均値や標準偏差の情報は含まれないため、必要に応じて他の可視化（ヒストグラム・密度プロットなど）と併用するのが望ましいです。


## 参考・出典

- [Box plot - Wikipedia](https://en.wikipedia.org/wiki/Box_plot)
- [Build a Box Plot — Tableau Help](https://help.tableau.com/current/pro/desktop/en-us/buildexamples_boxplot.htm)
- [Box and Whisker Plots — The Data Visualisation Catalogue](https://datavizcatalogue.com/methods/box_plot.html)
- [1.3.3.7. Box Plot — NIST/ITL Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/eda/section3/boxplot.htm)
- [Box plot review — Khan Academy](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/box-whisker-plots/a/box-plot-review)
- [geom_boxplot — ggplot2 reference](https://ggplot2.tidyverse.org/reference/geom_boxplot.html)