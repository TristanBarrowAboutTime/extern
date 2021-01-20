import * as React from 'react';
import styled from 'styled-components/native';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//<i class="fas fa-user"></i>

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
type LocationAssetsProps = {
    assets: string
    employee: React.ReactNode
    service: React.ReactNode
    time: React.ReactNode
    activity: React.ReactNode
}

const LocationAssets = (props: LocationAssetsProps) => {
    return (
        <div>
            <CardView>
                <AssetsName>
                    {props.assets}
                </AssetsName>
                <Employee>
                    {props.employee}
                </Employee>
                <ServiceType>
                    {props.service}
                </ServiceType>
                <Time>
                    {props.time}
                </Time>
                <Activity>
                    {props.activity}
                    <FontAwesomeIcon icon={faUser} color={'gray'} />
                </Activity>
           
                <Assigned>
{/* last activity here */}
                </Assigned>

            </CardView>
        </div>
    )
}

export default LocationAssets;
