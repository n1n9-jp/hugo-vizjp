+++
author = "Yuichi Yazaki"
title = "Continuous Cartogram"
slug = "continuous-cartogram"
date = "2026-03-28"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A continuous cartogram distorts geographic areas in proportion to a data variable while preserving adjacency, or topology. Regions expand or shrink according to values such as population or GDP, producing a map that looks as if a rubber sheet has been stretched. Neighboring regions remain connected, and borders do not break apart.

<!--more-->

## Historical Background

Cartograms have a long history in thematic cartography, but continuous cartograms became more practical as computational methods improved. The core problem is difficult: change the area of each region to match a value while keeping the map connected and recognizable.

Different algorithms have been proposed to solve this trade-off. Some simulate physical diffusion or rubber-sheet deformation; others optimize geometry to balance area accuracy and shape preservation. The result is always a compromise between statistical accuracy and geographic recognizability.

## Data Structure

| Data | Description | Example |
|---|---|---|
| Boundary geometry | Polygon shapes for each region | Country or prefecture boundaries |
| Region identifier | Key linking geometry and data | ISO code, prefecture code |
| Statistical value | Variable used to determine area | Population, GDP, emissions |
| Optional attributes | Values used for color or labeling | Region group, rate, category |

Unlike gridded or Dorling cartograms, a continuous cartogram requires polygon geometry because the shape of the map itself is transformed.

## Purpose

The main purpose is to make a map's visual area correspond to a meaningful data value rather than land area. This is useful when land area is misleading. A population cartogram, for example, enlarges densely populated regions and shrinks sparsely populated ones, making the visual map better match where people actually live.

## Use Cases

- Population cartograms
- GDP or economic output by country
- Election maps weighted by population or electorate
- Disease burden by region
- Carbon emissions and energy consumption
- Trade or migration comparisons

## Characteristics

- Area can represent quantitative values directly.
- Topological relationships are preserved.
- Shapes can become distorted and unfamiliar.
- Small regions may still be hard to label.
- Algorithm choice affects both accuracy and readability.

## How to Read It

Read the area of each region as the encoded value. A large-looking region is not necessarily geographically large; it has a large value in the chosen data variable.

Because the map remains connected, neighboring relationships are still meaningful. However, distances, angles, and shapes are no longer geographically accurate. Use the legend and title to confirm what variable controls the distortion.

## Design Notes

- State clearly which variable controls area.
- Add labels or reference outlines when distortion makes regions hard to identify.
- Avoid mixing area distortion with a confusing color scale.
- Use color for a different but related variable only when the relationship is important.
- Consider whether the audience can still recognize the geography after distortion.

## Alternatives

- **Pseudo-continuous cartogram**: Uses circles or squares sized by value.
- **Non-contiguous cartogram**: Scales regions independently while preserving shape.
- **Gridded cartogram**: Gives regions equal size and uses color for data.
- **Choropleth map**: Preserves geographic shape but is affected by area bias.

## Summary

Continuous cartograms are powerful when the map should show the geography of a phenomenon rather than the geography of land. They preserve adjacency while reshaping area to match data, but their effectiveness depends on whether readers can still understand the distorted geography.
