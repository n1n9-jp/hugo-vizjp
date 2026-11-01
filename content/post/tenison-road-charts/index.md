+++
author = "矢崎裕一"
title = "見慣れた円グラフを、通りの窓で動かす──Tenison Road の Physical Charts"
slug = "tenison-road-charts"
date = "2026-11-01"
description = "誰もが知っている円グラフと棒グラフを機械で動かす作品です。英ケンブリッジの通りに面したラボの窓に置き、地域で集めた車の通行量や投票結果を見せました。"
categories = [
    "consume"
]
tags = [
    "データ物質化",
    "円グラフ",
    "棒グラフ"
]
image = "images/cover.jpg"
series = ["data-physicalization"]
series_weight = 20
seriesByline = "David Sweeney ほか（Microsoft Research）"
seriesTitle = "円グラフと棒グラフを窓で動かす──Physical Charts"
+++

Physical Charts は、誰もが知っている円グラフと棒グラフを、機械で動かす作品です。Microsoft Research ケンブリッジの David Sweeney（デイヴィッド・スウィーニー）らが2014年に作りました。英ケンブリッジの Tenison Road（テニソン・ロード）に面したラボの窓に置き、地域で集めた車の通行量や、住民が答えた投票の結果を見せました。

作品は、住民と研究者が地域のデータを一緒に扱う「Tenison Road project」の一部です。dataphys.org には「Dynamic Physical Charts Display Community Data」の名で載っています。以下は、作者らの論文 "A Pixel is Not a Pixel"（RTD 2015）と "Designing Engaging Data in Communities"（CHI EA 2015）、窓での配備を報告した CSCW 2017 の論文に沿って読みます。

<!--more-->

## 2013年、通りのデータを住民と集める

テニソン・ロードは、ケンブリッジ駅から Anglia Ruskin University の方へ延びる、長さ約半マイルの通りです。Microsoft Research のラボは、この通りに面しています。2013年10月、ラボの Human Experience & Design グループが、住民とのプロジェクトを始めました。副題は「Data and its Street Life」です。

始まりは、約80戸に配ったチラシでした。2013年10月にラボで立ち上げの会を開き、その後はほぼ毎月、20〜30人の住民と会合を重ねています。プロジェクトは少なくとも1年続ける予定とされました。

集めたデータは、おもに三つです。

| データ | 取り方 |
|---|---|
| 車の通行（交通量、速度、方向） | ラボの屋上に付けたサーマルカメラで、通過する車を数える。2014年2月25日の1日で7,314件（北行き3,684、南行き3,630） |
| 大気の質 | 住民宅に置いた市販のセンサー Air Quality Egg（CHI 2015 の時点で5台）の値を集計する |
| 地域の投票 | ウェブ投票 BallotShare、押しボタン式の投票ポスター PosterVote、家庭用の投票端末 Bullfrog |

車のデータは、カメラが自動で数えたものです。大気の質も、住民が手で測ったのではなく、住民宅のセンサーが記録した値です。住民が自分の考えを直接入れられるのは、投票だけでした。

グラフを作る前の2014年、作者らは *Big Data & Society* の論文に構想を書いています。

> we are envisioning the data driving remotely controlled, mechanical pie-charts and graphs, creating a spectacle for bystanders on the road to view the 'data' they are themselves producing, as well as ways for them to engage in and comment on it.

データで遠隔操作の機械式の円グラフやグラフを動かす。通りの人が、自分たちの生み出した「データ」を見られる見せ物にし、関わったりコメントしたりする手段にもする、という構想です。

CHI 2015 の論文には、住民の会合で出た言葉も残っています。住民会の書記を務める住民は「The purpose of data is action.」と言いました。データの目的は行動だ、という意味です。データが「coming from us」なのか「being done to us」なのか、という区別も住民から出ました。

## 画面の並ぶ窓に、物理のグラフを置く

どこで見せるかについて、RTD 2015 の要旨はこう書いています。

> We chose to use our highly visible window-frontage, visible from Tenison Road itself. As a technology company, our street facing window is full of screens, which could easily have been used for our purposes. Instead we have designed and built physical visualizations of a pie chart and a line graph.

場所は、テニソン・ロードからよく見えるラボの窓です。テクノロジー企業の窓には画面がいくらでもあり、それを使うこともできた。代わりに、円グラフと線グラフ（作品では棒グラフ）を物理的に作った、という説明です。

なぜ単純なグラフなのかも、同じ論文に書かれています。

> Simple charts become almost too commonplace and fail to stand-put. One way beyond this dilemma is to stay true to the simplicity of charting ideas like pie charts and line graphs but to render them physically rather than presenting them on screen or in print.

単純なグラフはありふれすぎて、目に留まらない。その打開策の一つは、円グラフや線グラフの単純さは保ったまま、画面や紙ではなく物理的に表すことだ、という主張です。

作者らは、可視化の新奇さを追う流れへの反発も、はっきり書いています。

> In response to the increasing sophistication of data visualisations and the seemingly unquestioning quest for novelty, the charts make playful use of long established and highly familiar representations like pie charts and bar graphs. Rather than estrange viewers, the objective is to enable them to, at a glance, engage with and comprehend data.

可視化が凝ったものになり、新しさが疑われずに追い求められている。それに対して、昔からある見慣れた円グラフと棒グラフを遊び心をもって使う。見る人を戸惑わせず、ひと目でデータに関わり理解できるようにする、という狙いです。

Sweeney のポートフォリオは、設計の条件をもう一つ挙げています。発光する画面や LED などの人工の光を使わずに、可視化を作ることです。

物理化は、立体や手触りという新しい次元を足すために使われることが多い手法です。この作品では逆に、**2D の円グラフと棒グラフの読み方を、そのまま保つために使われている**と読めます。物理であることが担うのは、目立つこと、見せ物になること、窓辺の明るさでも読めることです。

## 巻尺の長さと、円盤の角度

完成したのは、円グラフ2基と棒グラフ1基です。円グラフには、カードで作った版と、アクリルで作った版があります。

![白とグレーのカードの円グラフ、色分けされたアクリルの円グラフ、赤と青の棒が2段に並ぶ棒グラフの3基](images/cover.jpg)

David Sweeney, Tim Regan, Alex Taylor, Siân Lindley／RTD 2015 "A Pixel is Not a Pixel" より引用（CC BY 4.0）

円グラフは、最大5つの区分を表せます。区分は割り当て直せます。CHI EA 2015 によると、モーターと自作のギアで5枚の円盤を1枚ずつ回し、扇形の大きさを作ります。RTD 2015 によると、各扇形は3Dプリントのらせん状のガイド（SLS ナイロン）に沿って、前面の板の裏からせり出します。

凡例は、別の台に付いています。区分名は電子ペーパーに表示し、データセットごとに書き換えます。その横には、円グラフと同じ素材で作った見本が並びます。

![左に模様の異なる5枚の素材見本、右の電子ペーパーに Walking、Cycling、Public Transport、Taxi、Car / Motorcycle の区分名が並ぶ凡例](images/pie-legend-swatches.jpg)

David Sweeney, Tim Regan, Alex Taylor, Siân Lindley／RTD 2015 "A Pixel is Not a Pixel" より引用（CC BY 4.0）

棒グラフは、2段×12本の棒でできています。棒の正体は、市販の DIY 用の巻尺です。色付きのマスキングテープで包み、1本ずつモーターで送り出します。モーターと巻尺は、3Dプリントのゴム製の車輪でかみ合っています。

![黒い天板の下に、巻尺とモーターが一列に並んで取り付けられている棒グラフの内部](images/bar-tape-measures.jpg)

David Sweeney, Tim Regan, Alex Taylor, Siân Lindley／RTD 2015 "A Pixel is Not a Pixel" より引用（CC BY 4.0）

上下1組の棒は、1枚の電子ペーパーのラベルを共有します。データセットが変わればラベルも変わるので、時間帯も任意のカテゴリも表せます。データセットの名前は、別の「タイトル画面」に出します。

データと見た目の対応を、論文の記述からまとめると次のようになります。

| データ | グラフ | 見た目・素材 | 仕様 |
|---|---|---|---|
| 比率・構成（投票結果、速度超過の車の割合、大気汚染の比較など） | 円グラフ | 扇形の角度 | 最大5区分。5枚の円盤を1枚ずつ回す |
| 区分の見分け | 円グラフ | 扇形の色と素材（カード、アクリル） | 紙、プラスチックなどの板材で作れる |
| 区分名 | 円グラフの凡例 | 素材見本と電子ペーパーの文字 | 見本は円グラフと同じ素材 |
| 量（交通量、速度、降雨量、投票数など） | 棒グラフ | 巻尺を伸ばした長さ | 2段×12本。棒ごとにモーター |
| 二つのデータセット | 棒グラフ | 上下の段 | 例：過去12か月の降雨量と交通量 |
| 時間帯・カテゴリ・数量 | 棒グラフのラベル | 電子ペーパーの文字 | 上下1組で1枚 |
| 複数のデータセット、時間の流れ | 両方 | 動き | リアルタイム表示、記録の再生、切り替え |

設計の方針は、RTD 2015 にこう書かれています。

> To ensure maximum clarity of the displayed data, the charts have been designed to be as visually similar to their 2D versions from which they were inspired. This requires that all the mechanics and control systems are hidden when viewing from the front.

表示するデータをできるだけ明快にするため、元になった2Dのグラフと見た目をできるだけ同じにした。そのために、機構と制御系はすべて、前から見えないように隠した、という説明です。

素材の選び方にも理由があります。紙やカード、DIY 用の巻尺を使ったのは、データに温かみと手触りを加え、グラフの背後にある物語を考えてもらうためだと書かれています。電子ペーパーは、紙の質感を保ち、明るい場所でも読めるように選ばれました。値が変わるときだけ電力を使い、止まっている間は電力を使いません。

制御には .NET Gadgeteer の電子機器を使っています。データは Wi-Fi 経由で、Azure 上の中央サーバーから届きます。

表を並べると、使っている手がかりは長さ、角度、色だけです。新しいエンコーディングは一つもなく、手間はすべて、見慣れた形を前から崩さないことに注がれている、と読めます。

## 通りのパーティーから、窓の5週間へ

最初の公開は、2014年夏のテニソン・ロードのストリートパーティーでした。通りの125周年を祝う会で、約150人が集まりました。グラフは交通データを表示しています。日付は、プロジェクトのブログが2014年7月27日、CHI 2015 の論文が「August 2014」と書いていて、食い違います。

2014年9月の週末には、ロンドンの V&A で開かれた Digital Design Weekend（London Design Festival の一部）に出展しました。週末の来場者は約13,000人です。9月13日には、円グラフ、棒グラフ、内部の仕組みの動画3本が Vimeo に公開されました。

2014年11月20日、グラフはラボの1階の窓に置かれました。ブログの告知では、展示は「クリスマスまで」です。

![ラボのガラス窓の内側に、三脚に載った円グラフ2基と台の上の棒グラフが置かれ、投票を呼びかける縦長の案内が並ぶ様子](images/lab-window.jpg)

Tenison Road project（Microsoft Research）／tenisonroad.com「VOTE NOW!」より引用

CSCW 2017 の論文によると、この窓の展示は、Bullfrog と PosterVote を地域に配った5週間の調査と同時に行われました。円グラフは、BallotShare で月曜から木曜に出す「その日の質問」の結果を、リアルタイムで見せました。投票はウェブのほか、Twitter と SMS からもできました。金曜には近所についての質問を出し、PosterVote と BallotShare の票を合わせて、翌週の月曜から棒グラフに出しました。

作者らは、チャートに二つの役目を持たせていました。人を引き寄せる見せ物になることと、ほかの投票手段の結果を並べて比べることです。

公開を重ねて分かったことを、CHI EA 2015 は三つにまとめています。一つ目は、手応えです。

> we've found people to be delighted by the immediacy of using the Bullfrogs and seeing their votes reflected in the charts. The very physical qualities of both give people a palpable sense of the effect they're having, materially, on the data.

Bullfrog で投票し、その票がすぐグラフに表れることを、人々は喜んだ。投票端末もグラフも物理的なので、自分がデータに与えた影響を、手に取るように感じられた、という報告です。

三つ目は、単純さの代償です。

> However, their simplicity also losses something of the fluid and emergent qualities of data, how data comes to mean different things to different people, at different times. The comments, stories and criticisms get lost in pairing down the results.

単純さは、データの流動的で、その場で生まれる性質を失わせる。データが人や時によって違う意味を持つことも落ちる。結果を切り詰める中で、コメントや物語、批判が失われる、という振り返りです。作者らは、住民が軽い方法でデータに自分の解説や問いを重ねられるようにすべきだ、とも書いています。

窓に置いたあとの結果は、CSCW 2017 に報告されています。

> the potential to find Special Cards at the posters, or view results displayed on the Physical Charts, was acted upon by only a minority of Bullfrog participants. Most participants simply did not encounter the posters when taking their usual routes through the area, and seemed reluctant to change their habits to accommodate them.

ポスターの裏の特別なカードを探したり、窓のグラフで結果を見たりしたのは、Bullfrog の参加者のうち少数だけだった。多くはいつもの道順でポスターの前を通らず、そのために習慣を変えようともしなかった、という報告です。窓の前で立ち止まる人を見た、という参加者の声もありました。「It was colourful and eye-catching and people were stopping and looking」。それでも、ふだん通らない人には届きませんでした。

RTD 2015 の結論も、場所による違いに触れています。グラフは通りのデータに新しい規模と演劇性をもたらした。ただ、その規模の感じ方は、間近で見るのと、ガラス張りのオフィスの窓越しに見るのとで、まるで違う、と書いています。

## 第三者はこの作品をどう見たか

可視化の賞では、評価を受けています。Physical Charts は、Kantar Information is Beautiful Awards 2014 の「Data visualization」部門で、ロングリストとショートリストに入りました。受賞（金・銀・銅）の記載はありません。審査の講評は見つからず、掲載の説明文は作者の論文とほぼ同じ文です。画面の可視化が主流の賞で、見慣れた円グラフと棒グラフの物理版が最終候補に残ったことになります。

研究の文脈では、「値が変わる物理グラフ」の早い例として扱われています。Taher、Jansen らは IEEE TVCG（2017）の論文で、こう書いています。

> shape-changing technology (e.g., inFORM, EMERGE) promises to increase the interactivity of physicalizations to eventually reach a similar level of control as that possible with on-screen visualizations. For example, Microsoft's Physical Charts [26] demonstrates dynamic bars and pie charts

形の変わる技術は、物理化の対話性を、画面の可視化に近い水準まで高めると期待されている。その例として、Microsoft の Physical Charts は動く棒と円グラフを示した、という位置づけです。この論文が論じるのは動く仕組みで、地域や参加の文脈には触れていません。なお、dataphys.org はこの作品を「Active physical visualization」に分類しています。

手間への疑問は、作者ら自身が紹介しています。RTD 2015 の結論で、作者らは「効果を言うのは難しい」と書いたうえで、可視化デザイナーの Moritz Stefaner（モーリッツ・ステファナー）の言葉として、次の一文を引いています。

> As Moritz Stefaner said "that is a lot of work for a pie chart".

円グラフ1枚にしては、ずいぶんな手間だ、という言葉です。これは作者らの論文に引かれた伝聞で、Stefaner がいつ、どこで言ったのかを、筆者は確かめられていません。作者らは、見た人を喜ばせたことは確かだが、データの捉え方や、単純なグラフへの可視化界の理解を変えたかは分からない、と書き、その直後にこの言葉を置いています。

## 使い道

この作品から持ち帰れるのは、まず、物理化を新しさのためでなく、読み慣れた形を保つために使う選択肢です。作者らは長さ・角度・色という見慣れた手がかりだけを使い、機構を前から隠しました。読み方を教えなくても読めるグラフを、画面の外で目立たせる設計と読めます。

二つ目は、凡例を素材で作ることです。円グラフの区分は、同じ素材の見本と電子ペーパーの文字で示されました。物理化では、色の名前より素材そのものを並べた方が、凡例と本体の対応を目で確かめやすくなります。

三つ目は、置き場所を選んでも、道順までは選べないことです。作者らは通りから見える窓を意図して選びました。それでも CSCW 2017 では、窓の前を通らない参加者はグラフを見ていません。公共の場に置く可視化では、どこに置くかと同時に、誰がその前を通るかを調べる必要があります。

四つ目は、単純にした分だけ、落ちたものを受け止める場所を用意することです。作者らは、コメントや物語が切り詰めで失われたと書き、データに解説や問いを重ねる軽い手段が要るとしました。円グラフを読みやすくするほど、その外側に声を拾う仕組みが要る、と読めます。

最後に、この作品は、作者ら自身の疑いまで一次資料で追えます。効果は分からない、単純化で失うものがある、通らない人には届かない。手間をかけた作品の限界を、作った人が書き残しておくことにも、価値があると読めます。

## 参考・出典

**一次情報**

- Sweeney, D., Regan, T., Taylor, A., Lindley, S. (2015). "A Pixel is Not a Pixel: Simple Data Charting Made Physical." Proc. RTD 2015, Article 24. doi:10.6084/m9.figshare.1327998（CC BY 4.0）：https://figshare.com/articles/journal_contribution/RTD2015_24_A_Pixel_is_Not_a_Pixel_Simple_Data_Charting_Made_Physical/1327998 ／ https://ast.io/archive/download/2228/pixel-not-pixel-2015.pdf
- Regan, T., Sweeney, D., Helmes, J., Vlachokyriakos, V., Lindley, S., Taylor, A. (2015). "Designing Engaging Data in Communities." CHI EA '15, pp. 271–274. doi:10.1145/2702613.2725432：https://ast.io/archive/download/2226/designing-engaging-data-2015.pdf
- Taylor, A. S., Lindley, S., Regan, T., Sweeney, D. (2014). "Data and life on the street." *Big Data & Society* 1(2). doi:10.1177/2053951714539278：https://ast.io/archive/download/2231/data-life-street-2014.pdf
- Taylor, A. S., Lindley, S., Regan, T., Sweeney, D., Vlachokyriakos, V., Grainger, L., Lingel, J. (2015). "Data-in-Place: Thinking through the Relations Between Data and Community." CHI '15, pp. 2863–2872. doi:10.1145/2702123.2702558：https://ast.io/archive/download/2070/data-in-place-2015.pdf
- Lindley, S. E., Thieme, A., Taylor, A., Vlachokyriakos, V., Regan, T., Sweeney, D. (2017). "Surfacing Small Worlds through Data-In-Place." *Computer Supported Cooperative Work* 26(1-2), 135–163. doi:10.1007/s10606-017-9263-3：https://openaccess.city.ac.uk/id/eprint/18505/1/surfacing-small-worlds-2017.pdf
- Regan, T., Sweeney, D. "Reclaiming Charts: of Physicality and Small Data."（V&A Digital Design Weekend 2014 の寄稿）：https://digitransglasgow.github.io/OpenCollaborativeMaking/contributions/01.html
- David Sweeney, "Visualisation Machines"（ポートフォリオ）：https://davidasweeney.myportfolio.com/visualisation-machines
- Tenison Road project（Wayback Machine から復元したサイト）：https://tenisonroad.com/ ／ https://tenisonroad.com/project.html
- Alex Taylor, "Announcing Tenison Road launch"（2013-09-27）：https://ast.io/archive/tenison-road/
- Microsoft Research HXD Design, "Physical pie charts" / "Physical bar charts" / "Physical Charts workings"（Vimeo、2014-09-13）：https://vimeo.com/106053695 ／ https://vimeo.com/106053696 ／ https://vimeo.com/106053697
- dataphys.org, "Dynamic Physical Charts Display Community Data"（David Sweeney が提供）：https://dataphys.org/list/dynamic-physical-charts-to-communicate-community-data/

**第三者評価**

- Information is Beautiful Awards 2014, "Physical Charts"（Data visualization 部門のロングリストとショートリスト）：https://www.informationisbeautifulawards.com/showcase/504-physical-charts
- Taher, F., Jansen, Y., Woodruff, J., Hardy, J., Hornbæk, K., Alexander, J. (2017). "Investigating the Use of a Dynamic Physical Bar Chart for Data Exploration and Presentation." *IEEE TVCG* 23(1), 451–460. doi:10.1109/TVCG.2016.2598498：https://purehost.bath.ac.uk/ws/files/211082383/VIS16_PhysicalBarChart.pdf （この公開版では、引用文中の参照番号 [26] が別の文献を指しており、出版版での確認が要ります）
- Moritz Stefaner の発言 "that is a lot of work for a pie chart"（作者らが RTD 2015 の結論に引いた伝聞）：https://ast.io/archive/download/2228/pixel-not-pixel-2015.pdf
