import React from 'react';
import PopoutMenu, { useWithPopoutMenu } from '../molecular-components/PopoutMenu';
import styled from 'styled-components';
import Styles from '../../style/Styles';

const strings = {
    EDIT: 'Edit',
    SHARE: 'Share',
    DELETE: 'Delete'
}

type FolderSelectionPopoutProps = {
    onEdit: () => void
    onDelete: () => void
}

const MenuItem = styled.div`
    margin-left: 10px;
    margin-right: 30px;
`;

const DeleteItem = styled(MenuItem)`
    color: ${Styles.color.red};

`;

const Hr = styled.hr`
    border-top: '1px solid black';
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
`;

const PopoutContainer = styled.div``;

const FolderSelectionPopout = ({
    onEdit,
    onDelete,
}: FolderSelectionPopoutProps) => {
    const popout =  useWithPopoutMenu();
    return (
        <>
            <MenuItem onClick={onEdit}>{strings.EDIT}</MenuItem>
            <MenuItem onClick={popout.open}>{strings.SHARE}</MenuItem>
            <Hr />
            <DeleteItem onClick={onDelete}>{strings.DELETE}</DeleteItem>
            <PopoutContainer>
                {popout.isOpen && (
                    <PopoutMenu 
                        menuEvent={popout.menuEvent}
                        horizontalFix={487}
                    >
                        <div>{'temp'}</div>
                    </PopoutMenu>
                )}
            </PopoutContainer>
        </>
    )
}

export default FolderSelectionPopout;