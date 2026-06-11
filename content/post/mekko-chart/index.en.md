+++
author = "Yuichi Yazaki"
title = "Mekko Chart"
slug = "mekko-chart"
date = "2026-03-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A Mekko chart encodes data in both the width and height of rectangular segments. It is also called a Marimekko chart, after the Finnish textile brand whose geometric patterns it resembles. Width often represents an overall category size, while the vertical divisions represent composition within that category.

In statistics, it is closely related to the mosaic plot, and it is useful for showing the relationship between categorical variables and segment scale at the same time.

<!--more-->

## Historical Background

The academic origin of Mekko charts is linked to mosaic plots. Hartigan and Kleiner introduced mosaic plots in the early 1980s as a way to visualize cross-tabulated categorical data through rectangular areas.

Business use later popularized the Mekko chart for market structure, portfolio analysis, and strategy presentations.

## Data Structure

| Data | Role |
|---|---|
| Main category | Determines bar width |
| Subcategory | Determines segments within each bar |
| Value | Determines area |
| Optional color | Encodes subcategory or grouping |

## Purpose

The purpose is to show both total size and composition in one chart. It answers questions such as: which category is largest, and what is each category made of?

## Use Cases

- Market share by segment
- Product portfolio composition
- Revenue by region and product line
- Cross-tabulated survey results
- Business strategy presentations

## Design Notes

- Use clear labels because both width and height matter.
- Avoid too many categories or small segments.
- Make the area encoding explicit.
- Consider a stacked bar chart if equal-width comparison is more important.

## Summary

Mekko charts are useful when both total category size and internal composition matter. They are information-dense, but they require careful labeling and restraint to remain readable.
