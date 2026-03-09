+++
author = "Yuichi Yazaki"
title = "ADS-Bとは"
slug = "ads-b"
date = "2026-03-09"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++


## ADS-Bの概要

ADS-B（Automatic Dependent Surveillance-Broadcast）は、航空機が自らの位置情報を自動的に放送する監視システムです。このシステムは、RTCA DO-260シリーズの基準に基づいており、ICAOの国際基準でも規定されています。航空機はGPSなどの衛星航法システムから得た位置、速度、高度などのデータを定期的に送信し、周囲の航空機や地上局がこれを受信することで、衝突回避や交通管制を支援します。FAAによると、ADS-Bは従来のレーダーシステムを補完し、より正確でリアルタイムな追跡を可能にします。

<!--more-->

## ADS-Bの仕組み

ADS-Bの仕組みは、航空機が1090 MHzの周波数でMode S Extended Squitter（ES）メッセージを放送する形です。RTCA DO-260Bでは、メッセージの構造が詳細に定義されており、航空機のICAOアドレス（24ビット）や位置情報（CPRエンコードされた緯度経度）が含まれます。送信は自動的で、地上局や他の航空機がこれを傍受します。

このシステムは「Dependent」であるため、航空機自身の航法装置に依存し、「Broadcast」であるため、誰でも受信可能です。背景として、従来の二次監視レーダー（SSR）は地上局からの問い合わせが必要でしたが、ADS-Bは自発的放送によりカバレッジを拡大しています。

## データの見方

ADS-Bのデータを平易に見るためには、まずメッセージの基本構造を理解します。メッセージは112ビットの長さで、Downlink Format（DF）が17の場合がADS-Bです。主なフィールドは、ICAOアドレス（航空機のユニークID）、位置（緯度・経度）、高度、速度などです。

たとえば、BDS 0,5の空中位置メッセージでは、緯度経度がCompact Position Reporting（CPR）でエンコードされており、偶数・奇数フレームを組み合わせて正確な位置を計算します。精度指標としてNIC（Navigation Integrity Category）やNACp（Navigation Accuracy Category for Position）があり、これらが高いほど信頼性が増します。

実際のデータを見るときは、JSONやCSV形式で提供されることが多く、たとえばOpenSky NetworkのState Vectorでは「icao24」（ICAO hex）、「lat」「lon」「velocity」などのフィールドを読み取ります。これを地図にプロットしたり、時系列で分析したりします。詳細に言うと、速度メッセージ（BDS 0,9）では地面速度とトラック角度が含まれ、垂直速度もわかります。

初心者向けには、Flightradar24のようなサイトのライブマップから視覚的に見るのがおすすめです。

以下は、ADS-B ExchangeのJSONデータ例です（インデント付き）：

```
{
  "hex": "a12345",
  "lat": 37.7749,
  "lon": -122.4194,
  "altitude": 35000,
  "speed": 450,
  "track": 90,
  "callsign": "UAL123"
}
```

このように、各フィールドが航空機の状態を示しています。




## 関連する背景知識

ADS-Bは、2000年代初頭に開発され、米国では2020年から多くの航空機に搭載が義務化されました（FAAの14 CFR 91.225）。背景として、航空交通の増加に伴い、レーダーだけでは不十分になったため、衛星ベースの監視が導入されました。

類似システムとして船舶のAISがあり、両者は自動放送型監視技術として似ています。データは公開されており、研究や趣味用途で活用され、OpenSky Networkのようなプラットフォームがコミュニティを形成しています。ただし、プライバシー保護のため、一部データがフィルタリングされる場合があります。

## ADS-Bデータ配布サイトの比較

主なADS-Bデータ配布サイトのフォーマットを表にまとめます。

| サイト          | フォーマット          | 主なフィールド例                          |
|-----------------|-----------------------|-------------------------------------------|
| OpenSky Network | CSV/JSON/Parquet     | time, icao24, lat, lon, velocity         |
| ADS-B Exchange  | JSON (gzip)          | hex, lat, lon, altitude, speed, dbFlags  |
| Flightradar24   | JSON (REST API)      | modeS, lat, lon, track, speed            |
| ADSB.lol        | JSON GZIP            | icao, lat, lon, alt                      |
| adsb.fi         | JSON API             | hex, lat, lon, alt                       |

## ADS-Bデータ配布サイトの高度と速度を示す変数

各サイトのデータフォーマットから、高度（altitude）と速度（speed/velocity）に関連する主な変数をまとめました。これらはAPIやデータフィードで提供されるフィールドで、単位や詳細がサイトによって異なります。情報は公式ドキュメントや関連記述に基づいています。

| サイト          | 高度を示す変数                          | 速度を示す変数                          |
|-----------------|-----------------------------------------|-----------------------------------------|
| OpenSky Network | - baro_altitude (気圧高度、メートル)<br>- geoaltitude (幾何高度、メートル) | - velocity (対地速度、m/s) |
| ADS-B Exchange  | - alt_baro (気圧高度、フィートまたは"ground")<br>- alt_geom (幾何高度、フィート) | - gs (対地速度、ノット)<br>- ias (指示対気速度、ノット)<br>- tas (真対気速度、ノット)<br>- mach (マッハ数) |
| Flightradar24   | - altitude (高度、単位はフィートが一般的) | - speed (速度、ノットが一般的) |
| ADSB.lol        | - altitude (高度、フィートまたは"ground")<br>- Baro. altitude (気圧高度)<br>- WGS84 altitude (幾何高度) | - Groundspeed (対地速度、ノット)<br>- speed (速度、ノット) |
| adsb.fi         | - alt_baro (気圧高度、フィートまたは"ground")<br>- alt_geom (幾何高度、フィート) | - gs (対地速度、ノット)<br>- ias (指示対気速度、ノット)<br>- tas (真対気速度、ノット)<br>- mach (マッハ数) |

これらの変数はJSONやCSV形式で提供され、null値を取る場合もあります。詳細は各サイトのAPIドキュメントで確認してください。


## まとめ

ADS-Bは現代航空の安全性を高める重要な技術です。公式基準に基づく仕組みを理解し、データを適切に見ることで、その価値が実感できます。将来的には、さらに統合された交通管理システムに発展していくでしょう。


## 参考・出典

- [OpenSky Network](https://opensky-network.org/)
- [ADS-B Exchange](https://www.adsbexchange.com/)
- [Flightradar24](https://www.flightradar24.com/)
- [ADSB.lol](https://www.adsb.lol/)
- [adsb.fi](https://adsb.fi/)
- [FAA ADS-B Performance Report](https://adsbperformance.faa.gov/paprrequest.aspx)

