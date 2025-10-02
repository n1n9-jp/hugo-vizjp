+++
author = "Yuichi Yazaki"
title = "モザイク・プロット（Mosaic Plot）の事例"
slug = "mosaic-plot-example"
date = "2020-08-03"
description = ""
categories = [
    "chart"
]
tags = [
    ""
]
image = "images/image-27.png"
+++

「モザイク・プロット」が利用されている事例を紹介します。


<!--more-->

## 作例

### 1904年ドイツ帝国統計局による農業統計図

![1904年ドイツ帝国統計局による農業統計図](images/IMG_0483.jpeg)

この図は、1904年にドイツ帝国統計局（Kaiserliches Statistisches Amt）が刊行した『ドイツ帝国統計季報』に掲載されたもので、各州における 耕作面積・単位面積あたり収量・総収穫量 を同時に示した農業統計図です。対象となっているのは冬ライ麦・燕麦・夏大麦・冬小麦・ジャガイモといった主要作物で、それぞれ別の棒グラフとして描かれています。

- **横軸（棒の幅）** ：各州の耕作面積（ヘクタール単位）
- **縦軸（棒の高さ）** ：1ヘクタールあたりの収量（収穫効率）
- **長方形の面積** ：総収穫量（幅 × 高さ）

さらに、各州の値だけでなく、ドイツ全体の平均収量（実線） と 直前5年間（1899〜1903年）の平均収量（点線） も示されており、比較が容易になるよう工夫されています。色分けによって作物ごとに区別され、視覚的にも分かりやすく構成されています。




### タイタニック号で事故に遭遇した人たち

![](images/image-25.png)

[Data Visualization with R](https://rkabacoff.github.io/datavis/Models.html)


### ggplot2による作例

![](images/image-26.png)

[https://cran.r-project.org/web/packages/ggmosaic/vignettes/ggmosaic.html](https://cran.r-project.org/web/packages/ggmosaic/vignettes/ggmosaic.html)

### 識別テストへの回答結果

![](images/image-27.png)

[(PDF) Effect of Product Involvement on Panels’ Vocabulary Generation, Attribute Identification, and Sample Configurations in Beer](https://www.researchgate.net/publication/336517849_Effect_of_Product_Involvement_on_Panels%27_Vocabulary_Generation_Attribute_Identification_and_Sample_Configurations_in_Beer/figures?lo=1)


### Hair and Eye Color of Statistics Students

![](images/009-visualizing-multivariate-categorical-data-r-graphics-cookbook-and-examples-for-great-data-visualization-mosaic-plot-1.png)

[http://www.sthda.com/english/articles/32-r-graphics-essentials/129-visualizing-multivariate-categorical-data/](http://www.sthda.com/english/articles/32-r-graphics-essentials/129-visualizing-multivariate-categorical-data/)


