+++
author = "Yuichi Yazaki"
title = "Text Skimming"
slug = "text-skimming"
date = "2026-03-23"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

Text skimming is a visualization technique that overlays data onto body text through systematic typographic attributes such as bold, italic, font size, color, and underline. It helps readers scan important information without reading every word. It is also called skim formatting, and is discussed by Richard Brath in *Visualizing with Text* (2020).

<!--more-->

## Historical Background

Using visual emphasis to guide reading is as old as manuscript and print culture. Decorated initials, headings, bold text, italic emphasis, and color have long helped readers identify structure and importance.

Text skimming differs from ordinary editorial emphasis because the formatting is mapped systematically to data. The visual treatment is not just an author's judgment; it can encode frequency, sentiment, uncertainty, topic, or another variable.

## Data Structure

| Data | Role |
|---|---|
| Text span | Word, phrase, sentence, or paragraph |
| Data value | Importance, score, frequency, category |
| Typographic mapping | Font weight, size, color, underline, style |
| Legend or rule | Explains the mapping |

## Purpose

The purpose is to combine reading and analysis. A reader can skim a long document and quickly see where important or unusual information is located.

## Use Cases

- Highlighting key phrases in long reports
- Showing sentiment or topic in transcripts
- Reviewing survey free-text responses
- Annotating legal or policy documents
- Educational reading aids

## Design Notes

- Preserve readability as the first priority.
- Use typographic encodings consistently.
- Avoid combining too many attributes at once.
- Provide a legend when the encoding is data-driven.
- Make sure emphasis does not imply importance unless that is the intended meaning.

## Summary

Text skimming turns typography into a data layer. It is powerful for document-heavy analysis, but it requires careful restraint so the text remains readable and the visual emphasis remains meaningful.
