import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PopoutMenu from '../molecular-components/PopoutMenu';
import styled from 'styled-components';
import FolderSelectionPopout from './FolderSelectionPopout';
import { useNormalFolderRow } from '../../hooks/component-hooks/folder-selection-list/useNormalFolderRow';
import Styles from '../../style/Styles';

type NormalFolderRowProps = {
    isSelected: boolean
    isEditable: boolean
    folderName: string
    onEdit: () => void
    onDelete: () => void
    selectedFolder: () => void
}

type ContainerProps = {
    isSelected: boolean
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    background-color: ${(props:ContainerProps) => (
        props.isSelected ? 
        Styles.color.gray.x_light : 
        Styles.color.white
    )};
    :hover {
        cursor: pointer;
    }
`;

const FolderName = styled.div`
    text-overflow: ellipsis;
    max-width: 300px;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;
`

const EditIcon = styled.div``;

const NormalFolderRow = (props: NormalFolderRowProps) => {
    const binding = useNormalFolderRow({
        isEditable: props.isEditable,
        onDelete: props.onDelete
    });
    
    return (
        <Container
            isSelected={props.isSelected}
            onClick={props.selectedFolder}
            onMouseEnter={binding.onMouseEnter}
            onMouseLeave={binding.onMouseLeave}
        >
            <FolderName>{props.folderName}</FolderName>
            {binding.showEditIcon && (
                <EditIcon onClick={binding.openPopout}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </EditIcon>
            )}
            {binding.popoutIsOpen && (
                <PopoutMenu 
                    menuEvent={binding.popoutMenuEvent}
                    horizontalFix={372}
                >
                    <FolderSelectionPopout 
                        onEdit={props.onEdit}
                        onDelete={binding.onDeleteOverride}
                    />
                </PopoutMenu>
            )}
            
        </Container>
    );
}

export default NormalFolderRow;