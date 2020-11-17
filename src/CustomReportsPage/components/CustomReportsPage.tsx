import * as React from 'react';
import FolderSelectionList from './folder-selection-list/FolderSelectionList';
import Modal from './molecular-components/Modal';
import styled from 'styled-components';
import { useCustomReportsPage } from '../hooks/component-hooks/useCustomReportsPage';
import FolderView from './folders-view/FolderView';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const CustomReportsPage = () => {
    const binding = useCustomReportsPage();
    console.log(binding.selectionBinding)
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
            />
        </Container>
    );
}

export default CustomReportsPage;