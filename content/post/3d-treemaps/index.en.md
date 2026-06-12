+++
author = "Yuichi Yazaki"
title = "3D Treemaps"
slug = "3d-treemaps"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

3D treemaps extend ordinary treemaps into three-dimensional space. Rectangular areas represent hierarchical categories, while height encodes an additional quantitative variable. This extrusion-based form can show area and height together.

<!--more-->

## Historical Background

Treemaps were introduced by Ben Shneiderman in 1990 for visualizing file system disk usage. Later research explored 3D extensions as computer graphics tools improved.

## Design Notes

- Use 3D only when height adds meaningful information.
- Watch for occlusion and perspective distortion.
- Provide interaction or alternative 2D views.
- Avoid using height and color redundantly without explanation.

## Summary

3D treemaps can add another variable to hierarchical area charts, but they are harder to read precisely than 2D treemaps. They require careful camera and interaction design.
