+++
author = "Yuichi Yazaki"
title = "Histogram"
slug = "histogram"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A histogram visualizes the distribution of numeric data. The value range is divided into continuous intervals, or bins, and each bar shows how many observations fall into that bin. Because histograms show continuous distributions, bars usually touch one another.

<!--more-->

## Historical Background

Karl Pearson introduced the term "histogram" in 1895. The visual idea belongs to the broader history of statistical graphics, but Pearson helped establish the term and its theoretical role in statistics.

## How to Read It

Look at the shape of the bars: peaks, spread, skewness, gaps, and outliers. The bin width affects the appearance, so a histogram should be interpreted with that choice in mind.

## Design Notes

- Choose bin width carefully.
- Do not use gaps between bars for continuous data.
- Label units and axes.
- Consider density plots for smoother distribution views.

## Summary

Histograms are fundamental for understanding numeric distributions. They are simple, but binning choices strongly affect what readers see.
