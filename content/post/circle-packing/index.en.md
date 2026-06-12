+++
author = "Yuichi Yazaki"
title = "Circle Packing"
slug = "circle-packing"
date = "2025-10-09"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

**Circle packing** visualizes whole-part and parent-child relationships by packing circles inside other circles. It is a hierarchical visualization technique: each node is drawn as a circle, and parent nodes contain their children.

Compared with a treemap, which divides rectangular space, circle packing is less precise for area comparison but often more intuitive for showing containment and hierarchy depth.

<!--more-->

## Background

The mathematical idea of packing circles is old and has been studied as the circle packing problem since the nineteenth century. In information visualization, circle packing became widely used in the late 1990s and 2000s, especially through tools such as Protovis and D3.js. D3 provides a standard implementation as `d3.pack()`.

## Data Structure

Circle packing uses hierarchical data.

| Field | Meaning |
|---|---|
| name | Node label |
| value | Numeric size for the node |
| children | Child nodes |

Example:

```json
{
  "name": "root",
  "children": [
    {"name": "A", "value": 10},
    {"name": "B", "children": [
      {"name": "B1", "value": 5},
      {"name": "B2", "value": 8}
    ]}
  ]
}
```

## Purpose

The main purpose is to show which elements belong to which groups, and roughly how large each group or leaf node is. It is visually softer than a treemap and often works well when structural hierarchy matters more than exact numeric comparison.

## Use Cases

- file-system structure
- biological taxonomy
- corporate or industry hierarchy
- regional population composition
- topic clusters and nested categories

## How to Read It

| Element | Meaning |
|---|---|
| Circle size | Relative value or magnitude |
| Parent and child circles | Hierarchical containment |
| Color | Category, group, or level |
| Position | Layout optimized for readability; not usually a measured axis |

## Design Notes

- Area comparison with circles is difficult, so labels and tooltips help.
- Deep hierarchies often need interactive zooming.
- Use color consistently by level or parent group.
- Leave enough padding between circles so boundaries remain legible.

## Alternatives

| Method | Feature | Best when |
|---|---|---|
| Treemap | Rectangular area optimization | Accurate area comparison matters |
| Sunburst chart | Radial hierarchy | Hierarchy depth matters |
| Icicle chart | Stacked hierarchy | Labels need more room |

## Summary

Circle packing is a visually compelling way to show hierarchical structure. It is not the strongest option for exact value comparison, but it is effective when the goal is to reveal the shape of an information hierarchy.

## References

- [D3.js API Reference: d3.pack](https://github.com/d3/d3-hierarchy#pack)
- [Observable: Zoomable Circle Packing](https://observablehq.com/@d3/zoomable-circle-packing)
- [Wikipedia: Circle packing](https://en.wikipedia.org/wiki/Circle_packing)
- [Protovis: Hierarchical Layouts](https://mbostock.github.io/protovis/ex/hierarchy.html)
- [Circle Packing Visualization — Mike Bostock](https://observablehq.com/@d3/circle-packing)
