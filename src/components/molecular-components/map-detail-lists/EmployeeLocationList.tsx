import * as React from 'react';
import styled from 'styled-components/native';
import { useEmployeeLocationData } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeLocationData';

export type CompTheme = {
    colors: {
        active: string
        error: string
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

const Container = styled.View`
    width: auto;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: ${(props: { theme: CompTheme }) => props.theme.components.cardShadow};
`;
Container.defaultProps = DEFAULT_THEME;

const Time = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 8px;
    padding-left: 10px;
      
`;

const TimeIn = styled.View`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.active};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
`;
TimeIn.defaultProps = DEFAULT_THEME;

const TimeOut = styled.View`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.error};
    display: flex;
    flex-direction: row;

`;
TimeOut.defaultProps = DEFAULT_THEME;

const Location = styled.View`
    display: flex;
    font-weight: 400;
    padding-left: 10px;
    padding-bottom: 8px;
`;

const JobType = styled.View`
    display: flex;
    font-weight: 400;
    padding-left: 10px;
    padding-bottom: 8px;
`;

type EmployeeLocationListProps = {
    filterValue: string
}

const EmployeeLocationList = (props: EmployeeLocationListProps) => {
    const employeeLocationData = useEmployeeLocationData();
    // const value = props.filterValue.toLowerCase();
    return (
        <>
            {employeeLocationData.map((locationData) => {
                const { timeIn, timeOut, location, jobType } = locationData;
                if (true) { // make search work
                    return (
                        <Container>
                            <Time>
                                <TimeIn>{timeIn}</TimeIn>
                                {timeOut !== null && (
                                    <TimeOut>{timeOut}</TimeOut>
                                )}
                            </Time>
                            <Location>{location}</Location>
                            <JobType>{jobType}</JobType>
                        </Container>
                    );
                }
            })}
        </>
    );
   
}

export default EmployeeLocationList;