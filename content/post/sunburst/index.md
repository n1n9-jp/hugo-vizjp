+++
author = "Yuichi Yazaki"
title = "サンバースト（Sunburst）"
slug = "sunburst"
date = "2025-10-02"
description = ""
categories = [
    "chart"
]
tags = [
    "ツリー",
]
image = "images/cover-Sunburst.jpg"
+++

サンバースト（Sunburst Chart）は、階層構造を円形に展開して可視化するチャートです。中心から外側に向かって階層が広がる構造をとり、ツリー構造（Tree Structure）を円形に表現します。放射状に伸びる「円形のツリーマップ」ともいえ、全体と部分の関係を直感的に理解できます。

<!--more-->

![](images/cover-Sunburst.jpg)


## 歴史的経緯

サンバーストの起源は、階層データをコンパクトに表示するための可視化技術にさかのぼります。1990年代初頭に提案された「Treemap（ツリーマップ）」の派生形として登場しました。

サンバーストは「誰が最初に作ったか」を一人に特定することはできません。歴史を追うと、いくつかの重要な系譜が見えてきます。

- **1. 19世紀末（1890年）**
    - Lawrence W. Fike による動物分類の同心円チャート（zoological concentric chart）が知られています。
    - 科 → 属 → 種といった階層を円環で表す教育・分類目的の可視化であり、現代的サンバーストの先駆的事例とされています。
- **2. 1921年（米国機械工学誌 “Mechanical Engineering”）**
    - 1910〜1919年における米国連邦政府の年間支出構成を示す可視化が「sunburst diagram」として紹介されたという記録があります。
    - ここでは経済データ（支出カテゴリ）を階層的に分解して示す試みが行われました。
- **3. 2000年頃（John Stasko, Georgia Tech）**
    - 情報可視化研究の中で、Treemap に代わる「放射状の space-filling 可視化」として体系的に導入されました。
    - 特に ファイルシステムの構造、Webサイト遷移、ソフトウェアパッケージの構成など、コンピュータ科学の文脈で大規模な階層を探索的に理解する目的で用いられています。
    - Georgia Tech の “SunBurst Page” では、Treemap の代替として階層構造を提示・探索する手法として紹介されています。

このように、サンバーストは 教育的分類図 → 財政可視化 → 情報可視化研究 という異なる文脈を経ながら、現在の形に進化してきました。

2000年代に入ってからD3.jsなどのWeb技術の発展により一般化しました。特にMike BostockによるD3.jsの`partition layout`が普及の大きな契機となりました。

今日では、階層データを「全体から部分へ」と直感的に探索できる方法として、教育・行政・研究・ビジネスの幅広い分野で活用されています。

サンバーストは以下のようにも呼ばれています。

- 放射状トリーマップ（Radial Treemap）
- 多層円グラフ（Multi-level Pie Chart）
- リングチャート（Ring Chart）



## データ構造

サンバーストは階層的なデータ構造を前提としています。ノード（node）と親子関係をもつツリー構造で、各ノードがカテゴリやサブカテゴリを表します。中心にルートノードがあり、外側に向かって階層が展開されます。ノードの大きさは、しばしば数量（例えば売上、件数、割合）に応じて円弧の長さで表現されます。

| 要素 | 内容 |
|------|------|
| ルートノード | 階層の最上位カテゴリ |
| チャイルドノード | 下位カテゴリ |
| アーク（弧） | 各ノードを表す |
| 面積・角度 | 数量の大きさを表す |


## 目的

複数の階層にわたるデータを、一目で構造的に把握することが目的です。各階層の比率や構成を視覚的に比較し、全体の中での位置づけを示します。特に、製品カテゴリ別売上、フォルダ階層、組織構造などの分析に有効です。

- **分類や系統の可視化** ：生物学的分類、図書館の階層分類など。
- **財政・経済データの構成表示** ：政府支出や売上の構成を階層別に表現。
- **IT領域での探索** ：ファイルシステムやWebサイトの階層構造を直感的にナビゲートするための可視化。
- **インタラクティブ分析**：BIツールやD3.js／Plotlyなどを用いて、ユーザーが階層を掘り下げて詳細を確認できる仕組み。



## ユースケース

- Webサイトのページ階層のアクセス分布可視化  
- 製品カテゴリごとの売上構成  
- ファイルシステムのディスク使用量分析  
- 組織やプロジェクト階層の可視化  
- アプリケーションの構造分析（モジュール間関係など）


## 特徴

- 階層の深さを半径方向に表現するため、ツリーマップよりも階層関係を直感的に理解しやすい。  
- 円形構造により、全体像をコンパクトに表示できる。  
- 円弧の長さで数量を比較できるが、円形ゆえに角度感覚が弱く、定量比較には不向きな場合もある。  
- ユーザー操作（クリックやホバー）で階層を展開・フォーカスするインタラクティブな形式が一般的。


### サンバーストの利点

- **1.階層の直感的表現** ...中心から外側へ広がる放射状の構造で、親子関係が視覚的に理解しやすい。
- **2.部分と全体の関係を示す** ...各階層が親カテゴリに対してどれほどの割合を持つかを可視化できる。
- **3.空間効率** ...Treemap と比べて放射状に展開できるため、深い階層でも相対的にスペースを確保しやすい。


### サンバーストの欠点や注意点

- 階層が深いと外側が細かくなり読みにくい。
- 角度の比較は人間にとって難しいため、精密な比較には不向き。
- 階層間の面積不整合が生じる場合があり、同じ値でも見た目が異なることがある。
- 隣接関係に意味がない場合があるため、並びの解釈には注意が必要。
- ユーザー調査では必ずしも好まれないという研究もあり、利用には適切な場面選びが重要。




## チャートの見方

サンバーストは中心が最上位の階層（ルート）で、外側に行くほど下位の階層を表します。各円弧の長さは対応する値の大きさを示し、同じ半径上の他の円弧と比較することで相対的な比率を理解できます。色によってカテゴリを区別し、グラデーションや透明度で追加情報を表すこともあります。

## デザイン上の注意点
- **色分け**：階層の意味がわかるように、親子ノードに関連した配色を行う。  
- **ラベル配置**：外側のノードほどスペースが狭いため、ツールチップやホバー表示を併用する。  
- **階層の深さ**：深すぎる階層は識別が難しくなるため、2〜4層程度が適切。  
- **比較性**：同心円状の構造では面積の比較が直感的でないため、強調したい項目にはインタラクションを活用する。  


## 応用例

- **インタラクティブ分析ダッシュボード**：サンバーストをクリックでドリルダウンし、特定の階層をフォーカス表示する。  
- **教育・組織図**：知識体系や組織の構造をツリー状に表示する教材。  
- **エネルギー・フロー分析**：サンキー・ダイアグラムのような構造的フローを円形で表す派生形も存在する。  


## 代替例

| チャート | 特徴 |
|-----------|------|
| ツリーマップ（Treemap） | 面積で階層を表し、矩形分割による構成比比較が容易。 |
| サークルパッキング（Circle Packing） | 円の入れ子構造で階層を表現し、視覚的な親和性が高い。 |
| フレアチャート（Flare Chart） | サンバーストと類似するが、ツリー構造を放射状に線で示す。 |


## まとめ

サンバーストは、階層構造を円形に展開することで、全体と部分の関係を美しく示すチャートです。ツリーマップと並び、階層データ可視化の代表的手法として広く使われています。特に、Web上でのインタラクティブ表示や視覚的なインパクトを重視する用途に最適です。


## 参考・出典

- [Observable: Sunburst chart (by Mike Bostock)](https://observablehq.com/@d3/sunburst)
- [D3.js API Reference - Partition Layout](https://github.com/d3/d3-hierarchy#partition)
- [Wikipedia: Sunburst chart](https://en.wikipedia.org/wiki/Sunburst_chart)
- [Think.Design – Sunburst: A Circular Visualization Technique](https://think.design/services/data-visualization-data-design/sunburst/)
- [Georgia Tech – SunBurst Page (Stasko Lab)](https://sites.cc.gatech.edu/gvu/ii/sunburst/)  
- [NightingaleDVS – Endless River: An Overview of Dataviz for Categorical Data](https://nightingaledvs.com/endless-river-an-overview-of-dataviz-for-categorical-data/#a334)  
- [Richard Brath – Why history matters in data visualization](https://richardbrath.wordpress.com/2018/08/31/why-history-matters-in-data-visualization/)  
- [Wikipedia – John Stasko](https://en.wikipedia.org/wiki/John_Stasko)  
- [Visualization and Evolution of Software Architectures (OASIcs 2011)](https://drops.dagstuhl.de/storage/01oasics/oasics-vol027-vluds2012-irtg1131/OASIcs.VLUDS.2011.25/OASIcs.VLUDS.2011.25.pdf)  
- [Sunburst Chart: The Format That Fails at Layer Three – ChartExpo Blog](https://chartexpo.com/blog/sunburst-chart)
