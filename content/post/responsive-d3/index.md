+++
author = "Yuichi Yazaki"
title = "D3.jsでレスポンシブ・レイアウトを実現するには"
slug = "responsive-d3"
date = "2016-01-01"
categories = [
    "technology"
]
tags = [
    "レスポンシブ","d3-js"
]
image = "images/thumb_ph_vizjp.png"
+++

### D3.jsでレスポンシブ・レイアウトを

最近はウェブの閲覧環境が多様化し、PCとモバイルでは画面解像度が全くことなります。  
D3.jsでなにかを作る際、ワンソースで多様な閲覧環境に対応するための、レスポンシブ・レイアウト対応方法の一つを以下に紹介します。

### D3.jsはSVGを使っている

そこで、SVGが標準でサポートしている属性を使います。  
個別の要素の大きさをすべて調整するのは大変なので、一番親要素のSVGの大きさを変更することで対応することにします。

### viewBoxとpreserveAspectRatioの設定

viewBoxとpreserveAspectRatioという属性の設定をします。  
これはSVGが拡大表示されたときの振る舞いを決定するものです。

- [SVGのviewBox属性が分かり辛い](http://codepen.io/itakurara/post/svg-viewbox)
- [座標系, 変換, 単位 – SVG 1.1 （第２版）](http://www.hcn.zaq.ne.jp/___/SVG11-2nd/coords.html)

```
.attr("viewBox", "0 0 960 400")
.attr("preserveAspectRatio", "xMidYMid")
```

viewBoxの値は、"0 0 width height" とします（widthとheightは整数）。  
preserveAspectRatioの値は xMidYMid とします。これでviewBoxのX/Y中央値を、ビューポートのX/Yの中央値に揃えることになります。

### ウインドウサイズが変更した際に、SVGの大きさも変更する

```
var chart = $("#chart"),
container = chart.parent();

$(window).on("resize", function() {

var targetWidth = container.width();
chart.attr("width", targetWidth);
chart.attr("height", Math.round(targetWidth / aspect));

}).trigger("resize");
```

svgの親要素の横幅を取得し、SVGをその大きさに合わせます。  
縦幅は独自には取得せず、横幅との比率で処理をします。

### サンプルコード

- [responsive layout with d3.js](http://bl.ocks.org/n1n9-jp/0941a9c188c741d02dae)

### 参考リンク

- [Whats the best way to make a d3.js visualisation layout responsive?](http://stackoverflow.com/questions/9400615/whats-the-best-way-to-make-a-d3-js-visualisation-layout-responsive)
- [Responsive d3.js | tnoda](http://www.tnoda.com/blog/2013-10-14)
