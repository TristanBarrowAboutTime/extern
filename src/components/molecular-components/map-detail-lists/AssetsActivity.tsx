import * as React from 'react';
import styled from 'styled-components/native';
import { faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAssetActivityData } from '../../../hooks/loadable-data/live-maps/controller/assets/useAssetActivityData';
import { withTheme } from 'styled-components';

export type CompTheme = {
    colors: {
        text: string
    }
    components: {
        cardShadow: string
    }
}

const DEFAULT_THEME = {
    theme: {
        colors: {
            text: 'gray'
        },
        components: {
            cardShadow: '0 1px 4px #cccccc'
        }
    }
}

const CardView = styled.View`
    margin: 10px;
    width: auto;
    padding: 10px;
    border-radius: 4px;
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
   
`;

CardView.defaultProps = DEFAULT_THEME;

const Row = styled.View`     
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Location = styled.Text`
    font-weight: 600;
`;

const Employee = styled.Text`

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

export const AssetsActivity = ({
    filterValue,
    theme = DEFAULT_THEME.theme
}: AssetsActivityProps) => {
    const mapAssetActivityData = useAssetActivityData();
    const value = filterValue.toLowerCase();
    return (
        <>
            {mapAssetActivityData.map((assetActivity) => {
                const {
                    employee,
                    status,
                    location
                } = assetActivity;
                const shouldRenderAsset = (
                    employee.toLowerCase().includes(value) ||
                    status.toLowerCase().includes(value)
                );
                
                const icon = status == 'assignment' ? faUser : faLocationArrow;

                if (shouldRenderAsset) {
                    return (
                        <CardView>
                            <Row>
                                <Location>{location}</Location>
                                <FontAwesomeIcon icon={icon} color={theme.colors.text} /> 
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