import * as React from 'react';
import styled from 'styled-components/native';

const CompanyArea = styled.Text`
`;

const Time = styled.Text`
`;

const Distance = styled.Text`
`;

const Notes = styled.Text`
`;

const CardView = styled.View`
    padding-left:10;
    padding-right:10;
    padding-top:10;
    padding-bottom:10;
    margin-top:10;
    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
`;


type EmployeeDiscListProps = {
    company: string
    time: string
    distance: string
    notes: string
}

const EmployeeDiscList = (props: EmployeeDiscListProps) => {
    return (
        <CardView>
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

        </CardView>

    )
}

export default EmployeeDiscList;