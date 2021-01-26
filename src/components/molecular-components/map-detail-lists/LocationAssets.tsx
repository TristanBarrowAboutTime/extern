import * as React from 'react';
import styled from 'styled-components/native';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//<i class="fas fa-user"></i>

const CardView = styled.View`
    width:auto;
    padding: 10px
    margin-top:10;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
    shadow-color: grey;
    shadow-opacity: 0.8;
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
    locationAssetsRecord: LocationAssetsRecord[]
    filterValue: string
}

const LocationAssets = (props: LocationAssetsProps) => {
    const value = props.filterValue.toLowerCase();
    return (
        <>
            {props.locationAssetsRecord.map((item) => {
                if (item.assets.toLowerCase().includes(value) ||
                    item.employee.toLowerCase().includes(value) ||
                    item.service.toLowerCase().includes(value) ||
                    item.activity.toLowerCase().includes(value))
                {
                    return (
                        <div>
                            <CardView>
                                <AssetsName>
                                    {item.assets}
                                </AssetsName>
                                <Employee>
                                    {item.employee}
                                </Employee>
                                <ServiceType>
                                    {item.service}
                                </ServiceType>
                                <Time>
                                    {item.time}
                                </Time>
                                <Activity>
                                    {item.activity}
                                    <FontAwesomeIcon icon={faUser} color={'gray'} />
                                </Activity>
                        
                                <Assigned>
                                    {/* last activity here */}
                                </Assigned>
                            </CardView>
                        </div>
                    )
                }
            })}
        </>
    );
}

export default LocationAssets;
