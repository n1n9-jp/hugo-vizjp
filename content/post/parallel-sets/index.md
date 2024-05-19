+++
author = "Yuichi Yazaki"
title = "パラレル・セット（平行セット）」(Parallel Sets もしくは ParSets )"
date = "2020-08-02"
description = ""
categories = [
    "chart"
]
tags = [
    "",
]
image = "image-15.png"
+++

「パラレル・コーディネイト（平行座標）」から着想を得ていますが、カテゴリーデータの頻度を表現していること、折れ線ではなく面で表現しているという違いがあります。2つ以上のカテゴリーデータの頻度を相対値（合計で100%になるように）で集計したデータを用います。

<!--more-->

研究開発チームの一人、Robert Kosaraによると、何らかの属性データ（たとえば沈没したタイタニック号に乗っていた人の集団に対して、一人ひとりの属性値）を可視化する手段が限られていたことをあげています。

> 「扱おうとしているデータが離散的であるにもかかわらずビジュアライゼーションでのパラメータ(位置や長さなど)は連続しており、両者が不整合である 」
> Beautiful Visualization 12章 表のツリー表現 P183-193

少しやわらかく言い直すと、属性値自体は文字のデータ、年齢…大人か子供か、性別…男性か女性か、であり、これらを集計して扱う際には数値として扱う必要がでてくる、ということになります。またこういったデータは、名義スケールであり順序スケールではない、つまり順序に意味を持たず、さらには階層構造を持つことがあることも指摘しています。

このようなデータを可視化することができるチャートとしては、それまでツリーマップ（Treemap）とモザイク・プロット（Mosaic Plot）しか存在なかった、そしてParallel Setsは三番目のチャートだとRobertさんは述べています。

### 一つの軸には一つのデータ属性を割り振る

> データを集合として表現するアイデア以外に、ParSetsは平行座標系(Parallel Coordinates)[Inselberg 2009] に大きな影響を受けています。平行座標系は高次元の数値データを表すためによく使われるビジュアライゼーションのテクニックです。値を表現する軸を平行にレイアウトして表示することにより、ツリーマップやMosaic Plotのような入れ子構造よりもデータの理解や比較が容易になっており、特に変数の数が多い場合に有効です。また、この種のレイアウトは、効果的なインタラクションをデザインするのが容易です。
> Beautiful Visualization 12章 表のツリー表現 P183-193

### 階層構造を表す

> 新しい視覚的構造を探し始めた のですが、そこでようやく我々が求めているのはツリー構造に他ならない(つまり、Standard 方式をとるべき)ということに気づきました。
> Beautiful Visualization 12章 表のツリー表現 P183-193

### 流れや時系列は表現しない

物事の流れや時系列変化の表現には使用しません。つなぐ線は直線、曲線のどちらもありえますが、流れや時間を示さないため、矢印は使用しません。無向グラフ的ということですね。

### 一番優先度の高い軸の値に応じて着色

カテゴリーデータの値ごとに色が割り振られる場合があります。その場合は、一番重要な軸を一番上に配置し、そのデータ属性の値を色へ適用することが多いでしょう。チャートが入り組んできても、色を手がかりにチャートを探索することが可能となります。

## 作例

### ミネソタ州（上）とノースカロライナ州（下）の住宅データを比較

![](image-14.png)

[Kosara,Robert，FabianBendix, HelwigHauser(2006): “ParallelSets: Interactive exploration and visual analysis of categorical data”. IEEE Transactions on Visualization and Computer Graphics 12，no.4: 558-568.](https://research.tableau.com/sites/default/files/Kosara_TVCG_2006.pdf)

寒い気候の人々は、暖房燃料として電気よりもガスを好み、移動式の家もあまり好きではありません。南部の住宅は平均的にベッドルーム数がやや少ないが、3ベッドルームの一戸建て住宅は北部よりも多いことがわかります。

### 国民戦線の躍進はフランスの伝統的な政党を揺さぶる｜フィナンシャル・タイムズ

![](image-15.png)

[National Front breakthrough stuns France’s traditional parties | Financial Times](https://www.ft.com/content/181619a2-9cba-11e5-b45d-4812f209f861#slide0)



### ピッツバーグの橋梁の構造材別、長さ別、建設年代別、橋梁が架かる河川別の内訳

![](image-16.png)

[Fundamentals of Data Visualization](https://serialmentor.com/dataviz/nested-proportions.html)



### TRACKING THE EARTH’S 300 NANO-SATELLITES

![](1280.webp)

[TRACKING THE EARTH’S 300 NANO-SATELLITES by Valerio Pallegrini](https://www.wired.co.uk/gallery/infoporn-wired-handpicks-the-webs-best-infographics)


### ドローンが空から落下してくるとき | The Washington Post

![](image-18.png)

[When drones fall from the sky | The Washington Post](https://www.washingtonpost.com/sf/investigative/2014/06/20/when-drones-fall-from-the-sky/)



### Rotem Blinder of IBM “Hierarchical Parallel Sets”

![](image-19.png)

[Rotem Blinder – YouTube](https://www.youtube.com/watch?v=P3FAyWbDlI4)


### PANTHEON Corriere della Sera – La Lettura #181

![](image-20.png)

[PANTHEON Corriere della Sera – La Lettura #181](https://www.behance.net/gallery/26338543/PANTHEON-Corriere-della-Sera-La-Lettura-181)



### News Use Across Social Media Platforms

![](image-21.png)

[News Use Across Social Media Platforms](https://www.journalism.org/2013/11/14/news-use-across-social-media-platforms/)



## インタラクション

マウスポインタのホバーなどでユーザーの興味を示すと、該当する面が強調表現（もしくは該当しない箇所の可読性を落とす）ことで、その面がどんなデータを取っているのかが見やすくなります。

> ParSets ではインタラクションが重要な役割を果たしています。ユーザーがマウスカー ソルを重ねると実際の値が表示されるほか、属性や値の並べ替え、値の追加や削除も可能です。また、軸上の各属性は並べ替えることもでき、より大きな属性へと結合させることも可能です。例えば、すべての船室を結合させて船員と比較することができます。
> Beautiful Visualization 12章 表のツリー表現 P183-193

## 参考文献

- Riccardo Mazza「情報を見える形にする技術」 P63
- [Parallel Sets](https://eagereyes.org/parallel-sets)
- [VRVis: Parallel Sets: Visual Analysis of Categorical Data](https://www.vrvis.at/en/publications/PB-VRVis-2005-034)
- [Bendix, Fabian，Robert Kosara，Helwig Hauser(2005): “Parallel Sets: Visual analysis of categorical data”. Proceedings of the IEEE Symposium on Information Visualization, 133-140.Los Alamitos, CA: IEEE Press.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.87.9810&rep=rep1&type=pdf)
- [Kosara,Robert，FabianBendix, HelwigHauser(2006): “ParallelSets: Interactive exploration and visual analysis of categorical data”. IEEE Transactions on Visualization and Computer Graphics 12，no.4: 558-568.](https://research.tableau.com/sites/default/files/Kosara_TVCG_2006.pdf)