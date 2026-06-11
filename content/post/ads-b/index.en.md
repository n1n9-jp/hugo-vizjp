+++
author = "Yuichi Yazaki"
title = "What Is ADS-B?"
slug = "ads-b"
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

ADS-B, or Automatic Dependent Surveillance-Broadcast, is an aviation surveillance system in which aircraft automatically broadcast their position. It is defined in standards such as the RTCA DO-260 series and is incorporated into ICAO aviation frameworks.

Aircraft use satellite navigation systems such as GPS to determine position, speed, altitude, and other values, then broadcast that information to nearby aircraft and ground stations. The FAA describes ADS-B as a system that complements traditional radar with more accurate and timely tracking.

<!--more-->

## How ADS-B Works

Aircraft commonly broadcast ADS-B messages on 1090 MHz using Mode S Extended Squitter. The messages include the aircraft's 24-bit ICAO address and position encoded with Compact Position Reporting.

The broadcast is automatic. Ground receivers, other aircraft, and community receiver networks can capture the messages and reconstruct aircraft movement.

## Data Contents

ADS-B data may include:

- ICAO aircraft address
- Latitude and longitude
- Barometric or geometric altitude
- Ground speed
- Track or heading
- Vertical rate
- Callsign

## Visualization Uses

ADS-B is widely used to visualize air traffic. It supports live flight maps, route analysis, airport approach patterns, airspace congestion analysis, and historical movement studies.

## Design Notes

- Coverage depends on receiver location and altitude.
- Some aircraft may block or limit public display.
- Position data can contain errors or gaps.
- Dense airspace benefits from filtering, aggregation, and time animation.

## Summary

ADS-B is a key data source for aircraft tracking and air traffic visualization. It provides detailed movement data, but good analysis requires attention to coverage, message quality, and aviation context.
