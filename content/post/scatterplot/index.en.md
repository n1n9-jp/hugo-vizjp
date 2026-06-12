+++
author = "Yuichi Yazaki"
title = "Scatter Plot"
slug = "scatterplot"
date = "2025-10-12"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A scatter plot is a fundamental statistical chart for showing the relationship between two numeric variables. One variable is assigned to the X-axis and the other to the Y-axis, and each observation is plotted as a point. The distribution of points reveals correlation, trends, clusters, and outliers.

<!--more-->

## Historical Background

Scatter plots became important in the nineteenth century through the work of statisticians and scientists such as John Herschel and Francis Galton. Galton's studies of height, correlation, and regression helped establish the analytical value of point-based comparison.

## Data Structure

| Data | Role |
|---|---|
| X value | Horizontal position |
| Y value | Vertical position |
| Observation | One plotted point |
| Optional category | Color or shape |
| Optional size | Additional quantitative variable |

## Purpose

The purpose is to understand how two variables move together. A scatter plot can show positive correlation, negative correlation, nonlinear structure, clusters, or unusual observations.

## Design Notes

- Start axes at meaningful ranges rather than automatically forcing zero.
- Use transparency when points overlap.
- Add trend lines only when they support the analysis.
- Use color for categories, not decoration.
- Consider a scatterplot matrix for many variables.

## Summary

Scatter plots are one of the most important tools in exploratory data analysis. They are simple, flexible, and effective for revealing relationships between numeric variables.
