import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import { useHoverable } from '../../../hooks/useHoverable';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

const NormalCell = styled.div`
    white-space: nowrap;
    margin-left: 8px;
    margin-right: 8px;
`;

const IconContainer = styled.div`
    width: 24px;
    :hover {
        cursor: pointer;
    }
`;

type HoverableEditCellProps = {
    canHover: boolean
    children: React.ReactNode,
    onClickEdit: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const HoverableEditCell = (props: HoverableEditCellProps) => {
    const { isHovered, bind } = useHoverable(false);

    return (
        <Container {...bind} >
            <NormalCell>{props.children}</NormalCell> 
                <IconContainer onClick={props.onClickEdit}>
                    {isHovered && <FontAwesomeIcon icon={faEllipsisH} />}
                </IconContainer>
        </Container>
    );
}

export default HoverableEditCell;