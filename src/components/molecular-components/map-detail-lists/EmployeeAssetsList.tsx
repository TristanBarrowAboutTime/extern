import * as React from 'react';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBan, faLocationArrow, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useEmployeeAssetData, AssetRecordType } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeAssetData';

type CompTheme = {
    colors: {
        active: string
        error: string
        text: string
    }
    components: {
        cardShadow: string
    }
    fontSizes: {
        normal: number
    }
    font: {
        weight: {
            normal: string
            bold: string
        }
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
        },
        fontSizes: {
            normal: 16
        },
        font: {
            weight: {
                normal: 'normal',
                bold: 'bold',
            }
        }
    }
}

const CardView = styled.View`
    width: auto;
    padding: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
`;

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    padding: 4px;
    padding-left: 0;
`;

const TimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal};
`;
TimeContainer.defaultProps = DEFAULT_THEME;

const TimeIn = styled.Text`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.active};
`;
TimeIn.defaultProps = DEFAULT_THEME;

const TimeOut = styled.Text`
    padding-left: 20px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.error};
`;
TimeOut.defaultProps = DEFAULT_THEME;

const Title = styled.Text`
    padding-top: 4px;
    padding-bottom: 4px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal}px;
    font-weight: ${(props: { theme: CompTheme }) => props.theme.font.weight.bold};
`;
Title.defaultProps = DEFAULT_THEME;


const SubTitle = styled.Text`
    padding-top: 4px;
    padding-bottom: 4px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal}px;
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
                    type,
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

                let icon = faBan; 
                if (type === AssetRecordType.TIME_RECORD) icon = faLocationArrow;
                if (type === AssetRecordType.ASSIGNMENT)  icon = faUserAlt;

                if (shouldRenderRecord) {
                    return (
                        <CardView>
                            <Header>
                                {type === AssetRecordType.TIME_RECORD && (
                                    <TimeContainer>
                                        <TimeIn>{timeOut}</TimeIn>
                                        {timeOut !== null && (
                                            <TimeOut>{timeOut}</TimeOut>
                                        )}
                                    </TimeContainer>
                                )}
                                {type === AssetRecordType.ASSIGNMENT && (
                                    <Title>{assetName}</Title>
                                )}
                                <FontAwesomeIcon 
                                    icon={icon} 
                                    color={theme.colors.text}
                                />
                            </Header>
                            {type === AssetRecordType.TIME_RECORD && (
                                <Title>{assetName}</Title>
                            )}
                            <SubTitle>{location}</SubTitle>
                            {type === AssetRecordType.TIME_RECORD && (
                                <SubTitle>{costCode}</SubTitle>
                            )}
                        </CardView>
                    )
                }
            })}
        </>
    )
}

export default withTheme(EmployeeAssetsList);