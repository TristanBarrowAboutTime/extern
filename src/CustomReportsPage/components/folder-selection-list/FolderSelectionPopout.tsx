import * as React from 'react';
import PopoutMenu, {NormalMenuItem, WarningMenuItem, HR} from '../popout-menu/PopoutMenu';
import { useWithPopoutMenu } from '../../hooks/component-hooks/molecular-components/usePopoutMenu';
import Styles from '../../style/Styles';
import styled from 'styled-components';

const strings = {
    EDIT: 'Edit',
    SHARE: 'Share',
    DELETE: 'Delete'
}

type FolderSelectionPopoutProps = {
    onEdit: () => void
    onDelete: () => void
}

// const MenuItem = styled.div`
//     margin-left: 10px;
//     margin-right: 30px;
// `;

// const DeleteItem = styled(MenuItem)`
//     color: ${Styles.color.red};

// `;

// const Hr = styled.div`
//     height: 1px;
//     margin-top: 5px;
//     margin-bottom: 7px;
//     border-top: 1px solid #525252;
//     border-bottom: 0;
//     border-left: 0;
//     border-right: 0;
// `;

const PopoutContainer = styled.div``;

const FolderSelectionPopout = ({
    onEdit,
    onDelete,
}: FolderSelectionPopoutProps) => {
    const popout =  useWithPopoutMenu();
    return (
        <>
            <NormalMenuItem onClick={onEdit}>{strings.EDIT}</NormalMenuItem>
            <NormalMenuItem onClick={popout.open}>{strings.SHARE}</NormalMenuItem>
            <HR />
            <WarningMenuItem onClick={onDelete}>{strings.DELETE}</WarningMenuItem>
            <PopoutContainer>
                {popout.isOpen && (
                    <PopoutMenu 
                        menuEvent={popout.menuEvent}
                        horizontalFix={490}
                    >
                        <div>{'temp'}</div>
                    </PopoutMenu>
                )}
            </PopoutContainer>
        </>
    )
}

export default FolderSelectionPopout;