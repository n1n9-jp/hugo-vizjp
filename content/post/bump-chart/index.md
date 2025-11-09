+++
author = "Yuichi Yazaki"
title = "バンプ・チャート（Bump Chart）"
slug = "bump-chart"
date = "2025-09-30"
description = ""
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/G-20-countries-ranked.png"
+++

バンプ・チャート（Bump Chart）は、順位やランクの変化を視覚的に示すためのチャートです。各ラインがカテゴリー（チーム、製品、ブランドなど）を表し、横軸に時間、縦軸に順位を配置します。時間の経過に伴う順位の入れ替わりを明確に捉えることができ、競争やトレンドの推移を直感的に理解するのに適しています。

折れ線グラフが「値の変動」を伝えるのに対し、バンプ・チャートは「相対的な位置付けの入れ替わり」を視覚化することに主眼があります。複数の線が交差することで **「どの対象がいつ上位に食い込み、または下がったか」** を直感的に読み取れる点が特徴です。


<!--more-->

![](images/G-20-countries-ranked.png)

## 歴史的経緯

「誰が最初に発明したのか」を一人に帰すのは難しいですが、バンプ・チャートの原型はすでに19世紀に見られます。

![Rank of States and Territories in Population at Each Census: 1790–1890](images/StatisticalAtlas.png)

米国センサス局の地理学者 Henry Gannett らが編集した1890年版 Statistical Atlas of the United States には、「Rank of States and Territories in Population at Each Census: 1790–1890」 という図版が収録されています。

このチャートは、1790年から1890年までの国勢調査ごとに、各州と準州の人口順位を並べ、線で結んだものです。これにより以下を実現できます。

- ある時点での上位・下位を比較することができる
- さらに個別の州や準州が、時間の経過とともにどのように順位を変えてきたかを追跡できる

当時の目的は、単に人口数を提示するのではなく、「社会の中での相対的な位置の変化」を読み取れるようにすることでした。これは現代でいうバンプ・チャートの基本的な思想と一致しており、この図版はバンプ・チャートの最古級の実例と見なせます。

近年では、データジャーナリズムやマーケティング分析において、ブランドや市場シェアの変化を描く手法として再評価されています。

当時は「バンプ・チャート」という名称は存在せず、後にデータ可視化コミュニティで再発見・命名されました。

- 2013年 Datagraver による可視化例が、その後の基盤となりました。
- 2015年〜2016年 Matt Chambers が Tableau Public に発表した Car Color Evolution は Reddit で30万ビュー以上の反響を呼び、モダンな「バンプ・チャート」の代表例として一気に広まりました。
- Rody Zakovich はこの表現をシグモイド曲線などで洗練し、視覚的な見やすさを強化しました。

![Matt Chambers による Car Color Evolution North America](images/ColorRankOverTime.png)

こうした実践を通じて、「順位の推移を描く線グラフ」が「バンプ・チャート」という呼び方とともに定着したのです。

モダンな可視化ツール（Tableau、Datawrapper、Flourishなど）にも標準搭載されており、広く使われています。

## データ構造

データは以下のような構造を取ります。

| Category | Time | Rank |
|-----------|------|------|
| A         | 2020 | 1    |
| B         | 2020 | 2    |
| A         | 2021 | 2    |
| B         | 2021 | 1    |

横軸に「Time（年や月など）」、縦軸に「Rank（順位）」をとり、カテゴリーごとに線で結びます。順位が上位ほど上（1位が最上）に描かれるのが一般的です。

## 目的

順位変化の可視化を目的とし、特に次のような場面で有効です。
- ブランドや製品の市場シェア順位の推移
- スポーツチームのシーズン順位の変動
- 学校・企業ランキングなどの年次比較
- 政党支持率やSNSトレンドの推移

## ユースケース

バンプ・チャートが適しているのは **「相対的な位置の変化そのものがストーリーになる」** ケースです。

- **スポーツ** リーグ戦の順位推移（シーズンを通じてどのチームが浮き沈みしたか）
- **市場** 企業や製品のシェアランキングの変動
- **世論** 人気投票やランキング調査の入れ替わり
- **教育・都市** 大学ランキングや都市人口順位の長期推移

絶対値よりも「順位の上下動」に意味がある領域で特に有効で、見る人は即座に「勝者と敗者」を把握できます。

## 特徴

- ラインの交差が多い場合でも、順位変化を明確に捉えられる  
- 数値そのものではなく「順位の相対関係」に焦点を当てる  
- 各カテゴリを色で区別することで、競争構造を視覚的に表現できる  

## チャートの見方

- 各ラインは1つの対象（例：チーム、ブランド）を表す  
- 横軸に沿って時間の経過をたどり、縦軸で順位の上下を読み取る  
- 線が交差する箇所は順位の逆転を意味する  

## デザイン上の注意点

- **上位ほど上に表示**する軸の設定を徹底（Rank=1が上）  
- **過剰な線の交差を避ける**ために、対象数を10前後に制限する  
- **色分けとラベルの明確化**：右端にラベルを配置することで識別を容易にする  
- **補助線の活用**：主要な順位（1位、5位、10位など）に補助線を引くと読みやすい  

## 応用例

- **スロープチャート（Slope Chart）**：2時点間のみの順位変化を示す簡易版  
- **ストリームグラフとの組み合わせ**：順位とボリュームを併せて表現する発展形  
- **インタラクティブ版**：マウスオーバーで詳細数値を表示するなど、動的な比較が可能  

## 代替例

- **スロープチャート（Slope Chart）**：短期間の比較に適する  
- **ラインチャート（Line Chart）**：順位ではなく実数の推移を見たい場合  
- **ドットプロット（Dot Plot）**：順位の位置関係を静的に比較する際に有効  

## まとめ

- バンプ・チャートの思想は 1890年統計アトラスに見られるように、19世紀から存在していた。
- 発明者を一人に特定することはできないが、Henry Gannett らが国勢調査の都市順位を示す中で **「相対的な位置の変化を可視化する」** 発想が実践されていた。
- 現代では Matt Chambers や Rody Zakovich の活動を通じて再発見され、「Bump Chart」という呼称とともに普及。
- Datawrapper や Vega-Lite など主要ツールに公式実装され、ランキングのストーリーを伝えるための定番チャートになっている。

バンプ・チャートは、社会の中での位置付けがどう変わったかを描くことができるチャートです。歴史的にも現代的にも「競争と変化」を伝えるのにちょうどいい表現手法の一つと言えるでしょう。特に、複数のカテゴリーが競い合う状況を把握したい場合に有効で、トレンド分析やランキング可視化において欠かせないチャートの一つです。適切な色分けとラベル設計により、複雑な変動パターンを美しく、分かりやすく表現できます。

## 参考・出典

- [Wikipedia: Bump chart](https://en.wikipedia.org/wiki/Bump_chart)
- [Vintage Visualization Restoration – Bump Chart Edition (Bocoup)](https://www.bocoup.com/blog/vintage-visualization-restoration-bump-chart)
- [How To: Using Ranks to Create Bump Charts in Tableau (Matt Chambers)](https://www.sirvizalot.com/2016/03/color-popularity-for-new-cars-2000-2015.html)
- [How to create a bump chart – Datawrapper Academy](https://academy.datawrapper.de/article/347-how-to-create-a-bump-chart)
- [How to create an area bump chart – Flourish Help Center](https://helpcenter.flourish.studio/hc/en-us/articles/9951629626383-How-to-create-an-area-bump-chart)
- [Bump Chart – Vega-Lite Examples](https://vega.github.io/vega-lite/examples/line_bump.html)
- [Bump charts – Malloy Documentation](https://docs.malloydata.dev/blog/2023-10-26-malloy-bump-chart/)