+++
author = "Yuichi Yazaki"
title = "Space-Time Cube"
slug = "space-time-cube"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A space-time cube integrates time and geographic space in a three-dimensional visual form. The X and Y axes represent location, while the Z-axis represents time. This makes it possible to see spatial and temporal change together.

<!--more-->

## Historical Background

The concept is rooted in time geography, developed by Swedish geographer Torsten Hagerstrand in the 1960s. His ideas about space-time prisms showed how human activity is constrained by both space and time. Later GIS and 3D visualization tools made space-time cubes practical.

## Data Structure

| Data | Role |
|---|---|
| X/Y location | Geographic position |
| Time | Vertical axis |
| Event or path | Point, line, or trajectory |
| Attribute | Color, size, or annotation |

## Design Notes

- Use interaction or multiple views for readability.
- Clarify the time direction.
- Avoid clutter from too many trajectories.
- Provide 2D map and timeline references when needed.

## Summary

Space-time cubes are useful when spatial and temporal patterns must be understood together. They are powerful but often require interaction to read well.
