import * as React from 'react';
import styled from 'styled-components/native';

const CompanyArea = styled.View`
`;

const Time = styled.View`
`;

const Distance = styled.View`
`;

const Notes = styled.View`
`;

type EmployeeDiscListProps = {
    company: React.ReactNode
    time: React.ReactNode
    distance: React.ReactNode
    notes: React.ReactNode
}

const EmployeeDiscList = (props: EmployeeDiscListProps) => {
    return (
        <div>
            <CompanyArea>
                {props.company}
            </CompanyArea>
            <Time>
                {props.time}
            </Time>

            <Distance>
                {props.distance}
            </Distance>

            <Notes>
                {props.notes}
            </Notes>

        </div>

    )
}

export default EmployeeDiscList;