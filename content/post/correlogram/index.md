+++
author = "Yuichi Yazaki"
title = "コレログラム (Correlogram)"
slug = "correlogram"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/cover.png"
+++


コレログラム（Correlogram）は、複数の変数間の **相関関係（correlation）** を視覚的に表現する図です。
各変数同士の相関係数（Pearson、Spearmanなど）を、色の濃淡や円の大きさなどでマトリクス状に示すことで、データ全体の関係構造を直感的に把握できます。
特に、データの多変量分析や特徴量選択の前段階で利用されることが多く、散布図行列のように「関係の方向性」ではなく「関係の強さ」に焦点を当てる点が特徴です。

<!--more-->

![](images/mainvisual-1.png)
![](images/mainvisual-2.png)

![](images/mainvisual-3.png)


## 図解の見方
コレログラムの構造は以下のようになっています。

| 要素 | 内容 | 解釈のポイント |
|------|------|----------------|
| 行・列 | 変数の一覧 | それぞれの組み合わせごとに相関を示す |
| セルの色 | 相関係数の符号と強さ（例：青＝正、赤＝負） | 相関の方向と大きさを視覚的に判断 |
| 色の濃さ・円の大きさ | 相関の絶対値（強弱） | 強い関係ほど濃く・大きく表示される |
| 対角線上 | 各変数自身（相関=1） | 通常は空白、または1.0と表示される |
| 数値ラベル（任意） | 相関係数の実数値 | 精度を確認したい場合に併記される |

このように、コレログラムは**相関の方向（正負）と強さ**を瞬時に読み取れる設計になっています。  
視覚的なパターンから、似た傾向を持つ変数群を特定することが可能です。

## 背景と用途
コレログラムの考え方は統計学の「相関行列（correlation matrix）」を基盤としています。  
数値として表された相関行列を、可視的に理解しやすい形に変換したのがコレログラムです。  

用途としては以下が代表的です：

- **特徴量間の関係確認**：多重共線性（multicollinearity）の検出  
- **クラスタリング前の探索分析**：似た傾向を持つ変数のグルーピング  
- **データ前処理の判断**：変数削除・縮約の判断材料  
- **EDA (探索的データ解析)**：全体的な関係構造の理解  

特に機械学習モデルの前段階では、変数選択の補助ツールとして非常に重宝されます。



## 注意点
コレログラムは「線形相関」のみを対象とすることが多いため、非線形関係を見落とす可能性があります。  
また、カテゴリ変数を扱う場合には別途相関係数の選択（Cramér’s V など）が必要です。  
さらに、変数数が多いと視覚的に密集し、解釈が難しくなるため、主要変数のみを抽出して表示するのが望ましいです。

## まとめ
コレログラムは、データ全体の関係性を一目で把握するための有効な手法です。  
数値では捉えにくい相関の構造やグループ化の傾向を、色や形のパターンとして表すことができます。  
特にデータ分析の初期段階で、相関構造を見極めるための標準的な可視化として広く利用されています。

## 参考・出典

- [Wikipedia: Correlogram](https://en.wikipedia.org/wiki/Correlogram)
- [R Documentation — corrplot](https://cran.r-project.org/web/packages/corrplot/vignettes/corrplot-intro.html)
- [Seaborn Documentation — heatmap](https://seaborn.pydata.org/generated/seaborn.heatmap.html)
- [Plotly Express — imshow](https://plotly.com/python/imshow/)
- [Vega-Lite: Heatmap](https://vega.github.io/vega-lite/examples/rect_heatmap.html)