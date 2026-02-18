import { useEffect, useRef } from 'react';
import Map, { Source, Layer } from 'react-map-gl/maplibre';
import { Protocol } from 'pmtiles';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// Register PMTiles protocol once when the app loads
const protocol = new Protocol();
maplibregl.addProtocol('pmtiles', protocol.tile.bind(protocol));

function CardiffMap() {
  return (
    <Map
      initialViewState={{
        longitude: -3.175,
        latitude: 51.501,
        zoom: 13
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    >
      <Source
        id="cardiff"
        type="vector"
        url="pmtiles://output.pmtiles"
      >
        <Layer
          id="hospital-distance"
          type="fill"
          source-layer="gp_grid_distance__wgs84"
          paint={{
            'fill-color': [
              'interpolate', ['linear'],
              ['get', 'nearest_hospital'],
              0, '#22c55e',
              500, '#eab308',
              1500, '#ef4444'
            ],
            'fill-opacity': 0.7
          }}
        />
        <Layer
          id="hospital-distance-outline"
          type="line"
          source-layer="gp_grid_distance__wgs84"
          paint={{
            'line-color': '#ffffff',
            'line-width': 0.5,
            'line-opacity': 0.3
          }}
        />
      </Source>
    </Map>
  );
}

export default CardiffMap;