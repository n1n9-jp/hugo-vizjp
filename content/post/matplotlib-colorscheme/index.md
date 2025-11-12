+++
author = "Yuichi Yazaki"
title = "Matplotlib がカラーマップを jet から Viridis へ移行した物語"
slug = "matplotlib-colorscheme"
date = "2025-11-11"
categories = [
    "consume"
]
tags = [
    "Python,色",
]
image = "images/option_d.png"
+++

Matplotlibのデフォルト・カラーマップは長年「jet」でしたが、その知覚的不均一性や色覚多様性への非対応が問題視され、開発者らが「Viridis」を中心とした新しい知覚的に一様な色設計を導入しました。本記事では、その経緯を一次情報に基づき詳しくたどります。


<!--more-->


## MATLAB由来の “jet” が長らく既定だった

当初、Matplotlib（以下、Matplotlib）は、主に MATLAB を使っていた研究者・技術者が Python に移行しやすいよう、描画インターフェースも「MATLAB風」を意識して設計されました。MATLAB では古くから “虹色”グラデーション、典型的には青→緑→黄→赤と変化するカラーマップである jet（およびその派生）を標準として用いてきました。Matplotlib もこれに倣って、初期段階では jet をデフォルトに採用していたため、ユーザーとしては既存の MATLAB スクリプトから Python に移行しやすいという利便性がありました。

![jet](images/jet.png)

しかし、可視化研究の分野では、jet のような虹色系カラーマップには構造上の「知覚的」な欠点が多数指摘されてきました。

たとえば、明るさの変化が非均一であるため、データ値がほぼ一定でも “段差” があるように見えてしまったり、色刺激として黄色や緑の領域が強調されてしまうことで「実際にはフラットな領域なのに高い関心を引いてしまう」といった現象が発生します。実際、公式ドキュメント「Choosing Colormaps in Matplotlib」においても、虹色（rainbow）系のカラーマップは「知覚的均一性」が損なわれており、数値データの可視化において最適な選択とは言えないと明記されています。

また、学術論文（例えば The misuse of colour in science communication）では、虹色マップが白黒印刷や色覚異常（色覚多様性）に対して脆弱であり、科学可視化において「誤解を生むカラーマップの典型」として長らく扱われています。

こうした背景のもと、「既定のカラーマップを見直す」という構想が Matplotlib 開発コミュニティの間で徐々に高まっていきました。


## 転機：2012年の課題提起（Issue #875）

Matplotlib の開発リポジトリ（GitHub）には、2012年5月17日付けで Issue #875「Replace “jet” as the default colormap」 が投稿されました。この Issue では、開発者が次のような主張を行っています：

> 『研究によると、擬似カラーマップでデータを表示する場合、虹色マップが最適な選択肢となることは稀です。…虹色マップは、知覚的な秩序性の欠如により閲覧者を混乱させ、制御されていない輝度の変化によりデータを不明瞭にし、データに依存しないグラデーションを導入することで解釈を著しく誤らせます。￼』
>
> “Research has shown that the rainbow color map is rarely the optimal choice when displaying data with a pseudocolor map. … It confuses viewers through its lack of perceptual ordering, obscures data through its uncontrolled luminance variation, and actively misleads interpretation through the introduction of non-data-dependent gradients.”  ￼

ここで「擬似色マップ（pseudocolor map）」とは、数値のスカラー値を色にマッピングして視覚化する一般的な手法を指します。Issue のコメント欄やリンク先の議論でも、「虹色カラーマップ（虹スペクトル的グラデーション）は見栄えが良いが、輝度や色変化が人間の知覚にとって適切ではない」という根拠が多数引用されています。たとえば「虹色マップでは黄色が最も明るく目立つが、その位置が数値の極端値ではなく中間値にあったりする」ことによって、データの“重要な変化”が視覚的に強調されず、逆に“何もないところが目立ってしまう”という批判があります。 ￼

この Issue #875 は、「既定カラーマップを変更すべきか」「その新しい既定値は何にすべきか」というテーマを Matplotlib コミュニティに明確に提示するものとなり、後の設計フェーズへとつながっていきます。


## 設計フェーズ：Smith & van der Walt による新カラーマップ群（2015年）

この転換の課題を受けて、2015年に Nathaniel J. Smith と Stéfan van der Walt が、「Matplotlib の新しい既定カラーマップ候補」として Magma / Inferno / Plasma / Viridis の4種を設計・発表しました。


![オプション A](images/option_a.png)

![オプション B](images/option_b.png)

![オプション C](images/option_c.png)

![オプション D](images/option_d.png)




彼らの公式 “BIDS colormap” ページには、以下のような記述があります：

> このページでは、私たち（Stéfan van der WaltとNathaniel J. Smith）がmatplotlibのデフォルトである「jet」の代替として設計したカラーマップの概要を説明します。…4つのカラーマップはすべてmatplotlib 1.5に含まれ、matplotlib 2.0では「オプションD」（現在は「viridis」と呼ばれています）が新しいデフォルトのカラーマップになります。…CC0「無断複写・転載を禁じません」ライセンス。￼
>
> “This page gives an overview … of the colormaps we (. = Stéfan van der Walt and Nathaniel J. Smith) have designed as potential replacements for matplotlib’s default, ‘jet’. … All four color maps will be included in matplotlib 1.5, and “option D” (now called “viridis”) will be the new default colormap in matplotlib 2.0. … CC0 “no rights reserved” license.”  ￼

このページでは、まず既存のカラーマップ（特に jet）を「明度変化・色覚異常対応・グレースケール印刷対応」の観点から分析し、そこから設計要件を抽出しています。そして4候補を（便宜上 A〜D で）提示し、最終的に “Option D” を既定カラーマップ候補とすることが言及されています。

さらに、2015年7月開催の SciPy 2015 において、Smith と van der Walt が “A Better Default Colormap for Matplotlib” という講演を行い、知覚科学に基づいたカラーマップ設計の原理（「知覚的一様」「輝度が単調増加」「色覚異常者・白黒印刷でも有効」など）が解説されました。

その講演と関連資料において、例えば「もしデータ値が 0.1 → 0.2 と上昇したときと、0.8 → 0.9 と上昇したとき、人間の目には同じくらいの変化量として“見えて”ほしい」という“知覚的一様性”という設計指針が提示されており、これが jet に対する大きな改善点とされました。

また、GitHub やメーリングリスト上では、この新カラーマップ群のライセンスを CC0（「権利放棄／著作権フリー」）とし、Matplotlib に限らず R や JavaScript、Matlab など他言語への移植を容易にする方針であることも明らかになっています。 ￼
このように、技術的・設計的・配布的な3つの観点から、新しいカラーマップ群は “既定からの脱却／次世代標準” を志向して準備されました。



## 移行期：Matplotlib 1.5（2015年10月）で4色すべてを収録

設計フェーズから数ヶ月後、Matplotlib の公式リリースである バージョン 1.5（2015年10月26日付） において、Magma／Inferno／Plasma／Viridis の4つの新カラーマップが初めて同梱されました。公式 “What’s New in 1.5” ページには、次のような記述があります：

> 『新しいカラーマップを追加しました: magma、inferno、plasma、viridis (CC0) — これらは、Nathaniel J. Smith と Stéfan van der Walt によって設計された、知覚的に均一なシーケンシャルカラーマップです。オプション D (viridis) は、次期 2.0 リリースのデフォルトとなります。￼』
>
> “Added new colormaps: magma, inferno, plasma and viridis (CC0) — these are perceptually uniform sequential colormaps designed by Nathaniel J. Smith and Stéfan van der Walt. Option D (viridis) is the default for the upcoming 2.0 release.”  ￼

さらに、同ページには「従来の jet は強く推奨しない（strongly discouraged）となった」とも記されており、移行が公式に方向づけられました。

これにより、ユーザーはバージョン 1.5 から新しいカラーマップを手動で選択可能となり、かつ将来バージョンでの既定切り替えに備えることができるようになりました。いわば “導入フェーズ” としての意味をもっており、混在状態・移行期間が明示された形です。


## 切り替え：Matplotlib 2.0（2017年1月）

新しいカラーマップの含有を経て、ついに Matplotlib 2.0（2017年1月17日リリース） において、デフォルトのカラーマップが jet から viridis に切り替えられました。公式ドキュメント「Default Style Changes」には明確に次のように記載されています：

> > 「matplotlib.cm.ScalarMappableインスタンスで使用される新しいデフォルトのカラーマップは「viridis」（オプションD）です。… mpl.rcParams[‘image.cmap’] = ‘jet’ を使用することで以前のデフォルトに戻すことができますが、これは強く推奨されません。」￼
>
> “The new default colormap used by matplotlib.cm.ScalarMappable instances is ‘viridis’ (aka option D). … The previous default can be restored using mpl.rcParams[‘image.cmap’] = ‘jet’, but this is strongly discouraged.”  ￼

また、開発者向けドキュメント「Default Colour Changes（2019）」では、さらに踏み込んで次のように述べています：

> 「他の場所で長々と議論されているように…jetは経験的に不適切なカラーマップであり、デフォルトにすべきではありません。プロットの外観を変更すると下位互換性が損なわれるという立場から、この変更は本来よりもずっと長い間延期されてきました。」
>
> “As discussed at length elsewhere … jet is an empirically bad colour map and should not be the default. Due to the position that changing the appearance of the plot breaks backward compatibility, this change has been put off for far longer than it should have been.”  ￼

つまり、既定変更は使い勝手・互換性に影響するため慎重に進められ、この 2.0 リリースでようやく「知覚的一様な sequential カラーマップを既定に」するという開発チームの意図が実現されたわけです。以後、Matplotlib を単にインストール・利用すれば、特に指定しなければ viridis がカラーマップとして適用されるようになりました。StackOverflow の Q&A でも「Matplotlib 2.0 以降、デフォルトは ‘viridis’」という回答が定説となっています。


## 何が「よかった」のか

なぜ jet から viridis 等への移行が「よい選択」とされたのか、以下のような設計・理論的根拠があります。

### 知覚的一様性（perceptual uniformity）

人間が「この数値の変化はあの数値の変化と同じくらいだな」と感じるには、色マップの変化が「数値差」と比例的に見えることが望ましい。Matplotlib の設計資料でも「if your data goes from 0.1 to 0.2 this should produce about the same perceptual change as 0.8 to 0.9」という説明があります。

これに対し、jet は色の配置がスペクトル重視で、輝度（明るさ）が途中で急に変化したり、色が変化しても明るさがほとんど変化しない領域があったりと、「見た目の変化が数値変化を忠実に反映しない」性質を持っていました。BIDS ページ上でも、jet の「perceptual deltas（知覚差）」グラフが大きく揺れている図が掲載されており、設計者はこれを避けるために新カラーマップを設計しています。

### 輝度の単調増加

データ値が小さい→大きい方向に並ぶ可視化では、輝度（明るさ）が単純に増えることで「高い値だな／低い値だな」という印象が直感的に得られます。Matplotlib ドキュメントでも、「lightness is a very strong and natural cue to magnitude」 と明言されています。

新カラーマップ群（Viridis 等）は、この「輝度がほぼ単調に変化する」設計を意図的に組み込んでいます。

### 色覚多様性（color-vision deficiency）および白黒印刷対応

多くのユーザーにとって、色覚異常（いわゆる「赤緑の色盲」など）や、グレースケールで印刷される資料でも可読な可視化であることが重要です。実際、学術論文では虹色マップ使用時に「色盲者には判別困難」「白黒印刷すると縞模様になってしまう」という懸念が報告されています。

新設計のカラーマップ群では、色覚異常シミュレーション（BIDS ページ上に掲載）やグレースケールに変換したときの輝度変化曲線がチェックされており、「色が変化しても輝度が極端な飛びを起こさないように」という基準が入っています。

### 配布・移植性

BIDS ページ上で、4つの新カラーマップが CC0（“no rights reserved”）ライセンス で提供されており、Matplotlib だけでなく R・Matlab・JavaScript／D3 など多言語に移植可能である旨が明記されています。

こうした配布モデルは、「可視化ツールのユーザーが色だけを差し替えても良い」という柔軟性を確保するもので、寄付的・オープンソース的なコミュニティ観点からも高く評価されました。



## 年表（公式情報ベース）

| 年 | 出来事 |
|----|--------|
| **2012-05-17** | Matplotlib GitHub に Issue #875「Replace ‘jet’ as the default colormap」が提出される。既定の虹色マップからの脱却を公式に議題化。 |
| **2015年7月（SciPy 2015）** | Nathaniel J. Smith と Stéfan van der Walt による講演 “A Better Default Colormap for Matplotlib” が開催。新カラーマップ設計の背景と理論が発表される。 |
| **2015-10-26（Matplotlib 1.5 リリース）** | Magma／Inferno／Plasma／Viridis の4つの新カラーマップが同梱され、「Option D（Viridis）が次期既定候補」として記載される。 |
| **2017-01-17（Matplotlib 2.0 リリース）** | 公式に既定カラーマップが `jet` から `viridis` に変更。ドキュメント「Default Style Changes」で明言される。 |



## まとめ

このように、Matplotlib は長年利用されてきた jet（虹色カラーマップ）から、知覚科学や色覚多様性・印刷耐性という観点を取り入れた viridis 系列（Viridis / Inferno / Magma / Plasma）への移行を、コミュニティ議論 → 設計検証 → 同梱導入 → 切り替えというプロセスを通じて、透明かつ段階的に実現しました。特に注目すべきは「ただ見栄えがいい」から「意味を伝える」「誰が見ても誤解を招かない」可視化を目指した点であり、開発者自身がその思想を明確に打ち出している点です。



## 参考・出典

- [Changes to the default style — Matplotlib 3.10.7 documentation](https://matplotlib.org/stable/users/prev_whats_new/dflt_style_changes.html)
- [What's new in Matplotlib 1.5 (Oct 29, 2015) — Matplotlib 3.10.7 documentation](https://matplotlib.org/stable/users/prev_whats_new/whats_new_1.5.html)
- [Default Style Changes — Matplotlib 1.5.1 documentation](https://matplotlib.org/1.5.1/style_changes.html)
- [Choosing Colormaps in Matplotlib — Matplotlib 3.10.7 documentation](https://matplotlib.org/stable/users/explain/colors/colormaps.html)
- [matplotlib colormaps](https://bids.github.io/colormap/)
- [bids:viridis - cmap](https://cmap-docs.readthedocs.io/en/latest/catalog/sequential/bids:viridis/)
- [SciPy 2015（公式配信動画）：A Better Default Colormap for Matplotlib](https://www.youtube.com/playlist?list=PLYx7XA2nY5Gcpabmu61kKcToLz0FapmHu)
- [GitHub Issue（2012/05/16）：Replace "jet" as the default colormap](https://github.com/matplotlib/matplotlib/issues/875)