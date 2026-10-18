# 自動サムネイル用のフォントと土台画像

`layouts/partials/vz/thumb.html` が Hugo の `images.Text` でタイトルから画像を作るときに使う素材。
サイトの表示には使わない（ブラウザに配信されるのは生成した PNG だけ）。

| ファイル | 内容 | 用途 | 大きさ |
|---|---|---|---|
| `IBMPlexSansJP-Bold.ttf` | IBM Plex Sans JP Bold 1.004。**文字を絞っていない全字形**（cmap 15,718字。第3水準以降の漢字を含む）。ヒンティングだけ除去 | 和名（太字）、ロゴと色の点（●） | 約 5.0MB |
| `IBMPlexSansJP-Regular.ttf` | IBM Plex Sans JP Regular 1.004。**カテゴリ名だけに絞った版**（92字） | 左上のカテゴリ名 | 約 27KB |
| `IBMPlexMono-Regular.ttf` | IBM Plex Mono Regular 2.004 | 英語名、visualizing.jp、ロゴの線（罫線「─」） | 約 155KB |
| `base.png` | 1600×900 の白地（寸法の土台） | 画像の大きさと地色 | 約 6KB |
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

# base.png：白地
python3 -c "from PIL import Image; Image.new('RGB',(1600,900),(255,255,255)).save('base.png', optimize=True)"
```

## 追加するとき・変えるときの注意
- 和名は Bold（全字形）で描くので、タイトルにどんな漢字が入っても豆腐にならない。ただし Plex Sans JP に無い字（絵文字など）は表示されない。
- Regular はカテゴリ名の字だけを含む。**カテゴリを足す・名前を変えるときは、上の `--text` にその字を足して作り直す**（足さないと、その字が豆腐になる）。
- 色は画像の中に書き込むので CSS 変数が使えない。`layouts/partials/vz/thumb.html` の色の値は `assets/scss/vz/_tokens.scss` のライト値に合わせてある。トークンを変えたらテンプレートの値も直す。ロゴの線の色 `#B9BBB0` は画像専用の値で、テンプレートの中だけにある。
- フォントを差し替えると、`resources/_gen` のキャッシュが無効になり、全サムネイルが作り直される。
