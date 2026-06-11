+++
author = "Yuichi Yazaki"
title = "Pseudo-Continuous Cartogram"
slug = "pseudo-continuous-cartogram"
date = "2026-03-30"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A pseudo-continuous cartogram replaces geographic regions with geometric shapes such as circles, squares, or hexagons, and sizes those shapes in proportion to a data variable. Dorling cartograms and Demers cartograms are representative examples. By discarding the exact shape of each region, the method makes quantitative comparison easier while still roughly preserving geographic position.

<!--more-->

## Historical Background

The best-known pseudo-continuous cartogram is the Dorling cartogram, proposed by British geographer Daniel Dorling in 1996. Dorling addressed the limitations of continuous cartograms, which distort shapes, and non-contiguous cartograms, which break adjacency, by taking a different route: replace each region with a simple circle.

In a Dorling cartogram, each region is represented by a circle whose area is proportional to the value. A force-directed layout adjusts positions so circles do not overlap while remaining as close as possible to their original geographic locations.

The Demers cartogram later introduced a square-based variant. Squares can produce a more orderly appearance and make labeling easier. Hexagonal variations have also appeared, expanding the range of possible geometric marks.

## Data Structure

| Data | Description | Example |
|---|---|---|
| Region identifier | Code or name for each region | ISO code, prefecture code |
| Centroid | Representative position used for initial placement | Latitude and longitude |
| Statistical value | Numeric value that determines area | Population, GDP, medal count |
| Category | Optional variable for color | Party, region, group |

Boundary polygons are not strictly required. Centroids and values are enough to generate a basic version, although boundary information can improve layout quality.

## Purpose

The purpose is to preserve geographic context while making quantitative comparison clearer. Complex regional shapes often make area comparison difficult. By replacing all regions with the same type of mark, such as a circle, the reader can compare size more directly.

This is also useful when boundaries are visually complicated or when the exact outline is less important than relative magnitude.

## Use Cases

- Olympic medal counts by country
- Population or GDP comparisons by country
- Election results by state or district
- Infectious disease case counts by region
- Industrial output by prefecture
- Branch counts or sales by market area

## Characteristics

- Area can encode a quantitative value.
- Geographic position is approximate but recognizable.
- Original shapes and exact adjacencies are lost.
- Overlap avoidance and layout algorithms strongly affect readability.
- Circles support smooth comparison; squares can support tighter packing and labeling.

## How to Read It

Read the size of each circle, square, or hexagon as the data value. Because humans often misread area, the legend should include reference sizes. Color may encode categories or another quantitative measure.

The position of each mark indicates approximate location, not exact geography. If two marks are near one another, that suggests a geographic relationship, but the final layout may be shifted to avoid overlap.

## Design Notes

- Scale mark area, not diameter, to the data value.
- Include a size legend with meaningful reference values.
- Keep labels readable and avoid excessive overlap.
- Use restrained color so size remains legible.
- Explain that the geography is schematic.

## Alternatives

- **Continuous cartogram**: Preserves topology but distorts the entire map.
- **Non-contiguous cartogram**: Preserves region shape while scaling each region independently.
- **Gridded cartogram**: Gives every region equal size and encodes values by color.
- **Proportional symbol map**: Places scaled symbols on a normal map rather than replacing regions.

## Summary

Pseudo-continuous cartograms are useful when relative magnitude matters more than exact geographic form. By replacing regions with comparable geometric marks, they make values easier to compare while retaining enough spatial arrangement for readers to recognize the geography.
