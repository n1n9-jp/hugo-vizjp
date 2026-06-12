+++
author = "Yuichi Yazaki"
title = "Time-Series Linear Dendrogram"
slug = "time-series-linear-dendrogram"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/mainvisual.png"
+++

A time-series linear dendrogram unfolds hierarchical relationships along a time axis. Whereas ordinary dendrograms mainly show spatial hierarchy, the linear time-series form shows when and how branches diverge or emerge.

<!--more-->

## Historical Background

Dendrograms developed from biological classification and later became standard in hierarchical clustering. Time-aware linear dendrograms are especially important in phylogenetics, where mutations and lineages must be understood over time. Platforms such as Nextstrain made this form widely visible during the COVID-19 pandemic.

## Data Structure

| Data | Role |
|---|---|
| Node | Ancestor, group, or cluster |
| Branch | Relationship or divergence |
| Time | Position along the timeline |
| Metadata | Optional color or annotation |

## Purpose

The purpose is to show hierarchical branching together with temporal sequence. It answers not only what is related to what, but when divergence occurred.

## Design Notes

- Make the time axis clear.
- Use color for meaningful lineage or category metadata.
- Avoid overloading the chart with too many labels.
- Provide interaction for dense trees.

## Summary

Time-series linear dendrograms are useful when hierarchy and time are inseparable. They are especially powerful for evolution, lineage tracking, and historical branching processes.
