+++
author = "Yuichi Yazaki"
title = "Open Refine - GREL日付関数 パターン文字一覧"
slug = "open-refine-grel-date"
date = "2019-11-23"
categories = [
    "technology"
]
tags = [
    "openrefine",
]
image = "images/image_3hours_refine.png"
+++

Open Refineでデータクレンジングをなさっている方には役立つ日付関数のパターン文字一覧です。適宜ご活用ください。

- [https://github.com/OpenRefine/OpenRefine/wiki/GREL-Date-Functions](https://github.com/OpenRefine/OpenRefine/wiki/GREL-Date-Functions)

| パターン文字 | 日付・時刻コンポーネント | データ型 | 例 |
|---|---|---|---|
| G | 時代表記（西暦） | テキスト | AD |
| y | 年 | 年 | 1996; 96 |
| Y | 年（年末年始などで週の半ばで年が変わる際に用います） | 年 | 2009; 09 |
| M | 月名 | 月 | July; Jul; 07 |
| w | 通年における何番目の週か | 数値 | 27 |
| W | 月における何番目の週か | 数値 | 2 |
| D | 通年における何番目の日にちか | 数値 | 189 |
| d | 日にち | 数値 | 10 |
| F | 月の初めから数えた曜日 | 数値 | 2 |
| E | 曜日名 | テキスト | Tuesday; Tue |
| u | 曜日の番号表記 (1 = 月曜, ..., 7 = 日曜) | 数値 | 1 |
| a | Am/pm マーカー | テキスト | PM |
| H | (0-23)時 | 数値 | 0 |
| k | (1-24)時 | 数値 | 24 |
| K | am/pm表示における (0-11)時 | 数値 | 0 |
| h | am/pm表示における (1-12)時 | 数値 | 12 |
| m | 分 | 数値 | 30 |
| s | 秒 | 数値 | 55 |
| S | ミリ秒（1000分の1秒） | 数値 | 978 |
| n | ナノ秒（10億分の1秒） | 数値 | 789000 |
| z | タイムゾーン | General time zone | Pacific Standard Time; PST; GMT-08:00 |
| Z | タイムゾーン | RFC 822タイムゾーン | \-0800 |
| X | タイムゾーン | ISO 8601 タイムゾーン | \-08; -0800; -08:00 |
