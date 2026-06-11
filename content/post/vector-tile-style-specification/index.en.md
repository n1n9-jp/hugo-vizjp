+++
author = "Yuichi Yazaki"
title = "Vector Tile Style Specifications: Comparing Mapbox, MapLibre, and GSI"
slug = "vector-tile-style-specification"
date = "2025-10-17"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

"Style JSON" files that define map design developed around the Mapbox Style Specification. Today, related specifications include the open-source MapLibre Style Specification and the Geospatial Information Authority of Japan's GSI Maps Vector style specification. This article compares them using Mapbox as the baseline.

<!--more-->

## Historical Background

The modern style JSON format originated with Mapbox's Mapbox Style Specification in the mid-2010s. It appeared alongside Mapbox GL JS and became a de facto standard for dynamic WebGL-based map rendering.

After Mapbox GL JS v2 changed licensing, the MapLibre project forked Mapbox GL JS v1 and continued open-source development. In Japan, the Geospatial Information Authority of Japan (GSI) also created a related style format for GSI Maps Vector.

## Main Timeline

| Year | Event |
|---|---|
| 2013 | Mapbox introduced vector tile technology in products such as Mapbox Streets. |
| 2014 | Mapbox announced Mapbox GL and style JSON-based rendering. |
| 2019 | GSI released a trial version of GSI Maps Vector. |
| 2020 | GSI began nationwide vector data provision. |
| 2020 | Mapbox GL JS v2 moved away from the previous open-source license. |
| 2021 | MapLibre was launched as an open-source fork of Mapbox GL JS v1. |

## Mapbox Style and GSI Style

| Aspect | Mapbox Style Specification | GSI Maps Vector Style | Notes |
|---|---|---|---|
| Basic structure | JSON with `version`, `sources`, `layers`, `sprite`, `glyphs` | JSON-like hierarchy with `group`, `directory`, `item`, `layer`, `draw` | GSI adds hierarchical grouping |
| Layers | Listed in a `layers` array | Layers are grouped under UI-oriented structures | GSI aligns with its map interface |
| Layer types | `fill`, `line`, `symbol`, `circle`, `raster`, `background`, etc. | Similar basic draw types | 3D support is more limited |
| Paint properties | `paint` and `layout` | Properties under `draw` such as color and weight | GSI simplifies many definitions |
| Filters | Mapbox expressions | Similar but more limited | Compatibility varies |
| Draw order | Array order | `zIndex` | GSI uses explicit numeric ordering |
| Extensions | None in the baseline | `additional-filter`, `blend`, `editZIndex`, etc. | Optimized for Japanese administrative map needs |

## Mapbox Style and MapLibre Style

| Aspect | Mapbox Style Specification | MapLibre Style Specification |
|---|---|---|
| Structure | `version`, `sources`, `layers`, `sprite`, `glyphs` | Same basic structure |
| Purpose | Mapbox commercial platform | Open-source compatible implementation |
| Compatibility | Follows Mapbox's platform direction | Preserves compatibility from the v1 fork |
| Governance | Mapbox-led | Community-led under MapLibre |
| Expressions | Advanced expression syntax | Largely compatible expression syntax |
| 3D features | Includes features such as terrain, sky, and fog | Support depends on implementation progress |
| License context | Mapbox commercial ecosystem | BSD-style open-source ecosystem |

## Summary

GSI style extends the Mapbox-influenced structure for Japanese administrative and cartographic needs, including hatching and hierarchical UI grouping. MapLibre style preserves a Mapbox-compatible open-source path. All three are related, but they serve different institutional and technical goals.

## References

- [Mapbox Style Specification](https://docs.mapbox.com/style-spec/)
- [Introducing Mapbox GL](https://blog.mapbox.com/introducing-mapbox-gl-7a1f4e960e16)
- [MapLibre Style Spec](https://www.maplibre.org/maplibre-style-spec/)
- [GSI Maps Vector style specification (PDF)](https://maps.gsi.go.jp/help/pdf/vector/stylespec.pdf)
- [GSI vector tile development](https://maps.gsi.go.jp/development/vt.html)
- [Our Thoughts as MapboxGL JS v2 Goes Proprietary](https://carto.com/blog/our-thoughts-as-mapboxgl-js-2-goes-proprietary)
