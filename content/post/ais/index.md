+++
author = "Yuichi Yazaki"
title = "AISとは"
slug = "ais"
date = "2026-03-09"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++



## AISの概要

AIS（Automatic Identification System）は、船舶が自らの位置情報を自動的に放送する監視システムです。このシステムは、IMO（International Maritime Organization）の性能基準に基づいており、SOLAS（Safety of Life at Sea）条約の改正により義務化されています。船舶はGPSなどの航法システムから得た位置、速度、識別情報などを送信し、他の船舶や沿岸局がこれを受信することで、衝突回避や交通管理を支援します。IMOによると、AISは船舶の識別と追跡を強化し、海上安全を向上させるものです。

## AISの仕組み

AISの仕組みは、船舶がVHF（Very High Frequency）無線周波数でメッセージを放送する形です。ITU-R M.1371の基準では、メッセージの構造が詳細に定義されており、船舶のMMSI（Maritime Mobile Service Identity、9桁の識別子）や位置情報が含まれます。送信は自動的で、沿岸局や他の船舶がこれを傍受します。

このシステムは船舶同士の情報共有を可能にし、従来のレーダーシステムを補完します。背景として、IMOのResolution MSC.74(69)では、AISの性能基準が規定されており、Class A（SOLAS船舶向け）とClass B（小型船舶向け）の区分があります。

## データの見方

AISのデータを平易に見るためには、まずメッセージの基本構造を理解します。メッセージは主に27種類あり、例えばType 1（Position Report）では、MMSI、緯度経度、速度、進路などが含まれます。位置はWGS84座標でエンコードされ、速度はノット単位です。精度指標として、SOG（Speed Over Ground）とCOG（Course Over Ground）があり、これらが高いほど信頼性が増します。

実際のデータを見るときは、JSONやXML形式で提供されることが多く、たとえばMarineTrafficのAPIでは「MMSI」「LAT」「LON」「SPEED」などのフィールドを読み取ります。これを地図にプロットしたり、時系列で分析したりします。

詳細に言うと、Type 5（Static and Voyage Related Data）では船舶名、寸法、目的地が含まれます。初心者向けには、VesselFinderのようなサイトのライブマップから視覚的に見るのがおすすめです。

以下は、MarineTrafficのJSONデータ例です（インデント付き）：

```
{
  "MMSI": "123456789",
  "LAT": "37.7749",
  "LON": "-122.4194",
  "SPEED": "12.5",
  "COURSE": "90",
  "STATUS": "Underway",
  "SHIPNAME": "EXAMPLE SHIP"
}
```

このように、各フィールドが船舶の状態を示しています。

## 関連する背景知識

AISは、1990年代後半に開発され、2002年からIMOのSOLAS条約により多くの船舶に搭載が義務化されました（Resolution A.917(22)）。背景として、海上交通の増加に伴い、レーダーだけでは不十分になったため、自動放送型のシステムが導入されました。類似システムとして航空のADS-Bがあり、両者は輸送分野の監視技術として似ています。データは公開されており、研究や商業用途で活用され、MarineTrafficのようなプラットフォームがコミュニティを形成しています。ただし、プライバシーやセキュリティのため、一部データが制限される場合があります。

## データ配布サイトの比較

主なAISデータ配布サイトのフォーマットを表にまとめます。

| サイト          | フォーマット          | 主なフィールド例                          |
|-----------------|-----------------------|-------------------------------------------|
| MarineTraffic   | JSON/XML             | MMSI, LAT, LON, SPEED, COURSE            |
| VesselFinder    | JSON/XML             | MMSI, LATITUDE, LONGITUDE, SOG, COG      |
| AISHub          | JSON/XML             | mmsi, latitude, longitude, speed, course |
| MyShipTracking  | JSON                 | mmsi, lat, lon, speed, heading           |
| Marine Cadastre | CSV                  | MMSI, Latitude, Longitude, SOG, COG      |

これらの変数はJSON/XML/CSV形式で提供され、単位やスケーリングが異なる場合があります。詳細は各サイトのドキュメントで確認してください。


### AISデータ配布サイトのドラフトと速度を示す変数と形式

AISデータには航空の"高度"に相当するフィールドは通常存在しませんが、船舶の水面下の深さ（draught/draft）を示す変数が関連するものとして存在します。以下に水面下の深さと速度（主にSOG: Speed Over Ground）を示す変数をまとめました。

| サイト          | 水面下の深さを示す変数                      | 速度を示す変数                          |
|-----------------|-----------------------------------------|-----------------------------------------|
| MarineTraffic   | - DRAUGHT (ドラフト、メートル) | - SPEED (速度、ノット x10) |
| VesselFinder    | - DRAUGHT (ドラフト、メートル) | - SPEED (速度、ノット) |
| AISHub          | - DRAUGHT (ドラフト、1/10メートル) | - SOG (速度、1/10ノット) |
| MyShipTracking  | - draught (ドラフト、メートル) | - speed (速度、ノット) |
| Marine Cadastre | - Draft (ドラフト、メートル) | - SOG (速度、ノット) |


### AISデータ配布サイトの時刻を示す変数と形式

AISのデータでは、時刻はISO 8601形式 (YYYY-MM-DDTHH:MM:SSZ) やYYYYMMDD_HHMMSS、Unixタイムスタンプが一般的で、すべてUTC基準です。メッセージタイプによって秒単位や分単位で記録されます。

| サイト          | 時刻を示す変数                          | 形式例                                  |
|-----------------|-----------------------------------------|-----------------------------------------|
| MarineTraffic   | - TIMESTAMP (ISO 8601) | ISO 8601 (e.g., 2023-03-09T12:23:00Z) |
| VesselFinder    | - TIMESTAMP (datetime UTC) | Datetime (e.g., YYYY-MM-DD HH:MM:SS) |
| AISHub          | - time (YYYYMMDD_HHMMSS) または timestamp | YYYYMMDD_HHMMSS (e.g., 20230309_122300) または Unix |
| MyShipTracking  | - timestamp (ISO 8601 または Unix) | ISO 8601 または Unix秒 |
| Marine Cadastre | - DateTime (UTC datetime) | Datetime (e.g., YYYY-MM-DD HH:MM:SS) |


## まとめ

AISは現代海上輸送の安全性を高める重要な技術です。公式基準に基づく仕組みを理解し、データを適切に見ることで、その価値が実感できます。将来的には、さらに統合された海洋管理システムに発展していくでしょう。


## 参考・出典

- [IMO AIS](https://www.imo.org/en/ourwork/safety/pages/ais.aspx)
- [USCG AIS Messages](https://www.navcen.uscg.gov/ais-messages)
- [ITU-R M.1371](https://www.itu.int/rec/R-REC-M.1371)
- [MarineTraffic](https://www.marinetraffic.com/)
- [VesselFinder](https://www.vesselfinder.com/)
- [AISHub](https://www.aishub.net/)
- [Marine Cadastre](https://marinecadastre.gov/ais/)

