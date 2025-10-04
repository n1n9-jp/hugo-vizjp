+++
author = "Yuichi Yazaki"
title = "ディシメトリック・マップ（Dasymetric Map）"
slug = "dasymetric-map"
date = "2020-08-11"
description = ""
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/dasymetric-map-2048x1448.png"
+++

コロプレスマップは、行政区域の境界とデータ集計単位地区の境界が一致している前提でした。デイシメトリック・マップでは、これら二つの境界が一致させない処理をした地図を指します。

<!--more-->

理由として、アーサー・H・ロビンソンらは以下のことを挙げています。

データを入手するために用いた単位地区の大きさが非常に異なっていたり効果的でない場合
地理的に不連続な分布を示す事象
リモートセンシング画像などを利用して、テーマデータを面で表現するのにより適切な領域を設定します。その結果、元の行政区域がより小さく、そして適切な空間単位に分割されます。たとえば人口密度のデータであれば、住宅地として土地利用されているエリアのみを対象にしてデータを描画します。

処理を自動化する地図の可視化アプリでは扱いづらいため、広くは利用されていませんが、科学分野の研究者が、クリティカルなGISの利用が必要なときに利用しているケースが多いようです。

## 作例

### リスボンの人口密度。コロプレス（左）とディシメトリック（右）。

![](images/Choroplet-map-left-and-dasymetric-map-right-depicting-population-density-for-the-year_W640-1.jpg)

https://www.arcgis.com/apps/Cascade/index.html?appid=fde9d5cc2716490faf1e861d171a6fdd

### ウィーン市の人口密度。コロプレス（前者）とディシメトリック（後者）。

![](images/dasy2.gif)

GIFアニメーションで切り替わるように処理されている画像

https://anitagraser.com/2012/11/18/improving-population-density-maps-using-dasymetric-mapping/

### ベオグラード市のデータを対象にした研究

![](images/Choroplet-map-left-and-dasymetric-map-right-depicting-population-density-for-the-year_W640-1.jpg)

(PDF) Dasymetric modelling of population dynamics in urban areas

### フロリダ州タンパにおけるコロプレス・マップ（左）とディシメトリック・マップ（右）の比較

![](images/dasymetric_728x210.jpg)

https://www.epa.gov/enviroatlas/dasymetric-toolbox

### 2011年 ロンドンの人口密度

![](images/dasymetric-map-2048x1448.png)

Dasymetric map of London’s population density, 2011 – James Gleeson

### 人口密度のマッピング。国勢調査データと土地被覆の統合

![](images/1_uGOsR0fQZHP1B1PNnHbb6A.png)

http://sites.tufts.edu/gis/files/2013/02/Nelson_Jason.pdf

### サンフランシスコ・ベイエリアの地図

![](images/zoom2_lowres.jpg)

https://www.usgs.gov/centers/wgsc/science/dasymetric-mapping?qt-science_center_objects=0#qt-science_center_objects

## 誰が作ったのか

1911年にTyan-Shanskyが名付け、J.K. Wrightが有名にした、と wiki.gis.comにあります。

## 以前の似た作例
Henry Drury Harness (1838)

![](images/1PWcStPNYxUMp8Q5gakALng.png)

https://digital.ucd.ie/view-media/ivrla:45724/bookView#40a90816-2189-4a97-8c09-bb6c3ebf5c2b http://www.complexcity.info/files/2011/06/harness-1837-flowmap.pdf

## 類似する地図

コロプレスマップ（Colopleth Map）
等充線図（Isoplethic Map）

## 他の呼び名
特になし。

## 参考文献
アーサー・H・ロビンソンら「地図学の基礎」
