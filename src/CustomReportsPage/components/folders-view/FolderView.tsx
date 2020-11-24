import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useWithSearchBar } from '../../hooks/component-hooks/atomic-components/useSearchBar';
import Modal from '../molecular-components/Modal';
import { ButtonType } from '../../types/ButtonType';
import NormalFolderViewPopout from './NormalFolderViewPopout';
import DeleteGrid from '../grid/DeleteGrid';
import ScheduledReportsButtonRow from './button-groups/ScheduledReportsButtonRow';
import NormalButtonRow from './button-groups/NormalButtonRow';
import DeletedFoldersButtonRow from './button-groups/DeletedFolderButtonRow';
import ScheduledGrid from '../grid/ScheduledGrid';
import NormalGrid from '../grid/NormalGrid';

const rd = (name: string, description: string, frequencyType: string, nextRunDate: string, lastRunDate: string) => {
    return {reportName: name, description, frequencyType, nextRunDate, lastRunDate }
}

let gridData: any = [];
gridData.push(rd('Dummy Report Name', 'This is a dummy description. it needs to be kind of long but not too long.','Dummy Frequency Type', '10/10/10 10:10pm', '10/10/10 10:10pm'));

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
}

const FolderView = (props: FolderViewProps) => {
    const [showModal, setShowModalTo] = useState(false);
    const searchBar = useWithSearchBar();

    return (
        <Container>
            <Header>
                <FolderName>{props.folderName}</FolderName>
                <NormalButtonRow 
                    onDelete={() => setShowModalTo(false)}
                    moveFolderContent={<div>Move Folder</div>}
                    sharingContent={<div>sharing</div>}
                    searchBinding={searchBar.searchBinding}
                />
                {/* <DeletedFoldersButtonRow 
                    onDelete={() => {}}
                    onRestore={() => {}}
                    searchBinding={searchBar.searchBinding}
                /> */}
                {/* <ScheduledReportsButtonRow 
                    newSchedule={() => {}}
                    searchBinding={searchBar.searchBinding}
                /> */}
            </Header>
            {/* <NormalGrid
                gridData={gridData}
                popoutMenu={(
                    <NormalFolderViewPopout 
                        run={() => {}}
                        edit={() => {}}
                        share={() => {}}
                        duplicate={() => {}}
                        deleteReport={() => {}}
                    />
                )}
                searchValue={searchBar.value}
            /> */}
            {showModal && <Modal 
                title={'Confirm Delete'}
                content={'Are you sure you want to delete this report?'}
                closeModal={() => setShowModalTo(false)}
                buttons={[
                    {
                        text: 'Delete',
                        buttonType: ButtonType.RED,
                        onClick: () => setShowModalTo(false)
                    },
                    {
                        text: 'Cancel',
                        buttonType: ButtonType.NORMAL,
                        onClick: () => setShowModalTo(false)
                    }
                ]}
            />}
        </Container>
    );
}
/**
 *  title: string
    content: string
    buttons: {
        text: string,
        buttonType: ButtonType, 
        onClick:() => void,
    }[],
    closeModal: () => void
 */


export default FolderView;