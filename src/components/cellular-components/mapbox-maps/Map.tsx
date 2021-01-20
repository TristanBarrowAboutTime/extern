import * as React from 'react';
import { useRef } from 'react';
import MapGL, { FlyToInterpolator, Layer, LayerProps, Source, SourceProps } from 'react-map-gl';
import styled from 'styled-components';
import MapButtons from './MapButtons';

export enum BaseMap { 
    BASIC = 'mapbox://styles/mapbox/streets-v11',
    // SATELLITE = 'mapbox://styles/mapbox/satellite-v9',
    SATELLITE_STREET = 'mapbox://styles/mapbox/satellite-streets-v11',
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const MapControlls = styled.div`
    position: absolute;
    top: 0;
    left: 0;


`;


export type Viewport = {
    latitude: number
    longitude: number
    zoom: number
    bearing: number
    pitch: number
    transitionDuration: number 
    onViewportChange: (viewport: any) => void
    ref: React.Ref<any>
    height: string
    width: string
    mapStyle: BaseMap
    transitionEasing: (x: number) => number
    
}

export type MapActions = {
    setCords: (lat: number, long: number) => void
    setZoom: (zoom: number) => void
    incZoom: () => void
    decZoom: () => void
    setToStreet: () => void
    setToSatellite: () => void
}

export type MapConfiguration = {
    source: SourceProps
    layers: LayerProps[]
}

type MapProps = {
    viewport: Viewport
    actions: MapActions
    mapConfigs?: MapConfiguration[] 
}

const Map = (props: MapProps) => {
    const { viewport, actions, mapConfigs = [] } = props;
    return (
        <Container>
            <MapGL
                {...viewport}
                mapStyle={viewport.mapStyle.toString()}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
            >
                {mapConfigs.map((config: MapConfiguration) => {
                    return <Source {...config.source}>
                        {config.layers.map((layer: LayerProps) => {
                            return <Layer {...layer}/>
                        })}
                    </Source>
                })}
            </MapGL>
            <MapButtons
                actions={actions}
                selectedMapStyle={viewport.mapStyle}
            />
        </Container>
    );
}

type UseWithMapArgs = {
    initialBaseMap?: BaseMap
    maxZoom?: number
    minZoom?: number
}


export const useWithMap = ({
    initialBaseMap = BaseMap.BASIC,
    maxZoom = 22,
    minZoom = 1
}: UseWithMapArgs) => {
    const ref = useRef(null);
    const [viewport, setViewportTo] = React.useState({
        latitude: 39.98819048878927,
        longitude: -111.75807962919087,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        transitionDuration: 500,
        transitionEasing: (x: number): number => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),

    });
    
    const [baesMap, setBaseMapTo] = React.useState(initialBaseMap);
    const setToSatellite = () => setBaseMapTo(BaseMap.SATELLITE_STREET);
    const setToStreet = () => setBaseMapTo(BaseMap.BASIC);

    const changeViewPort = (viewPort: any) => {
        setViewportTo({
            ...viewPort,
            pitch: 0,
            bearing: 0,
            transitionDuration: 500,
        });
    }


    const setCords = (lat: number, long: number) => {
        changeViewPort({
            ...viewport,
            latitude: lat,
            longitude: long
        });
    }

    const setZoom = (zoom: number) => {
        let newZoom = zoom;
        if (zoom <= minZoom) {
            newZoom = minZoom;
        }
        if (zoom >= maxZoom) {
            newZoom = maxZoom;
        }
        changeViewPort({
            ...viewport,
            zoom: newZoom
        });
    }

    const incZoom = () => setZoom(viewport.zoom <= maxZoom ? viewport.zoom + 1 : viewport.zoom);
    const decZoom = () => setZoom(viewport.zoom >= minZoom ? viewport.zoom - 1 : viewport.zoom);


    return {
        viewport: {
            ...viewport,
            onViewportChange: setViewportTo,
            ref,
            height: '100%',
            width: '100%',
            mapStyle: baesMap 
        },
        actions: {
            setCords,
            setZoom,
            incZoom,
            decZoom,
            setToStreet,
            setToSatellite,
        }

    }
}

export default Map;