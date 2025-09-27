+++
author = "Yuichi Yazaki"
title = "Word Spectrum ― Google のビッグデータで語の関係を可視化する"
slug = "word-spectrum"
date = "2025-09-27"
categories = [
    "consume"
]
tags = [
    "",
]
image = "images/3cd57a4f-efeb-4bb8-b4f9-b640bbc9c916.png"
+++

ある言葉が、別の言葉とどれほど「結びついて」使われているのか。言語学や自然言語処理の分野では、こうした関係を数値化し、モデルに組み込む試みが数多くなされてきました。米国の研究者 Chris Harrison 氏は、Google が公開した大規模な n-gram データセットを素材にして、語と語のつながりを直観的に読み取れるビジュアライゼーションを制作しました。それが Word Spectrum です。

<!--more-->


![](images/3cc953b8-a0f3-439c-8d7b-4573efbfe583_img-0.jpeg)

![](images/3cd57a4f-efeb-4bb8-b4f9-b640bbc9c916.png)

![](images/6f3f549e-b951-4c8a-b48a-bfae59f5c7ab_img-0.jpeg)

![](images/6f255109-7a9e-4f06-9571-801b244a5fe2_img-0.jpeg)

![](images/8b709526-5f8b-45e2-b5af-0faf1c4c8fe5_img-0.jpeg)

![](images/8c574534-d67b-476d-91c6-a841ef3280aa_img-0.jpeg)

![](images/9d6839dc-9fad-4e16-a25f-ded322695ffb_img-0.jpeg)

![](images/86e7938d-1c4a-407e-adb3-1dd9d19d42d3_img-0.jpeg)

![](images/730d3379-69b9-46ca-bf7d-b6fbba2b7b00_img-0.jpeg)

![](images/6879acee-e7c9-46f2-8f5d-8ff7a74bfad4_img-0.jpeg)

![](images/a3b7a735-0ac3-430e-8d71-830e2972d00b_img-0.jpeg)

![](images/a4940ee2-7cf8-4e03-aafc-e58cf1d97831_img-0.jpeg)

![](images/ad7dfa80-d367-4159-a6a0-2826428927a0_img-0.jpeg)

![](images/b5591c22-404f-48bd-b3bf-c90ad2f32c76_img-0.jpeg)

![](images/c5f0910f-affd-4fad-adda-0bb965ef066d_img-0.jpeg)

![](images/d20c159e-78f4-449b-b895-44e54513f381_img-0.jpeg)

![](images/d8775251-4050-48f8-abd1-3244ae4ef3e8_img-0.jpeg)

![](images/e1018f73-eba1-4504-a2a9-4a0353d8b14e_img-0.jpeg)



## データの背景

2006 年、Google はおよそ **1 兆語（1,024,908,267,229 語）** に及ぶウェブコーパスから n-gram 頻度統計を算出し、研究用に公開しました。これには ユニグラム 1,358 万語、バイグラム（2-gram）3 億 1,484 万組などが含まれており、自然言語処理の基盤データとして広く活用されてきました。

Harrison 氏の Word Spectrum では、この中の **バイグラム（bigram）** を用います。具体的には「主要語 A」と「主要語 B」を決め、それぞれに続く語の出現頻度を比較するのです。

## 可視化の仕組み

Word Spectrum の特徴は、語を “スペクトル”状の線分上に配置する点にあります。

横位置（x 座標）
- 「A w」「B w」というバイグラムの出現頻度を比率化し、A と B のどちらにより強く結びついているかで位置を決めます。
- 例：「war memorial」531,205 回 vs 「peace memorial」25,699 回 → “memorial” は大きく war 側に寄って配置。

縦位置（y 座標）
- 意味はなく、ランダムに振り分けられます。これは重なりを避け、ビジュアルにテクスチャを加えるためです。

文字サイズ
- 出現頻度に応じて 逆べき乗関数でスケーリング。ただし図ごとにパラメータが異なるため、異なるスペクトル間のサイズ比較はできません。

正規化処理
- 例えば「war*」系バイグラムは「peace*」系より総数が多いため、war 側の頻度を縮小して均衡を取っています。

## 読み解き方

Word Spectrum の見方はシンプルです。

- 中央付近に置かれた語は、A と B の両方と似た程度に結びつく語。
- 端に寄る語は、どちらか一方との関係が圧倒的に強い語。
- 文字サイズが大きい語は、データ全体の中でも特に頻度が高く、文脈的な影響力が大きい語。

## 意義と魅力

Word Spectrum は、機械学習モデルのための数値的特徴量をそのまま「人が目で見る」形にしたビジュアライゼーションです。

- 抽象的な統計量を直感的な位置と大きさに翻訳することで、語彙間のニュアンスや文化的背景が立ち上がって見えてきます。
- “war” と “peace” のように対照的な語を並べると、その背後にある社会的・文化的な偏りが浮かび上がるのも特徴です。

## 制約と注意点

Harrison 氏自身が指摘しているように、Word Spectrum には次の制約があります。

- データの偏り：Web コーパス由来のため、出版物やウェブ上の表現に偏る。
- 語の除外なし：頻出する機能語や不穏当語もそのまま表示されうる。
- サイズ比較の非一貫性：図ごとにスケーリングが異なるため、複数図版をまたいで文字サイズを比較できない。

## まとめ

Word Spectrum は **「言葉のつながりをどのように“見える化”するか」** という問いに対する一つの回答です。大量のバイグラム統計を単純明快なルールに落とし込み、抽象的な言語モデルを視覚的な直感へと変換しました。

その後、Harrison 氏は改良版として Word Associations を制作し、スペクトルを放射状の「レイ」に区切ることで重なりの問題を軽減しました。両者を並べて見ると、データ可視化の設計思想の進化を追体験することもできます。


## 参考・出典

- [Chris Harrison | WordSpectrum](https://www.chrisharrison.net/index.php/Visualizations/WordSpectrum)