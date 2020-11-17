import * as React from 'react';
import EditFolderRow from './EditFolderRow';
import NormalFolderRow from './NormalFolderRow';
import ReorderFolderRow from './ReorderFolderRow';
import { useFolderListItem } from '../../hooks/component-hooks/folder-selection-list/useFolderListItem';

type FolderListItemProps = {
    folder: {name: string, editable: boolean}
    isSelected: boolean
    isEditable: boolean
    reordering: boolean
    nameIsUniq: (name: string) => boolean
    tradeUp: () => void
    tradeDown: () => void
    setSelectedFolder: (_:any) => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (name: string) => boolean
    onDelete: () => void,
}

// eventually this should be split into multiple components.
const FolderListItem = (props: FolderListItemProps) => {

    const binding = useFolderListItem({
        folderName: props.folder.name,
        setEditableTo: props.setEditableTo,
        nameIsUniq: props.nameIsUniq,
        renameFolder: props.renameFolder,
    });
    
    if (binding.editing) {
        return (
            <EditFolderRow
                initial={props.folder.name}
                showError={binding.showError}
                errorText={'That folder name already exists'}
                onAccept={binding.acceptEditing}
                onCancel={binding.cancelEditing}
            />
        );
    } else if (props.reordering) {
        return (
            <ReorderFolderRow 
                folderName={props.folder.name}
                isReorderable={props.folder.editable}
                tradeUp={props.tradeUp}
                tradeDown={props.tradeDown}
            />
        );
    } else {
        return (
            <NormalFolderRow
                folderName={props.folder.name}
                isSelected={props.isSelected}
                isEditable={props.isEditable}
                selectedFolder={() => props.setSelectedFolder(props.folder)}
                onEdit={binding.startEditing}
                onDelete={() => props.onDelete()}
            />
        );
    }
}


export default FolderListItem;