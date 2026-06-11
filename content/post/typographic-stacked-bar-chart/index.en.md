+++
author = "Yuichi Yazaki"
title = "Typographic Stacked Bar Chart"
slug = "typographic-stacked-bar-chart"
date = "2026-03-22"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A typographic stacked bar chart adds data-bearing typography to the labels inside a stacked bar chart. Font weight, size, case, italic style, color, and other text attributes encode dimensions that position and area alone cannot show. Based on ideas discussed in Richard Brath's *Visualizing with Text*, the method treats text as a visual mark, not merely as annotation.

<!--more-->

## Historical Background

Stacked bar charts grew from the broader history of bar charts after William Playfair's work in the late eighteenth century. They became a common way to show both totals and composition.

Typographic encoding adds another layer to this familiar structure. By mapping values to text attributes, the labels inside segments can communicate additional variables such as emphasis, confidence, growth, or category.

## Data Structure

| Data | Role |
|---|---|
| Bar category | Main grouping |
| Segment category | Parts within each bar |
| Segment value | Determines segment length |
| Label text | Displayed inside or near segment |
| Typographic variables | Encode additional data |

## Purpose

The purpose is to add information density while keeping the stacked bar structure. It is useful when labels are already necessary and can be designed to carry more meaning.

## Design Notes

- Keep labels readable in small segments.
- Do not encode too many variables through typography.
- Use a clear legend for font-based encodings.
- Avoid making the chart look like arbitrary styling.
- Consider whether a separate chart would be clearer.

## Summary

Typographic stacked bar charts can communicate composition and extra label-level variables in one view. They work best when the number of segments is limited and the typographic mapping is simple.
