+++
author = "Yuichi Yazaki"
title = "Typographic Graph"
slug = "typographic-graph"
date = "2026-03-19"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A typographic graph is a network visualization in which nodes are represented by text labels rather than circles or dots. Font size, weight, color, case, and other typographic attributes can encode node properties such as centrality, category, or importance. Edges connect the text labels to show network structure. Richard Brath presents this as a form of typographic visualization in *Visualizing with Text* (2020).

<!--more-->

## Historical Background

Network visualization has roots in graph theory, including Euler's bridges of Konigsberg problem. Modern network visualization expanded rapidly with the internet, social networks, and tools such as Pajek, Gephi, and D3.js.

Traditional network diagrams usually draw nodes as circles and attach labels as secondary information. A typographic graph makes the label itself the node, bringing identity and data encoding into the same visual element.

## Purpose

The purpose is to make node identity immediately visible while still representing network relationships. It is useful when names are more important than anonymous points.

## Use Cases

- Social networks where names or organizations matter
- Concept maps
- Citation or author networks
- Topic networks
- Entity relationship diagrams for reports

## Design Notes

- Prevent text overlap through layout constraints.
- Use typography sparingly; too many styles reduce readability.
- Keep edge contrast subtle so labels remain legible.
- Consider interaction for dense networks.
- Use font size carefully because it strongly affects perceived importance.

## Summary

Typographic graphs turn labels into primary data marks. They are useful when readers need to identify entities directly, but they require careful layout to avoid clutter and overlapping text.
