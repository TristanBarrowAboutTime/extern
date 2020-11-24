import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Box = styled.div`
    position: relative; 
    border: 1px solid black;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckBoxCover = styled.div`
    position: absolute;
    background-color: transparent;
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

/**
 * for some reason the checkmark icon fails to register as a part of a ref on a popout.
 * For now I'm just covering it with CheckBoxCover so the checkmark cannot be clicked.
 */

const CheckBox = (props: CheckboxProps) => {
    return (
        <Box onClick={() => props.onClick()}>
            {props.isChecked && <FontAwesomeIcon icon={faCheck} color={'black'} size={'xs'} />}
        </Box>
    );
}

export default CheckBox;