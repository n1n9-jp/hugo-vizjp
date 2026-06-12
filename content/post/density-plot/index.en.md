+++
author = "Yuichi Yazaki"
title = "Density Plot"
slug = "density-plot"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A density plot shows the distribution of a continuous variable as a smooth curve. Instead of using histogram bins, it estimates a probability density function, often with kernel density estimation.

<!--more-->

## Purpose

Density plots are useful for comparing distribution shapes, including peaks, spread, skewness, and overlap between groups.

## Design Notes

- Choose bandwidth carefully.
- Explain that the curve is an estimate.
- Use transparency when comparing multiple groups.
- Consider histograms when raw counts are important.

## Summary

Density plots provide a smooth view of distribution. They are useful for comparison, but their appearance depends on the estimation method and bandwidth.
