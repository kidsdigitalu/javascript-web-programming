## Map Project 

We are going to make a map, give it some style, add locations, and launch it on the web! 

This project will be 2 or more classes.

![drone](./drone.gif)

## Examples 

https://www.mapbox.com/gallery/

http://www.aaronland.info/wanderdrone/

https://www.mapbox.com/mapbox-gl-js/examples/

http://maps.stamen.com/

https://mapzen.com/blog/tron-v2-visual-scale/


## What is a Map ? 

> A map is a symbolic depiction highlighting relationships between elements of some space, such as objects, regions, and themes.

via [Wikipedia](https://en.wikipedia.org/wiki/Map)

## The tools we use 

### MapBox Studio

We will be using MapBox, a fantastic open source set of mapping tools for programmers. It's like Google Maps but cooler! You can create maps, get directions, even help self-driving cars navigate!  

Here is the developer documentation: https://www.mapbox.com/mapbox-gl-js/api/

### GeoJSON 

GeoJSON is a format for geographic map data on the web. You can try it out here: http://geojson.io/

GeoJSON has 3 main feature types: point, line, polygon. Features can also have properties, for example "name = Home". Many features together make up a feature collection. 

## Steps 

## 1 - Plan

First we will create a plan.   

- How will your map look? Will it be realistic (satellite images) or fantastical (vectors, colors) or somewhere in between? 
- What will your map show? Your route to school? Your favorite places? Places you want to visit? Buried treasure? Flying drones? Weather? 
- Who will read your map? You friends? Your family? Your comrades?  

### 2 - Style 

Next we will style the map using Mapbox Studio. Lets create a new account by signing up here: https://www.mapbox.com/studio/signup/

This tutorial will help you get started: https://www.mapbox.com/help/getting-started-mapbox-studio-1/

### 3 - Add Data  

What data did you decide to show on your map? Add this data using Mapbox Studio. 

Remember you can add points, lines, and polygons. You can also add properties for use in your code and styles. 

You can style your map data too!   

### 4 - Launch

Launching your map is as simple as creating a webpage and writing a simple program. For example:   

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title></title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.31.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>

<div id='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjdWx0eW1hdHQiLCJhIjoiY2l4czIwdmI4MDdnaTMybnUzdWs3cTZwNCJ9.GtHaLHuBvH17ag0gie0Zhg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});
</script>

</body>
</html>
```

You can learn more here: https://www.mapbox.com/mapbox-gl-js/examples/

## Related topics: 

### GeoCaching 

> Geocaching is an outdoor recreational activity, in which participants use a Global Positioning System (GPS) receiver or mobile device and other navigational techniques to hide and seek containers, called "geocaches" or "caches", at specific locations marked by coordinates all over the world.

via [Wikipedia](https://en.wikipedia.org/wiki/Geocaching)

GeoCaching in JS using only browser: https://oseiskar.github.io/stash-js/#stash