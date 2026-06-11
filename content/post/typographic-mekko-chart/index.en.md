+++
author = "Yuichi Yazaki"
title = "Typographic Mekko Chart"
slug = "typographic-mekko-chart"
date = "2026-03-21"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A typographic Mekko chart extends the Mekko chart, or Marimekko chart, by using typographic attributes inside each cell to encode additional dimensions of data. Font size, weight, color, italic style, and other text properties become part of the visualization. In an ordinary Mekko chart, width and height encode two dimensions; in a typographic Mekko chart, the label itself carries more information. This is one form of typographic visualization discussed by Richard Brath in *Visualizing with Text* (2020).

<!--more-->

## Historical Background

Mekko charts have long been used in business analysis to show both part-to-whole structure and category composition. The typographic version comes from a broader tradition of treating text not only as annotation but as visual data.

Richard Brath's work systematized many ways to use text attributes for visualization. The typographic Mekko chart applies that idea to a matrix-like area chart: a cell's size communicates one relationship, while the appearance of the label communicates another.

## Data Structure

| Data | Role |
|---|---|
| Row or segment category | Determines one dimension of the Mekko layout |
| Column or group category | Determines another dimension of the layout |
| Cell value | Determines cell area |
| Text value | Label displayed inside the cell |
| Typographic variables | Font size, weight, color, style, or spacing |

The design requires both numerical values for the area layout and additional attributes that can be mapped to typography.

## Purpose

The purpose is to increase the information density of a Mekko chart without adding separate legends, marks, or panels. It is useful when the text labels are already important and can safely carry more meaning.

## Use Cases

- Market share by segment with growth encoded in label weight
- Product portfolio analysis with category size and profitability
- Survey results where cell labels show both group names and sentiment
- Editorial or text-heavy dashboards where labels are part of the message

## Characteristics

- It can encode more variables than a standard Mekko chart.
- It relies heavily on legible typography.
- It can become visually noisy if too many text attributes are used at once.
- It works best when the number of cells is moderate.

## How to Read It

First read the cell area as in a normal Mekko chart: width and height describe the share or magnitude. Then read the text style. Larger, bolder, darker, or differently colored labels may represent additional values such as growth, importance, risk, or category.

The legend must explain what each typographic attribute means. Without a clear mapping, readers may interpret style as decoration rather than data.

## Design Notes

- Limit the number of typographic encodings.
- Keep labels large enough to read.
- Use font weight and color carefully; they attract attention strongly.
- Do not encode critical values only through subtle italic or spacing differences.
- Check that small cells do not produce unreadable labels.

## Alternatives

- Standard Mekko chart
- Treemap with labels
- Heatmap with text annotations
- Small multiples of bar charts

## Summary

The typographic Mekko chart is a high-density technique that turns labels into data-bearing marks. It is useful when area, category, and text all matter, but it requires careful restraint so the typography remains readable and interpretable.
