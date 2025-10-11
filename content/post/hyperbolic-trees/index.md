+++
author = "Yuichi Yazaki"
title = "ハイパーボリック・ツリー（Hyperbolic Tree）"
slug = "hyperbolic-trees"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

ハイパーボリック・ツリー（Hyperbolic Tree）は、階層的な情報構造を効率的に表示するために考案された可視化手法です。双曲幾何学（hyperbolic geometry）の空間特性を利用し、ユークリッド平面上では扱いにくい大規模な木構造を、視認性を保ちながらコンパクトに描画することができます。

<!--more-->

![](images/mainvisual-1.png)
![](images/mainvisual-2.png)
![](images/mainvisual-3.png)

## 概要

通常のツリーレイアウトでは、ノード数が増えるほど枝が指数的に増加し、全体を一画面で表現するのが難しくなります。これに対してハイパーボリック・ツリーは、負の曲率を持つ「双曲空間」にツリーを埋め込み、中心から外側に向かってノードを配置します。この空間では、同じ半径でも円周の長さが指数的に広がるため、多数のノードを円盤内に収められるという利点があります。

可視化の際は、双曲平面を **ポアンカレ円板モデル（Poincaré disk model）** に写像して表現します。中心には注目ノード（focus）があり、周囲にコンテクスト（context）として関連ノードが縮小されながら配置されます。ユーザーは任意のノードをクリックして再中心化（re-centering）することで、ツリーを動的に探索できます。

## チャートの見方

ハイパーボリック・ツリーの典型的な表示では、以下のような構造になっています。

- **中央（Focus Node）**：現在の注目ノード。  
- **周辺ノード（Context Nodes）**：関連する親・子ノード。距離が遠いほど小さく表示される。  
- **リンク（Edges）**：ノード間の階層関係を示す線。双曲空間上では曲線として描かれる。  
- **再中心化操作**：任意のノードをクリックすると、そのノードが新たな中心となり、周囲が再配置される。  

この「フォーカス＋コンテクスト（focus+context）」のアプローチにより、ユーザーは全体構造を見失うことなく、部分構造をズーム的に探索できます。

## 背景と応用

ハイパーボリック・ツリーの原理は、インフォメーション・ビジュアライゼーション分野で1990年代から研究されており、代表的な研究例としては **Tamara Munzner** による“H3: Laying Out Large Directed Graphs in 3D Hyperbolic Space”（Stanford University, 1997）が知られています。この論文では、3次元の双曲空間（H3空間）にグラフを埋め込み、大規模ネットワークを滑らかに探索できるインタラクティブ手法を提案しています。

現在では、ハイパーボリック・ツリーの考え方は以下のような応用に見られます。

- Webサイトやフォルダ階層の可視化  
- 系統樹や生物分類の表示（Tree of Lifeプロジェクトなど）  
- 大規模ネットワークや知識グラフのブラウジング  
- ハイパーボリック埋め込みを利用したグラフ学習モデル（Hyperbolic Graph Embedding）  

## まとめ

ハイパーボリック・ツリーは、双曲幾何学の空間的余裕を利用して、複雑な階層構造を「焦点を保ちながら俯瞰」できる優れた可視化手法です。ユークリッド空間では扱いにくい大規模データを、コンパクトかつインタラクティブに探索するための重要な発想であり、今日のグラフ・ネットワーク可視化にも応用されています。

## 参考・出典

- [Hyperbolic tree — Wikipedia](https://en.wikipedia.org/wiki/Hyperbolic_tree)
- [Hyperbolic Trees — InfoVis CyberInfrastructure (Indiana University)](https://iv.cns.iu.edu/sw/hyptree.html)
- [Hyperbolic Tree — DataVizProject](https://datavizproject.com/data-type/hyperbolic-tree/)
- [H3: Laying Out Large Directed Graphs in 3D Hyperbolic Space — Tamara Munzner (Stanford University)](https://graphics.stanford.edu/papers/h3/html.nosplit/)
- [Hypertree.js — Nicolas Garcia Belmonte](https://philogb.github.io/jit/static/v20/Docs/files/Visualizations/Hypertree-js.html)
- [The Green Tree of Life — Hyperbolic Tree Viewer (UC Berkeley)](https://ucjeps.berkeley.edu/TreeofLife/hyperbolic2.php)