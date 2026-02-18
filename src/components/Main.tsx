import * as React from 'react';
import Map from 'react-map-gl/maplibre'
import CardiffMap from './CardiffMap.tsx'
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Main() {
    return (
        <main>
            <p>main component here</p>
            {/* <Map
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{width: 600, height: 400}}
            /> */}
            <CardiffMap />
        </main>
    )
}