import React, { useState } from 'react';
import Button from "../../atomic-components/Button";
import { HSpacer } from '../../atomic-components/CssTriangle';
import { ButtonType } from '../../../types/ButtonType'
import styled from 'styled-components';
import Modal from '../../molecular-components/Modal';
import SearchBar, { SearchBarProps } from '../../atomic-components/SearchBar';

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

type DeletedFolderButtonRowProps = {
    onRestore: () => void
    onDelete: () => void
    searchBinding: SearchBarProps
}

const DeletedFolderButtonRow = (props: DeletedFolderButtonRowProps) => {
    const [showModal, setShowModalto] = useState(false);
    return (
        <ButtonRow>
            <Button
                buttonType={ButtonType.GREEN}
                text='Restore'
                onClick={props.onRestore}
            />
            <HSpacer size={8} />
            <Button 
                buttonType={ButtonType.RED}
                text='Delete Forever'
                onClick={() => setShowModalto(true)}
            />
            <HSpacer size={8} />
            <SearchBar {...props.searchBinding} />
            {showModal && <Modal 
                title={'Confirm Delete'}
                content={'Are you sure you want to delete this report?'}
                closeModal={() => setShowModalto(false)}
                buttons={[
                    {
                        buttonType: ButtonType.RED,
                        text: 'Yes, Delete',
                        onClick: () => {
                            setShowModalto(false);
                            props.onDelete()
                        }
                    },
                    {
                        buttonType: ButtonType.NORMAL,
                        text: 'Cancel',
                        onClick: () => {
                            setShowModalto(false);
                        }
                    }
                ]}
            />}
        </ButtonRow>
    )
}

export default DeletedFolderButtonRow;