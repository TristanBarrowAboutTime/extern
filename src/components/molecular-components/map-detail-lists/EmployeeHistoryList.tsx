import { latLng } from 'leaflet';
import * as React from 'react';
import styled from 'styled-components/native';

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
    font-weight:600;
`;

const CoordinatesArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
`;

const CoordinatesLat = styled.View`
    margin-right:10px;
`;

const CoordinatesLong = styled.View`

`;

const Title = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 600;
    padding: 10px;
`;

const Accuracy = styled.Text`
    display: flex;
    justify-content: left;
    align-items: stretch;
    text-align: left;
    
`;

export type EmployeeHistoryTimeRecord = {
    id: number
    time: string
    isClockedIn: boolean
    coordinates: { lat: number, long: number }
    accuracy: string

}
type EmployeeHistoryListProps = {
    timeRecords: EmployeeHistoryTimeRecord[]
    filterValue: string
}


const EmployeeHistoryList = (props: EmployeeHistoryListProps) => {
    const value = props.filterValue.toLowerCase();

    console.log(props.filterValue);
    return (
        <>
            <Title>
                <div>
                    Time
                </div>
                <div>
                     Coordinates
                </div>
                <div>
                     Accuracy
                </div>
            </Title>
            {props.timeRecords.map((item) => {
                if (item.time.toLowerCase().includes(value) ||   
                    item.coordinates.lat.toString().includes(value) ||
                    item.coordinates.long.toString().includes(value) || 
                    item.accuracy.toLowerCase().includes(value)) 
                {
                    return (
                        <Container>
                            <Time isClockedIn={item.isClockedIn}>
                                {item.time}
                            </Time>
                            <CoordinatesArea>
                                <CoordinatesLat>
                                    {item.coordinates.lat}
                                </CoordinatesLat>
                                <CoordinatesLong>
                                    {item.coordinates.long}
                                </CoordinatesLong>
                            </CoordinatesArea>
                            <Accuracy>
                                {item.accuracy}
                            </Accuracy>
                        </Container>
                    )
                }
            })}
        </>
    )
}

export default EmployeeHistoryList;