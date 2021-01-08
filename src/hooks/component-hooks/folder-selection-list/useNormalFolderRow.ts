import { useState, useCallback } from 'react';
import { useWithPopoutMenu } from '../molecular-components/usePopoutMenu';

type UseNormalFolderRowArgs = {
    onDelete: () => void,
    isEditable: boolean
}

export const useNormalFolderRow = (args: UseNormalFolderRowArgs) => {
    const [hovered, setHoveredTo] = useState(false);
    const popout = useWithPopoutMenu();

    const onDeleteOverride = useCallback(() => {
        args.onDelete();
        popout.close();
        setHoveredTo(false);
    },[args, popout]);

    return {
        showEditIcon: args.isEditable && hovered,
        openPopout: popout.open,
        popoutIsOpen: popout.isOpen,
        popoutMenuEvent: popout.menuEvent,
        onMouseEnter: () => setHoveredTo(true),
        onMouseLeave: () => setHoveredTo(false),
        onDeleteOverride
    }
}