import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding-bottom:10px;

`;
type TimeStyle = {
    isClockedIn: boolean
}

const Time = styled.View`
color: ${(props: TimeStyle) => props.isClockedIn ? '#79A949' : '#9B3E38'};
 font-weight:600;
`;

const CoordinatesArea = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;
text-align:left;
`;

const CoordinatesLat = styled.Text`
margin-right:10px;
`;

const CoordinatesLong = styled.Text`

`;

const Title = styled.View`
display:flex;
flex-direction: row;
justify-content:space-between;
font-weight:600;
padding:10px;
`;
const Accuracy = styled.View`
display:flex;
justify-content:left;
align-items:stretch;
text-align:left;
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
}


const EmployeeHistoryList = (props: EmployeeHistoryListProps) => {
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
            })}

        </>
    )
}

export default EmployeeHistoryList;