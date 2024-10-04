+++
author = "Yuichi Yazaki"
title = "mapbox-gl-jsがv2.0へヴァージョンアップと共に有料化へ"
slug = "mapbox-gl-js-v2"
date = "2021-06-10"
description = "AIによる音声の自動文字起こし（トランスクライブ）、良いサービスが続々登場しています。英語にも当然対応しているので、特に海外のカンファレンスに参加される方には強い味方になります。"
categories = [
    "technology"
]
tags = [
    "3d","地図"
]
image = "images/thumb_ph_vizjp.png"
+++


## mapbox-gl-jsとは

mapbox-gl-jsとは、WebGLを用いてベクター形式の地図タイルをレンダリングし、インタラクティブに操作することを可能にするJavaScriptライブラリです。

v1.0台の頃は、このライブラリを使用するけども、サーバサイド側でMapboxのサービス（＝Mapbox提供の地図タイルサービス）を利用しない場合、料金はかかりませんでした。v2.0以降は、このライブラリを使用するだけでも、ライブラリの呼び出し回数に基づいた利用料を払う必要があるよう、規約が変更されました。

[https://github.com/mapbox/mapbox-gl-js/issues/10162](https://github.com/mapbox/mapbox-gl-js/issues/10162)

[https://geo-news.jp/archives/2270](https://geo-news.jp/archives/2270)

## v2.0による新機能

v2.0になり、機能面では以下のような刷新が図られ、非常に充実したものになっています。詳しくは公式サイトのブログをご覧ください。

- すべてのマップが3Dに
- CAMERA APIの整備
- SKY API

[https://www.mapbox.com/blog/mapbox-gl-js-v2-3d-maps-camera-api-sky-api-launch](https://www.mapbox.com/blog/mapbox-gl-js-v2-3d-maps-camera-api-sky-api-launch)

## コミュニティで開発が続くオープン・ソース版

オープン・ソース版だったv1.0を継続してオープン・ソースのまま開発を続けようという動きがエンジニア・コミュニティで起こり、maplibre-gl-jsという名称で公開されています。

[https://github.com/maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js)
