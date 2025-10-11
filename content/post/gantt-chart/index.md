+++
author = "Yuichi Yazaki"
title = "ガント・チャート（Gantt Chart）"
slug = "gantt-chart"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

ガント・チャート（Gantt Chart）は、プロジェクト管理で広く用いられる可視化手法の一つで、各作業（タスク）の期間と進捗を横棒（バー）で表現します。1910年代にアメリカの機械工学者ヘンリー・ガント（Henry L. Gantt）が考案したもので、工場の作業計画を視覚的に把握する目的で生まれました。今日では、ソフトウェア開発、建築、研究、教育など多くの分野で活用されています。


<!--more-->

## 図解の見方

ガント・チャートの基本構成は以下の通りです。

| 要素 | 内容 | 視覚的表現 |
|------|------|-------------|
| 縦軸 | タスク（作業項目） | 各行に1つずつ配置 |
| 横軸 | 時間（スケジュール） | 日、週、月などの単位で表す |
| 横棒（バー） | 各タスクの期間 | 左端が開始日、右端が終了日 |
| 色・塗り | 状況・担当・カテゴリ | 進捗度や担当者を色分けで表現 |
| 線・矢印 | 依存関係 | あるタスクが他のタスクに依存する関係を示す |
| マイルストーン | 重要な節目 | 菱形や特定のアイコンで示すことが多い |



## 背景と発展

ヘンリー・ガントは、フレデリック・テイラーの科学的管理法をもとに、複雑な工程を誰でも理解できる形で示すためにこの図を考案しました。第二次世界大戦期には、兵器開発や生産計画で多用され、やがてプロジェクト管理手法の標準ツールとなりました。

現代では、Microsoft Project、Asana、Notion、Trello、Smartsheet、Jira など、多くのプロジェクト管理ソフトウェアがガント・チャートを搭載しています。また、D3.js や Vega-Lite、Plotly といった可視化ライブラリでも、データから自動生成できるようになっています。



## 代表的な特徴まとめ

| 視点 | 特徴 |
|------|------|
| 可視化の目的 | タスクの進行状況・順序・期間を把握する |
| 強み | 全体スケジュールを直感的に理解できる |
| 弱み | タスク数が多いと複雑化しやすい |
| 適した用途 | 中長期の計画管理、チーム内の進行確認 |
| 不向きな用途 | リアルタイムな依存関係変更が頻発する開発環境 |



## 現代的な活用例

- **教育現場**：授業進行計画や課題スケジュール管理に活用  
- **研究プロジェクト**：共同研究のフェーズ分けと進捗共有に利用  
- **デザイン・制作分野**：納期を伴う案件の工程管理  
- **ソフトウェア開発**：ウォーターフォール型開発の工程可視化  


## まとめ

ガント・チャートは、単なるスケジュール表ではなく「全体像を共有するための言語」です。シンプルなバー構造の中に、時間、依存関係、責任分担といった複雑な情報を直感的に組み込み、チーム全体の認識を揃えるための強力なツールとして機能します。
デジタルツールが発達した現在でも、その基本原理は変わらず、プロジェクト進行を可視化する最も基本的な方法の一つです。




## 参考・出典
- [What is a Gantt chart? (APM)](https://apm.org.uk/resources/find-a-resource/gantt-chart/)
- [Gantt Charts and Agile Planning (PMI Disciplined Agile)](https://www.pmi.org/disciplined-agile/agile/agilegantt)
- [Are you being misled by your progress Gantt chart? (PMI Learning Library)](https://www.pmi.org/learning/library/being-misled-progress-gantt-chart-4953)
- [Gantt Chart – Quality Resources (ASQ)](https://asq.org/quality-resources/gantt-chart)
- [Present your data in a Gantt chart in Excel (Microsoft Support)](https://support.microsoft.com/en-us/office/present-your-data-in-a-gantt-chart-in-excel-f8910ab4-ceda-4521-8207-f0fb34d9e2b6)
- [Work with the Gantt Chart view (Microsoft Project Support)](https://support.microsoft.com/en-us/office/work-with-the-gantt-chart-view-0e84efa4-78ce-4cd1-baed-5159a55f78b4)
- [Henry Laurence Gantt Medal (ASME)](https://www.asme.org/about-asme/honors-awards/achievement-awards/henry-laurence-gantt-medal)
- [Organizing for Work — Henry L. Gantt (Internet Archive)](https://archive.org/details/organizingforwo00gantgoog)