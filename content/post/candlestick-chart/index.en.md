+++
author = "Yuichi Yazaki"
title = "Candlestick Chart"
slug = "candlestick-chart"
date = "2025-10-11"
description = "A candlestick chart visualizes open, high, low, and close prices over time."
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A candlestick chart visualizes open, high, low, and close prices over time. Each candlestick represents one period, such as a day or an hour. The body shows the difference between open and close, while the wicks show the high and low.

<!--more-->

## Purpose

Candlestick charts are widely used in financial markets because they summarize price movement within each time period compactly.

## How to Read It

A rising period is called a bullish candle and a falling period a bearish candle. Colors differ by region: in Western markets a rising period is often green and a falling period red, while in Japan a rising period is often red and a falling period black or blue. Long bodies indicate large open-to-close movement; long wicks indicate wide intraperiod fluctuation.

## Design Notes

- Keep time intervals consistent.
- Avoid overinterpreting individual shapes without context.
- Use volume or moving averages only when they add analytical value.

## Summary

Candlestick charts are standard for financial time series because they show four price values in one compact mark.
