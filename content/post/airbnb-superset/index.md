+++
author = "Yuichi Yazaki"
title = "AirBnBが開発したOSSのB.I.ツール、Superset"
slug = "airbnb-superset"
date = "2020-05-19"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/bank_dash.png"
+++

AirBnBがOSS（オープンソースソフトウェア）のBusiness Intelligenceツール、Supersetを公開しています。

なぜAirBnBのような会社がなぜBIツールを作ったのか？というところですが、公式ブログによると、「すべての従業員がデータに基づいた意思決定を行えるようにする」というのが、原理的信念の一つだから、とのことです。

その際、データ民主主義に伴う課題の1つとして、さまざまなレベルのデータリテラシーを持つユーザーがデータにアクセスできるようにすることだとして、そこでSQLが一つの障壁になるということと、単にSQLが実行できるだけでなく、インサイトを探索して発見する必要もあるところから開発された。そのため、ユーザーインターフェイスとしては下記の２つを持ちます。

- データへの高速かつ柔軟なアクセスを可能にするリッチSQL IDE (インタラクティブ開発環境)
- データテーブルをリッチな視覚的洞察に変換するデータ探査インターフェース

最初はハッカソンから誕生し、徐々にコミュニティドリブンに多機能になっていっているとのことです。  
開発を主導したのは、Apache Airflowなども開発した、Maxime Beaucheminさん。

講演の際、Maximeさんは、

- Apache Druidと組み合わせてリアルタイムデータ可視化できるBIツールが存在していなかったから。
- どんなデータベースとも接続できて、D3.jsを使った可視化の制作負荷を下げたい。
- ダッシュボードとライフサイクルはとても短いため、Supersetが役に立つ（筆者注：おそらくOSSという意味で）。

とも挙げています。

関連リンク

- [Apache Superset](https://airbnb.io/projects/superset/)
- [How Superset and Druid Power Real-Time Analytics at Airbnb | DataEngConf SF '17 - YouTube](https://www.youtube.com/watch?v=W_Sp4jo1ACg)
- [Superset: Scaling Data Access and Visual Insights at Airbnb](https://medium.com/airbnb-engineering/superset-scaling-data-access-and-visual-insights-at-airbnb-3ce3e9b88a7f)
