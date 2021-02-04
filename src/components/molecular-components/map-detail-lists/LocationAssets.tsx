import * as React from 'react';
import styled from 'styled-components/native';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocationAssetData } from '../../../hooks/loadable-data/live-maps/controller/locations/useLocationAssetData';
//<i class="fas fa-user"></i>

const CardView = styled.View`
    width:auto;
    padding: 10px;
    margin-top:10;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
`;

const Row = styled.View`
    flex-direction:row;
    display:flex;
    justify-content:space-between;
`;
const AssetsName = styled.View`
    color: #525252;
    display:flex;
    padding-left:10px;
    padding-bottom:10px;
    font-size:15px;
    font-weight:600;
`;

const Employee = styled.View`
    color: #525252;
    display: flex;
    flex-direction:row;
    align-items: center;
    font-size:15px;
    padding-bottom:8px;
    padding-left:10px;
`;

const ServiceType = styled.View`
    color: #525252;
    display:flex;
    padding-left:10px;
    padding-bottom:10px;
    font-size:15px; 
`;

const Time = styled.View`
    color: #525252;
    display: flex;
    flex-direction:row;
    align-items: center;
    font-size:15px;
    padding-bottom:8px;
    padding-left:10px;
`;

const Activity = styled.View`
    color: #525252;
    display: flex;
    flex-direction:row;
    align-items: center;
    font-size:15px;
    padding-bottom:8px;
    padding-left:10px;
    justify-content:space-between;
`;

const Assigned = styled.View`
`;
export type LocationAssetsRecord = {
    assets: string
    employee: string
    service: string
    time: string
    activity: string
}

type LocationAssetsProps = {
    filterValue: string
}

const LocationAssets = (props: LocationAssetsProps) => {
    const value = props.filterValue.toLowerCase();
    const locationAssetRecords = useLocationAssetData();
    return (
        <>
            {locationAssetRecords.map((locationAssetRecord) => {
                const {
                    assets,
                    employee,
                    service,
                    activity,
                    time
                } = locationAssetRecord;

                const shouldRenderRow = (
                    assets.toLowerCase().includes(value) ||
                    employee.toLowerCase().includes(value) ||
                    service.toLowerCase().includes(value) ||
                    activity.toLowerCase().includes(value)
                )

                if (shouldRenderRow) {
                    return (
                        <CardView>
                            <Row>
                                <AssetsName>{assets}</AssetsName>
                                <FontAwesomeIcon icon={faUser} color={'gray'} />
                            </Row>                              
                            <Employee>{employee}</Employee>
                            <ServiceType>{service}</ServiceType>
                            <Time>{time}</Time>
                            <Activity>{activity}</Activity>
                    
                            <Assigned>
                                {/* last activity here */}
                            </Assigned>
                        </CardView>
                    )
                }
            })}
        </>
    );
}

export default LocationAssets;
