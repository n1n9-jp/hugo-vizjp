+++
author = "Yuichi Yazaki"
title = "3Dコロプレス・マップ"
slug = "3d-choropleth-map"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

3Dコロプレス・マップ（3D Choropleth Map）は、地理的な区画ごとに統計値を色で示す「コロプレス・マップ（Choropleth Map）」を三次元的に拡張した可視化手法です。

各地域の値を「高さ（立体のプリズム）」として表現し、色と高さの両方で変数の大小を表します。地表から突き出たような立体構造が特徴で、人口密度や所得水準などを直感的に把握できる利点があります。

<!--more-->


Mapboxやdeck.gl、ArcGISなどのGISプラットフォームでは、この3Dコロプレス表現がよく利用されます。
都市の「盛り上がり」を見るような表現が得られ、視覚的なインパクトが強い反面、誤読や視点依存性にも注意が必要です。



### チャートの見方

1. **色（Color）**  
　各ポリゴン（地域単位）は、統計値の大きさに応じてカラースケールで塗り分けられます。  
　たとえば、明るい色は低い値、濃い色は高い値を示すことが多いです。

2. **高さ（Height / Extrusion）**  
　各地域の高さは、対象変数（人口、所得、比率など）の値に比例します。  
　高さが高いほど値が大きいことを意味します。これにより、平面マップよりも直感的な「地形的印象」でデータを把握できます。

3. **視点操作（Viewpoint / Camera）**  
　視点を傾けることで高さの違いをより明確に確認できますが、視点の角度や距離によって見え方が変化します。  
　特に高いプリズムが後方の領域を隠す「オクルージョン（遮蔽）」には注意が必要です。



### 背景と利点

- **直感的な理解**：高さを用いることで、値の大小を視覚的に直感的に理解できる。  
- **空間的傾向の把握**：隣接地域の値の変化を「地形的な勾配」として認識できる。  
- **視覚的訴求力**：プレゼンテーションやデータストーリーテリングで印象的な表現となる。

一方で、**遠近歪み・視点依存性・過剰装飾による誤読**といったリスクも指摘されています。  
実務上は、インタラクティブな操作性（回転・ズーム）を付加して、ユーザーが自由に視点を調整できるようにすることが望まれます。



### 代表的なツール・実装例

| ツール／ライブラリ | 機能概要 | 公式ドキュメント |
|----------------------|-----------|------------------|
| Mapbox GL JS | `fill-extrusion`レイヤで地域ポリゴンを高さ付きで描画 | [Mapbox GL JS: Extrusions](https://docs.mapbox.com/mapbox-gl-js/example/3d-extrusion-floorplan/) |
| deck.gl | `GeoJsonLayer`の`extruded: true`設定で3Dプリズム表示 | [deck.gl GeoJsonLayer](https://deck.gl/docs/api-reference/layers/geojson-layer) |
| ArcGIS Scene Viewer | 3D空間上でコロプレスを立体表示可能 | [Esri ArcGIS Scene Viewer](https://www.esri.com/en-us/arcgis/products/arcgis-scene-viewer/overview) |
| Kepler.gl | 3Dヒートマップ／コロプレス対応のオープンソースツール | [Kepler.gl Official Site](https://kepler.gl/) |



### 関連研究・批判的視点

- Wheeler (2012) は、3Dコロプレス・マップの「効果的な使い方」と「誤解を招く使い方」を実例とともに比較し **誤読のリスクが高い** と指摘しています。  
- arXiv (2020) の研究では、3D表現は視覚的な魅力を高める一方で **定量比較の正確性を損ねる傾向** があると報告されています。  
- また、VR環境での3Dコロプレス（“Prism Map”）操作に関する研究も進んでおり **2Dと3Dを補完的に用いる設計** が有効とされています。



### まとめ

3Dコロプレス・マップは、地理的な統計値を立体的に表現することで、空間的な傾向や分布を印象的に伝える手法です。しかし、データの正確な比較・判断を重視する分析用途よりも **説明・プレゼンテーション・探索的分析** の文脈で使うことが望ましい可視化形式といえます。効果的な利用には、色・高さ・視点のバランス設計が重要です。



## 参考・出典

- [Wikipedia: Choropleth map](https://en.wikipedia.org/wiki/Choropleth_map)
- [Andrew P. Wheeler: Example (good and bad) uses of 3D choropleth maps](https://andrewpwheeler.com/2012/01/29/example-good-and-bad-uses-of-3d-choropleth-maps/)
- [arXiv: An Evaluation of Visualization Methods for Population Statistics Based on Choropleth Maps (2020)](https://arxiv.org/abs/2005.00324)
- [arXiv: Tilt Map – Interactive Transitions Between Choropleth Map, Prism Map and Bar Chart in Immersive Environments (2020)](https://arxiv.org/abs/2006.14120)
