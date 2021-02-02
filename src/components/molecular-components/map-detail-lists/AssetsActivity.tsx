import * as React from 'react';
import styled from 'styled-components/native';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardView = styled.View`
    margin:10px;
    width:auto;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
    shadow-color: grey;
    shadow-opacity: 0.8;
   
`;
const Row = styled.View`     
    display:flex;
    justify-content:space-between;
    flex-direction:row;
`;
const Location = styled.View`
    font-weight:600;
`;
const Employee = styled.View`

`;

export type AssetsActivityRecord = {
    assetsCode: string,
    location: string
    employee: string
    status:string
}

type AssetsActivityProps = {
    assetsRecords: AssetsActivityRecord[]
    filterValue: string
}

const AssetsActivity = (props: AssetsActivityProps) => {
    const value = props.filterValue.toLowerCase();
     return(
        <>
            {props.assetsRecords.map((item) => {
                if (item.employee.toLowerCase().includes(value) ||
                    item.status.toLowerCase().includes(value)) 
                {
                    return (
                        <CardView>
                            <Row>
                            <Location>{item.location}</Location>
                            {item.status == 'assignment' ? <FontAwesomeIcon icon={faUser} color={'gray'} 
                            /> : <FontAwesomeIcon icon={faLocationArrow} color={'gray'}/> }
                            </Row>
                            <Employee>{item.employee}</Employee>
                            
                          
                        </CardView>
                    );
                }
            })}
        </>
    )
}

export default AssetsActivity;