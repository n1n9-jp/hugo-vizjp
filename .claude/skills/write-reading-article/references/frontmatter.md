# front matter の雛形

TOML（`+++`）で書く。`slug` はフォルダ名と同じにする。

```toml
+++
draft = true
author = "矢崎裕一"
title = "場面か主張を短く──題材名"
slug = "folder-name"
date = "YYYY-MM-DD"
description = "結論を1〜2文で。description だけ読んでも答えがわかるようにする。"
categories = [
    "principle"
]
tags = [
    "人名や手法名"
]
image = "images/cover.jpg"
+++

1段落目：答え。この段落だけで引用できるようにする。

2段落目：出典（書名・論文名・年）と、本文がどの資料に沿うか。

<!--more-->
```

## 項目のメモ

- `categories`：読み物で使われているのは `principle`、`technology`、`consume`。既存の分類は `content/categories/` を見て選ぶ。
- `image`：画像を置かない記事では行ごと書かない。
- 特集に入れるときは、次の行を足す。

```toml
series = ["<特集ID>"]
series_weight = 1          # 特集の帯での並び順
seriesByline = "作者名"     # 任意：帯に出す作者名
seriesTitle = "短いタイトル" # 任意：帯に出す短いタイトル
```
