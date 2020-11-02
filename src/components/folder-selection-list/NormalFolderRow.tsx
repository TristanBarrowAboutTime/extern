import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PopoutMenu, { useWithPopoutMenu } from '../molecular-components/PopoutMenu';
import styled from 'styled-components';
import FolderSelectionPopout from './FolderSelectionPopout';
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
    background-color: ${(props:ContainerProps) => {
        return (
            props.isSelected ? 
            Styles.color.gray.x_light : 
            Styles.color.white
        );
    }};
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

const NormalFolderRow = ({
    isSelected,
    isEditable,
    selectedFolder,
    onEdit,
    onDelete,
    folderName,
}: NormalFolderRowProps) => {
    const [hovered, setHoveredTo] = useState(false);
    const popout = useWithPopoutMenu();
    
    return (
        <Container
            isSelected={isSelected}
            onClick={selectedFolder}
            onMouseEnter={() => setHoveredTo(true)}
            onMouseLeave={() => setHoveredTo(false)}
        >
            <FolderName>{folderName}</FolderName>
            {(isEditable && hovered) && (
                <EditIcon onClick={popout.open}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </EditIcon>
            )}
            {popout.isOpen && (
                <PopoutMenu 
                    menuEvent={popout.menuEvent}
                    horizontalFix={372}
                >
                    <FolderSelectionPopout 
                        onEdit={onEdit}
                        onDelete={() => {
                            onDelete();
                            popout.close();
                            setHoveredTo(false);
                        }}
                    />
                </PopoutMenu>
            )}
            
        </Container>
    );
}

export default NormalFolderRow;