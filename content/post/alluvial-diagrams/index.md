+++
author = "Yuichi Yazaki"
title = "沖積図（Alluvial Diagrams）"
slug = "alluvial-diagrams"
date = "2020-08-03"
description = ""
categories = [
    "chart"
]
tags = [
    "ネットワーク",
]
image = "images/cover.png"
+++

沖積図（Alluvial Diagram）は、時間の経過やカテゴリー間の関係性の変化を可視化するためのフローチャート型の図表です。主に「サンキー・ダイアグラム（Sankey Diagram）」の派生形として知られ、複数のグループ間でデータがどのように流動・再分類されるかを示します。

カテゴリ同士の遷移、クラスタリングの変化、回答結果の推移など、データが時間軸や条件によってどのように再編成されるかを直感的に理解できます。

<!--more-->

## 歴史的経緯
沖積図の原型は19世紀末のサンキー・ダイアグラムに遡りますが、現在のような「Alluvial Diagram」という名称は、2005年にRosvall & Bergstromによる論文 “Maps of random walks on complex networks reveal community structure” で広く知られるようになりました。その後、R言語のパッケージ「ggalluvial」（作者：Jason Cory Brunson）などの登場により、社会科学・生物情報学・ネットワーク分析など幅広い分野で利用が広がりました。

## データ構造
沖積図では、以下の3種類の要素が基本構成となります。

| 要素 | 説明 |
|------|------|
| 軸（Axes） | 比較の基準となるカテゴリや時間の区分。通常は縦方向または横方向に並ぶ。 |
| 流れ（Flows） | データの移動・再分類を示す帯（ストリーム）。太さは数量を表す。 |
| ノード（Nodes） | 各軸上に存在するカテゴリやグループ。データの始点・終点として機能。 |

データは「長形式（tidy data）」で整えるのが一般的で、各行が「対象 × 時点 × カテゴリ」の対応関係を持つ構造をとります。

## 目的
沖積図の主な目的は、時間や条件によるカテゴリー間の再分配・遷移を視覚的に理解することです。

たとえば：
- 世論調査での政党支持の変化  
- クラスタリング分析におけるクラスタの再編成  
- 教育・医療・顧客セグメントの経年変化  
など、対象の「流れ」と「関係性」を見せることに適しています。

## 特徴
- **連続的な変化の把握**：サンキー・ダイアグラムよりも軸構造が明確で、順序性を持つ比較が容易。  
- **階層の可視化**：カテゴリーの再分類やサブグループの生成を表現できる。  
- **美的整合性**：滑らかな帯が交差し、構造的にも視覚的にも理解しやすい。

## デザイン上の注意点
- **色の割り当て**：同一カテゴリーを通じて一貫した色を用いることで、追跡が容易になる。  
- **流線の重なり**：帯の交差が多いと読みにくくなるため、レイアウトの最適化が必要。  
- **ラベル配置**：各ノードの位置と流れを見失わないよう、軸にラベルを固定する。  
- **アニメーション・インタラクション**：時間変化を強調する場合、動的表示（例：Flourish, D3.js）も有効。

## 応用例
- **生物学**：遺伝子発現のクラスタ変化を示す。  
- **社会調査**：回答者の意見や属性の移動を追跡する。  
- **ビジネス分析**：顧客セグメントの推移や購買行動の遷移を表す。  
- **教育・行政**：学習者の進路や政策効果の変化を可視化する。

## 代替例
- **サンキー・ダイアグラム（Sankey Diagram）**：構造は類似しているが、時間軸の明示がない場合に使用される。  
- **ストリームグラフ（Streamgraph）**：連続的な変化を時間軸上の積み上げで表現。  
- **パラレルセット（Parallel Sets）**：カテゴリー関係を強調する代替的表現。

## まとめ
沖積図は、データの「流れ」を視覚化する上で非常に有効な手法であり、複雑な変化を滑らかに示すことができます。特に時間的・階層的な関係性を捉えたい場合に有効です。適切な配色と構造設計を行えば、分析だけでなく物語性のある可視化にも応用可能です。

## 参考・出典
- [Alluvial Diagrams – Data to Viz](https://www.data-to-viz.com/graph/alluvial.html)
- [ggalluvial: Alluvial Plots in ggplot2 (CRAN)](https://cran.r-project.org/web/packages/ggalluvial/vignettes/ggalluvial.html)
- [Rosvall, M. & Bergstrom, C. T. (2008). Maps of random walks on complex networks reveal community structure. *PNAS*.](https://www.pnas.org/doi/10.1073/pnas.0706851105)
- [SankeyMATIC: A Sankey diagram builder for everyone](https://sankeymatic.com/)
- [Flourish – Alluvial diagram template](https://flourish.studio/visualisations/alluvial-diagram/)