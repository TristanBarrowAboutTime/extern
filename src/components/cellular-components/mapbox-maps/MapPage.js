import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import MapControler from './MapControler';
import Map from './Map';
import worksiteData from '../../../mock-data/worksiteDataGeo';
import { employeeGeoJson as employeeData } from '../../../mock-data/employeeMapData';


const MapPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: calc(100vh - 34px);
    width: 100vw;
`;

const MapContainer = styled.div`
    width: calc(100vw - 250px);
    height: 100%;
`;

const MapPage = () => {
    const binding = useMapDataManager();
    return (
        <MapPageContainer>
            <MapControler 
                setCords={binding.setCords}
                employeeData={employeeData}
            />
            <MapContainer> 
                <Map 
                    viewport={binding.viewport}
                    changeViewPort={binding.changeViewPort}
                    employeeData={employeeData} 
                    worksiteData={worksiteData} 
                />
            </MapContainer>
        </MapPageContainer>
    );
}

const useMapDataManager = () => {
    const [viewport, setViewportTo] = useState({
        latitude: 39.98819048878927,
        longitude: -111.75807962919087,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        transitionDuration: 500
    });

    const changeViewPort = (newViewport) => {
        setViewportTo({
            ...newViewport,
            pitch: 0,
            bearing: 0
        });
    }


    const setCords = useCallback((lat, long) => {
        changeViewPort({
            ...viewport,
            latitude: lat,
            longitude: long
        });
    }, [])

    return {
        setCords,
        changeViewPort,
        viewport
    }
}

export default MapPage;