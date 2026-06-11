+++
author = "Yuichi Yazaki"
title = "What Is AIS?"
slug = "ais"
date = "2026-03-09"
categories = [
    "technology"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

## Overview

AIS, or Automatic Identification System, is a maritime surveillance system in which ships automatically broadcast their position and identifying information. It is based on performance standards from the International Maritime Organization and is required under amendments to the SOLAS convention for many vessels.

Ships transmit information such as position, speed, course, and identity from GPS and other navigation systems. Other ships and coastal stations receive the messages, supporting collision avoidance and traffic management.

<!--more-->

## How AIS Works

AIS messages are broadcast over VHF radio. The ITU-R M.1371 standard defines message structures, including the vessel's MMSI, position, speed, and navigational status. Transmission is automatic and can be received by nearby vessels, shore stations, and satellites.

## Data Contents

Typical AIS data includes:

- MMSI and vessel name
- Latitude and longitude
- Speed over ground
- Course over ground
- Heading
- Navigational status
- Vessel type and dimensions
- Destination and estimated time of arrival when available

## Visualization Uses

AIS data is useful for visualizing maritime traffic. Dense vessel tracks can reveal shipping lanes, port activity, anchorage patterns, fishing behavior, and unusual movement.

## Design Notes

- AIS data can be noisy or incomplete.
- Position frequency differs by vessel speed and equipment.
- Privacy, security, and commercial sensitivity should be considered.
- Use aggregation when showing dense traffic patterns.

## Summary

AIS is a foundational data source for maritime tracking and visualization. It provides near-real-time ship movement data, but analysis requires attention to message quality, coverage, and operational context.
