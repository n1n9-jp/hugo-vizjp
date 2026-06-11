+++
author = "Yuichi Yazaki"
title = "Gridded Cartogram"
slug = "gridded-cartogram"
date = "2026-03-31"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A gridded cartogram represents each region as an equally sized grid cell, such as a square or hexagon, while roughly preserving geographic arrangement. It is also known as a mosaic cartogram, tile grid map, or grid map. Because every region receives the same visual area, small regions are not visually suppressed by large geographic areas.

<!--more-->

## Historical Background

The gridded cartogram is not tied to a single inventor or paper, but it became especially visible in data journalism and web visualization during the 2010s.

In the United States, tile grid maps representing the 50 states as equal squares became common in election coverage by outlets such as FiveThirtyEight, NPR, and Bloomberg. They helped address a familiar problem: large states such as Alaska, Montana, and Texas dominate ordinary maps, while smaller but often politically important states on the East Coast can nearly disappear.

Similar designs have been used for EU member states, and in Japan for the 47 prefectures. Recent research has also explored algorithms that automatically optimize grid layouts while preserving geographic relationships as much as possible.

## Data Structure

The required data is simple compared with many other cartogram types.

| Data | Description | Example |
|---|---|---|
| Region identifier | Code or name for each region | State code, prefecture code |
| Grid coordinate | Row and column position | `(row, col)` |
| Statistical value | Value encoded by color | Population density, turnout, infection rate |
| Category | Optional value for color grouping | Party, region group |
| Label | Text shown inside the cell | CA, NY, Tokyo, Osaka |

Boundary polygons are not required. The core input is a layout table that assigns each region to a grid position. This layout is often designed manually, although automatic layout methods also exist.

## Purpose

The main purpose is to remove the visual bias caused by geographic area. On an ordinary map or choropleth, large territories dominate perception and small territories are easy to miss. A gridded cartogram solves this by giving each region one equal cell. Data values are then represented primarily through color, much like a choropleth map.

## Use Cases

- State-level election results in the United States
- Prefecture-level statistics in Japan
- Policy comparisons across EU member states
- Country-level indicators such as vaccination rates or education levels
- Small multiples showing regional change over time
- Sports league comparisons arranged by home location

## Characteristics

- Every region has equal visual weight.
- Geographic arrangement is approximate, not exact.
- Data cannot be encoded by area because all cells have the same size.
- The technique is easy to implement on the web with tables, CSS Grid, or SVG.
- Designing a readable layout can be time-consuming when there are many regions.

## How to Read It

Each cell represents one region. Since the cells are equal in size, do not interpret area as magnitude. Read values through color and use the legend to understand the scale or category.

The layout usually preserves a rough north-south and east-west relationship, but adjacency in the grid does not necessarily mean actual geographic adjacency. Labels are therefore important for identifying each region.

## Design Notes

- Design the layout so readers can infer approximate location.
- Add clear labels because shape no longer identifies the region.
- Use accessible color schemes, such as ColorBrewer palettes.
- Choose squares or hexagons according to the number of regions and layout constraints.
- Avoid overloading cells with too many small marks.
- Explain the layout logic when the arrangement may not be obvious.

## Alternatives

- **Continuous cartogram**: Distorts area in proportion to data while maintaining topology.
- **Non-contiguous cartogram**: Scales each region independently while preserving shape.
- **Pseudo-continuous cartogram**: Replaces regions with circles, squares, or other geometric marks sized by data.
- **Choropleth map**: Uses true geographic shapes and encodes values by color, but area bias remains.

## Summary

Gridded cartograms are effective when the goal is to compare regions fairly without letting geographic size dominate perception. They are especially useful in journalism and interactive visualization because they are simple, compact, and easy to scan, provided that the layout and labels are carefully designed.

## References

```
- [Cartogram - Wikipedia](https://en.wikipedia.org/wiki/Cartogram)
```
