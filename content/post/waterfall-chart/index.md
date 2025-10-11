+++
author = "Yuichi Yazaki"
title = "ウォーターフォール・チャート（Waterfall Chart）"
slug = "waterfall-chart"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/cover.png"
+++

ウォーターフォール・チャート（Waterfall Chart）は、ある値がどのように増減して最終的な値に至るのかを段階的に可視化するためのグラフです。日本語では「滝グラフ」や「橋グラフ」とも呼ばれます。主に「利益」「売上」「コスト」など、数値の変化を構成要素ごとに分解して理解するのに適しています。

ウォーターフォールという名称は、棒グラフが段階的に上下に「滝のように」連なって見えることに由来します。


<!--more-->

![](images/mainvisual.jpg)

## 図解の見方

| 要素 | 説明 |
|------|------|
| **開始値（Initial Value）** | 最初に基準となる値。例：前期の利益など。 |
| **増加項目（Positive Change）** | 値を増やす要素。緑や青などの上向きの棒で表現されることが多い。 |
| **減少項目（Negative Change）** | 値を減らす要素。赤やオレンジなど下向きの棒で表現されることが多い。 |
| **中間小計（Intermediate Subtotal）** | 途中段階での累計を示す棒。色を変えて区別される場合がある。 |
| **最終値（Final Value）** | すべての増減を経た後の最終的な値。例：当期純利益など。 |

棒の高さと位置が、それぞれの要素が全体にどのような影響を与えるかを視覚的に示します。一般的には、棒が「浮いて」配置され、前の棒の上端または下端から次の棒が始まる形になります。



## 背景と活用例

ウォーターフォール・チャートは1980年代後半、マッキンゼー・アンド・カンパニーなどの経営コンサルティングの現場で広く使われ始めました。その後、財務分析やプロジェクトマネジメントにおける標準的な可視化手法として定着しました。

ExcelやTableau、Power BI、Google Data Studioなどの多くのBIツールで標準サポートされています。特に、営業利益や純利益の増減要因分析（「前期→今期」のブリッジ）としてよく利用されます。



## 他のグラフとの比較

| グラフ種別 | 特徴 | 適した用途 |
|-------------|------|-------------|
| **積み上げ棒グラフ** | 要素の内訳を比較 | 全体構成比の把握 |
| **ウォーターフォール・チャート** | 値の変化のプロセスを段階的に表示 | 原因分析や要因分解 |
| **ガントチャート** | 時間軸に沿った工程を表示 | スケジュール管理 |
| **ブレットグラフ** | 目標と実績を比較 | KPI可視化 |



## デザイン上のポイント

- **増加と減少を明確に色分け**する（例：緑＝増加、赤＝減少）  
- **中間値を強調**し、ステップ構造が視覚的に追いやすいようにする  
- **最終値を強調表示**（太い枠や異なる色など）  
- **横向き配置**にすることでラベルを読みやすくする場合もある  




## まとめ

ウォーターフォール・チャートは、ある数値がどのような要因によって変化したのかを、直感的に理解できる強力な手法です。財務分析だけでなく、ユーザー数・売上・コスト・リスクなどの要因を分解して説明する際にも有効です。  
視覚的に「変化の物語」を語ることができるため、ストーリーテリング型のデータプレゼンテーションにも向いています。



## 参考・出典

- [Microsoft Learn: Power BI のウォーターフォール チャート](https://learn.microsoft.com/ja-jp/power-bi/visuals/power-bi-visualization-waterfall-charts)
- [Microsoft サポート: Excel でウォーターフォール グラフ（滝グラフ）を作成する](https://support.microsoft.com/ja-jp/office/%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB%E5%9B%B3%E3%81%AE%E4%BD%9C%E6%88%90-8de1ece4-ff21-4d37-acd7-546f5527f185)
- [OriginLab 日本語サイト: 『滝グラフ』タブ（Bridge Chart）](https://www.originlab.com/doc/ja/Origin-Help/PD-Dialog-BridgeChart-Tab)
- [Smartsheet Japan: Excel／PowerPoint でウォーターフォール グラフを作成する方法](https://jp.smartsheet.com/how-create-waterfall-chart-excel)
- [ExtendOffice: Excel でウォーターフォールチャートまたはブリッジチャートを作成](https://ja.extendoffice.com/excel/excel-charts/excel-waterfall-chart.html)
- [Excelの森ブログ: Excel のウォーターフォールグラフ（滝グラフ）の作り方](https://www.excel-no-mori-blog.jp/?p=20582)
- [Waterfall chart - Wikipedia](https://en.wikipedia.org/wiki/Waterfall_chart)