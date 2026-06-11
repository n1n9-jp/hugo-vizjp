+++
author = "Yuichi Yazaki"
title = "3D Yield Curve"
slug = "3d-yield-curve"
date = "2026-03-15"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A 3D yield curve visualizes changes in bond yield curves over time as a three-dimensional surface. The X-axis represents maturity, the Y-axis represents time, and the Z-axis represents yield. By connecting yield curves from many dates, the chart shows how the term structure of interest rates has evolved.

<!--more-->

## Historical Background

Yield curves are a standard tool in finance. A two-dimensional yield curve shows interest rates across maturities at one point in time. Analysts have long compared multiple curves to understand changes in monetary policy, inflation expectations, recession signals, and market stress.

The 3D yield curve adds time as an explicit dimension. Instead of comparing several selected lines, it creates a surface that reveals the history of the curve's shape: steepening, flattening, inversion, and regime shifts.

## Data Structure

| Data | Description |
|---|---|
| Date | Observation date |
| Maturity | Term to maturity, such as 3 months, 2 years, or 10 years |
| Yield | Interest rate for that maturity and date |
| Optional metadata | Country, bond type, source, or policy regime |

The data is typically a date-by-maturity matrix. Missing maturities may require interpolation.

## Purpose

The purpose is to show how an entire yield curve changes over time. A single curve can show one moment, and a line chart can show one maturity over time, but the 3D surface can show both dimensions together.

## Use Cases

- Treasury yield curve history
- Comparison of policy regimes
- Recession and inversion analysis
- Educational explanations of term structure
- Financial dashboards for interest-rate markets

## Characteristics

- It reveals the overall shape of the yield curve through time.
- It makes inversions and steepening visually salient.
- It can suffer from occlusion and perspective distortion.
- Exact values are harder to read than in 2D charts.
- Interactive rotation or slicing can improve usability.

## How to Read It

Look along the maturity axis to understand the shape of the yield curve at one date. Look along the time axis to see how that shape changes. Ridges, valleys, and surface color can reveal periods of high or low rates.

If the short end is higher than the long end, the surface shows an inverted yield curve. If long maturities rise far above short maturities, the curve is steep.

## Design Notes

- Use color carefully to support height, not replace it.
- Provide 2D slices or tooltips for exact reading.
- Avoid extreme perspective that hides important areas.
- Label maturity and date axes clearly.
- Consider small multiples when comparison is more important than surface form.

## Alternatives

- Multiple 2D yield curves
- Heatmap of yield by date and maturity
- Line chart of selected maturities
- Animated yield curve over time

## Summary

The 3D yield curve is useful for seeing the evolution of interest-rate term structure as a shape over time. It is visually powerful, but exact analysis usually benefits from accompanying 2D views or interactive inspection.
