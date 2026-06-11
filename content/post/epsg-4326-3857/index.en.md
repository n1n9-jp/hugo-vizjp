+++
author = "Yuichi Yazaki"
title = "Why Web Map Data Sometimes Mentions EPSG:4326 and Sometimes EPSG:3857"
slug = "epsg-4326-3857"
date = "2025-11-16"
categories = [
    "technology"
]
tags = [
    "gis","地図"
]
image = "images/epsg.png"
+++

An [EPSG code](https://epsg.io/) is an identifier assigned to coordinate reference systems, datums, projections, and related geospatial definitions. It tells software which coordinate system a geographic dataset uses.

Web mapping has a common source of confusion:

> Should data for a web map be EPSG:4326, or EPSG:3857?

Documentation for Foursquare, Google Maps, Mapbox, MapLibre, Kepler.gl, Cesium, QGIS, and ArcGIS can appear to say different things. The reason is that there are two different uses of coordinates: input data and map rendering or tiles.

<!--more-->

## Conclusion

> User-uploaded data should generally be in **EPSG:4326**.  
> Map tiles and rendering often use **EPSG:3857** internally.

- **Input data layer -> EPSG:4326**
- **Map tile and rendering layer -> EPSG:3857**

Many people get confused because documentation may describe different layers of the system.

GIS tools such as QGIS and ArcGIS can handle many projections, so they are outside the main scope of this simplified web-map explanation.

## GeoJSON Is Fixed to WGS84 Longitude/Latitude

The GeoJSON specification, RFC 7946, states that coordinates must be in WGS84 longitude and latitude. In practice, this means EPSG:4326.

Therefore, web mapping tools that accept GeoJSON generally assume input data in EPSG:4326. This is true across MapLibre, Mapbox, Kepler.gl, Cesium, Google Maps, and OpenLayers.

## Map Tiles Use EPSG:3857

Google Maps popularized Web Mercator, EPSG:3857, and the web tile system based on `z/x/y` coordinates. OpenStreetMap, Mapbox Vector Tile, and many other web map systems follow this convention.

In other words, map tiles are usually in 3857 even though the data you upload is 4326.

**Note on Cesium:** Cesium accepts EPSG:4326-style longitude and latitude input, but rendering uses Earth-Centered, Earth-Fixed coordinates, EPSG:4978. The structure is still the same: input and rendering coordinates are different.

## Internal Processing

A typical web map pipeline looks like this:

1. User data in EPSG:4326 longitude and latitude.
2. The map engine projects the data internally.
3. The display is aligned to the tile/rendering coordinate system, usually EPSG:3857.

So documentation that says "4326" may be correct for input, while documentation that says "3857" may be correct for tiles or rendering.

## Does Any Tool Require EPSG:3857 as Input?

Almost none, if by "input" we mean ordinary user data such as GeoJSON. The main exception is vector tile generation. When data is being prepared as map tiles, then EPSG:3857 becomes relevant.

Do not confuse ordinary web map upload data with GIS servers or OGC services such as WMS and WMTS. Those systems can support many projections and have different design goals.

| Method | Role | Projection | Feature | Typical use |
|---|---|---|---|---|
| Map tiles / XYZ tiles | De facto web map tile delivery | Usually EPSG:3857 | Fast, cacheable, compatible with Google Maps and OSM | Web maps, apps, MapLibre, Mapbox, Kepler |
| GIS server | GIS-oriented map delivery | Flexible | Supports WMS, WMTS, tiles, analysis workflows | Government GIS, surveying, business systems |
| WMS / WMTS | OGC standard services | Flexible | More projection flexibility than web tiles | Public GIS and precision-oriented systems |

## Summary

| Misunderstanding | Cause |
|---|---|
| "I do not know which EPSG to upload." | Input coordinates and rendering coordinates are mixed up. |
| "Google Maps mentions both 4326 and 3857." | One refers to input data; the other to tiles. |
| "MapLibre renders in 3857, so should input be 3857?" | GeoJSON input is still based on 4326. |

For ordinary web map data, prepare longitude and latitude in EPSG:4326. Let the map engine project it for display.

## References

- [RFC 7946 GeoJSON Specification](https://www.rfc-editor.org/rfc/rfc7946)
- [Google Maps JavaScript API - Coordinates](https://developers.google.com/maps/documentation/javascript/coordinates)
- [OpenStreetMap Wiki - Web Mercator](https://wiki.openstreetmap.org/wiki/Web_Mercator)
- [Mapbox Vector Tile Spec](https://github.com/mapbox/vector-tile-spec)
- [Cesium Documentation - Geometry and Appearance](https://cesium.com/docs/tutorials/geometry-and-appearance/)
