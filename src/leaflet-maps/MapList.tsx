import React from 'react';
import styled from 'styled-components';
import { Map } from 'leaflet';

const Names = styled.div`
    padding: 4px;

`;

const Name = styled.div`
    margin: 4px;
    padding: 2px;
    padding-left: 4px;
    border-radius: 4px;
    transition: all .3s;
    :hover {
        cursor: pointer;
        background-color: lightblue;
    }
`;

type MapdataEmployee = {
    properties: {id: number, name: string}
    geometry:  { coordinates: number[]}
}

type MapListProps = {
    // yes. I know. its a demo and I need to pump it out fast. I'll fix it if this makes it into the repo
    employeeData: any 
    setCords: (x: number, y: number) => void
}

const MapList = (props: MapListProps) => {
    const binding = useMapList(props);
    return (
        <Names>
            {binding.employees.map((employee: MapdataEmployee) => {
                return (
                    <Name
                        key={employee.properties.id} 
                        onClick={() => binding.onClickEmployee(employee)}
                    >
                        {employee.properties.name}
                    </Name>
                );
            })}
        </Names>
    )
}

const useMapList = (args: MapListProps) => {
    const onClickEmployee = (employee: MapdataEmployee) => {
        args.setCords(employee.geometry.coordinates[1], employee.geometry.coordinates[0]);
    }

    return {
        employees: args.employeeData.features,
        onClickEmployee
    };
}


export default MapList;