 import {MapConfiguration } from '../components/cellular-components/map/Map';
import { LayerProps, SourceProps } from 'react-map-gl';

const exampleSource: SourceProps = {
    id: "earthquakes",
    type: "geojson",
    data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
}

const clusterLayer: LayerProps = {
    id: 'clusters',
    type: 'circle',
    source: 'earthquakes',
    filter: ['has', 'point_count'],
    paint: {
        'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
    }
};
  
const clusterCountLayer: LayerProps = {
    id: 'cluster-count',
    type: 'symbol',
    source: 'earthquakes',
    filter: ['has', 'point_count'],
    layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
    },
    paint: {
        'text-color': 'black'
    }
};
  
const unclusteredPointLayer: LayerProps = {
    id: 'unclustered-point',
    type: 'circle',
    source: 'earthquakes',
    filter: ['!', ['has', 'point_count']],
    paint: {
        'circle-color': '#11b4da',
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff'
    }
};


export const clusterConfig: MapConfiguration[] = [
    {
        id: 'map-testing-cluster',
        source: exampleSource,
        layers: [
            clusterLayer,
            clusterCountLayer,
            unclusteredPointLayer
        ]
    }
];