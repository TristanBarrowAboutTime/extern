import * as React from 'react';
import { Up, Down, VSpacer } from '../../atomic-components/CssTriangle';
import styled from 'styled-components';

type ReorderFolderRowProps = {
    folderName: string
    isReorderable: boolean
    tradeUp: () => void
    tradeDown: () => void
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-Content: space-between;
    height: 21px;
    margin-left: 32px;
    margin-right: 25px;
    color: #4D4D4D;
    
    ::hover {
        cursor: pointer;
    }
`;

const FolderName = styled.div`
    text-overflow: ellipsis;
    max-width: 300px;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;
`;

const HoverableIcon = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const SwapIconContainer = styled.div`
    height: 21;
    margin-left: 8px;
`;

const ReorderFolderRow = ({
    folderName,
    isReorderable,
    tradeUp,
    tradeDown,
}: ReorderFolderRowProps) => {
    return (
        <Container>
            <FolderName>{folderName}</FolderName>
            {isReorderable && <SwapIconContainer>
                <VSpacer size={3} />
                <HoverableIcon>
                    <Up onClick={tradeUp} />
                </HoverableIcon>
                <VSpacer size={5} />
                <HoverableIcon>
                    <Down onClick={tradeDown} />
                </HoverableIcon>
            </SwapIconContainer>}
        </Container>
    );
}

export default ReorderFolderRow;