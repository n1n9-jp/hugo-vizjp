+++
author = "Yuichi Yazaki"
title = "100% Stacked Bar Chart"
slug = "100-percent-stacked-bar-chart"
date = "2026-03-10"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A 100% stacked bar chart normalizes every bar to the same total length and compares the proportion of subgroups within each whole. Because each bar adds up to 100%, the chart focuses on composition rather than absolute amount.

It is useful when the question is about share: sales composition by year, energy source mix by region, or response distribution by group.

<!--more-->

## Historical Background

The 100% stacked bar chart is a variation of the stacked bar chart. It emerged from the broader use of bar charts and statistical graphics as analysts needed to compare proportions rather than raw totals.

## Data Structure

| Data | Role |
|---|---|
| Main category | One normalized bar |
| Subcategory | Segment inside the bar |
| Value | Converted to a percentage of the bar total |
| Color | Identifies subcategories |

## Purpose

The purpose is to compare composition across groups while removing differences in total size. All bars have the same length, so the reader focuses on the internal proportions.

## Use Cases

- Market share by year
- Survey response distribution by group
- Energy mix by country
- Budget composition by department
- Device or platform share over time

## Design Notes

- Use this chart only when proportions are the main question.
- Do not use it when absolute totals matter.
- Keep the number of segments limited.
- Put the most important segment at a common baseline when possible.
- Use clear labels or tooltips for small segments.

## Summary

100% stacked bar charts are strong for comparing composition, but they hide total size. They should be used when share matters more than amount.
