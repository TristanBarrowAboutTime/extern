import React, { useState } from 'react';
import FolderSelectionList from './folder-selection-list/FolderSelectionList';
import { createUseStyles } from 'react-jss';
import Modal from './molecular-components/Modal';
import { ButtonType } from './atomic-components/Button';
import styled from 'styled-components';
import { Folders } from '../types/Folders';
import { objectifyArray } from '../util/objectifyFoldersArray';
let IDCounter = 22;

const tmpFolders: {
    id: number,
    name: string, 
    editable: boolean
}[] = [
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
const order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const response = {
    folders: tmpFolders,
    order: order.map((id) => `id-${id}`)
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #E5E5E5;
`;

export const CustomReportsPage = () => {
    const [folders, setFolders] = useState(objectifyArray(response.folders));
    const [folderOrder, setFolderOrderTo] = useState(response.order);
    const [tempOrder, setTempOrderTo] = useState(response.order);
    const [isReordering, setReorderingTo] = useState(false);
    const [selectedFolder, selectFolder] = useState(folderOrder[0]);
    const [isEditable, setEditableTo] = useState(true);
    const [isShowingModal, setIsShowingModalTo] = useState(false);
    const [folderToDelete, setFolderToDeleteTo] = useState<string|null>(null);
    const [newIdCounter, setNewIdCounterTo] = useState(0);

    const swapDown = (id: string) => {
        const index = tempOrder.indexOf(id);
        console.log(tempOrder)
        if (index !== tempOrder.length - 1) {
        if (!folders[tempOrder[index+1]].editable) return;
            setTempOrderTo([
                ...tempOrder.slice(0,index),
                tempOrder[index+1],
                tempOrder[index],
                ...tempOrder.slice(index+2)
            ])
        }
    }

    const swapUp = (id: string) => {
        const index = tempOrder.indexOf(id);
        if (!folders[tempOrder[index-1]].editable) return;
        if (index !== 0) {
            setTempOrderTo([
                ...tempOrder.slice(0,index-1),
                tempOrder[index],
                tempOrder[index-1],
                ...tempOrder.slice(index+1)
            ]);
        }
    }

    const acceptReordering = () => {
        console.log(tempOrder)
        console.log(folderOrder)
        setFolderOrderTo(tempOrder);
    }

    const cancelReordering = () => {
        setTempOrderTo(folderOrder);
    }

    const nameIsUnique = (name: string) => {
        let isUnique: boolean = true;
        Object.keys(folders).forEach((id) => {
            if (folders[id].name === name) {
                isUnique = false;
            }
        });

        return isUnique;
    }

    // This will need to be modified to work with the back end.
    const renameFolder = (id: string, name: string): boolean => {
        name = name.trim();
        if (nameIsUnique(name)) {
            setFolders({...folders, [id]: {name: name, editable: true}})
            return true;
        } else {
            return false;
        }
    }

    const addNewFolder = (folderName: string): boolean => {
        if (nameIsUnique(folderName)) {
            setFolders({...folders, 
                [`newFolder-${newIdCounter}`]: {
                    name: folderName, 
                    editable: true 
                }
            });
            setNewIdCounterTo(newIdCounter+1);
            return true;
        } else {
            return false;
        }
    }

    const onDeleteFolder = (id: string) => {
        setIsShowingModalTo(true);
        setFolderToDeleteTo(id);
    }

    const deleteFolder = () => {
        console.log(folderToDelete);
        let i: number = -1;
        folderOrder.forEach((id, index) => {
            if (id === folderToDelete) {
                i = index;   
            }
        });
        if (i === -1) {
            throw Error('Folder id does not exist in folder order');
        }

        setFolderOrderTo(folderOrder.slice(0,i).concat(folderOrder.slice(i+1)));
        setFolderToDeleteTo(null);
    }




    const modalButtons = [
        {
            buttonType: ButtonType.RED, 
            text:'Yes, Delete', 
            onClick: () => {
                setIsShowingModalTo(false);
                if (folderToDelete !== null) {
                    deleteFolder();
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
        <Container>
            {isShowingModal && <Modal 
                title={'Confirm Delete'} 
                content={'Are you sure you want to delete this folder?'}
                buttons={modalButtons}
                closeModal={() => setIsShowingModalTo(false)}
            />}
            <FolderSelectionList 
                folders={folders}
                order={isReordering ? tempOrder : folderOrder}
                selectedFolder={selectedFolder}
                selectFolder={(folder) => selectFolder(folder)}
                isReordering={isReordering}
                setReorderingTo={setReorderingTo}
                swapUp={swapUp}
                swapDown={swapDown}
                acceptReordering={acceptReordering}
                cancelReordering={cancelReordering}
                isEditable={isEditable}
                renameFolder={renameFolder}
                addNewFolder={addNewFolder}
                setEditableTo={setEditableTo}
                onDelete={onDeleteFolder}
            />
            <div>{"folders view"}</div>
        </Container>
    );
}

export default CustomReportsPage;