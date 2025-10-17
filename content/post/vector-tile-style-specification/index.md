+++
author = "Yuichi Yazaki"
title = "地図ベクトルタイルのスタイル定義：Mapbox・MapLibre・GSIの比較"
slug = "vector-tile-style-specification"
date = "2025-10-17"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++


地図のデザインを定義する「スタイル JSON」は、Mapbox が定めた **Mapbox Style Specification** をもとに発展してきました。現在では、オープンソース版である **MapLibre Style Spec** 、そして日本の **国土地理院（GSI）による地理院地図 Vector スタイル仕様** が存在します。ここでは、Mapbox を基準にそれぞれの仕様の違いを整理します。

<!--more-->

## 地図スタイル仕様の歴史的背景

現在使われている「スタイル JSON」という形式の地図デザイン定義は **Mapbox 社が 2010 年代半ばに確立した Mapbox Style Specification** に端を発します。

この仕様は Mapbox GL JS の登場とともに公開され、WebGL による動的な地図描画を可能にするデファクト・スタンダードとなりました。

その後、オープンソースの継承版である **MapLibre Style Spec** が派生し、さらに日本では国土地理院が同構造を参照して **地理院地図 Vector スタイル** を策定しました。現在の多くの地図プラットフォームは、この流れのいずれかに位置づけられます。

## 主な経緯

| 年 | 出来事 |
|:--|:--|
| **2013年** | Mapbox がベクトルタイル技術を発表。Mapbox Streets などに導入。 |
| **2014年** | 公式ブログで「Introducing Mapbox GL」を発表。スタイル JSON による地図表現を実装。 |
| **2019年7月29日** | 国土地理院が「地理院地図 Vector」を試験公開。 |
| **2020年3月19日** | 国土地理院が全国データの提供を開始。 |
| **2020年12月** | Mapbox GL JS v2 のライセンス変更により OSS ではなくなる。 |
| **2021年1月** | MapLibre プロジェクトが発足し、Mapbox GL JS v1 をフォークして継続開発へ。 |


## Mapbox スタイル と GSI（地理院地図 Vector スタイル）の比較

| 比較項目 | Mapbox Style Specification（基準） | GSI 地理院地図 Vector スタイル | 備考 |
|:--|:--|:--|:--|
| **基本構造** | JSON 構造で、`version`, `sources`, `layers`, `sprite`, `glyphs` 等をルート要素に持つ | JSON 構造（PDF仕様書で定義）。`group`, `directory`, `item`, `layer`, `draw` の階層構造を持つ | GSI は階層的グルーピングを導入 |
| **レイヤ構造** | `layers` 配列にレイヤを列挙 | `group` や `directory` に複数レイヤ (`layer` 要素) を含む | 表示制御・UIとの親和性を意識 |
| **レイヤタイプ** | `"type"` に `"fill"`, `"line"`, `"symbol"`, `"circle"`, `"raster"`, `"background"`, `"fill-extrusion"`, `"heatmap"`, `"hillshade"` 等 | `"draw"` の中で `"type": "fill"`, `"line"`, `"symbol"` 等を指定 | 3D系は明記されていない |
| **描画プロパティ** | `"paint"`, `"layout"` に属性を定義 | `"draw"` の中で `color`, `opacity`, `weight` などを指定 | 簡略化され、読みやすい構成 |
| **追加描画指定** | `"fill-pattern"` 等の標準機能 | `"fill-style"`（斜線・網掛け）など独自拡張 | 網掛け・ハッチ表現をサポート |
| **属性フィルタ** | `"filter"` に Mapbox 式 | `"filter"` 準拠 | 式の機能は限定的 |
| **ズーム範囲** | `"minzoom"`, `"maxzoom"` | 同等にサポート | 互換性あり |
| **描画順序** | `layers` の配列順序 | `"zIndex"` 数値で制御 | 独自の順序指定 |
| **グループ構造** | 標準仕様には無い | `"group"`, `"directory"`, `"item"` で階層構造 | GSIサイトのUI構成に対応 |
| **独自プロパティ** | 無し | `"additional-filter"`, `"blend"`, `"editZIndex"` 等あり | 行政用途に最適化 |
| **互換性** | Mapbox／MapLibreで利用可能 | Mapbox準拠だが完全互換ではない | 拡張部分は無視される場合あり |
| **更新頻度** | 継続的に更新 | 2020年版（PDF固定） | 国内向け限定仕様 |
| **公式仕様** | [Mapbox Style Spec](https://docs.mapbox.com/style-spec/) | [地理院地図Vector仕様(PDF)](https://maps.gsi.go.jp/help/pdf/vector/stylespec.pdf) | |



## Mapbox スタイル と MapLibre スタイルの比較

| 比較項目 | Mapbox Style Specification（基準） | MapLibre Style Specification | 備考 |
|:--|:--|:--|:--|
| **基本構造** | `version`, `sources`, `layers`, `sprite`, `glyphs` | 同一構造。Mapbox仕様のフォーク | 完全互換ベース |
| **目的** | Mapbox社の商用プラットフォーム向け | OSS 互換実装（MapLibre GL JS / Native） | コミュニティ主導 |
| **互換性** | 最新 Mapbox GL JS に追従 | Mapbox v1系を基に後方互換重視 | 実装差は最小限 |
| **仕様更新方針** | 商用更新サイクル | OSS コミュニティで審議 | 運営主体が異なる |
| **拡張機能** | `"terrain"`, `"sky"`, `"fog"` など | 段階的対応または未対応 | |
| **式（Expressions）** | 高度な式構文をサポート | 同等の式構文を実装 | 互換性高い |
| **3D表現** | `"fill-extrusion"`, `"terrain"`, `"sky"` | `"fill-extrusion"` 対応。その他は実装依存 | |
| **仕様拡張性** | Mapbox独自追加あり | Mapbox依存削除・独立維持 | |
| **ライセンス** | Mapbox社 商用 | MapLibre Org BSD系OSS | |
| **適用範囲** | Mapbox Studio, API, GL JS v2+ | MapLibre GL JS, Native, QGIS等 | |
| **公式仕様** | [Mapbox Style Spec](https://docs.mapbox.com/style-spec/) | [MapLibre Style Spec](https://maplibre.org/maplibre-style-spec/) | |



## まとめ

- **GSIスタイル** は Mapbox仕様を拡張し、行政地図や日本特有の表現（網掛け、階層構造など）を取り込んだ独自仕様。  
- **MapLibreスタイル** は Mapbox仕様のフォークであり **互換性を保ったオープンソース版** 。
- 両者とも Mapbox の影響下にありながら、目的に応じて異なる方向に進化している。




## 参考・出典

- [Mapbox Style Specification](https://docs.mapbox.com/style-spec/)
- [Introducing Mapbox GL](https://blog.mapbox.com/introducing-mapbox-gl-7a1f4e960e16)
- [MapLibre Style Spec](https://www.maplibre.org/maplibre-style-spec/)  
- [地理院地図Vector 地図デザインファイル仕様 (PDF)](https://maps.gsi.go.jp/help/pdf/vector/stylespec.pdf)  
- [地理院地図 Vector の試験公開（国土地理院 PDF）](https://repository.exst.jaxa.jp/dspace/bitstream/a-is/960741/1/AA1940350022.pdf)
- [ベクトルタイルとその提供実験について（国土地理院公式）](https://maps.gsi.go.jp/development/vt.html)
- [Our Thoughts as MapboxGL JS v2 Goes Proprietary](https://carto.com/blog/our-thoughts-as-mapboxgl-js-2-goes-proprietary)