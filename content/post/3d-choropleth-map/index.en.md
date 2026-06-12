+++
author = "Yuichi Yazaki"
title = "3D Choropleth Map"
slug = "3d-choropleth-map"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A 3D choropleth map extends a choropleth map by using both color and height to represent values for geographic areas. Each region may be extruded into a prism whose height corresponds to a statistic such as population density or income.

<!--more-->

## Historical Background

Choropleth maps date back to early nineteenth-century statistical cartography. Three-dimensional extrusion became common with modern GIS, WebGL, and tools such as ArcGIS, Mapbox, deck.gl, and Kepler.gl.

## Design Notes

- Use with caution because perspective can mislead.
- Avoid hiding small or low regions behind tall ones.
- Provide interaction and 2D alternatives.
- Clarify whether height, color, or both encode the value.

## Summary

3D choropleth maps can be visually impactful, but they introduce occlusion and viewpoint dependency. They are best used when spatial extrusion supports exploration rather than replacing careful comparison.
