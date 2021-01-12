import React from 'react';
import styled from 'styled-components';

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

const MapControler = (props) => {
    const binding = useMapControler(props);
    return (
        <Names>
            {binding.employees.map(employee => {
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

const useMapControler = (args) => {
    const onClickEmployee = (employee) => {
        args.setCords(employee.geometry.coordinates[1], employee.geometry.coordinates[0]);
    }

    return {
        employees: args.employeeData.features,
        onClickEmployee
    };
}


export default MapControler;