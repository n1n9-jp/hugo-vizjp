# 自動サムネイル用のフォントと土台画像

`layouts/partials/vz/thumb.html` が Hugo の `images.Text` でタイトルから画像を作るときに使う素材。
サイトの表示には使わない（ブラウザに配信されるのは生成した PNG だけ）。

| ファイル | 内容 | 用途 | 大きさ |
|---|---|---|---|
| `IBMPlexSansJP-Bold.ttf` | IBM Plex Sans JP Bold 1.004。**文字を絞っていない全字形**（cmap 15,718字。第3水準以降の漢字を含む）。ヒンティングだけ除去 | 和名（太字）、ロゴと色の点（●） | 約 5.0MB |
| `IBMPlexSansJP-Regular.ttf` | IBM Plex Sans JP Regular 1.004。**カテゴリ名だけに絞った版**（92字） | 左上のカテゴリ名 | 約 27KB |
| `IBMPlexMono-Regular.ttf` | IBM Plex Mono Regular 2.004 | 英語名、visualizing.jp | 約 155KB |
| `base.png` | 1600×900 の白地。右上にロゴ（2つの点を結ぶ線）を描き込んである | 画像の大きさ、地色、ロゴ | 約 7KB |
| `OFL.txt` | SIL Open Font License 1.1（IBM Plex のライセンス全文） | 同梱の条件 | |

## 出典
- 和文：npm `@ibm/plex-sans-jp` 3.0.0 の `fonts/complete/woff2`（Bold / Regular）を fontTools で TTF に変換（IBM Plex Sans JP, https://github.com/IBM/plex）
- 等幅：npm `@ibm/plex-mono` 1.1.0 の Regular を TTF に変換
- ライセンス：SIL OFL 1.1（改変・同梱・再配布可。フォント単体の販売は不可。Reserved Font Name は "Plex"）。
  フォントを派生させた版（ヒンティング除去、文字の絞り込み）はファイル名に Plex を含むが、字形は変えていない。再配布する場合は OFL.txt を付ける。

## なぜ TTF で、なぜここに置くのか
`images.Text` はフォントを Hugo のリソース（TTF／OTF）で受け取る。woff2 は使えない。サイトのビルドだけで画像が作れるよう、リポジトリの `assets/` に置く。

## 作り方（再現手順）
```sh
# 和文 Bold：全字形のまま、ヒンティングだけ除く（フォントは woff2 を TTF に変換済みとする）
pyftsubset IBMPlexSansJP-Bold.ttf --unicodes='*' --no-hinting --layout-features='*' \
  --output-file=IBMPlexSansJP-Bold.ttf

# 和文 Regular：カテゴリ名（日英）だけに絞る
pyftsubset IBMPlexSansJP-Regular.ttf --no-hinting \
  --text='チャート・カタログ見るための記事作るための記事データ可視化の原理イベント教えるための記事ChartCatalogueConsumeTechnologyPrincipleEventEducation abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -・' \
  --output-file=IBMPlexSansJP-Regular.ttf

```

## ロゴ（base.png に描き込み）
System.dc.html のロゴ SVG（34×10。線 stroke-width 1.5、点 r=4）を、4:3 の範囲の幅 1200px ÷ 360 = 3.333 倍にして置く。
- 線 `#B9BBB0`（画像専用の値。CSS トークンにはない）、点 `#E645A2`（`--vz-dot` と同じ）
- 点の中心 (1216.7, 110) と (1296.7, 110)、点の直径 26.7px、線の太さ 5px（点の中心どうしを結ぶ）
- 8倍で描いて縮小（BOX フィルタ）し、アンチエイリアスの縁以外は指定の色になる
色や位置を変えるときは、この値で base.png を作り直す（作成スクリプトはリポジトリに置かない）。

## 追加するとき・変えるときの注意
- 和名は Bold（全字形）で描くので、タイトルにどんな漢字が入っても豆腐にならない。ただし Plex Sans JP に無い字（絵文字など）は表示されない。
- Regular はカテゴリ名の字だけを含む。**カテゴリを足す・名前を変えるときは、上の `--text` にその字を足して作り直す**（足さないと、その字が豆腐になる）。
- 色は画像の中に書き込むので CSS 変数が使えない。`layouts/partials/vz/thumb.html` の色の値は `assets/scss/vz/_tokens.scss` のライト値に合わせてある。トークンを変えたらテンプレートの値も直す。ロゴの線の色 `#B9BBB0` は画像専用の値で、base.png にだけある。
- フォントを差し替えると、`resources/_gen` のキャッシュが無効になり、全サムネイルが作り直される。
