import React, { useState } from 'react';
import Button from "../../atomic-components/Button";
import { HSpacer } from '../../atomic-components/CssTriangle';
import { ButtonType } from '../../../types/ButtonType'
import styled from 'styled-components';
import SearchBar, { SearchBarProps } from '../../atomic-components/SearchBar';

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

type ScheduledReportsButtonRowProps = {
    newSchedule: () => void
    searchBinding: SearchBarProps
}

const ScheduledReportsButtonRow = (props: ScheduledReportsButtonRowProps) => {
    const [showModal, setShowModalto] = useState(false);

    return (
        <ButtonRow>
            <Button
                buttonType={ButtonType.GREEN}
                text='New Report Schedule'
                onClick={props.newSchedule}
            />
            <HSpacer size={8} />
            <SearchBar {...props.searchBinding} />
        </ButtonRow>
    )
}

export default ScheduledReportsButtonRow;