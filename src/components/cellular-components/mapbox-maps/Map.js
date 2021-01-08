import * as React from 'react';
import {useState, useRef} from 'react';
import MapGL, {Source, Layer} from 'react-map-gl';
import styled from 'styled-components';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidHJpc3Rhbi1hYm91dHRpbWUtZGV2IiwiYSI6ImNramE4djMzczQza20ycW0wenF2MXlpN2wifQ.Yl6NjsxYBTyWGsptG40luw';

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Map = (props) => {
    const binding = useMap();

    return (
        <MapContainer>
            <MapGL
                {...props.viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/tristan-abouttime-dev/ckjac5z076e4q1al74uthbd1t"
                onViewportChange={props.changeViewPort}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onClick={binding.onClick}
                ref={binding.mapRef}
            >
                <Source 
                    id='worksite-data' 
                    type='geojson' 
                    data={props.worksiteData}
                >
                    <Layer 
                        id='worksites'
                        source='worksite-data'
                        type='circle'
                        paint={{
                            'circle-radius': 10,
                            'circle-color': '#D86833'
                        }}
                    />
                </Source>
                <Source 
                    id='employee-data' 
                    type='geojson' 
                    data={props.employeeData}
                >
                    <Layer 
                        id='employees'
                        source='employee-data'
                        type='circle'
                        paint={{
                            'circle-radius': 10,
                            'circle-color': '#000000'
                        }}
                    />
                </Source>
            </MapGL>
        </MapContainer>
    );
}

/**
 * export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
};
 */

const useMap = () => {

    const mapRef = useRef(null);

    const onClick = (event) => {};
    
    return {
        mapRef,
        onClick
    }
}

export default Map;