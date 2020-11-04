import React from 'react';
import FolderSelectionList from './folder-selection-list/FolderSelectionList';
import Modal from './molecular-components/Modal';
import styled from 'styled-components';
import { useCustomReportsPage } from '../hooks/component-hooks/useCustomReportsPage';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #E5E5E5;
`;

export const CustomReportsPage = () => {
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
            <div>{"folders view"}</div>
        </Container>
    );
}

export default CustomReportsPage;