import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding-bottom:10px;

`;
type TimeStyle ={
    isClockedIn: boolean
}

const Time = styled.View`
color: ${(props:TimeStyle) => props.isClockedIn ? '#79A949' : '#9B3E38'};
 font-weight:600;
`;

const CoordinatesArea = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;
`;

const CoordinatesLat = styled.Text`
margin-right:10px;
`;

const CoordinatesLong = styled.Text`

`;

const Accuracy = styled.View`
`;

type EmployeeHistoryListProps = {
    time: string
    isClockedIn: boolean
    coordinates: {lat:number ,long: number}
    accuracy: React.ReactNode

}

const EmployeeHistoryList = (props: EmployeeHistoryListProps) => {
    return (
        <Container>
            <Time isClockedIn={props.isClockedIn}>
                {props.time}
            </Time>
            <CoordinatesArea>
                <CoordinatesLat>
                    {props.coordinates.lat}
                </CoordinatesLat>
                <CoordinatesLong>
                    {props.coordinates.long}
                </CoordinatesLong>
            </CoordinatesArea>
            <Accuracy>
                {props.accuracy}
            </Accuracy>

        </Container>
    )
}

export default EmployeeHistoryList;