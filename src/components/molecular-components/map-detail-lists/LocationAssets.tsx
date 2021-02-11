import * as React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocationAssetData } from '../../../hooks/loadable-data/live-maps/controller/locations/useLocationAssetData';

type CompTheme = {
    colors: {
        normalIcon: string 
    }
    components: {
        cardShadow: string
        borderRadius: string
    }
}

const DEFAULT_THEME = {
    theme: {
        components: {
            cardShadow: '0 1px 4px #cccccc',
            borderRadius: '4px',
        }
    } as CompTheme
}

const CardView = styled.View`
    padding: 10px;
    margin-top: 10px;
    border-radius: ${(props: { theme: CompTheme}) => props.theme.components.borderRadius};
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
`;

CardView.defaultProps = DEFAULT_THEME;

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
    display: flex;
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px; 
`;

const Time = styled.View`
    color: #525252;
    display: flex;
    flex-direction:row;
    align-items: center;
    font-size: 15px;
    padding-bottom: 8px;
    padding-left: 10px;
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
    theme: CompTheme
    color?: string
}

const LocationAssets = ({
    filterValue,
    theme = DEFAULT_THEME.theme
}: LocationAssetsProps) => {
    const value = filterValue.toLowerCase();
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
                                <FontAwesomeIcon icon={faUser} color={theme.colors.normalIcon} />
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

export default withTheme(LocationAssets);
