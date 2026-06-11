+++
author = "Yuichi Yazaki"
title = "Heatmap"
slug = "heatmap"
date = "2026-03-14"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A heatmap represents values in a matrix or grid by assigning colors to cells. Each cell, at the intersection of a row and column, contains a value, and color intensity or hue communicates its magnitude. Heatmaps are used for correlation matrices, web click analysis, geographic density, gene expression analysis, and many other fields.

<!--more-->

## Historical Background

The idea of using color to encode quantity is much older than the term heatmap. Nineteenth-century statistical maps and matrix-style graphics already used color to reveal patterns.

The term "heat map" is often attributed to software designer Cormac Kinney, who used it in 1991 for a financial market visualization system that displayed real-time data as a two-dimensional color matrix.

## Data Structure

| Data | Role |
|---|---|
| Row category | Y-axis or vertical grouping |
| Column category | X-axis or horizontal grouping |
| Cell value | Determines color |
| Color scale | Maps values to colors |
| Optional labels | Show exact values or categories |

## Purpose

The purpose is to reveal patterns across many values at once. A heatmap helps readers see clusters, outliers, gradients, and block structures faster than a table of numbers.

## Use Cases

- Correlation matrices
- Website click and attention analysis
- Calendar activity charts
- Gene expression matrices
- Geographic density surfaces
- Business performance dashboards

## Design Notes

- Choose a color scale that matches the data type.
- Use a diverging scale only when there is a meaningful midpoint.
- Avoid rainbow scales for ordered values.
- Label axes clearly.
- Use clustering or sorting when row and column order affects interpretation.

## Summary

Heatmaps are effective for scanning large matrices and finding patterns. Their success depends heavily on color scale choice, ordering, and clear legends.
