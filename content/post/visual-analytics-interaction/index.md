+++
author = "Yuichi Yazaki"
title = "ビジュアル・アナリシスにおけるインタラクションの整理"
slug = "visual-analytics-interaction"
date = "2020-10-30"
categories = [
    "technology"
]
tags = [
    "インタラクション"
]
image = "images/thumb_ph_vizjp.png"
+++

1996年に発表した “Overview first, zoom and filter, then details-on-demand” マントラが今に至るまで引用されることの多い**Ben Shneidermanさん**と、スタンフォード大学からワシントン大学へラボを移動させ、D3.jsのメイン・コントリビュータであるMike Bostockを排出した**Jeff Heerさん**が二人で、**[ビジュアル・アナリシスにおけるインタラクションの整理](http://portal.acm.org/ft_gateway.cfm?id=2146416&type=pdf "http://portal.acm.org/ft_gateway.cfm?id=2146416&type=pdf")**(リンク先はPDFファイル)を行っています。2010年の論考です。大きくは以下の三つに分類しています。

- データとビューの指定(data and view specification)
- ビューの操作(view manipulation)
- 分析プロセスと出自(analysis process and provenance)

それぞれの違いをまずはみていきましょう。

### データとビューの指定(data and view specification)

アナリストが様々なデータタイプを含む大規模なデータセットを探索できるようにするために、関心のあるデータとビューを指定するための、適切なコントロールを提供するという観点。

### ビューの操作(view manipulation)

「データとビューの指定」によって作成された可視化を元に、そのビューを操作してパターンを強調したり、仮説を調査したり、詳細を掘り下げたりできるようにするという観点。

### 分析プロセスと出自(analysis process and provenance)

ビジュアル・アナリティクスには「可視化の生成と操作」だけではなく「データの探索と解釈の繰り返し」のプロセスを含み、その分析プロセスを足場にするための機能提供という観点。

## 具体的な操作

### データとビューの指定(data and view specification)

可視化(visualize)、フィルタリング(filter)、ソート(sort)、導出(derive)が挙げられています。

* * *

**可視化**…データの可視化を指定すること。

以下のような方法が挙げられています。

- よくある例ではテンプレート化されたチャートの中から一つ選択し、データ変数を割り当てることで、データをチャートとして描画すること。
- "data-flow graphs" を使用して指定する。
- 可視化構築のための文法に基づいて指定する。ggplot2 や Protovis が該当する。

これらの方法は互いに排他的ではなく、同時に使用することで、使いやすさろ表現力を両立させることもできる、としています。

* * *

**フィルタリング**…データ値をフィルタリングして、表示量を制限する。またデータセットの異なるサブセットを比較するためにフォーカスを移動する際に用いられる。

- さまざまなインタラクション技術
- 一連の補助コントロール、"ダイナミック・クエリ・ウィジェット" を使用する

後者 "ダイナミック・クエリ・ウィジェット" について以下の例が挙げられています。

カテゴリまたは順序データ

- 項目の数が少ない場合…ラジオボタンやチェックボックス
- 項目の数が多い場合や任意のテキストを含む場合…スクロール可能なリスト、階層リスト、検索ボックス（単純なキーワード検索、正規表現マッチング、オートコンプリート付き、構造化クエリ言語）

量的データ、および時間的データ

- 単一のしきい値の場合…標準スライダー
- 複数のエンドポイントを指定する場合…範囲スライダー

リアルタイム更新と組み合わせると、これらのウィジェットはデータのサブセットを迅速かつ可逆的に探索することができる、としています。

* * *

**ソート**…1つ以上の変数のデータ値に従って、レコードを並べ替えること。

- 数値やテキスト値の昇順または降順ソート。
- 重要なパターンを明らかにするためには、曜日や月名のような特殊なソート順序が必要になることもある。
- 多変量表、ネットワークなどデータの種類によっては、値による単純なソートが必ずしもうまくいかないものもある。そのようなデータでは、項目間の距離測定を最小化しようとする、より洗練された並べ替え方法が必要になることがある。

* * *

**導出**…変数を変換したり、既存の値から新しい属性を導き出したりすること。

- スプレッドシートやデータベースのクエリ言語で見られるものと同様に、_計算言語_を介して提供される。
- これらの基本的な機能に加えて、仮説検定法（t検定、ANOVA）は、統計と可視化の円滑な統合の利点を増幅させることができる。
- 導出された値は、記述統計（平均、中央値、分散）からモデル適合（回帰曲線）、データ変換（カウントや合計などのグループごとの集計）に至るまで、入力データを要約するためによく使用される。

### ビューの操作(view manipulation)

選択(select)、ナビゲート(navigate)、切り口(coordinate)、整理(organize)が挙げられています。

* * *

**選択(select)**…関心のある項目や領域を示すこと。何らかの動作の前段としてその適用範囲を「選択」することもある。

- マウスのホバー
- マウスのクリック
- 領域選択（長方形や楕円形の領域、または自由形状の「ラッソ」など）
- 領域カーソル（「ブラシ」や、マウスポインタに最も近いアイテムを選択するバブルカーソルなどの動的なセレクタ）

追加として、

- （より強力で複雑だと前置きありつつ）データに対するクエリとして選択をサポートする。
- 代表的なオブジェクトをクリックして、そのオブジェクトのプロパティに基づいてより広範な選択を行うことができる（例えば「このような青のアイテムをすべて選択する」など）

PCとタブレットやスマートフォンではUIのコンテクストが異なるため注意します。

これらの選択は、多くの場合、操作するオブジェクトのセットを決定し、ハイライト、注釈、フィルタリング、または「オンデマンドでの詳細表示」を可能にします。

選択はマウスやキーボードだけに限定される必要はありません。タッチ、ジェスチャー、音声などの入力モダリティによって、新しい効果的な選択が可能になるかもしれません。

* * *

**ナビゲート**…ビジュアライゼーションはよく、情報空間のビューポートとして機能する。アナリストは、これらのビューポートを操作して空間をナビゲートする必要がある。

- スクロール
- スクロールバーやマウスドラッグによる表示のパンニング
- ズームスライダやスクロールホイールを使った異なるレベル間のズーム

そのほかにも

- セマンティック・ズーミング
- フォーカス＋コンテキスト メソッド
- 遠近両用 (bifocal) ビュー
- 概要と詳細表示
- ディストーション表示
- DOI(degree-of-interest)機能

が挙げられている。

パン（ドラッグ）とズーム（ボタンとスクロール・ホイール）コントロールにより、ビューのナビゲーションが可能になります。

「概要を最初に見て、ズームとフィルタリングを行い、次に詳細をオンデマンドで表示する」  
このような方向付けを行った後に、データ・サブセットのより具体的で詳細な調査を行うことができます。

「概要と詳細表示」はほかにも、たとえば地理空間の可視化で、全体に詳細表示を行い、スーパーインポーズされた矩形内で概要を表示します。

「ディストーション表示」は、コンテクスト領域が拡大されないように表示領域全体を変形させるディストーション (拡大技術) です。UIとしてはMac OSXのDockがそれに該当します。

「DOI(degree-of-interest)機能」は、一般的な重要度と操作ユーザーの関心度（マウスクリック、検索クエリ、他の関心度の高い項目への近接度など）の両方に基づいて、情報コンテンツのスコアを計算し、DOIスコアが動的に更新され、関連する未見のデータが表示されたり、無関係な詳細が非表示になったりします。

* * *

**切り口**…分析者が異なる視点からデータを見ることができるようにするために、切り口を変えること。

- スモール・マルティプル(small multiples)
- トレリス・プロット(trellis plots)
- ブラッシングとリンク (Brushing and linking)
- 凡例と軸

リンク選択は、アナリストがあるビューのパターンが他のビューにどのように投影されるかを評価できるようにすることで、豊かで多次元的な推論を可能にします。

凡例、ヒストグラム・スライダ、ハイライト・マーカー付きスクロールバーなどの付随するアイテムはすべて、データの複数のビューを提供することができます。

凡例と軸は、カラーパレット、マーカー属性、変数範囲、または出自情報を変更するためのコントロールパネルにもなります。

* * *

**管理**…可視化のコレクションを管理されること。

- ツリー表示を追加することで、複数の可視化を一度に作成できるようにする
- ビューが追加または削除されたときの自動（再）サイジング
- 関連するビューを空間的に近接して配置するためのレイアウト・ルーチン
- 標準的な散布図マトリックスや、関心のある関連ビュー（例えば、可視化された属性と相関のあるデータ変数）のカスタム生成
- 複数のウィンドウをグループとして開閉できるようにし、それらを整然と並べる自動化サポート

複数の可視化を同時に探索する際に、すべての情報とセレクタを一度に見ることができたり、気が散るスクロールやウィンドウ操作が自動的に最小限に抑えられることで、洞察の抽出とレポート作成に集中することができます。

大型化・マルチディスプレイが一般的になるにつれ、レイアウト整理ツールは、効果的なユーザー・エクスペリエンスを生み出す上で決定的な要素となるでしょう。

### 分析プロセスと出自(analysis process and provenance)

記録(record)、注釈(annotate)、共有(share)、ガイド(guide)が挙げられています。

* * *

**記録**…アナリストのインタラクション履歴を記録して可視化することができる。

- ユーザーアクションの空間（ビューの仕様、ソート、フィルタリング、ズームなど）をモデル化することで、よりリッチなログを構築し、可視化することができる。
- 視覚的な履歴は、分岐した履歴の階層的なパターンも明らかにする。
- 関連するアクションを一緒に「チャンキング」するためのテクニックは、さらに乱雑さを減らすことができる。
- コメント、タグ、評価などのメタデータを状態に追加することで、後のレビューや共有を容易にすることができる。
- インタラクティブな履歴は、繰り返し可能な一連の操作をキャプチャし、名前を付けて再利用可能なマクロとして保存することもできる。

分析を行った後、分析者はその結果をレビューし、要約し、報告書やプレゼンテーションの形で伝える必要がある場合があるため。

マウスやキーボードのイベントなどの低レベルの入力は簡単にキャプチャできますが、高レベルのセマンティックなアクションを記録すると、履歴はより価値のあるものになる。

* * *

**注釈**（アノテーション）…ビジュアルヒストリー内の状態のテキスト注釈を可能にすること。

- 可視化内の特定の項目や領域を「ポイント」して、これらのアノテーションを説明テキストや他のビューへのリンクと関連付ける。
- 自由形式の図形注釈だと、該当する集まりの周りに円を描いたり、グラフのピークに矢印を指し示したりすることで、視聴者の注意を向けることができる。

矢印の角度や色、手描きの円の形は、感情を伝える手がかりとなったり、強調を加えたりすることができる。

* * *

**共有**…分析者本人以外の複数へビューやデータを共有し、複数の解釈、議論、結果の普及を伴う社会的プロセスを実行する。

- 最低限、ビュー（png、jpg、pptなど）またはデータサブセット（csv、json、xlsなど）をエクスポートして、共有と再検討ができるようにしなければならない。
- ビューやデータだけでなはなく、ツールの内部状態をモデル化してエクスポートし、他者が続きを探索できるようにする。
- 可視化ダッシュボードをインタラクティブなWebページとして公開すること。

* * *

**ガイド**…新規参入者をガイドし、専門家に進捗指標を提供するために、ガイドを提供する。

- 新規参入者をガイドする。
- 専門家に進捗指標を提供する。