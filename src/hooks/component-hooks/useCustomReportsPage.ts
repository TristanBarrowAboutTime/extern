import { useState, useCallback, useMemo } from 'react';
import { useWithFolderSelectionList } from './folder-selection-list/useFolderSelectionList';
import { ButtonType } from '../../types/ButtonType';
import { folders, order } from '../../mock-data/customReportsData'; 

export const useCustomReportsPage = () => {
    const [isShowingModal, setIsShowingModalTo] = useState(false);
    const selectionBinding = useWithFolderSelectionList({
        folders,
        order
    });

    const modalButtons = useMemo(() => [
        {
            buttonType: ButtonType.RED, 
            text:'Yes, Delete', 
            onClick: () => {
                setIsShowingModalTo(false);
                selectionBinding.deleteFolder();
            }
        },
        {
            buttonType: ButtonType.NORMAL, 
            text:'Cancel', 
            onClick: () => {
                setIsShowingModalTo(false);
            }
        }
    ], [selectionBinding]);

    const onDelete = useCallback((id:string) => {
        selectionBinding.onDelete(id);
        setIsShowingModalTo(true);
    }, [selectionBinding]);

    return {
        modalButtons,
        closeModal: () => setIsShowingModalTo(false),
        isShowingModal,
        folderName: selectionBinding.folderName,
        selectionBinding: {
            ...selectionBinding,
            onDelete
        }
    }
}