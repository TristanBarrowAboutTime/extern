import * as React from 'react';
import styled from 'styled-components/native';
import Styles from '../../../style/Styles';



const CardView = styled.View`
    width:auto;
    padding-left:10;
    padding-right:10;
    padding-top:10;
    padding-bottom:10;
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

type TimeStyle ={
    isClockedIn: boolean
}

const Time = styled.Text`
    color: ${(props:TimeStyle) => props.isClockedIn ? '#79A949' : '#9B3E38'};
   
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

type EmployeeDiscListProps = {
    company: string
    time: string
    distance: string
    notes: string
    text:string
}

const EmployeeDiscList = (props: EmployeeDiscListProps) => {
    return (
        <CardView>
     
            <CompanyArea>
                {props.company}
         

            <Time isClockedIn={true} >

                {props.time}
            </Time>
            </CompanyArea>
        
            <Distance>
                {props.distance}
            </Distance>

            <Notes>
                {props.notes}
            </Notes>
            <Text>
                {props.text}
            </Text>
        </CardView>

    )
}

export default EmployeeDiscList;