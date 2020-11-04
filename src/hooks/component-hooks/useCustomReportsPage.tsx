import {useState,} from 'react';
import { useWithFolderSelectionList } from './useFolderSelectionList';
import { ButtonType } from '../../types/ButtonType';
import {folders, order } from '../../util/mockData'; 

type UseCustomReportsPageArgs = {}

export const useCustomReportsPage = () => {
    const [isShowingModal, setIsShowingModalTo] = useState(false);
    const selectionBinding = useWithFolderSelectionList({
        folders,
        order
    });

    const modalButtons = [
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
    ];

    return {
        modalButtons,
        closeModal: () => setIsShowingModalTo(false),
        isShowingModal,
        selectionBinding: {
            ...selectionBinding,
            onDelete: (id:string) => {
                selectionBinding.onDelete(id);
                setIsShowingModalTo(true);
            }
        }
    }
}