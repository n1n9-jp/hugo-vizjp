+++
author = "Yuichi Yazaki"
title = "Isopleth Map"
slug = "isopleths-map"
date = "2025-12-10"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

An isopleth map is a thematic map that represents the distribution of a continuous quantity by coloring areas bounded by lines of equal value. Observation points are interpolated into a continuous surface, and zones between equal-value boundaries are filled with color or shading. It is useful for seeing phenomena such as temperature, humidity, air pollution, and population density as spatial fields.

<!--more-->

## Historical Background

The term "isopleth" is associated with a classification proposed by John K. Wright in 1944. Wright distinguished lines connecting directly measurable point values from lines representing values such as ratios or densities that are derived for areas. This distinction helped formalize contour-based thematic mapping.

From the 1960s onward, computer-based interpolation made it easier to extract isolines and fill the resulting areas. With the spread of GIS in the 1990s, isopleth maps became standard in meteorology, environmental monitoring, and spatial analysis.

## Data Structure

| Data element | Description | Example |
|---|---|---|
| Observation coordinates | Locations of measurement points | Weather stations, air-quality monitors |
| Observed value | Numeric value at each point | Temperature, PM2.5, population density |
| Interpolation method | Algorithm for estimating the surface | Kriging, IDW, spline |
| Classification method | How value ranges are divided | Equal interval, quantile, Jenks |
| Color scheme | Colors assigned to classes | Sequential gradient, stepped palette |

## Purpose

The purpose is to communicate the spatial spread and intensity of a continuous variable through color-filled areas. Compared with an isoline map, which uses only lines, an isopleth map gives a stronger visual impression of high and low regions.

## Use Cases

- Weather maps for temperature, humidity, and wind speed
- Air-pollution maps for PM2.5, ozone, or NO2
- Urban heat-island analysis
- Ocean maps for sea surface temperature and salinity
- Noise or radiation exposure mapping

## Characteristics

| Aspect | Description |
|---|---|
| Target | Spatially continuous quantities |
| Input | Discrete observation points plus interpolation |
| Representation | Colored areas bounded by equal-value lines |
| Strength | Makes broad distribution patterns easy to see |
| Weakness | Depends heavily on interpolation and classification |
| Tools | ArcGIS, QGIS, Python, R |

## How to Read It

First check the legend to understand the color order and units. Then note how the classes were created, because equal intervals, quantiles, and natural breaks can produce different impressions from the same data.

Remember that the map may show estimated values, not direct observations, especially in areas far from measurement points. If possible, inspect the observation locations as well.

## Design Notes

- Use a sequential palette for one-directional values and a diverging palette when there is a meaningful midpoint.
- State the classification method and number of classes.
- Use color-vision-friendly palettes.
- Include units, interpolation method, data source, and uncertainty notes.
- Keep area boundaries subtle so color remains the main signal.

## Alternatives

| Method | Feature | Suitable when |
|---|---|---|
| Isoline map | Shows equal-value lines only | You need to read gradients or structure precisely |
| Heat map | Colors pixels continuously | A smoother surface is desired |
| Choropleth map | Colors administrative areas | The purpose is administrative comparison |
| Raster map | Uses grid cells | Resolution should be explicit |

## Summary

Isopleth maps are useful for showing continuous spatial phenomena as colored surfaces. They are common in weather, environmental, and urban analysis, but their credibility depends on appropriate interpolation and classification.

## References

```
- [Contour line - Wikipedia](https://en.wikipedia.org/wiki/Contour_line)
- [Isarithmic map - Wikipedia](https://en.wikipedia.org/wiki/Isarithmic_map)
```
