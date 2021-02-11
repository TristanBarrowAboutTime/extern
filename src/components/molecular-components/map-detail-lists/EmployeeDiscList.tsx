import * as React from 'react';
import styled from 'styled-components/native';
import RNHoverable from '../../atomic-components/RNHoverable';
import { useEmployeeDescrepancyData } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeDescrepancyData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const STRINGS = {
    NOTES: 'Notes',
    CLOCK_IN: 'Clock-IN',
    CLOCK_OUT: 'Clock-OUT',
    GEOFENCE_WARNING: 'is outside of Geofence by',
}

export type CompTheme = {
    colors: {
        active: string
        error: string
        text: string
    }
    components: {
        cardShadow: string
        cardBorderRadius: number
    }
    fontSizes: {
        normal: number
    }
    font: {
        weight: {
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
            cardShadow: '0 1px 4px #cccccc',
            cardBorderRadius: 4
        },
        fontSizes: {
            normal: 15
        },
        font: {
            weight: {
                bold: 'bold'
            }
        }
    } as CompTheme
}

const CardView = styled.View`
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
`;

CardView.defaultProps = DEFAULT_THEME;

const Header = styled.Text`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    padding-bottom: 8px;
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal};
    font-weight: 600;
    
`;

Header.defaultProps = DEFAULT_THEME;

const Location = styled.Text`
    font-weight: ${(props: { theme: CompTheme }) => props.theme.font.weight.bold};

`;

const LinkPopout = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-right: 8px; 
    padding-left: 8px;
    background-color: white;
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    
`;

const LinkPopoutText = styled.Text`
    margin-right: 5px;
    white-space: nowrap;
`;

const ErrorTimePunch = styled.Text`
    font-weight: bold;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.error};
`;

ErrorTimePunch.defaultProps = DEFAULT_THEME;

const ActiveTimePunch = styled.Text`
    font-weight: bold;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.active};
`;

ActiveTimePunch.defaultProps = DEFAULT_THEME;

const DiscrepancyMessage = styled.Text`
    display: flex;
    width: auto;
    padding-bottom: 16px;
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal};
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
`;

DiscrepancyMessage.defaultProps = DEFAULT_THEME;

const NoteLabel = styled.Text`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal}px;
    font-weight: ${(props: { theme: CompTheme }) => props.theme.font.weight.bold};
`;

NoteLabel.defaultProps = DEFAULT_THEME;

const NotesBody = styled.Text`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    font-size: ${(props: { theme: CompTheme }) => props.theme.fontSizes.normal}px;
`;

NotesBody.defaultProps = DEFAULT_THEME;

type EmployeeDiscListProps = {
    filterValue: string
}

const EmployeeDiscList = (props: EmployeeDiscListProps) => {
    const value = props.filterValue.toLowerCase();
    const employeeDescrepancyData = useEmployeeDescrepancyData();

    return (
        <>
            {employeeDescrepancyData.map((descrepancyRecord) => {
                const { 
                    time, 
                    notes,
                    isAClockin,
                    jobLocation, 
                    units,
                    unitsOutSide, 
                } = descrepancyRecord;

                const punchType = isAClockin ? STRINGS.CLOCK_IN : STRINGS.CLOCK_OUT;
                const descrpeancyMessage = `${punchType} ${STRINGS.GEOFENCE_WARNING} ${unitsOutSide} ${units}.`;

                const cardShouldDisplay: boolean = (
                    jobLocation.toLowerCase().includes(value) ||
                    descrpeancyMessage.toLowerCase().includes(value) || 
                    time.toLowerCase().includes(value) ||
                    notes.toLowerCase().includes(value)
                );
                
                if (cardShouldDisplay) {
                    return (
                        <CardView>
                            <Header>
                                <Location>{jobLocation}</Location>
                                <RNHoverable
                                    position={{ horizontal: 0, vertical: -20 }}
                                    popout={
                                        <LinkPopout >
                                            <LinkPopoutText>Open in Time Editor</LinkPopoutText>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} size={10} />
                                        </LinkPopout>
                                    }
                                >
                                    {isAClockin ? (
                                        <ErrorTimePunch>{time}</ErrorTimePunch>
                                    ) : ( 
                                        <ActiveTimePunch>{time}</ActiveTimePunch> 
                                    )}
                                </RNHoverable>
                            </Header>
                            <DiscrepancyMessage>{descrpeancyMessage}</DiscrepancyMessage>
                            <NoteLabel>{STRINGS.NOTES}</NoteLabel>
                            <NotesBody>{notes}</NotesBody>
                        </CardView>
                    );
                }
            })}
        </>
    )
}

export default EmployeeDiscList;