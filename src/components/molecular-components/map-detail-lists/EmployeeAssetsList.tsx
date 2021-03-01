import * as React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { useEmployeeAssetData } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeAssetData';

type CompTheme = {
    colors: {
        active: string
        error: string
        text: string
    }
    components: {
        cardShadow: string
    }
}

const DEFAULT_THEME = {
    theme: {
        colors: {
            active: 'green',
            error: 'red',
            text: 'black',
        },
        components: {
            cardShadow: '0 1px 4px #cccccc'
        }
    }
}

const CardView = styled.View`
    width: auto;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
`;
CardView.defaultProps = DEFAULT_THEME;

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: baseline;
`;

const TimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 8px;
    padding-left: 10px;

`;

const TimeIn = styled.Text`
    padding-right: 20px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.active};
`;

TimeIn.defaultProps = DEFAULT_THEME;

const TimeOut = styled.View`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.error};
`;

TimeOut.defaultProps = DEFAULT_THEME;

const Title = styled.Text`
    padding-left: 10px;
    padding-bottom: 10px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.error};
    font-size: 15px;
    font-weight: 600;

`;

Title.defaultProps = DEFAULT_THEME;


const SubTitle = styled.View`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px;  
`;

SubTitle.defaultProps = DEFAULT_THEME;

type EmployeeAssetsListProps = {
    filterValue: string
    theme?: CompTheme
}

const EmployeeAssetsList = ({
    filterValue,
    theme = DEFAULT_THEME.theme
}: EmployeeAssetsListProps) => {
    const value = filterValue.toLowerCase();
    const employeeAssetData = useEmployeeAssetData();

    return (
        <>
            {employeeAssetData.map((employeeAssetRecord) => {
                const {
                    timeIn,
                    timeOut,
                    assetName,
                    location,
                    costCode,
                } = employeeAssetRecord;

                const _timeOut = timeOut !== null ? timeOut : '';
                const shouldRenderRecord = (
                    timeIn.toLowerCase().includes(value) ||
                    _timeOut.toLowerCase().includes(value) ||
                    location.toLowerCase().includes(value) ||
                    assetName.toLowerCase().includes(value) ||
                    costCode.toLowerCase().includes(value)
                );

                if (shouldRenderRecord) {
                    return (
                        <CardView>
                            <Header>
                                <TimeContainer>
                                    <TimeIn>{timeOut}</TimeIn>
                                    {timeOut !== null && (
                                        <TimeOut>{timeOut}</TimeOut>
                                    )}
                                </TimeContainer>
                                <FontAwesomeIcon 
                                    icon={faLocationArrow} 
                                    color={theme.colors.text}
                                />
                            </Header>
                            <Title>{assetName}</Title>
                            <SubTitle>{location}</SubTitle>
                            <SubTitle>{costCode}</SubTitle>
                        </CardView>
                    )
                }
            })}
        </>
    )
}

export default withTheme(EmployeeAssetsList);