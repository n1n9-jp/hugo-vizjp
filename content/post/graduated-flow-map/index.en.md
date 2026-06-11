+++
author = "Yuichi Yazaki"
title = "Graduated Flow Map"
slug = "graduated-flow-map"
date = "2026-03-25"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A graduated flow map represents flows between locations by assigning line widths to discrete classes rather than scaling them continuously. For example, flows may be shown as thin, medium, and thick lines. This reduces visual complexity while still communicating the approximate magnitude of movement, especially when values span a very wide range.

<!--more-->

## Historical Background

Flow maps date back to the nineteenth century, especially the work of Charles Joseph Minard. The graduated flow map applies the cartographic idea of classification to flow width, just as choropleth maps classify values into color ranges.

As GIS made it easier to draw hundreds or thousands of flows, graduated widths became a practical way to keep maps readable.

## Data Structure

| Data | Role |
|---|---|
| Origin and destination | Define the flow |
| Flow value | Assigned to a class |
| Classification rule | Equal interval, quantile, natural breaks, or manual |
| Line style | Width used for each class |
| Category | Optional color or line type |

## Purpose

The purpose is to show relative flow magnitude without making every small numeric difference visible. It is useful when the reader needs to understand broad levels rather than exact values.

## Use Cases

- Regional migration categories
- Transportation volume classes
- Trade intensity groups
- Commuting flows with broad bands
- Network flow maps for reports or print

## Design Notes

- Explain the class breaks.
- Keep the number of width classes small.
- Use a legend with representative values.
- Consider graduated flow when proportional width would create extreme line differences.
- Avoid class breaks that hide important thresholds.

## Summary

Graduated flow maps trade numeric precision for readability. They are especially useful for dense or wide-ranging flow data where continuous proportional widths would make the map difficult to read.
