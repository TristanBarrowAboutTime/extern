import * as React from 'react';
import styled from 'styled-components/native';

const Time = styled.View`
`;
const CoordinatesArea = styled.View`
`;

const Accuracy = styled.View`
`;

type EmployeeHistoryListProps = {
    time: React.ReactNode
    coordinates: React.ReactNode
    accuracy: React.ReactNode

}

const EmployeeHistoryList = (props: EmployeeHistoryListProps) => {
    return (
        <div>
            <Time>
                {props.time}
            </Time>
            <CoordinatesArea>
                <div>
                    {props.coordinates}
                </div>
                <div>
                    {props.coordinates}
                </div>
            </CoordinatesArea>
            <Accuracy>
                {props.accuracy}
            </Accuracy>

        </div>
    )
}

export default EmployeeHistoryList;