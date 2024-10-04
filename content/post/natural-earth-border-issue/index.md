+++
author = "Yuichi Yazaki"
title = "Natural Earth配布ファイルの国境について"
slug = "natural-earth-border-issue"
date = "2014-11-03"
categories = [
    "article"
]
tags = [
    ""
]
image = "images/fi_NaturalEarth.png"
+++

Natural Earthというサイトで、パブリックドメイン扱いで地図データを配布しています。  
そこで配布されているShapefileは（すべてのファイルを確認していないですが）北方領土や竹島が、日本政府の主張( [北方領土](http://www.mofa.go.jp/mofaj/area/hoppo/index.html) [竹島](http://www.mofa.go.jp/mofaj/area/takeshima/index.html) )と異なる、日本の領土ではないようなデータになっています。D3.jsの作者(New York Timesに勤めてます)がこのファイルを使用していて、かつShapefileをGeo/Topojsonへ変換する方法を知らない人たちは彼のファイルをそのまま使うので、いつの間にかこのような領土の表示がウェブの一部（例えばデータビジュアライズなどの領域）で事実上の標準、常識になってしまうことに懸念を表明します。

地図の間違いを受け付ける窓口から上記の内容を送っているのですが返事はありません。パブリックドメイン扱いで公益になるデータを広く共有するために自分の時間を使う人たちのこのようなコミュニティに、誰か日本人が一人でもいたらまた状況は違うかもしれないと考えます（いたらごめんなさい）。

データの状況を確認できるようなコードをかきました（gist。リンク先はbl.ocks.org）。

[Natural Earth Border Issue](http://bl.ocks.org/n1n9-jp/60b5c374fcf69999a785)
