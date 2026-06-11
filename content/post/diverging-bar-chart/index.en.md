+++
author = "Yuichi Yazaki"
title = "Diverging Bar Chart"
slug = "diverging-bar-chart"
date = "2026-03-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A diverging bar chart extends bars in two directions from a central baseline, usually zero. It is used to compare positive and negative values, or deviations from a reference point. It is especially useful for Likert-scale survey results, sentiment analysis, and year-over-year performance.

This article focuses on diverging bars where each bar represents a single value, not diverging stacked bar charts where each bar contains multiple segments.

<!--more-->

## Historical Background

Diverging bar charts grew from the broader history of bar charts after William Playfair's work in 1786. As statistical graphics developed, analysts needed ways to compare values on both sides of a reference point, especially gains and losses.

## Data Structure

| Data | Role |
|---|---|
| Category | One bar |
| Value | Positive or negative magnitude |
| Baseline | Usually zero or a meaningful reference |
| Color | Often indicates direction |

## Purpose

The purpose is to make direction and magnitude visible at the same time. A reader can quickly see which items are above or below the reference and by how much.

## Use Cases

- Profit and loss
- Sentiment scores
- Survey agreement and disagreement
- Population change
- Performance against target

## Design Notes

- Use a clear zero or reference line.
- Use color consistently for positive and negative values.
- Sort bars when ranking is important.
- Avoid truncating the axis around zero.
- Label the reference value clearly if it is not zero.

## Summary

Diverging bar charts are ideal for data with a meaningful center. They make contrast and deviation easy to read, especially when color and ordering are handled carefully.
