import * as React from 'react';
import styled from 'styled-components/native';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardView = styled.View`
    width:auto;
    padding-left:10;
    padding-right:10;
    padding-top:10;
    padding-bottom:10;
    margin-top:10;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
    shadow-color: grey;
    shadow-opacity: 0.8;
   
`;
const Row = styled.View`
    display:flex;
    justify-content:space-between;
`;
const Employee = styled.View`

font-weight:600;
`;

type AssetsActivityProps ={
    employee: React.ReactNode
    status:string
}

const AssetsActivity = (props: AssetsActivityProps) => {
    return (
        <CardView>
            <Row>
             <Employee>{props.employee}</Employee>
             {props.status == 'assignment' ? <FontAwesomeIcon icon={faUser} color={'gray'} 
             /> : <FontAwesomeIcon icon={faLocationArrow} color={'gray'}/> }
            </Row>
        </CardView>
    )
}

export default AssetsActivity;