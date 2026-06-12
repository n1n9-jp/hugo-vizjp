+++
author = "Yuichi Yazaki"
title = "Line Chart"
slug = "line-chart"
date = "2025-10-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A line chart connects points with lines to show numerical change. It is most often used for time series, with time or ordered sequence on the X-axis and quantity on the Y-axis. It makes trends, increases, decreases, cycles, and turning points easy to see.

<!--more-->

## Historical Background

Line charts date back to the late eighteenth century. William Playfair used line charts in *The Commercial and Political Atlas* in 1786 to show trade data over time. Since then, line charts have become one of the most universal forms in science, government, journalism, and business.

## Data Structure

| Data | Role |
|---|---|
| Time or sequence | X-axis |
| Numeric value | Y-axis |
| Series | Optional multiple lines |

## Purpose

The purpose is to show change over ordered values, especially time. Line charts are strongest when the continuity or trajectory between points matters.

## Design Notes

- Use line charts for ordered or continuous X-values.
- Do not connect unrelated categories.
- Label axes and units clearly.
- Use direct labels when multiple lines are present.
- Avoid too many overlapping series.

## Summary

Line charts are the standard chart for showing change over time. Their strength is continuity: they let readers see direction, slope, and pattern at a glance.
