import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3hyb24iLCJhIjoiY2p2cnM0dzdqMHJkaTN5bHFiMmFodHc5NyJ9.kCceEqHa9xFwQApj23rErA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/oxron/cjw9iveb906611cpd5fto3p0h',
      center: [4.168699999999944 ,48.1958 ], // starting position
      zoom: 15.5 // starting zoom
    });

    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['terre-rouge'] // replace this with the name of the layer
      });

      if (!features.length) {
        return;
      }

      var feature = features[0];

      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
  }

}
