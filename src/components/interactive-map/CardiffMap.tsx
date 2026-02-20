import Map, { Source, Layer, Popup } from 'react-map-gl/maplibre';
import type { MapLayerMouseEvent, MapGeoJSONFeature } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import { Protocol } from 'pmtiles';
import { useState } from 'react';

interface SelectedFeature {
  longitude: number;
  latitude: number;
  properties: {
    nearest_hospital?: number;
    // add any other properties from your PMTiles data here
  };
}

interface CardiffMapProps {
    showStreetNetwork: boolean
}

export default function CardiffMap(
  {showStreetNetwork}: CardiffMapProps
) {
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null);

  const protocol = new Protocol();
  maplibregl.addProtocol('pmtiles', protocol.tile);

  const handleClick = (e: MapLayerMouseEvent) => {
    const features = e.features;
    if (!features || features.length === 0) {
      setSelectedFeature(null);
      return;
    }

    setSelectedFeature({
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
      properties: features[0].properties
    });
  };

  return (
    <Map
      initialViewState={{ longitude: -3.175, latitude: 51.501, zoom: 13 }}
      style={{ width: '95%', height: '100vh' }}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      onClick={handleClick}
      interactiveLayerIds={['hospital-distance']}
    >
      {selectedFeature && (
        <Popup
          longitude={selectedFeature.longitude}
          latitude={selectedFeature.latitude}
          onClose={() => setSelectedFeature(null)}
          closeOnClick={false}
        >
          <div>
            <h3>Cell Stats</h3>
            <p>Nearest hospital: {selectedFeature.properties.nearest_hospital}m</p>
          </div>
        </Popup>
      )}

      <Source id="cardiff" type="vector" url="pmtiles://output.pmtiles">
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
      </Source>
    </Map>
  );
}