+++
author = "Yuichi Yazaki"
title = "時間‐距離図（Time-Distance Diagram）とは"
slug = "time-distance-diagram"
date = "2025-10-09"
description = ""
categories = [
    "chart"
]
tags = [
    ""
]
image = "images/thumb_ph_vizjp.png"
+++

**時間‐距離図（Time-Distance Diagram）** は、鉄道・交通分野を中心に用いられる可視化手法で、縦軸に「距離（または駅・地点）」、横軸に「時間」をとり、列車やバスなどの移動体の運行を線で表現するダイアグラムです。

横軸を時間に、縦軸を距離に取ることで **移動体の動き＝時間と空間の関係** を一枚で視覚的に把握できるのが特徴です。

この図は「ダイヤグラム（ダイヤグラフ）」とも呼ばれ、特に日本では鉄道運行管理やダイヤ作成で長く利用されています。

<!--more-->


## 図解の見方

時間‐距離図の基本的な読み方は以下の通りです。

1. **横軸：時間（Time）**  
　左から右へ進むほど時間が経過します。多くの場合、縦線が一定間隔で引かれ、時刻（例：0時・6時・12時・18時など）が示されます。

2. **縦軸：距離または地点（Distance / Station）**  
　上から下、あるいは下から上に駅や地名が並び、物理的な距離や停車位置を表します。  
　駅間の距離が等間隔でない場合もあり、**距離に比例させるか、停車順序だけで並べるか**で情報の粒度が変わります。

3. **斜線：移動体の運行経路（Train / Bus Line）**  
　線の傾きが移動速度を意味します。  
    - 線が **急傾斜（垂直に近い）** ：移動速度が遅い（時間がかかる）。  
    - 線が **緩やか（水平に近い）** ：移動速度が速い。  
　このため **線の傾き＝速度** という直感的な理解が可能です。

4. **交差点：列車同士のすれ違い（Meet / Pass）**  
　2本の線が交わる点は、上下線の列車がすれ違う場所や時刻を示します。

5. **停車区間（Horizontal segment）**  
　水平に近い線分は、駅に停車している時間を表します。停車時間が長いほど水平線が長くなります。



## 背景と応用

時間‐距離図は19世紀末から20世紀初頭にかけて発展したもので、当初は**鉄道運行の効率化と安全性確保**を目的に導入されました。

列車の遅延や待避、接続関係などを視覚的に把握できるため、運行管理者やダイヤ作成担当者にとって不可欠なツールとなっています。

また近年では、以下のような広い応用が見られます。

- **バス路線・都市交通の運行分析**  
　混雑や遅延の可視化に用いられます。
- **自動運転車・物流ネットワークのシミュレーション**  
　複数車両の動きを時間軸上で統合的に解析可能です。
- **鉄道ファンや教育用途でのデータ可視化**  
　運行計画の理解、時刻表設計の学習にも利用されています。



## まとめ

時間‐距離図は **時間と空間を同時に扱う可視化の典型例** であり、単なる運行管理ツールにとどまらず、「動き」を直感的に理解するための強力な表現形式です。

その構造はシンプルでありながら、速度・遅延・接続など、複雑な関係を一目で伝える力を持っています。近年ではデジタル可視化やWebアプリ（例：D3.js, Observable, Mapboxなど）にも応用されており、交通設計・データジャーナリズム・教育など幅広い分野で再評価されています。



## 参考・出典

- [Wikipedia: Time–distance diagram](https://en.wikipedia.org/wiki/Time%E2%80%93distance_diagram)
- [ウィキペディア：ダイヤグラム（鉄道）](https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A4%E3%83%A4%E3%82%B0%E3%83%A9%E3%83%A0)
- [鉄道総研：運転曲線図作成システム（PDF）](https://www.rtri.or.jp/sales/pdf/pamph_201610_transport.pdf)
- [鉄道総研『輸送計画』解説（PDF）](https://bunken.rtri.or.jp/doc/fileDown.jsp?RairacID=0004003869)
- [Network Rail: Information for operators（Operational Rules/Working Timetable）](https://www.networkrail.co.uk/industry-and-commercial/information-for-operators/)
- [ATSB（豪州運輸安全局）：衝突事故報告書—Train control diagram の説明を含む（PDF）](https://www.atsb.gov.au/sites/default/files/media/1540704/rair2005005_001.pdf)
- [OpenTrack: Simulation of Railway Networks（Train graph 図を含むPDF）](https://www.opentrack.ch/opentrack/downloads/OpenTrack.Info_EN.pdf)