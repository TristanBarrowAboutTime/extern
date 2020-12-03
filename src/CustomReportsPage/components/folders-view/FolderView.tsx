import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useWithSearchBar } from '../../hooks/component-hooks/atomic-components/useSearchBar';
import Modal from '../molecular-components/Modal';
import { ButtonType } from '../../types/ButtonType';
import { useWithPopoutMenu } from '../../hooks/component-hooks/molecular-components/usePopoutMenu';
import NormalButtonRow from './button-groups/NormalButtonRow';
import NormalGrid from '../grid/NormalGrid';
import { Folders } from '../../types/Folders';
import NormalFolderViewPopout from './NormalFolderViewPopout';

const rd = (name: string, description: string, frequencyType: string, nextRunDate: string, lastRunDate: string) => {
    return {reportName: name, description, frequencyType, nextRunDate, lastRunDate }
}

let gridData: any = [];
gridData.push(rd('Dummy Report Name', 'This is a dummy description.it needs to be kind of long but not too long.it needs to be kind of long but not too long. it needs to be kind of long but not too long.','Dummy Frequency Type', '10/10/10 10:10pm', '10/10/10 10:10pm'));

const Container = styled.div`
    width: 100%;
    margin: 0 32px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 8px;
`;

const FolderName = styled.div`
    font-size: 36px;
    font-weight: 900;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400px;
    margin-bottom: 8px;
`;

type FolderViewProps = {
    folderName: string
    folders: Folders
}

const FolderView = (props: FolderViewProps) => {
    const binding = useFolderView();
    
    return (
        <Container>
            <Header>
                <FolderName>{props.folderName}</FolderName>
                <NormalButtonRow 
                    onDelete={binding.closeModal}
                    moveFolderContent={<div>Move Folder</div>}
                    sharingContent={<div>sharing</div>}
                    searchBinding={binding.searchBinding}
                    folders={props.folders}
                />
            </Header>
            <NormalGrid 
                filterValue={binding.searchValue} 
                popoutMenu={binding.popoutMenu} 
                popoutContent={
                    <NormalFolderViewPopout 
                        selectedRow={binding.selectedRow}
                        run={() => {}}
                        edit={() => {}}
                        share={() => {}}
                        duplicate={() => {}}
                        deleteReport={() => {}}
                    />
                }
                selectRow={(rowIndex: number) => binding.selectRow(rowIndex)}
            />
            {binding.showModal && <Modal 
                title={'Confirm Delete'}
                content={'Are you sure you want to delete this report?'}
                closeModal={binding.closeModal}
                buttons={[
                    {
                        text: 'Delete',
                        buttonType: ButtonType.RED,
                        onClick: binding.closeModal
                    },
                    {
                        text: 'Cancel',
                        buttonType: ButtonType.NORMAL,
                        onClick: binding.closeModal
                    }
                ]}
            />}
        </Container>
    );
}

type UseFolderViewArgs = {

}

const useFolderView = () => {
    const [showModal, setShowModalTo] = useState(false);
    const searchBar = useWithSearchBar();
    const popoutMenu = useWithPopoutMenu();
    const [selectedRow, setSelectedRowTo] = useState(0);

    return {
        showModal,
        openModal: () => setShowModalTo(true),
        closeModal: () => setShowModalTo(false),
        selectRow: setSelectedRowTo,
        selectedRow,
        popoutMenu,
        searchBinding: searchBar.searchBinding,
        searchValue: searchBar.value
    }
}


export default FolderView;