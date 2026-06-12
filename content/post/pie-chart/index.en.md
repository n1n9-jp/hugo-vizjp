+++
author = "Yuichi Yazaki"
title = "Pie Chart"
slug = "pie-chart"
date = "2025-10-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A pie chart represents parts of a whole as slices of a circle. The whole is treated as 100% or 1, and each category's share is shown by the angle and area of its slice. Pie charts are intuitive for simple composition, but they are not very precise for comparison.

<!--more-->

## Historical Background

The pie chart was introduced by Scottish political economist William Playfair in 1801 in *Statistical Breviary*. Florence Nightingale and other reformers later helped popularize circular statistical graphics.

## Data Structure

| Data | Role |
|---|---|
| Category | One slice |
| Value | Slice angle and area |
| Total | Sum of all slices |

## Purpose

The purpose is to show a simple part-to-whole relationship. It works best when there are only a few categories and one or two slices are clearly dominant.

## Design Notes

- Avoid too many slices.
- Do not use pie charts for precise ranking.
- Label values directly when possible.
- Avoid 3D or exploded effects.
- Consider a bar chart when comparison matters.

## Summary

Pie charts are familiar and useful for simple composition, but they should be used carefully. They communicate "share of whole" well, but they are weak for precise comparison among similar values.
