import * as React from 'react';
import styled from 'styled-components';
import Styles from '../../../style/Styles';
import { BaseMap, MapActions } from './Map';

const STRINGS = {
    STREET: 'Map',
    SATELLITE: 'Satellite',
    PLUS: '+',
    MINUS: '-',
}

type MapStyle = {
    bold: boolean
}

const HorizonatlRadio = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: white;
    border-radius: 4px;
    top: 16px;
    left: 8px;
    box-shadow: 0 1px 4px #5a5a5a;
`;

const Satellite = styled.div`
    width: 100px;
    text-align: center;
    padding: 8px;
    border-left: 1px solid lightgray;
    font-weight: ${(props: MapStyle) => props.bold ? 'bold' : 'none'};
    :hover { cursor: pointer }
    user-select: none;
`;

const Street = styled.div`
    width: 70px;
    text-align: center;
    padding: 8px;
    font-weight: ${(props: MapStyle) => props.bold ? 'bold' : 'none'};
    :hover { cursor: pointer }
    user-select: none;
`;

const VerticalRadio = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    box-shadow: 0 1px 4px #5a5a5a;
    border-radius: 4px;
    width: 38px;
    top: 65px;
    left: 8px;
`;

const ZoomIn = styled.div`
    line-height: 30px;
    text-align: center;
    padding-bottom: 10px;
    width: 100%;
    font-size: 45px;
    border-bottom: 1px solid lightgray;
    :hover { cursor: pointer }
    user-select: none;
`;
const ZoomOut = styled.div`
    line-height: 30px;
    text-align: center;
    width: 30px;
    font-size: 45px;

    padding-bottom: 10px;

    :hover { cursor: pointer }
    user-select: none;
`;

type MapButtonsProps = {
    actions: MapActions
    selectedMapStyle: BaseMap
}


const MapButtons = (props: MapButtonsProps) => {
    const { setToStreet, setToSatellite, incZoom, decZoom } = props.actions;
    return (
        <>
            <HorizonatlRadio>
                <Street 
                    onClick={setToStreet} 
                    bold={props.selectedMapStyle === BaseMap.BASIC}
                >
                    {STRINGS.STREET}
                </Street>
                <Satellite 
                    onClick={setToSatellite} 
                    bold={props.selectedMapStyle === BaseMap.SATELLITE_STREET}
                >
                    {STRINGS.SATELLITE}
                </Satellite>
            </HorizonatlRadio>
            <VerticalRadio>
                <ZoomIn onClick={incZoom}>
                    {STRINGS.PLUS}
                </ZoomIn>
                <ZoomOut onClick={decZoom}>
                    {STRINGS.MINUS}
                </ZoomOut>
            </VerticalRadio>
        </>
    );
}

export default MapButtons;