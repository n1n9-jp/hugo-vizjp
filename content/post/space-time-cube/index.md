+++
author = "Yuichi Yazaki"
title = "時空間キューブ（Space-Time Cube）とは"
slug = "space-time-cube"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

**時空間キューブ（Space-Time Cube）** とは、時間と空間の関係を同時に可視化するための3次元的な図表です。地理情報科学（GIS）やデータビジュアライゼーションの分野で、時間変化を伴う空間データを分析する際に用いられます。

2次元の地図では空間のみ、時系列グラフでは時間のみを扱いますが、時空間キューブでは「横軸＝地理的な位置（X・Y）」「縦軸＝時間（Z軸）」という構造で両方を一体的に示します。

<!--more-->


## チャートの見方

| 要素 | 意味 |
|------|------|
| X・Y軸 | 地理的な空間位置（例：経度・緯度、または都市・地点） |
| Z軸（縦軸） | 時間の流れ（下から上へ、または過去から未来へ） |
| 点または線 | ある対象（人、車両、気象現象など）の位置とその変化 |
| 面またはボリューム | 一定期間または一定空間のデータ密度や分布 |
| 色・サイズ | 属性値の大きさ（例：人口密度、温度、移動速度など）を表現 |

たとえば、人物の移動を表す場合、各時点の位置がZ軸方向に積み重なり、「軌跡（trajectory）」として立体的に見えるようになります。これにより、ある地点での滞在時間や移動の速さ、活動範囲などを直感的に理解できます。



## 背景と応用例

時空間キューブは、1960年代に地理学者Hägerstrandによる「時空間プリズム（space-time prism）」という理論的概念に基づいています。この理論は、人間活動が時間と空間の制約の中で行われることを示したもので、後のGIS分析や人流解析に大きな影響を与えました。

現代では、以下のような応用が見られます。

- **都市交通解析**：通勤・通学の移動パターンを3Dで表示  
- **犯罪分析**：発生地点と時刻の関係を立体的に分析  
- **環境モニタリング**：温度・降水量・風速などの時系列空間変動を可視化  
- **SNS投稿分析**：時間と場所に基づく人々の行動・話題の変化を追跡



## 利用ツールと実装例

| 分野 | 主なツール／実装例 |
|------|----------------|
| GIS解析 | ArcGIS Proの「Space Time Pattern Mining」ツール |
| Web可視化 | CesiumJS、Three.jsを用いたWebGL立体描画 |
| データ分析 | Python（Plotly、Matplotlib 3D、Kepler.glなど） |
| 研究分析 | Hägerstrandモデルに基づく時空間プリズム解析（STCモデル） |



## まとめ

時空間キューブは、時間と空間を統合的に理解するための強力な可視化手法です。従来の2D地図や時系列グラフでは見落としがちな「変化の連続性」や「同時性」を、立体的に把握することができます。特に、人の移動、都市活動、環境変化などを扱うデータにおいて、その表現力が発揮されます。



## 参考・出典

- [ArcGIS Pro documentation: Space Time Cube](https://pro.arcgis.com/en/pro-app/latest/tool-reference/space-time-pattern-mining/create-space-time-cube.htm)  
- [Wikipedia: Space-time cube](https://en.wikipedia.org/wiki/Space-time_cube)  
- [Hägerstrand, T. (1970). "What about people in regional science?" *Papers of the Regional Science Association*](https://link.springer.com/article/10.1007/BF01936872)  
