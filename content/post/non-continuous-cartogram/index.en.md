+++
author = "Yuichi Yazaki"
title = "Non-Continuous Cartogram"
slug = "non-continuous-cartogram"
date = "2026-03-29"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A non-continuous cartogram scales each region independently in proportion to a data variable while preserving the original shape of that region. Because each region is usually scaled around its centroid, gaps appear between regions and adjacency is not preserved. The advantage is that individual regions remain recognizable, unlike in many continuous cartograms where shapes are heavily distorted.

<!--more-->

## Historical Background

Non-continuous cartograms were proposed by Judy Olson in 1976 as an alternative to continuous cartograms. Olson focused on the difficulty readers face when regions are distorted so much that they are no longer recognizable. By scaling each region independently, the method makes calculation easier and the result more intuitive.

This approach made the trade-off explicit: lose topological continuity in exchange for shape fidelity and simpler interpretation.

## Data Structure

| Data | Role |
|---|---|
| Region geometry | Original polygon shape to be scaled |
| Region identifier | Key for joining geometry and data |
| Statistical value | Determines the scaled area |
| Centroid or anchor point | Center around which the region is scaled |
| Optional category | Used for color or grouping |

## Purpose

The purpose is to compare values through area while keeping the recognizability of each region. It is useful when the exact shape of a country, state, or prefecture matters, but geographic adjacency is less important.

## Use Cases

- Population or GDP by country
- Election results by state or prefecture
- Regional production or resource comparisons
- Public health burden by administrative area

## Characteristics

- Region shapes are preserved.
- Areas encode values.
- Adjacency and shared borders are lost.
- Gaps between regions are part of the design.
- The method is easier to generate than many continuous cartograms.

## Design Notes

- Make clear which variable controls area.
- Use labels because regions move apart visually.
- Keep a reference outline or original map nearby if recognition is difficult.
- Avoid using the map for distance or adjacency interpretation.

## Summary

Non-continuous cartograms are effective when shape recognition and area comparison matter more than adjacency. They provide a simpler and often more readable alternative to continuous cartograms, but the reader must understand that the geography has been separated into independently scaled pieces.
