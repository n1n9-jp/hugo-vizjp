+++
author = "Yuichi Yazaki"
title = "時系列リニア・デンドログラム（Time-series Linear Dendrogram）"
slug = "time-series-linear-dendrogram"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/mainvisual.png"
+++

時系列リニア・デンドログラム（Time-series Linear Dendrogram）は **階層的な関係構造（ツリー構造）を時間の流れに沿って可視化するチャート** です。従来のデンドログラム（系統樹）が主に左右または上下方向に枝分かれを描くのに対し、リニア型では**横軸または縦軸に時間をとり、分岐が時系列に沿って展開**される点が特徴です。

この形式は、生物進化の系統関係、製品やサービスのバージョン進化、組織やプロジェクトの分岐履歴など、「時間と系統の両方を同時に表したい」場合に適しています。


<!--more-->



## チャートの見方

| 要素 | 説明 |
|------|------|
| **横軸（または縦軸）** | 時間の経過を表す。左から右、あるいは上から下へ時間が進む。 |
| **線（ブランチ）** | 対象（種、バージョン、系列など）の関係性や派生を示す。分岐点は共通の祖先や基点を表す。 |
| **ノード（点）** | ある時点での存在（種・製品・状態など）を示す。ノードのサイズや色で数量・重要度などを表す場合もある。 |
| **枝の傾きや長さ** | 分岐の時点の差異や期間を表す。長い枝は独立していた期間が長いことを示すことがある。 |

このように、ツリー構造の縦軸（階層）に加えて横軸（時間）を導入することで、「いつ・どのように分化・派生したか」を視覚的に理解しやすくなります。



## 背景と応用例

時系列リニア・デンドログラムは **時間軸をもつ階層構造** の可視化という観点から、以下のような応用が見られます。

- **進化生物学**：生物種や遺伝子系統の進化を、発生時期とともに示す。
- **ソフトウェア開発**：バージョン分岐やフォーク、リリース履歴の可視化。
- **文化史・言語史**：言語の派生や文化的変遷の流れを時系列で示す。
- **プロジェクト管理**：組織再編やタスクの派生関係を、時間とともに整理する。

この可視化は特に「ツリー × タイムライン」という二軸を融合しており、単純な樹状図やガントチャートでは表せない **系統的連続性の理解** に優れています。



## 関連概念との比較

| チャート名 | 特徴 | 時系列情報 | 構造的関係 |
|-------------|--------|-------------|--------------|
| デンドログラム（Dendrogram） | 階層クラスタの関係をツリーで表現 | ✕ | ○ |
| タイムライン（Timeline） | 時間の流れに沿った出来事を表示 | ○ | ✕ |
| **時系列リニア・デンドログラム** | 両者を統合し、時間に沿って階層構造を展開 | ○ | ○ |



## まとめ

時系列リニア・デンドログラムは **時間の経過と階層的な関係性を同時に示すハイブリッドな可視化手法** です。変化や進化のプロセスを、派生関係とともに理解するのに適しています。特に、ツリー構造が静的な関係を表すのに対し、リニア型では時間軸を導入することで **「過程」や「進化の連続性」** を強調できます。



## 参考・出典

- [Nextstrain — real-time tracking of pathogen evolution（公式サイト）](https://nextstrain.org/)  
- [“How to interpret the phylogenetic trees” — Nextstrain ドキュメンテーション](https://docs.nextstrain.org/en/latest/learn/interpret/how-to-read-a-tree.html)  
- [Nextstrain: real-time tracking of pathogen evolution — PubMed Central（論文・紹介記事）](https://pmc.ncbi.nlm.nih.gov/articles/PMC6247931/)  
- [“What is a Dendrogram? Hierarchical Cluster Analysis” — Displayr による説明記事](https://www.displayr.com/what-is-dendrogram/)  
- [“Dendrogram” — R Graph Gallery による系統図の説明ページ](https://r-graph-gallery.com/dendrogram.html)  
- [“Hierarchical clustering” — Wikipedia における階層クラスタリングの一般解説](https://en.wikipedia.org/wiki/Hierarchical_clustering)  