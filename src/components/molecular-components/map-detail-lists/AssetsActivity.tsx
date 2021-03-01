import * as React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAssetActivityData } from '../../../hooks/loadable-data/live-maps/controller/assets/useAssetActivityData';

type CompTheme = {
    colors: {
        active: string
        error: string
        text: string
    }
}


const CardView = styled.View`
    margin: 10px;
    width: auto;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
   
`;

const Row = styled.View`     
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Location = styled.View`
    font-weight: 600;
`;

const Employee = styled.View`

`;

export type AssetsActivityRecord = {
    assetsCode: string,
    location: string
    employee: string
    status: string
}

type AssetsActivityProps = {
    filterValue: string
    theme: CompTheme
}

const AssetsActivity = (props: AssetsActivityProps) => {
    const value = props.filterValue.toLowerCase();
    const assetRecords = useAssetActivityData();
    return(
        <>
            {assetRecords.map((assetRecord) => {
                const {
                    employee,
                    status,
                    location,
                } = assetRecord;

                const shouldRenderRow: boolean = (
                    employee.toLowerCase().includes(value) ||
                    status.toLowerCase().includes(value) ||
                    location.toLowerCase().includes(value)
                );

                if (shouldRenderRow) {
                    return (
                        <CardView>
                            <Row>
                                <Location>{location}</Location>
                                {status == 'assignment' ? (
                                    <FontAwesomeIcon icon={faUser} color={'gray'} /> 
                                ) : (
                                    <FontAwesomeIcon icon={faLocationArrow} color={'gray'} />
                                )}
                            </Row>
                            <Employee>{employee}</Employee>
                        </CardView>
                    );
                }
            })}
        </>
    )
}

export default withTheme(AssetsActivity);