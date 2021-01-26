import * as React from 'react';
import styled from 'styled-components/native';
import Styles from '../../../style/Styles';



const CardView = styled.View`
    width:auto;
    padding: 10px;
    margin-top:10;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
    shadow-color: grey;
    shadow-opacity: 0.8;
`;

const CompanyArea = styled.Text`
    color: #525252;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding-bottom:10px;
    font-size:15px;
    font-weight:600;
    
`;

type TimeStyle = {
    isClockedIn: boolean
}

const Time = styled.Text`
    color: ${(props: TimeStyle) => props.isClockedIn ? '#79A949' : '#9B3E38'};
   
`;

const Distance = styled.Text`
    display:flex;
    width:auto;
    padding-bottom:20px;
    font-size:15px;
    color:#9B3E38;

`;

const Notes = styled.Text`
    color: #525252;
    display:flex;
    font-size:15px;
    font-weight:600;
`;
const Text = styled.Text`
    color: #525252;
    display:flex;
    padding-bottom:10px;
    font-size:15px;
`;

export type EmployeeDiscRecord = {
    company: string
    time: string
    distance: string
    notes: string
    text: string
}

type EmployeeDiscListProps = {
    discRecords: EmployeeDiscRecord[]
    filterValue: string
}

const EmployeeDiscList = (props: EmployeeDiscListProps) => {
    const value = props.filterValue.toLowerCase();
    return (
        <>
            {props.discRecords.map((item) => {
                if (item.company.toLowerCase().includes(value) ||
                    item.time.toLowerCase().includes(value) ||
                    item.distance.toLowerCase().includes(value) ||
                    item.text.toLowerCase().includes(value)) {
                    return (
                        <CardView>

                            <CompanyArea>
                                {item.company}

                                <Time isClockedIn={true} >
                                    {item.time}
                                </Time>

                            </CompanyArea>

                            <Distance>
                                {item.distance}
                            </Distance>

                            <Notes>
                                {item.notes}
                            </Notes>
                            <Text>
                                {item.text}
                            </Text>
                        </CardView>

                    )
                }

            })}
        </>
    )
}

export default EmployeeDiscList;