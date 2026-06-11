+++
author = "Yuichi Yazaki"
title = "Stacked Bar Chart"
slug = "stacked-bar-chart"
date = "2026-03-09"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A stacked bar chart divides each bar into multiple segments, allowing the viewer to see both the total value and the composition of that total. Each segment length represents an individual value, while the full bar length represents the sum.

It is widely used for part-to-whole comparisons where both total amount and internal breakdown matter.

<!--more-->

## Historical Background

Stacked bar charts developed naturally from the bar chart tradition after William Playfair introduced bar charts in the late eighteenth century. As social statistics and business reporting expanded, charts needed to show both totals and components.

## Data Structure

| Data | Role |
|---|---|
| Main category | One bar |
| Subcategory | Segment within the bar |
| Value | Segment length |
| Color | Identifies subcategories |

## Purpose

The purpose is to compare totals while also showing composition. It answers: how large is each group, and what is it made of?

## Use Cases

- Revenue by business unit and product
- Population by region and age group
- Budget by department and expense category
- Survey responses by group

## Design Notes

- Segment comparisons are easiest at the shared baseline.
- Avoid too many segments.
- Use consistent segment order across bars.
- Consider a grouped bar chart when comparing subcategories is more important than totals.
- Consider a 100% stacked bar chart when proportions matter more than totals.

## Summary

Stacked bar charts combine total comparison and composition in one view. They are useful, but segment-level comparison becomes difficult when many colors and categories are involved.
