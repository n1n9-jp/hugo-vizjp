+++
author = "Yuichi Yazaki"
title = "Typographic Scatterplots"
slug = "typographic-scatterplots"
date = "2026-03-16"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A typographic scatterplot replaces ordinary point marks with text labels such as words, abbreviations, or names. Each text element directly identifies the data point, reducing the need for tooltips or legends. Font size, weight, italic style, color, and other attributes can also encode additional data dimensions. Richard Brath discusses this technique in *Visualizing with Text* (2020).

<!--more-->

## Historical Background

Scatterplots became a basic statistical chart in the nineteenth century. In ordinary scatterplots, each data point is a dot, and identity is added through labels, legends, or interaction.

Typographic scatterplots make the label itself the mark. This idea also resembles cartographic labeling, where place names are positioned as part of the visual structure rather than as afterthoughts.

## Purpose

The purpose is to combine position-based comparison with direct identification. It is useful when each point represents an entity readers need to recognize.

## Use Cases

- Comparing countries, companies, people, or products
- Text analysis where words are positioned by two scores
- Brand or topic maps
- Educational diagrams where identity matters

## Design Notes

- Avoid too many labels.
- Use collision avoidance or selective labeling.
- Keep typography legible at the intended size.
- Use font attributes consistently and explain their meaning.
- Consider ordinary dots plus labels when the chart is dense.

## Summary

Typographic scatterplots are useful when identity and position are both important. They can make a scatterplot more self-explanatory, but only if text density is controlled.
