import * as React from 'react';
import styled from 'styled-components/native';
import { useEmployeeDescrepancyData } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeDescrepancyData';

const STRINGS = {
    NOTES: 'Notes',
    CLOCK_IN: 'Clock-IN',
    CLOCK_OUT: 'Clock-OUT',
    GEOFENCE_WARNING: 'is outside of Geofence by',
}

type CompTheme = {
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
        
    } as CompTheme
}

const CardView = styled.View`
    width: auto;
    padding: 10px;
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
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
    
`;

Header.defaultProps = DEFAULT_THEME;

const Location = styled.Text`

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
    padding-bottom: 20px;
    font-size: 15px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
`;

DiscrepancyMessage.defaultProps = DEFAULT_THEME;

const NoteLabel = styled.Text`
    font-size: 15px;
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    font-weight: 600;
`;

NoteLabel.defaultProps = DEFAULT_THEME;

const NotesBody = styled.Text`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text};
    padding-bottom: 10px;
    font-size: 15px;
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
                                {isAClockin ? (
                                    <ErrorTimePunch>{time}</ErrorTimePunch>
                                ) : ( 
                                    <ActiveTimePunch>{time}</ActiveTimePunch> 
                                )}
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