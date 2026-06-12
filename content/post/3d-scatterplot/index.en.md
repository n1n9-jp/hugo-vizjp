+++
author = "Yuichi Yazaki"
title = "3D Scatterplot"
slug = "3d-scatterplot"
date = "2025-10-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A 3D scatterplot places points in three-dimensional space using X, Y, and Z axes to represent three numeric variables. It extends the ordinary two-dimensional scatterplot by adding depth. Interactive rotation and zoom can help reveal clusters or structures that are hard to see from a single view.

<!--more-->

## Historical Background

Scatterplots became standard with the development of statistics. Practical 3D scatterplots became common only after computer graphics and interactive statistical software matured in the late twentieth century. Today they are supported by tools such as Matplotlib, Plotly, R, Tableau, and WebGL-based libraries.

## Data Structure

| Data | Role |
|---|---|
| X value | Horizontal position |
| Y value | Vertical position |
| Z value | Depth or height |
| Optional category | Color or symbol |

## Design Notes

- Use interaction when possible.
- Be careful with occlusion and perspective distortion.
- Provide 2D projections or slices for precise reading.
- Avoid using 3D when a 2D scatterplot or matrix is clearer.

## Summary

3D scatterplots can reveal multidimensional structure, but they are harder to read precisely than 2D views. They work best in interactive contexts.
