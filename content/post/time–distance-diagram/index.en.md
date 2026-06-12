+++
author = "Yuichi Yazaki"
title = "Time-Distance Diagram"
slug = "time-distance-diagram"
date = "2025-10-09"
description = ""
categories = [
    "chart"
]
tags = [
    ""
]
image = "images/thumb_ph_vizjp.png"
+++

A **time-distance diagram** visualizes the operation of moving vehicles, such as trains or buses, by placing time on one axis and distance or station position on the other. Each train or vehicle is drawn as a slanted line, making schedules, passing points, stops, and service patterns easy to understand at a glance.

The method is widely used in railway planning and operations, where it is often called a train graph or timetable diagram.

<!--more-->

## Historical Background

Time-distance diagrams emerged alongside the expansion of railway networks in the nineteenth century. Similar operating diagrams appeared in British railway practice in the 1870s, and in Japan the format became a standard tool for timetable design and dispatching during the Meiji period.

Even today, train-control centers rely on this type of diagram to monitor services and manage disruptions.

## Data Structure

| Data item | Description |
|---|---|
| Station or stop name | Reference points along the distance axis |
| Distance between stations | Basis for the vertical scale |
| Departure and arrival times | Time values plotted on the horizontal axis |
| Train number or service type | Used for line style, color, and labels |

Each service is drawn as a line segment through time and space. Depending on local convention, inbound and outbound trains may slope in opposite directions.

## Purpose

The main purpose is to optimize service planning and operations. A time-distance diagram helps planners see whether the whole timetable is coherent, where trains meet or overtake one another, how transfers work, and where congestion or delays may occur.

## Use Cases

- railway dispatching and timetable design
- bus, ferry, and public-transport scheduling
- recovery planning after service disruptions
- transport simulation in research and education
- logistics and autonomous-vehicle movement analysis

## How to Read It

1. **Horizontal axis: time**  
   Time progresses from left to right.

2. **Vertical axis: distance or station sequence**  
   Stations or locations are arranged by physical distance or by service order.

3. **Slanted lines: vehicle movement**  
   The slope represents speed. A flatter line indicates faster movement; a steeper line indicates slower movement.

4. **Intersections: meets, passes, or transfer opportunities**  
   Where lines cross, vehicles are at the same position at the same time.

5. **Horizontal segments: stops or waiting time**  
   Longer horizontal segments indicate longer dwell or waiting periods.

## Design Notes

- Use a true distance scale when speed comparison matters.
- Use color or line style for service types such as local, express, or limited express.
- Keep the time grid regular so departure and arrival times can be read precisely.
- Use interaction or scrolling for dense digital timetables.

## Alternatives

- **Gantt chart**: useful for general schedules and tasks.
- **Sparkline time series**: useful for frequency or headway trends.
- **Network diagram**: useful when topology matters more than timing.

## Summary

A time-distance diagram is a compact way to show movement through both time and space. Its structure is simple, but it can reveal speed, delay, connection, passing, and operational rhythm in a single view.

## References

- [Wikipedia: Time-distance diagram](https://en.wikipedia.org/wiki/Time%E2%80%93distance_diagram)
- [Wikipedia Japan: Railway diagram](https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A4%E3%83%A4%E3%82%B0%E3%83%A9%E3%83%A0)
- [Network Rail: Information for operators](https://www.networkrail.co.uk/industry-and-commercial/information-for-operators/)
- [OpenTrack: Simulation of Railway Networks](https://www.opentrack.ch/opentrack/downloads/OpenTrack.Info_EN.pdf)
