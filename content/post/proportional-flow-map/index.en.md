+++
author = "Yuichi Yazaki"
title = "Proportional Flow Map"
slug = "proportional-flow-map"
date = "2026-03-26"
categories = [
    "chart"
]
tags = [
    "地図",
]
image = "images/thumb_ph_vizjp.png"
+++

A proportional flow map represents movement between locations by varying line width continuously in proportion to a data value. Migration, trade volume, traffic, and other quantitative flows can be read through the width of the connecting bands. Charles Joseph Minard's 1869 map of Napoleon's Russian campaign is one of the most famous examples.

<!--more-->

## Historical Background

The history of proportional flow maps is closely tied to Minard, a French civil engineer. From around 1845, Minard created maps showing freight movement, population movement, trade, and military campaigns with bands whose widths represented quantity.

His map of Napoleon's 1812-1813 campaign shows the shrinking size of the army as a proportional band, while also integrating direction, geography, and temperature. Edward Tufte later praised it as one of the finest statistical graphics ever made.

## Data Structure

| Data | Role |
|---|---|
| Origin | Starting location |
| Destination | Ending location |
| Flow value | Determines line width |
| Route geometry | Straight or curved path |
| Category | Optional color or grouping |

## Purpose

The purpose is to communicate not only where flows go, but also how large each flow is. Continuous width scaling supports more accurate comparison than a purely categorical line symbol.

## Use Cases

- Migration between regions
- Trade flows between countries
- Freight and logistics routes
- Commuting patterns
- River or energy flows
- Historical movement narratives

## Design Notes

- Scale width carefully so large flows do not overwhelm the map.
- Use transparency or bundling when many flows overlap.
- Clarify whether width represents absolute value, rate, or volume.
- Avoid too many crossing lines.
- Use arrows only when direction is not otherwise clear.

## Summary

Proportional flow maps are powerful when the magnitude of movement is central to the story. They require careful width scaling and route design, but they can reveal both spatial connection and quantitative weight in a single map.
