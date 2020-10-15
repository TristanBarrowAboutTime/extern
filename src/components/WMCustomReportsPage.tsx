import React, { useState } from 'react';
import WMFolderSelectionList from './WMFolderSelectionList';
import { createUseStyles } from 'react-jss';
import { isTemplateSpan } from 'typescript';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#E5E5E5'
    }
});

const tmpFolders = [
    {
        name: 'All Reports',
        editable: false
    },
    {
        name: 'Favorites',
        editable: false
    },
    {
        name: 'Recent',
        editable: false
    },
    {
        name: 'Created by Me',
        editable: false
    },
    {
        name: 'Shared',
        editable: true
    },
    {
        name: 'Scheduled',
        editable: true
    },
    {
        name: 'Job Reports',
        editable: true
    },
    {
        name: 'Productivity Reports',
        editable: true
    },
    {
        name: 'Created by Me2',
        editable: false
    },
    {
        name: 'Shared2',
        editable: true
    },
    {
        name: 'Scheduled2',
        editable: true
    },
    {
        name: 'Job Reports2',
        editable: true
    },
    {
        name: 'Productivity Reports2',
        editable: true
    },
    {
        name: 'Shared3',
        editable: true
    },
    {
        name: 'Scheduled3',
        editable: true
    },
    {
        name: 'Job Reports3',
        editable: true
    },
    {
        name: 'Productivity Reports3',
        editable: true
    },
    {
        name: 'Shared4',
        editable: true
    },
    {
        name: 'Scheduled4',
        editable: true
    },
    {
        name: 'Job Reports4',
        editable: true
    },
    {
        name: 'Productivity Reports4',
        editable: true
    },
]



export const CustomReportsPage = () => {
    const classes = useStyles();
    const [folders, setFolders] = useState(tmpFolders);
    const [selectedFolder, selectFolder] = useState(tmpFolders[0]);
    const [isEditable, setEditableTo] = useState(true);
    
    const nameIsUnique = (name: string) => {
        let isUnique: boolean = true; 
        folders.forEach((folder) => {
            if (folder.name === name) {
                isUnique = false;
            }   
        });
        return isUnique;
    }

    // somewhat large changes will need to be made to make this work correctly with the back end.
    const renameFolder = (oldName: string, newName: string) => {
        if (nameIsUnique(newName)) {
            let tmp = tmpFolders;
            tmp.forEach((folder, index) => {
                if (folder.name === oldName) {
                    tmp[index] = {name: newName, editable: folder.editable};
                    setFolders(tmp);
                }
            });
        } else {
            // handle not unique case.
        }
    }

    const addNewFolder = (folderName: string) => {
        if (nameIsUnique(folderName)) {
            setFolders([...folders, {name: folderName, editable: true}])
        } else {
            // handle not unique case.
        }
    }

    return (
        <div className={classes.container}>
            <WMFolderSelectionList 
                folders={folders}
                selectedFolder={selectedFolder}
                selectFolder={(folder) => {selectFolder(folder)}}
                isEditable={isEditable}
                renameFolder={renameFolder}
                addNewFolder={addNewFolder}
                setEditableTo={setEditableTo}
            />
            <div>{"folders view"}</div>
        </div>
    );
}

export default CustomReportsPage;