+++
author = "Yuichi Yazaki"
title = "地図の階級分類におけるJenksって？"
slug = "classification-jenks"
date = "2020-02-27"
categories = [
    "technology"
]
tags = [
    "qgis","地図"
]
image = "images/qgis_jenks.png"
+++

様々なGISアプリケーションで階級分類する際に、**Natural breaks (Jenks)**や**Jenks**などという名称の分類があります。一体これは何か？ということで、いくつかのリソースから引用してみましょう。

### Geospatial Analysis 6th Edition, 2020 update

- [Geospatial Analysis 6th Edition, 2020 update](https://spatialanalysisonline.com/HTML/index.html?building_blocks_of_spatial_ana.htm)

「GISパッケージ内で広く使用されているこれらは、分散最小化分類の形式です。ブレークは通常不均一であり、値の大きな変化が発生する値を分離するために選択されます。選択された階級分類の数に大きく影響される可能性があり、通常ではない階級境界を持つ傾向があります。」

「Jenks and Caspall（1971）で説明されているように、一般的に適用される方法はJenksによるもので、Fisher（1958）に続きます。」

### ArcGISでの定義

- [ArcGISでの定義](https://pro.arcgis.com/ja/pro-app/help/mapping/layer-properties/data-classification-methods.htm#ESRI_SECTION1_B47C458CFF6A4EEC933A8C7612DA558B)


「**自然分類 (Jenks)** では、クラスはデータ値の自然なグループ化に基づいています。クラス閾値は、類似している値を最適にグループ化し、クラス間の差異を最大化するように特定されます。フィーチャは、データ値の差異が比較的大きい部分に境界が設定されるようにクラスに分割されます。」

「自然分類手法は、データ固有の分類方法で、異なる基礎情報から構築された複数のマップの比較には有用ではありません。」

### Cartoでの定義

- [Cartoでの定義](https://carto.com/help/glossary/#jenks)

「数値でマップレイヤーのスタイルを設定する場合、**Jenks**分類方法は、データに固有の自然なグループ化に基づいて、データをクラスに分割します。 グループは、クラス内の分散を減らし、異なるクラス間の分散を増やすこと（1D k-means）で形成されます。」

「Jenksはデータ固有の分類であるため、異なる基になるデータから作成された複数のマップを比較するのには役立ちません。」

### QGISでの定義

- [QGISでの定義](https://docs.qgis.org/3.4/ja/docs/user_manual/working_with_vector/vector_properties.html#graduated-renderer)


「**Natural Breaks（Jenks）**：各クラス内の分散は最小ですが、クラス間の分散は最大です。」
