import * as React from 'react';
import FolderSelectionList from '../components/cellular-components/folder-selection-list/FolderSelectionList';
import Modal from '../components/molecular-components/Modal';
import styled from 'styled-components';
import { useCustomReportsPage } from '../hooks/component-hooks/useCustomReportsPage';
import FolderView from '../components/cellular-components/folders-view/FolderView';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const CustomReportsPage = () => {
    const binding = useCustomReportsPage();
    
    return (
        <Container>
            {binding.isShowingModal && <Modal 
                title={'Confirm Delete'}
                content={'Are you sure you want to delete this folder?'}
                buttons={binding.modalButtons}
                closeModal={binding.closeModal}
            />}
            <FolderSelectionList {...binding.selectionBinding}/>
            <FolderView
                folderName={binding.folderName}
                folders={binding.selectionBinding.folders}
            />
        </Container>
    );
}

export default CustomReportsPage;