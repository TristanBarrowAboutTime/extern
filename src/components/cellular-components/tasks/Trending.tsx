import React from 'react';
import styled from 'styled-components';
import Styles from '../../../style/Styles';

type TrendingProps = {
    num: number
}

const Text = styled.div`
    font-size: 54px;
    font-weight: 700;
    padding-top: 22px;
    color: ${Styles.color.gray.x_dark};
`;

const RedText = styled(Text)`
    color: ${Styles.color.red};
`;

const GreenText = styled(Text)`
    color: ${Styles.color.green};
`;

const Trending = (props: TrendingProps) => {
    if (props.num < 0 ) return  <RedText>{props.num}</RedText>;
    // if (props.num === 0) return <Text>{props.num}</Text>;
    if (props.num > 0) return <GreenText>{props.num}</GreenText>;
    return <Text>{props.num}</Text>;
}

export default Trending;