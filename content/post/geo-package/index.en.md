+++
author = "Yuichi Yazaki"
title = "What Is GeoPackage (.gpkg)?"
slug = "geo-package"
date = "2026-01-07"
categories = [
    "consume"
]
tags = [
    "",
]
image = "images/thumb_ph_vizjp.png"
+++

GeoPackage is an open, standardized file format for storing and exchanging geospatial information. It is an official Open Geospatial Consortium (OGC) standard designed to store geographic data inside a single SQLite database file.

A GeoPackage can contain vector data, raster data, tiles, attributes, metadata, and extensions in one file. Because it is based on SQLite, it works well in constrained environments, mobile devices, and workflows where a single portable file is useful.

<!--more-->

## Internal Structure

GeoPackage is internally a SQLite database. The standard defines required tables and metadata, including:

- `gpkg_contents`: a table of contents for datasets in the package
- `gpkg_spatial_ref_sys`: coordinate reference system definitions
- tables for vector features or raster tiles
- optional extension metadata

## Why It Is Useful

GeoPackage avoids the multi-file structure of formats such as Shapefile. It can store multiple layers and metadata together, making transfer, archiving, and mobile use easier.

## Use Cases

- Offline GIS data exchange
- Mobile mapping applications
- Packaging multiple vector layers
- Storing raster tiles with metadata
- Delivering public geospatial datasets

## Design Notes

- Keep coordinate reference systems explicit.
- Include metadata so layers remain understandable.
- Use GeoPackage when portability matters.
- Use a spatial database server when concurrent multi-user editing is required.

## Summary

GeoPackage is a practical open standard for bundling geospatial data into one SQLite-based file. It is especially useful for portable, offline, and interoperable GIS workflows.
