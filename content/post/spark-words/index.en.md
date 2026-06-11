+++
author = "Yuichi Yazaki"
title = "Spark Words"
slug = "spark-words"
date = "2026-03-24"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

Spark words visualize quantitative data directly through the typography of inline words. Font weight, size, color, italic style, and other text attributes encode values associated with individual words. Whereas Edward Tufte's sparklines place tiny charts inside text, spark words make the text itself carry the data. Richard Brath systematizes this form in *Visualizing with Text* (2020).

<!--more-->

## Historical Background

Spark words sit at the intersection of two traditions. The first is Tufte's sparklines, which embed compact data graphics into the flow of prose. The second is typographic visualization, where the visual properties of text are used as data encodings.

Brath's work extends the idea by treating words as marks. Instead of placing a separate mini-chart next to a word, the word's own typographic appearance changes according to data.

## Data Structure

| Data | Role |
|---|---|
| Word or phrase | Text shown inline |
| Numeric value | Encoded by weight, size, color, or style |
| Category | Optional typographic or color grouping |
| Context text | Sentence or paragraph containing the word |

## Purpose

The purpose is to preserve reading flow while adding a quantitative layer. Readers can skim text and immediately notice stronger, larger, darker, or differently colored words.

## Use Cases

- Emphasizing frequency or importance in documents
- Showing sentiment or uncertainty in text
- Annotating reports without separate charts
- Compact dashboards or editorial graphics

## Design Notes

- Use only a small number of typographic variables.
- Keep text readable before adding data encoding.
- Avoid making ordinary prose look randomly styled.
- Provide a legend or explanation when the mapping is not obvious.

## Summary

Spark words are useful when text is the main medium and data should be embedded without interrupting the reader. They work best with restrained typography and a clear mapping between visual style and data.
