import * as React from 'react';
import PopoutMenu, {NormalMenuItem, WarningMenuItem, HR} from '../popout-menu/ArrowPopout';
import { useWithPopoutMenu } from '../../hooks/component-hooks/molecular-components/usePopoutMenu';
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