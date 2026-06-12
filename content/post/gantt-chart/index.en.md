+++
author = "Yuichi Yazaki"
title = "Gantt Chart"
slug = "gantt-chart"
date = "2025-10-11"
categories = [
    "chart"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

A Gantt chart visualizes project tasks, durations, order, and dependencies with horizontal bars on a time axis. Each bar shows the start and end of a task, making the overall schedule easy to understand.

<!--more-->

## Historical Background

Gantt charts were developed in the 1910s by Henry Laurence Gantt, who was influenced by scientific management. They were used in production planning and later became standard tools for project management.

## Data Structure

| Data | Role |
|---|---|
| Task | One row |
| Start date | Bar beginning |
| End date or duration | Bar length |
| Dependency | Optional relationship |
| Status | Optional color or progress |

## Design Notes

- Show dependencies when they affect schedule.
- Keep time scale readable.
- Use color for status or responsibility.
- Avoid overloading the chart with too many small tasks.

## Summary

Gantt charts are practical tools for planning and communicating schedules. They are strongest when the key question is "what happens when?"
