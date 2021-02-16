import * as React from 'react';
import styled from 'styled-components/native';
import { useEmployeeHistoryData } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeHistoryData';

type CompTheme = {
    
}

const STRINGS = {
    TIME: 'Time',
    CORDS: 'Coordinates',
    ACCURACY: 'Accuracy'
}


const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

`;
type TimeStyle = {
    isClockedIn: boolean
}

const Time = styled.Text`
    color: ${(props: TimeStyle) => props.isClockedIn ? '#79A949' : '#9B3E38'};
    font-weight: 600;
`;

const Cords = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
`;

const Lat = styled.View`
    margin-right: 10px;
`;

const Long = styled.View`

`;

const Header = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 600;
    padding: 10px;
`;

const ColumnHeader = styled.Text`

`;

const Accuracy = styled.Text`
    display: flex;
    justify-content: left;
    align-items: stretch;
    text-align: left;
    
`;

type EmployeeHistoryListProps = {
    filterValue: string
}


const EmployeeHistoryList = (props: EmployeeHistoryListProps) => {
    const value = props.filterValue.toLowerCase();
    const employeeHistoryRecords = useEmployeeHistoryData();

    return (
        <>
            <Header>
                <ColumnHeader>{STRINGS.TIME}</ColumnHeader>
                <ColumnHeader>{STRINGS.CORDS}</ColumnHeader>
                <ColumnHeader>{STRINGS.ACCURACY}</ColumnHeader>
            </Header>
            {employeeHistoryRecords.map((employeeHistoryRecord) => {
                const {
                    time,
                    coordinates: { lat, long },
                    accuracy,
                    isClockedIn
                } = employeeHistoryRecord;

                const shouldRenderRow = (
                    time.toLowerCase().includes(value) ||   
                    lat.toString().includes(value) ||
                    long.toString().includes(value) || 
                    accuracy.toLowerCase().includes(value)
                );

                if (shouldRenderRow) {
                    return (
                        <Container>
                            <Time isClockedIn={isClockedIn}>
                                {time}
                            </Time>
                            <Cords>
                                <Lat>{lat}</Lat>
                                <Long>{long}</Long>
                            </Cords>
                            <Accuracy>{accuracy}</Accuracy>
                        </Container>
                    )
                }
            })}
        </>
    )
}

export default EmployeeHistoryList;