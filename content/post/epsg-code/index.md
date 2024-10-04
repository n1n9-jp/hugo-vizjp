+++
author = "Yuichi Yazaki"
title = "EPSGコード"
slug = "epsg-code"
date = "2020-02-22"
categories = [
    "technology"
]
tags = [
    "gis","地図"
]
image = "images/epsg.png"
+++

コンピュータで地図を扱おうとする際に、空間参照系（Coordinate system）、測定単位（Unit）、測地CRS（Geodetic CRS）、基礎データ（Datum）、地球楕円体（Ellipsoid）、子午線（Prime meridian）など、たくさんの設定値を扱う必要があります。個別に扱うのは大変なので、これらをセットとして、IDを発番し、多くの地理情報システム（GIS）ではこれを使用しています。

概念的には、空間参照ID、英語ではSRID（Spatial Reference System Identifiers）と呼ばれるもので、事実上の標準として、EPSGコードが使用されています。EPSGは、the European Petroleum Survey Group（欧州石油調査グループ）の略称です。

### 日本でよく使用される測地基準系と座標系一覧（筆者調べ）

<table class="wp-block-table"><tbody><tr><td></td><td><strong>Tokyo</strong></td><td><strong>JGD2000</strong></td><td><strong>JGD2011</strong></td><td><strong>WGS84</strong></td></tr><tr><td>地理座標系</td><td>-</td><td>4612</td><td>6668</td><td>4326</td></tr><tr><td>UTM投影座標系</td><td>3092〜3096</td><td>3097〜3101</td><td>6688〜6692</td><td>32651〜32656</td></tr><tr><td>平面直角投影座標系</td><td>30161〜30179</td><td>2443〜2461</td><td>6669〜6687</td><td>-</td></tr><tr><td>球面メルカトル図法</td><td>-</td><td>-</td><td>-</td><td>3857</td></tr></tbody></table>

### ウェブで主流の地図タイルのEPSG ID

基本的には 3857 を用いればいいのですが、過去の経緯から、たとえば検索して探そうとするといくつか紛らわしいIDが見つかります。ご注意ください。

**[3857](http://epsg.io/3857)**  
現在、Google Maps、OpenStreetMap、Bingなどを描画する際に利用されるEPSGのID。

**[900913](http://epsg.io/900913)**  
かつて、Google MapsやBingはEPSGに却下された際に、GISツール側で対応するため非公式に発番されたもの。

**[3785](http://epsg.io/3785)**  
2008年中頃にEPSGに割り当てられたID。半年後にこのIDは非推奨とされ、新しいIDが発番されました。それが3857です。3785と似ていることには意味がない（はず）です。

### 関連リンク

#### 見やすい3rdパーティのリファレンス

[](http://epsg.io/)[http://epsg.io/](http://epsg.io/)

#### 公式データベース

- [](https://www.epsg-registry.org/)[https://www.epsg-registry.org/](https://www.epsg-registry.org/)
- [http://www.epsg.org](http://www.epsg.org/)/
- [](https://beta.epsg.org/home.html)[https://beta.epsg.org/home.html](https://beta.epsg.org/home.html)
