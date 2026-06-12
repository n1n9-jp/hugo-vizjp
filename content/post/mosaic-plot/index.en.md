+++
author = "Yuichi Yazaki"
title = "Mosaic Plot"
slug = "mosaic-plot"
date = "2025-09-29"
description = ""
categories = [
    "chart"
]
tags = [
    ""
]
image = "images/image-27.png"
+++

A **mosaic plot** visualizes relationships between categorical variables by representing cells as rectangles whose areas correspond to frequency or probability. The method was proposed by Hartigan and Kleiner in 1981 and later developed historically and theoretically by Michael Friendly.

<!--more-->

The basic principle is:

1. Split the whole horizontally according to the first categorical variable.
2. Split each section vertically according to the next variable.
3. The resulting rectangle area represents the frequency or probability of that category combination.

By recursively splitting the space, mosaic plots can visualize more than two categorical variables.

## Strengths

- **Cross-tabulation made visual**: category combinations become visible as areas.
- **Conditional proportions**: a plot can show both total group size and within-group shares.
- **Model diagnostics**: colors can encode residuals from expected values in a log-linear model.
- **Exploratory analysis**: variable order and category order can reveal or hide structure.
- **Education**: the chart helps explain the relationship between counts and proportions.

## Use Cases

- survey analysis
- marketing segmentation
- statistical education
- exploratory data analysis
- model checking for contingency tables

## Mosaic Plot and Marimekko Chart

A **Marimekko chart** or **Mekko chart** is structurally similar. It can be understood as a variable-width stacked bar chart. In business dashboards, the Marimekko name is common, while mosaic plot is the statistical term.

| Perspective | Mosaic plot | Marimekko / Mekko chart |
|---|---|---|
| Context | Statistics | Business intelligence |
| Structure | Recursive area split | Variable-width stacked bars |
| Purpose | Cross-tabulation and model diagnostics | Market share and segment composition |
| Color | Often residuals or analytical meaning | Often presentation categories |
| Tools | R, JMP, S-PLUS | Tableau, PowerPoint, BI tools |

## Summary

Mosaic plots are a foundational statistical visualization for categorical data. Marimekko charts use a similar geometry in a business context. In both cases, the key idea is that rectangle area represents the size of a category combination.

## References

- [Mosaic plot — Wikipedia](https://en.wikipedia.org/wiki/Mosaic_plot)
- [Mosaic Plot — JMP](https://www.jmp.com/en/statistics-knowledge-portal/exploratory-data-analysis/mosaic-plot.html)
- [Marimekko Chart — Tableau Blog](https://www.tableau.com/blog/introduction-marimekko-chart-many-colors-and-many-names-58111)
- [think-cell: Mekko Chart](https://www.think-cell.com/en/resources/manual/mekko)
- [Michael Friendly: A Brief History of the Mosaic Display](https://www.datavis.ca/papers/moshist.pdf)
