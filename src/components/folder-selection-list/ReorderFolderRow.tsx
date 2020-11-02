import React from 'react';
import { Up, Down, VSpacer } from '../atomic-components/CssTriangle';
import styled from 'styled-components';
import Styles from '../../style/Styles';

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
    padding-left: 32px;
    width: calc(100% - 32px);
    padding-left: ${Styles.size.large};
    padding-right: 0;
    color: #4D4D4D;
    max-Width: 310px;
    
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

const SwapIconContainer = styled.div`
    height: 21;
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
                <Up onClick={tradeUp} />
                <VSpacer size={5} />
                <Down onClick={tradeDown} />
            </SwapIconContainer>}
        </Container>
    );
}

export default ReorderFolderRow;