import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import { useHoverable } from '../../../../hooks/useHoverable';
import Styles from '../../../../style/Styles';

type EventType = React.MouseEvent<HTMLDivElement, MouseEvent>;

const Cell = styled.td`
    border-right: ${Styles.grid.border};
    padding: 8px;

`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CellText = styled.span``;

type HoverableCellProps = {
    children: React.ReactNode | React.ReactChildren,
    onClick: (event: EventType) => void
}

const HoverableCell = (props: HoverableCellProps) => {
    const { isHovered, bind } = useHoverable(false);

    return (
        <Cell {...bind}>
            <Container>
                <CellText>{props.children}</CellText>
                {isHovered && (
                    <div onClick={props.onClick}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                )}
            </Container>
        </Cell>
    );
}

export default HoverableCell;