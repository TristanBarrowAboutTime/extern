import React, { useMemo } from 'react';
import ProgressBar from './PaceBar';
import styled from 'styled-components';
import Styles from '../CustomReportsPage/style/Styles';

type StyleProps = {
    color: string | undefined
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`;

const Title = styled.div`
    font-size: 20px;
    padding-bottom: 4px;
`;

const SmallLabel = styled.div`
    width: 100%;
    text-align: center;
    font-size: 12px;
`;

const SmallLabelLeft = styled.div`
    font-size: 12px;
`;

const LargeLabel = styled.div`
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: ${(props) => props.color || 'black'}; 
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

type PaceCardProps = {
    units: string
    needed: number
    current: number
    hoursLeft: number
}

const PaceCard = (props: PaceCardProps) => {
    const color = useMemo(() => props.current >= props.needed ? Styles.color.green : Styles.color.red, [props.current, props.needed]);
    return (
        <Container>
            <Title>Pace</Title>
            <LargeLabel>{`${props.needed} ${props.units}`}</LargeLabel>
            <SmallLabel>Pace Needed</SmallLabel>
            <SmallLabelLeft>Hours Left: {props.hoursLeft}</SmallLabelLeft>
            <ProgressBar needed={props.needed} pace={props.current} />
            <LargeLabel color={color}>{`${props.current} ${props.units}`}</LargeLabel>
            <SmallLabel>Current Pace</SmallLabel>
        </Container>
    )
}

export default PaceCard; 