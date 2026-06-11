+++
author = "Yuichi Yazaki"
title = "Bubble Chart"
slug = "bubble-chart"
date = "2025-10-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A bubble chart is an extension of the scatter plot that can represent relationships among three or more variables in one chart. The X- and Y-axes show two quantitative variables, while the area of each circle, or bubble, represents a third quantitative variable. Color, opacity, or shape can add further information.

Bubble charts are widely used for business analysis, economic comparison, marketing analysis, and other multivariate datasets.

<!--more-->

## Historical Background

The bubble chart traces its roots to the scatter plot. By the 1960s and 1970s, statistical and graphics systems were using point size to add another quantitative dimension to scatterplots.

The format became widely known through Hans Rosling's Gapminder project, which used animated bubble charts to show global health and economic data. This popularized the animated bubble chart, or motion chart, as a symbol of data storytelling.

## Data Structure

| Category | X value | Y value | Size value | Color |
|---|---:|---:|---:|---|
| Country A | 50000 | 75 | 1.2 | Blue |
| Country B | 30000 | 65 | 0.8 | Red |

- X-axis and Y-axis: numeric variables, such as GDP and life expectancy.
- Size: a third variable, such as population.
- Color: an optional category such as region, industry, or gender.

## Purpose

The purpose is to compress a multivariate relationship into a two-dimensional space while preserving a sense of magnitude. A scatter plot shows the relationship between two variables; a bubble chart adds weight or scale.

## Use Cases

- Economic analysis: GDP, life expectancy, and population by country
- Marketing: sales, profit margin, and market share
- Education data: test scores, investment, and population share
- Sustainability: CO2 emissions, renewable energy share, and population

Gapminder's world development data is the classic example: GDP on the X-axis, life expectancy on the Y-axis, and population as bubble size.

## Characteristics

- Shows more information than a scatter plot.
- Can compare categories through color or shape.
- Overlapping bubbles can reduce readability.
- Size scaling must be handled carefully.

## How to Read It

1. **Position**: Read the relationship between the X and Y variables.
2. **Bubble size**: Larger bubbles indicate larger values, but area perception is imprecise.
3. **Color**: Indicates group or region.
4. **Animation**: If present, shows change over time.

## Design Notes

- Scale bubble area, not diameter, to the value.
- Use transparency or layout techniques to reduce overlap.
- Give color a clear meaning and include a legend.
- Avoid 3D bubbles and perspective effects.
- Add labels selectively to avoid clutter.

## Alternatives

| Purpose | Alternative |
|---|---|
| Correlation among many variables | Scatterplot matrix |
| Weighted distribution | Heatmap |
| Part-to-whole comparison | Treemap |
| Time-series comparison | Line chart or sparklines |

## Summary

Bubble charts are powerful for showing multivariate relationships, especially when size itself is meaningful. They require careful scaling and design because area perception and overlap can easily mislead readers.

## References

- [Gapminder: Tools & Data](https://www.gapminder.org/tools/)
- [Wikipedia: Bubble chart](https://en.wikipedia.org/wiki/Bubble_chart)
- [Bubble Chart - The Data Visualisation Catalogue](https://datavizcatalogue.com/methods/bubble_chart.html)
- [A Complete Guide to Bubble Charts - Atlassian](https://www.atlassian.com/data/charts/bubble-chart-complete-guide)
- [Motion chart - Wikipedia](https://en.wikipedia.org/wiki/Motion_chart)
- [Trendalyzer - Wikipedia](https://en.wikipedia.org/wiki/Trendalyzer)
