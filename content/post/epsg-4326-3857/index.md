+++
author = "Yuichi Yazaki"
title = "なぜ Web 地図データの案内には EPSG:4326 のものもあれば EPSG:3857 のものもあるのか？"
slug = "epsg-4326-3857"
date = "2025-11-16"
categories = [
    "technology"
]
tags = [
    "gis","地図"
]
image = "images/epsg.png"
+++

<a href="https://epsg.io/" target="_blank">EPSG（EPSGコード）</a>とは、世界各国の測地系・投影法・座標参照系（CRS）を一意に識別するために割り振られた番号で、地理情報を「どの座標系で表しているか」を明確に示すための国際標準コードです。

Web 地図を扱う人が必ず一度はハマる落とし穴があります。

> **「Web 地図で用いるデータは EPSG:4326 が正しいの？ それとも EPSG:3857 が正しいの？」**

Foursquare、Google Maps、Mapbox、MapLibre、Kepler.gl、Cesium、GIS（QGIS/ArcGIS）...ツールによって採用しているEPSGについて、書いてあることが違うように見えるため、非常に混乱しがちです。

しかし実は、この混乱は **「座標の用途が 2 種類ある」** ことに理由があります。

この記事では、一次情報を用いながら **Web 地図データの「入力」「描画」「タイル」の役割を整理** していきます。

<!--more-->


## 結論

> ユーザーがアップロードするデータは、必ず **EPSG:4326**　でよい。  
> 地図タイルや描画は内部で　**EPSG:3857** を使っているだけです。

- **入力データ層→ EPSG:4326**  
- **地図タイル層→ EPSG:3857**  

つまり、多くの人が「どちらを使うべきか」で悩む理由は **ツールが書いている EPSG が、どの層の話をしているかが違うから** です。

※ QGISやArcGISなどGIS系ツールは複数の投影法を扱える万能ツールですので、ここでは話の対象外とします。


## GeoJSON は仕様で「EPSG:4326 に固定」と明記されている

GeoJSON の公式仕様 RFC 7946 には、以下のように書かれています：

> **“Coordinates MUST be in WGS84 longitude/latitude.”**  
> **座標は必ず WGS84 の経度・緯度（注：つまりEPSG:4326）でなければならない。**
>
> [出典：RFC 7946 GeoJSON Specification](https://www.rfc-editor.org/rfc/rfc7946.html)

したがって **GeoJSON を扱う Web 地図系ツールは、すべて「入力データ＝4326 前提」** で設計されています。

これは MapLibre、Mapbox、Kepler.gl、Cesium、Google Maps、OpenLayers すべて共通です。



## しかし「描画に使われる座標」は EPSG:3857

Google Maps が Web Mercator（EPSG:3857）を採用したことで Web の地図タイル体系（Z/X/Y）は実質的に 3857 が世界標準になりました。

- [Google Maps APIs](https://developers.google.com/maps/documentation/javascript/coordinates)
- [OpenStreetMap 公式 Wiki](https://wiki.openstreetmap.org/wiki/Web_Mercator)
- [MVT（Mapbox Vector Tile）の仕様書](https://github.com/mapbox/vector-tile-spec)

つまり、**地図タイルは必ず 3857**ということになります。

**※ 補足：Cesium の内部座標はEPSG:4978**

Cesium も入力データは EPSG:4326（度数法）ですが、描画時には **地心直交座標（EPSG:4978 / ECEF）** に変換して扱います。
Web Mercator ではありませんが、ここでも「入力と描画の座標は異なる」構造は同じです。



## Web 地図の内部処理は「4326 の入力 → 3857 に投影 → 画面に描画」

これが最も誤解されやすい部分です。

- 1. ユーザーのデータ（EPSG:4326: 緯度経度）
- 2. MapLibre / deck.gl / GoogleなどのWeb地図エンジン（内部で自動的に 3857 への投影を実行）
- 3. 描画（EPSG:3857: タイル座標）

つまりツール側が入力データを念頭に「4326」と書いているのは正しいし、一方で表示を念頭に「3857」と書いているのも正しいのです。



## では EPSG:3857 を「入力として」要求するツールは存在する？

ほぼ存在しないです。唯一の例外は MVT（ベクタータイル生成）だけです。
これは MVT の仕様が 3857 固定だからです。
つまり **入力データを地図タイルとして用いる場合のみ** ということになります。

地図タイル以外にも「地図を配信する仕組み」として GISサーバやWMS/WMTSが存在しますが、投影法の自由度や用途がまったく異なるため、同じものとして扱わないことが重要です。

| 方式 | 位置づけ | 投影法 | 特徴 | 主な利用領域 |
|------|-----------|--------|------|----------------|
| **地図タイル（XYZタイル）** | Web地図のデファクト標準のタイル配信方式 | **ほぼ EPSG:3857に固定** | 高速描画向け。Z/X/Y 形式でキャッシュしやすい。Google Maps/OSMと互換。 | Web地図・アプリ・可視化ツール（MapLibre、Mapbox、Kepler） |
| **GISサーバ（GeoServer / MapServer）** | GIS向けの地図配信基盤（サーバー） | **EPSG が自由（任意に設定可能）** | WMS/WMTS/タイル生成など多方式を扱う。分析用の地理データを柔軟に配信。 | 行政GIS、測量、業務システム、OGC準拠サービス |
| **WMS / WMTS** | OGCが定めた国際標準の地図配信方式 | **EPSGが自由** | WMSは動的画像を返す方式、WMTSはタイルを高速配信。Web地図より投影設定が柔軟。 | 国土地理院など公共GIS、精度重視のシステム |



## まとめ

| 誤解 | 原因 |
|------|-------|
| 「どの EPSG でアップすればいいかわからない」 | 入力（4326）と描画（3857）が混同されている |
| 「Google Maps は 4326 と書いてあるのに 3857 と書いてある資料もある」 | 入力データと地図タイルの違い |
| 「MapLibre は 3857 で描画してるけど、入力は 4326？」 | GeoJSON の仕様が 4326に固定 |




## 参考・出典

- [RFC 7946 GeoJSON Specification](https://www.rfc-editor.org/rfc/rfc7946)
- [Google Maps JavaScript API – Coordinates](https://developers.google.com/maps/documentation/javascript/coordinates)
- [OpenStreetMap Wiki – Web Mercator](https://wiki.openstreetmap.org/wiki/Web_Mercator)
- [Mapbox Vector Tile Spec](https://github.com/mapbox/vector-tile-spec)
- [Cesium Documentation – Geometry and Appearance](https://cesium.com/docs/tutorials/geometry-and-appearance/)