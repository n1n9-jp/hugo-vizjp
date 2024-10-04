+++
author = "Yuichi Yazaki"
title = "カントリー・コード"
slug = "country-codes"
date = "2013-10-27"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/fi_CountryCode.png"
+++

世界各国のデータをビジュアライズする場合、国をIDで管理すると複数データの連携が取れ、便利です。

- [ISO 3166（Wikipedia）](http://ja.wikipedia.org/wiki/ISO_3166)
- [Country Codes - ISO 3166](http://www.iso.org/iso/home/standards/country_codes.htm)

ラテン文字2文字の国名コード、3文字の国名コード、数字の３種類あります。数字だとコーディング中で扱いがしやすいですね。

データセットとしては、Datahubに掲載されているものがあります。

- [iso-3166-1-alpha-2-country-codes | Datahub](http://datahub.io/dataset/iso-3166-1-alpha-2-country-codes)

ここで一つ問題なのはデータビジュアライゼーションで過去のデータを扱う際、現在存在していない国をデータとして扱う場合、ISOでコードが発番されていないことです。例）全く存在しない国（ユーゴスラビア）、政治体制が代わり国名が変わった国（ドイツ、ロシアなど）、各国と並列するカタチで自治州も扱う場合（スペイン）など。

- [Special code elements not to be used in ISO 3166-1](http://www.iso.org/iso/special-code-elements-iso-3166.htm)

によるとローカルな環境でアサイン可能な空き番号としていくつか提示されていて、数字のものについても900から999まで使用可能とのことです。
