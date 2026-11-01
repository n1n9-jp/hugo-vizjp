+++
author = "矢崎裕一"
title = "ツイートの件数を高さに削り、話題別のヒートマップを映す──emoto"
slug = "emoto"
date = "2026-11-01"
description = "ロンドン五輪のツイートを、時刻と感情の段階ごとの件数を高さにして削り出した彫刻です。上に話題別のヒートマップを投影し、来場者が切り替えて見られるようにしました。"
categories = [
    "consume"
]
tags = [
    "データ物質化",
    "ヒートマップ"
]
image = "images/cover.jpg"
series = ["data-physicalization"]
series_weight = 16
seriesByline = "Moritz Stefaner・Drew Hemment・Studio NAND"
seriesTitle = "ツイートの件数を高さに削る──emoto"
+++

emoto（エモト）のデータ彫刻は、ロンドン2012五輪をめぐる英語のツイートを、時刻と感情の段階ごとに数え、その件数を高さにして削り出したものです。大会の1日を1枚の板にして、17枚を横に並べています。その上に、話題別のヒートマップを投影しました。来場者は手元のノブで話題を切り替え、時間を動かして見られます。

制作は Moritz Stefaner（モーリッツ・ステファナー）、Drew Hemment（ドリュー・ヘメント）、Studio NAND の三者です。以下は、公式サイト emoto2012.org、Hemment が ISEA2013 に書いた論文、Stefaner の Truth & Beauty のページ、The Creators Project による作者インタビューに沿って読みます。

<!--more-->

## 1,250万件のツイートを、3つの形で見せる

emoto は、FutureEverything のプロジェクトとして、Cultural Olympiad と London 2012 Festival のために委嘱されました。発案者でプロジェクトディレクターは Hemment、リードデザイナーは Stefaner です。Studio NAND（Stephan Thiel、Steffen Fiedler、Jonas Loh）は制作全般に関わり、物理彫刻のデザインを主導しました。

データは、2012年7月27日の開会式から8月12日の閉会式まで、Twitter の公開APIでリアルタイムに集めました。五輪に関わるキーワードに当たった英語のツイートです。件数は資料によって少し違い、Hemment の論文は「12.5 million」、公式サイトは「12 million English tweets」と書いています。

各ツイートには、Lexalytics の Salience Engine が感情のスコアを付けました。論文によれば、スコアは −6（very negative）から +6（very positive）までの、等幅のビンに振り分けられています。話題（競技、選手、国など）は、あらかじめ決めたリストに沿ってチャンネルに分けました。

Hemment は、見せ方を三つと書いています。

> Presentation was in three forms: a real-time sentiment visualisation web application, data journalistic analysis of the Games, and a physical interactive data sculpture.

リアルタイムのWebアプリ、データジャーナリズムの分析、物理的でインタラクティブなデータ彫刻の三つ、という説明です。

![大会の写真からツイート、感情の分類を経て、リアルタイム可視化、データジャーナリズム、データ彫刻の3つの出力へ分かれる流れ図](images/pipeline-three-outputs.jpg)

Moritz Stefaner／Truth & Beauty「emoto」より引用

Web版は大会中の「いま」を見せました。話題ごとの正と負の配分を、折り紙のような形で描く Topics View と、ツイートが流れる Message Stream です。彫刻は大会が終わってから作られました。2012年9月7〜9日、プレストンで開かれた WePlay（London 2012 Festival の一部）で初めて展示されています。2013年には北京の CAFA Art Museum の Information in Style 展にも出ました。

データの取得は、公開の直前に崩れかけています。論文によると、当初はデータ再販業者から、全ツイートを流す Firehose の拡張版を使えるはずでした。ところが Twitter が利用規約を締め、得たデータや洞察は「no data or derived insight obtained from them could be publicly displayed in any form」と伝えられます。チームは2週間でインフラを作り直し、1日4億件の約1%にあたる公開APIに切り替えました。

## グレーのヒートマップを、高さに削る

彫刻の作り方は、Stefaner がインタビューで具体的に話しています。

> The basis for its creation process are 2D-graphics, basically gray-tone 'heat-maps,' which show the aggregated number of tweets per hour for each sentiment-level in a small rectangle. The lighter the rectangle, the higher the number of tweets for this hour and sentiment-level and the higher the elevation of the sculpture at this point. This results in the rollercoster-like bands you see in the sculpture.

もとは平面のグレーの[ヒートマップ](/heatmap/)です。1時間ごと、感情の段階ごとに、ツイート数を小さな長方形にまとめる。明るい長方形ほど件数が多く、彫刻のその点も高くなる。それが、ジェットコースターのような帯になった、という説明です。

Studio NAND の Stephan Thiel（シュテファン・ティール）も、同じことを一文で言っています。

> Height corresponds to volume of tweets—a third dimension in addition to time and sentiment-score.

高さはツイートの量で、時間と感情のスコアに加わる三つ目の次元だ、という言葉です。

**平面のヒートマップでは色の明るさが担っていた件数を、彫刻では高さが担っています。** 時間と感情の段階は、板の上の位置に残りました。17枚をつなぐと、大会全体の時間軸になります。Stefaner は、彫刻には「all tweets we have collected for emoto」が入っているとも述べています。

Hemment の論文と Truth & Beauty のページは、表面を「relief heatmap」と呼び、高さが「emotional highs and lows」を示すと書いています。これは比喩的な言い方と読めます。作り方を説明した Stefaner と Thiel の言葉に従えば、高さは件数で、感情は板の上の帯の位置です。

素材は Chemiwood というポリウレタンフォームで、CNC で切削しました。Thiel によれば、3Dプリントのきれいな面よりも、切削ヘッドの跡が残るほうを好んだそうです。表面は、投影に向くマットなグレーの二液性塗料で仕上げています。

作者の説明から、データと見た目・素材の対応をまとめると、次のようになります。

| データ／変数 | 物理的な性質 | 具体値・補足 |
|---|---|---|
| 大会の1日 | 1枚の板 | 17枚を横に並べる |
| 時刻 | 板の上の横方向の位置 | 1時間ごとに集計。17枚で大会全体の時間軸になる |
| 感情の段階 | 板の上の縦方向の位置（帯） | −6〜+6 のビン |
| その時刻・その段階のツイート数 | 削り出した面の高さ | 元のグレーのヒートマップで明るいほど高い |
| すべての話題のツイート | 彫刻の形そのもの | 収集した全ツイート |
| 話題別のストーリー | 彫刻に重ねる投影（ヒートマップ） | ノブで切り替える |
| その時刻に最もリツイートされたツイート | 彫刻の横に文字で表示 | カーソルのある1時間の中から選ぶ |
| 素材と仕上げ | Chemiwood を CNC で切削、グレーのマット塗装 | 切削の跡を残す |

感情の段階が何段だったかは、一次資料では確かめられませんでした。事後に公開されたインタラクティブ・ヒートマップのデータでは、値は −6〜−1 と +1〜+6 の12種類で、0 は出てきません。ただし、これは話題ごとの「最もリツイートされたツイート」のデータで、彫刻の段の数を示すものではありません。

## 話題を投影で重ね、ノブで切り替える

彫刻の形は、大会中のすべてのツイートで決まっています。話題ごとの違いは、上に投影する光が受け持ちました。公式サイトはこう書いています。

> Mapped onto this physical sculpture we have then projected individual heat maps for the most interesting themes we have identified while observing emoto during the Games. Users were able to navigate through these themes using an interactive controller and thus explore our archive.

大会中に見つけたテーマごとのヒートマップを彫刻に投影し、来場者はコントローラーでテーマを移動して、アーカイブを探索できた、という説明です。

![切削した板の上に青緑の光が投影され、板の奥にトム・デイリーへの応援ツイートが文字で映っている](images/sculpture-overlay-projection.jpg)

Moritz Stefaner・Drew Hemment・Studio NAND／Drew Hemment「emoto – Visualising the online response to London 2012」（ISEA2013）Fig. 6 より引用（CC BY-NC-SA 3.0）

Stefaner によれば、彫刻のためにいくつもの話題を「high-level stories」にまとめました。たとえば Team GB のストーリーには、個々の選手に関する話題などが含まれます。話題選びは、大会中に手作業で監視した話題をもとに、sentigraph を使った「data-driven 'hunt'」で行いました。現実の世界と同じようにデータにも表れていた話題と、One Direction のようなデータ上の面白い人工物の両方を選んだそうです。

操作は、Griffin PowerMate という回すノブ一つです。Thiel の説明では、押すとテーマが切り替わり、回すと時間軸上のカーソルが動きます。カーソルのある1時間の中で、そのストーリーで最もリツイートされたツイートが、彫刻と投影の横に表示されました。この制御には、チームが Processing で書いたソフトウェアを使っています。

展示に出したツイートと話題は、Stefaner のサイトのインタラクティブ・ヒートマップでも見られます。話題ごとに横長の帯が並び、行にマウスを重ねると、その時刻に最もリツイートされたツイートが出ます。

![「Olympic sentiment heatmaps」と題した図。全話題、Team GB、Phelps／Lochte、Tom Daley などの話題ごとに、横長のヒートマップの帯が縦に並ぶ](images/interactive-heatmaps.png)

Moritz Stefaner／well-formed-data.net「emoto data sculpture」より引用

形は全体で固定し、光で部分を見せる、という分担と読めます。投影を切り替えても、下にある起伏は変わりません。ある話題の盛り上がりが、大会全体の量のどこに重なっているかを、同じ台の上で見比べられる作りです。なお、投影したヒートマップの色が正と負のどちらを表したかは、彫刻については一次資料で確かめられませんでした。

## 立体にして、何が変わったか

Stefaner は、彫刻の位置づけをこう書いています。

> In many ways the crowning piece of the project, and a conceptual counterpoint to the ephemeral web activities, our data sculpture preserved the more than 12 million tweets in physical form.

プロジェクトの頂点であり、移ろうWebの活動への概念上の対位として、1,200万件を超えるツイートを物理的な形で保存した、という説明です。大会中の7月31日には、すでに「to archive these ephemeral little 'things flying by' forever」と書いていました。

Thiel は、インタビューで立体にした利点を三つ挙げています。一つ目は分かりやすさです。

> Creating a three-dimensional sculpture helped people understand the displayed dimensions in the data more quickly and naturally. ... This is often more immediate than encoding multiple variables in two-dimensional space.

立体にしたことで、来場者はデータの次元をより早く自然に理解した。平面に複数の変数を詰めるより、直接的なことが多い、という言葉です。二つ目に、空間の大きさで量を強調できたこと。三つ目に、人が一緒に見て話し合うことを挙げています。持続性についても「if all the lights are off, it's still an object which represents information」と述べました。

Stefaner も、データ可視化は一般の人には抽象的だが、彫刻は物理的な形のおかげで「何を見ているか」を早く分かってもらえた、と話しています。形を分かりやすくするために、点字の都市地図などから着想を得て、目の見えない人のための「visualization」も考えたそうです。

難しさも、Thiel は書いています。画面ならビューを自由に変えて組み合わせられるが、大きな彫刻は扱い方を縛る、という点です。

> If you have a massive sculpture, this sets a limitation on how you can work with it, also in terms of interactivity

投影とノブは、この制約への答えと読めます。削った形は一度きりで変えられない。変えたい部分は光と文字に任せた、という分け方です。

計画からの変更もありました。開幕前の Andy Kirk の記事は「19 plates」に削ると伝えています。完成品は17枚です。変更の理由を書いた資料は見つかりませんでした。

## 作者自身が書いた、データの偏り

Hemment の論文は、データの限界にも一節を割いています。対象は英語のツイートだけで、公開APIのサンプルです。Web版の利用者は65%を超えて英米加豪の4か国からでした。

> Such a limited perspective does not represent 'what the world thinks.'

このように限られた視点は「世界がどう考えているか」を表していない、という一文です。感情分析の精度の評価は、プロジェクトの範囲外だったとも書いています。BBC が悪いニュースを報じると BBC に負のスコアが付くように、媒体とメッセージの取り違えも起きました。

データ取得の交渉にも、彫刻の性格が表れています。論文の注によれば、チームは Twitter に対し、提案した作品は「far removed from the data stream」だと主張しました。切削した彫刻からは、元の情報を組み立て直せない、という理屈です。ただし交渉は「to no avail」、実らなかったと書かれています。

高さに変えた時点で、個々のツイートは件数に畳まれます。彫刻の起伏が示すのは、1%のサンプルで、英語で、ソフトウェアが付けたスコアの分布です。作者がこの前提を自分で書き残していることは、作品を読むうえで欠かせない注記と読めます。

## 第三者はこの作品をどう見たか

開幕前の2012年7月19日、Andy Kirk は Visualising Data で、emoto を「One of the most ambitious, unique, multi-faceted and fundamentally exciting projects」と紹介しました。Web、sentigraph、物理化を含む多面的な構成を評価した記事です。ただし完成前の記事で、完成品への評価ではありません。

The Creators Project の Julia Kaganskiy は、2012年9月20日の記事で、彫刻を次のようにまとめています。

> Peaks and valleys are etched into the plates to indicate the volume of tweets per hour, and a heat map of color gradations is projected on top to show the public's feelings towards a particular topic

板に刻んだ起伏が1時間あたりの量を示し、上に投影した色の濃淡が話題への感情を示す、という要約です。高さと投影の二層として説明しています。同じ記事は彫刻を「9.5 meter long」と書いていますが、公式サイトと論文では、9.5m（論文では9m）は壁に掛けた sentigraph の長さです。彫刻そのものの寸法は、一次資料では確かめられませんでした。

Information is Beautiful Awards 2013 では、インスタレーションが審査の対象になりました。ショーケースのページには、Bronze と Data visualization の表示が付いています。説明文は、オンラインの可視化、データジャーナリズムの実験と並べて、彫刻を「its core component」と呼んでいます。

## 使い道

この作品から持ち帰れるのは、まず、平面のヒートマップを立体にするときの置き換え方です。2つの軸は位置に残し、色の明るさで表していた件数だけを高さに移す。元の図と一対一で対応するので、作り手も見る人も、何が高さになったかを取り違えにくくなります。

次に、変わらない部分と変わる部分を分けることです。emoto は、全ツイートで決まる形を削り、話題ごとの違いを光で重ねました。物理的な作品は作り直しにくいので、全体を素材に、部分を投影や文字に任せると、一つの台で何通りもの見方ができます。

三つ目は、同じデータを媒体ごとに役割を変えて出すことです。Web版は大会中の「いま」を流し、sentigraph は分析の結果を語り、彫刻は終わった大会を保存しました。どの媒体に何を任せるかを先に決めると、それぞれのエンコーディングも決めやすくなります。

最後に、データの出どころと偏りを、作品の外に書き残しておくことです。彫刻の起伏は説得力がありますが、それが1%の英語のサンプルだということは、形からは分かりません。Hemment の論文のような記録が、作品を正しく読むための凡例になります。

## 参考・出典

**一次情報**

- emoto 公式サイト：https://emoto2012.org/
- Drew Hemment, "emoto – Visualising the online response to London 2012," ISEA2013 Proceedings（PDF）：https://emoto2012.org/downloads/emoto_published.pdf （投稿版：https://www.isea-symposium-archives.org/wp-content/uploads/2021/07/ISEA2013_108_DrewHemment-Emotovisualising.pdf 、書誌：https://www.research.ed.ac.uk/en/publications/emoto-visualising-the-online-response-to-london-2012/ ）
- Moritz Stefaner, Truth & Beauty「emoto」：https://truth-and-beauty.net/projects/emoto （Markdown 版：https://truth-and-beauty.net/projects/emoto.md ）
- Truth & Beauty, インタラクティブ・ヒートマップ：https://truth-and-beauty.net/assets/extras/emoto/heatmap/
- Moritz Stefaner, well-formed-data.net「emoto」（2012-07-31）、「emoto data sculpture」（2012-09-20）：https://well-formed-data.net/archives/tag/emoto/
- Moritz Stefaner, Drew Hemment, Gerrit Kaiser, 講演スライド（Strata London, 2012年10月）：https://speakerdeck.com/moritzstefaner/emoto-visualising-the-online-response-to-london-2012
- Studio NAND, "emoto — The interface explained"（Vimeo, 2012-07-30）：https://vimeo.com/46615102
- Lancaster EPrints の書誌：https://eprints.lancs.ac.uk/id/eprint/61698
- 作者インタビュー（Stefaner と Thiel の発言）、The Creators Project / VICE：https://www.vice.com/en/article/data-visualization-sculpture-shows-twitter-reactions-to-london-2012-olympic-games/
- dataphys.org, "Emoto: Projection Augmented Heatmaps of Twitter Data"：https://dataphys.org/list/emoto-projection-augmented-heatmaps-of-twitter-data/

**第三者評価**

- Andy Kirk, "emoto: Visualising the emotional response to London 2012," *Visualising Data*, 2012-07-19：https://visualisingdata.com/2012/07/emoto-visualising-the-emotional-response-to-london-2012/
- Julia Kaganskiy, "Data Visualization Sculpture Shows Twitter Reactions To London 2012 Olympic Games," *The Creators Project* / VICE, 2012-09-20：https://www.vice.com/en/article/data-visualization-sculpture-shows-twitter-reactions-to-london-2012-olympic-games/
- Information is Beautiful Awards 2013, "emoto installation"：https://www.informationisbeautifulawards.com/showcase/68-emoto-installation
