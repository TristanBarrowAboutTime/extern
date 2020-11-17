import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const BoxStyle = styled.div`
    border: 1px solid black;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type CheckboxProps = {
    isChecked: boolean
    onClick: () => void
}

const CheckBox = (props: CheckboxProps) => {
    return (
        <BoxStyle onClick={() => {
            console.log('wasClicked')
            props.onClick();
        }}>
            {props.isChecked && <FontAwesomeIcon icon={faCheck} color={'black'} size={'xs'} />}
        </BoxStyle>
    );
}

export default CheckBox;