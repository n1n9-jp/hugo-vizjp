+++
author = "Yuichi Yazaki"
title = "Tabula Windows版のインストールがうまくいかない方へ"
slug = "tabula-windows-install"
date = "2019-08-24"
categories = [
    "technology"
]
tags = [
    "pdf","アプリ"
]
image = "images/fi_TabulaWindows.png"
+++

PDFに含まれている表をテキストデータとして抜き出すことのできるTabulaというアプリケーションがあります。

- [Tabula](https://tabula.technology/)

インストール型なので最初は少し手間ですが、精度が高いのと、ナイト財団などの複数の財団の助成を受けているので、今後もメンテナンスが続いていきそうです。

Windows OSへインストールする際に、文字コードの関係で、少し手間がかかります。Tabulaは**UTF-8**で起動することを想定した作りになっているのに、Windows OSでは**Shift-JIS**で起動しようとするため、エラーが発生して**起動しない**ということになります。

### 対処方法

- バッチファイルを作成して、今後はアプリファイル（tabula.exe）ではなく、そのバッチファイルをクリックすることで、Tabulaを起動することにします。
- そのバッチファイルには文字コードをUTF-8で起動することが記述されています。

というやり方になります。

### 用意するもの

- UTF-8での記述に対応するテキストエディタ
    - マイクロソフトの**Visual Studio Code**がおすすめです。 [Visual Studio Code – コード エディター | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

### 作業手順

- Tabulaが保存されているディレクトリにて、テキストエディタで**tabula.bat**というファイルを作成します。
- そのファイルの中には以下の二行を書きます。

```
set RUBYOPT=-EUTF-8
tabula.exe
```

以上です！やってしまえば簡単でしょう？以下のリンク先にて制作済のファイルを配布しています。

- [https://github.com/data-visualization-lectures/tabula](https://github.com/data-visualization-lectures/tabula)

### 注意すること

- タスクが複数立ち上がりっぱなしの場合、うまくいかないことがあります→タスクマネージャーを開いて、Tabula関連のタスクをすべて閉じてから、起動するとよいです。
