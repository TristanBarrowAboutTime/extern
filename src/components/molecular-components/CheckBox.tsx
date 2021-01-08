import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Styles from '../../style/Styles';

const CheckboxContainer = styled.div`
    position: relative;
    display: block;
`

const HiddenCheck = styled.input.attrs({ type: 'checkbox'})`
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
    padding: 0;
    margin: 0;
`;

type BoxProps = {
    checked: boolean
}

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 1px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 0;
    border: 1px solid ${Styles.color.gray.dark};

    ${HiddenCheck}:focus + & {
        margin: 0;
        border: 2px solid ${Styles.color.green};
    }
`;


type CheckboxProps = {
    isChecked: boolean
    onClick: () => void
}

const CheckBox = (props: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <HiddenCheck checked={props.isChecked} onClick={props.onClick} readOnly />
            <Box onClick={() => props.onClick()}>
                {props.isChecked && <FontAwesomeIcon icon={faCheck} color={'black'} size={'xs'} />}
            </Box>
        </CheckboxContainer>
    );
}

export default CheckBox;