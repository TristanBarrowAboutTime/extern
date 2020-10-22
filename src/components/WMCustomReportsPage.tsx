import React, { useState } from 'react';
import WMFolderSelectionList from './WMFolderSelectionList';
import { createUseStyles } from 'react-jss';
import WMModal from './molecular-components/WMModal';
import { ButtonType } from './atomic-components/WMButton';
import { FolderId } from '../types/FolderId';

let IDCounter = 22;

const tmpFolders: FolderId[] = [
    {
        id: 1,
        name: 'All Reports',
        editable: false
    },
    {
        id:2,
        name: 'Favorites',
        editable: false
    },
    {
        id: 3,
        name: 'Recent',
        editable: false
    },
    {
        id:4,
        name: 'Created by Me blah blah blah blah blah blah blah blah',
        editable: true
    },
    {
        id:5,
        name: 'Shared',
        editable: true
    },
    {
        id:6,
        name: 'Scheduled',
        editable: true
    },
    {
        id:7,
        name: 'Job Reports',
        editable: true
    },
    {
        id:8,
        name: 'Productivity Reports',
        editable: true
    },
    {
        id:9,
        name: 'Created by Me2',
        editable: false
    },
    {
        id:10,
        name: 'Shared2',
        editable: true
    },
    {
        id: 11,
        name: 'Scheduled2',
        editable: true
    },
    {
        id: 12,
        name: 'Job Reports2',
        editable: true
    },
    {
        id: 13,
        name: 'Productivity Reports2',
        editable: true
    },
    {
        id:14,
        name: 'Shared3',
        editable: true
    },
    {
        id:15,
        name: 'Scheduled3',
        editable: true
    },
    {
        id:16,
        name: 'Job Reports3',
        editable: true
    },
    {
        id: 17,
        name: 'Productivity Reports3',
        editable: true
    },
    {
        id:18,
        name: 'Shared4',
        editable: true
    },
    {
        id:19,
        name: 'Scheduled4',
        editable: true
    },
    {
        id:20,
        name: 'Job Reports4',
        editable: true
    },
    {
        id: 21,
        name: 'Productivity Reports4',
        editable: true
    },
];


export const CustomReportsPage = () => {
    const classes = useStyles();
    const [folders, setFolders] = useState(tmpFolders);
    const [selectedFolder, selectFolder] = useState(tmpFolders[0]);
    const [isEditable, setEditableTo] = useState(true);
    const [isShowingModal, setIsShowingModalTo] = useState(false);
    const [folderToDelete, setFolderToDelete] = useState<number|null>(null);
    
    const nameIsUnique = (name: string) => {
        let isUnique: boolean = true;
        folders.forEach((folder) => {
            if (folder.name === name) {
                isUnique = false;
            } 
        });
        return isUnique;
    }

    // This will need to be modified to work with the back end.
    const renameFolder = (oldName: string, newName: string): boolean => {
        newName = newName.trim();
        if (nameIsUnique(newName)) {
            let tmp = tmpFolders;
            tmp.forEach((folder, index) => {
                if (folder.name === oldName) {
                    tmp[index] = { id: folder.id, name: newName, editable: folder.editable};
                    setFolders(tmp);
                }
            });
            return true;
        } else {
            return false;
        }
    }

    const addNewFolder = (folderName: string): boolean => {
        if (nameIsUnique(folderName)) {
            setFolders([...folders, { id: IDCounter, name: folderName, editable: true }])
            IDCounter++;
            return true;
        } else {
            return false;
        }
    }

    const onDeleteFolder = (id: number) => {
        setIsShowingModalTo(true);
        setFolderToDelete(id);

    }

    const deleteFolder = (id: number) => {
        let i: number = -1;
        folders.forEach((folder, index) => {
            if (folder.id === id) {
                i = index;
            }
        });
        setFolders(folders.slice(0,i).concat(folders.slice(i+1)));
        console.log('onDelete', id);
        setFolderToDelete(null);
    }

    const modalButtons = [
        {
            buttonType: ButtonType.RED, 
            text:'Yes, Delete', 
            onClick: () => {
                setIsShowingModalTo(false);
                if (folderToDelete !== null) {
                    deleteFolder(folderToDelete);
                }
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

    return (
        <div className={classes.container}>
            {isShowingModal && <WMModal 
                title={'Confirm Delete'} 
                content={'Are you sure you want to delete this folder?'}
                buttons={modalButtons}
                closeModal={() => setIsShowingModalTo(false)}
            />}
            <WMFolderSelectionList 
                folders={folders}
                selectedFolder={selectedFolder}
                selectFolder={(folder) => {selectFolder(folder)}}
                isEditable={isEditable}
                renameFolder={renameFolder}
                addNewFolder={addNewFolder}
                setEditableTo={setEditableTo}
                onDelete={onDeleteFolder}
            />
            <div>{"folders view"}</div>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#E5E5E5'
    }
});

export default CustomReportsPage;