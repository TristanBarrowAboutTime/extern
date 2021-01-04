import { Map } from 'leaflet';
import React, { useMemo, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import styled from 'styled-components';
import employeeData from '../mapdata/employeeData';
import MapList from './MapList';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: calc(100vh - 34px);
    width: 100vw;
`;

const MapSpace = styled(MapContainer)`
    height: inherit;
    width: calc(100vw - 250px);
`;

const MapPage = () => {
    const [map, setMap] = useState(null as Map | null);

    const displayMap = useMemo(() => (
        <MapSpace
            center={[39.989, -111.634]} 
            zoom={13} 
            scrollWheelZoom={true}
            whenCreated={setMap}
        >
            <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {employeeData.features.map(employee => {
                const x = employee.geometry.coordinates[1]
                const y = employee.geometry.coordinates[0]
                return <Marker key={employee.properties.id} position={[x,y]} />
            })}
        </MapSpace>
    ), []);

    return (
        <Container>
            <MapList employeeData={employeeData} setCords={(x,y) => {
                    if (map !== null) map.setView([x, y], 13);
                }}/>
            {displayMap}
        </Container>
    );
}

export default MapPage;
