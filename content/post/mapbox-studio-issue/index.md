+++
author = "Yuichi Yazaki"
title = "Mapbox Studio で作成した地図タイルを Kepler.gl や Foursquare Studio で用いる"
slug = "mapbox-studio-issue"
date = "2025-10-15"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/cover.png"
+++

かねてから、Mapbox Studio で作成した地図タイルを Kepler.gl や Foursquare Studio で用いることが出来る機能が提供されていましたが、最近、Kepler.glやFoursquare StudioでMapbox Studioのスタイルを指定しても、地図が表示されないという現象が報告されています。

以前は正常に読み込めていたにもかかわらず、突然「Failed to load map style」などのエラーが出るようになりました。

<!--more-->

この原因は、Mapbox Studio側の仕様変更にあります。本記事では、Mapboxのスタイル仕様がどのように変わり、なぜこのような互換性問題が起きているのかを解説します。



## 現象の概要

Kepler.glやFoursquare Studioなど、Mapboxベースのビジュアライゼーションツールを使用しているユーザーの間で、以下のような問題が報告されています。

- Mapbox Studioで作成したスタイルをKepler.glに指定しても地図が真っ白になる  
- 「Failed to load map style」または「This style uses Mapbox Standard」というエラーが表示される  


## 背景：Mapbox Standardへの移行

2024年以降、Mapboxは従来の「Classicスタイル（v2以前）」を段階的に廃止し、新しい「Mapbox Standard」形式（GL JS v3専用）へ完全移行しました。この変更はMapbox Studioの内部仕様とUIの両方に影響を与えています。

**主な変更点は以下の通りです。**

| 項目 | 旧仕様（Classicスタイル） | 新仕様（Mapbox Standard） |
|------|------------------|-------------------|
| 対応バージョン | Mapbox GL JS v2以前 | Mapbox GL JS v3以降 |
| スタイル名例 | `light-v11`, `dark-v11`, `streets-v12` | `standard`, `monochrome`, `faded` |
| 互換性 | Kepler.glやMapLibreで使用可能 | 非互換（v3専用機能を含む） |

Mapbox Standardでは、地形（terrain）や霧（fog）などの3D表現機能が統合されており、MapLibreやKepler.glのようなv2互換エンジンでは解釈できない要素が含まれています。そのため、従来のClassicスタイルを参照する外部ツールが正常に動作しなくなっています。



## 回避策：Classicスタイルを再登録する

現時点でも、Mapboxは一部のClassicスタイルを「Legacy（レガシー）」としてAPI経由で提供しています。スタイルの一覧です。

| スタイル名 | スタイル URL | 備考 |
|-------------|-------------|------|
| Streets | `mapbox://styles/mapbox/streets-v12` | 標準道路地図 |
| Light | `mapbox://styles/mapbox/light-v11` | 明るいテーマ |
| Dark | `mapbox://styles/mapbox/dark-v11` | 暗めのテーマ |
| Outdoors | `mapbox://styles/mapbox/outdoors-v12` | アウトドア地形＋道路表示 |
| Satellite | `mapbox://styles/mapbox/satellite-v9` | 衛星写真地図 |
| Satellite Streets | `mapbox://styles/mapbox/satellite-streets-v12` | 衛星写真＋道路ラベル表示 |
| Navigation Day | `mapbox://styles/mapbox/navigation-day-v1` | ナビゲーション用：日中モード |
| Navigation Night | `mapbox://styles/mapbox/navigation-night-v1` | ナビゲーション用：夜間モード |

これらのJSONファイルをAPI経由でダウンロードし、Mapbox Studioに「Upload」→「Publish」して再登録することで、Kepler.glやFoursquare Studioでも再び利用できるようになります。

この手法は、旧仕様に依存する外部ツール（Kepler.glやFoursquare Studioによるベースマップの読み込み機能）を今後も使い続けたいユーザーにとって、現実的かつ安定した解決策となります。

容易にJSONファイルを取得するためのツールを作成しましたので、役立ててください。

- [Mapbox URL ジェネレーター](https://n1n9-jp.github.io/Classic-Mapbox-Styles-Generator/)



## 今後の見通し

Mapboxは「Mapbox Standard」を中心としたv3世代への移行を進めています。
地形や3D要素を含む新表現が増える一方で、Classicスタイルとの互換性は今後さらに限定される見込みです。

そのため、データビジュアライゼーション用途でKepler.glなどを継続使用する場合は、ClassicスタイルのJSONをローカルにバックアップし、Mapbox Studio上で再登録する方法を維持することが推奨されます。



## まとめ

- Mapbox Studioは2024年以降「Mapbox Standard」形式へ全面移行  
- Classicスタイル（Light v11など）は新UIから直接作成できなくなった  
- Kepler.glやFoursquare Studioで地図が表示されない原因は、この仕様変更によるもの  
- ClassicスタイルをJSONとして再登録することで回避可能  
- 将来的には、Mapbox GL JS v3またはMapLibreへの移行が求められる可能性が高い

> **注意：Classicスタイルは今後更新されません。**  
> Mapboxは Classic スタイルを「互換性維持のために限定的に提供」していますが、道路・建物・行政界などの地物データは新しい更新を受けていません。  
> そのため、現行の地図と差異が生じる可能性があります。  
> 特に行政区画の変更や新しい道路の追加などは反映されません。  
>  
> 可視化背景として利用する場合は問題ありませんが、最新の地理情報を重視する用途では　Mapbox Standard または MapLibre系タイルへの移行を検討してください。

## 参考・出典

- [Studio Classicスタイルの廃止 | Mapbox | 開発者向けマップ](https://blog.mapbox.com/deprecating-studio-classic-styles-d8892ac38cb4)
- [Styles API | API Docs | Mapbox](https://docs.mapbox.com/api/maps/styles/#classic-mapbox-styles)