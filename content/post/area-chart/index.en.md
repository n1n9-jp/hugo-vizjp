+++
author = "Yuichi Yazaki"
title = "Area Chart"
slug = "area-chart"
date = "2024-11-12"
description = "A chart that fills the area under a line to emphasize magnitude and cumulative change."
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

An area chart is a line chart with the space below the line filled in. The filled area makes the magnitude of change more visually prominent than a line alone. Area charts are commonly used for time series data, especially when the total volume or accumulated amount is part of the message.

They can show a single series, or they can stack multiple series to show both the total and the contribution of each category.

<!--more-->

## Historical Background

Area charts belong to the same historical family as line charts and statistical time-series graphics. William Playfair's late eighteenth-century statistical charts established many of the visual conventions for plotting economic quantities over time. Filling the region under a line later became a natural way to emphasize amount, accumulation, and volume.

Today, area charts are widely used in business dashboards, journalism, economics, web analytics, and environmental reporting.

## Data Structure

An area chart uses ordered two-dimensional data.

| Data | Role |
|---|---|
| Time or ordered category | X-axis |
| Numeric value | Y-axis |
| Series | Optional category for multiple areas |
| Color | Identifies series or highlights a category |

For a stacked area chart, each series must share the same X-axis values so the categories can be stacked at each point.

## Purpose

The purpose of an area chart is to show change while emphasizing quantity. A line chart is usually better for reading direction and slope, while an area chart gives the reader a stronger sense of volume.

Stacked area charts are useful when the reader needs to see both the total amount and how categories contribute to that total.

## Use Cases

- Sales or revenue over time
- Website traffic by channel
- Energy consumption by source
- Population or user growth
- Market share composition over time
- Cumulative totals such as downloads, cases, or production

## Types

| Type | Use |
|---|---|
| Single-series area chart | Emphasizes the magnitude of one changing value |
| Stacked area chart | Shows total volume and category contribution |
| 100% stacked area chart | Shows proportional composition over time |
| Overlapping area chart | Compares multiple series with transparency |

## How to Read It

In a single-series area chart, the height of the filled shape at each X-axis position represents the value. The overall filled shape gives a quick impression of growth, decline, peaks, and troughs.

In a stacked area chart, the top boundary represents the total value. The thickness of each layer represents the value of that category at that point. Only the bottom layer has a stable baseline, so comparing the internal layers precisely can be difficult.

## Design Notes

- Use a zero baseline unless there is a clear reason not to.
- Use line charts instead when exact trend comparison is more important than volume.
- Keep the number of stacked series limited.
- Order stacked layers deliberately so important categories are easy to follow.
- Use direct labels or a clear legend for multiple series.
- Be careful with overlapping areas; transparency can create confusing mixed colors.
- Avoid smoothing lines so much that real changes disappear.

## Strengths

- Makes volume and accumulated change easy to notice.
- Works well for continuous or ordered data.
- Can show total and part-to-whole relationships in one view.
- Feels intuitive for cumulative quantities.

## Limitations

Area charts can overemphasize visual weight because readers perceive filled area strongly. In stacked versions, the layers above the baseline are harder to compare because their lower boundaries move. If precise comparison between categories is the main goal, a line chart, grouped bar chart, or small multiples may work better.

## Alternatives

| Alternative | When to Use It |
|---|---|
| Line chart | Precise trend comparison across series |
| Bar chart | Discrete value comparison |
| Stacked bar chart | Composition across discrete periods |
| Streamgraph | A more organic view of changing composition |
| Heatmap | Dense time-by-category comparisons |

## Summary

Area charts are useful when the shape of change and the sense of quantity both matter. They are strongest for time-series volume and cumulative patterns, but they require careful baselines, ordering, and labeling to avoid misleading comparisons.

## References

- [Data Visualization Catalogue: Area Graph](https://datavizcatalogue.com/methods/area_graph.html)
- [Data Viz Project: Area Chart](https://datavizproject.com/data-type/area-chart/)
- [Matplotlib: Stackplots and streamgraphs](https://matplotlib.org/stable/gallery/lines_bars_and_markers/stackplot_demo.html)
