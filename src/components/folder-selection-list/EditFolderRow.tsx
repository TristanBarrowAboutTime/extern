import React from 'react';
import { useEditFolderRow } from '../../hooks/component-hooks/folder-selection-list/useEditFolderRow';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../style/Styles';

type EditFolderRowProps = {
    initial: string
    showError: boolean
    errorText: string
    onAccept: (value: string) => void
    onCancel: () => void
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-right: 16px;
    margin-right: ${Styles.size.large};

`; 

const InputContainer = styled.div`
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
`;

const ErrorText = styled.div`
    padding-left: 38px;
    color: ${Styles.color.red};
    font-size: 14px;
`;

const Input = styled.input`
        top: 0;
        padding: 0 0 0 4px;
        margin-left: 28px;
        font-size: 16px;
        height: 19px;
        flex-grow: 1;
        box-sizing: boarder-box;
        border: 1px solid #85B554;
        :focus {
            outline: 'none';
        }

`;

const Spacer = styled.div`
    width: 4px;
    height: 1px;
`;

// input should probably be broken out into its own component.
const EditFolderRow = ({
    initial,
    showError,
    errorText,
    onAccept,
    onCancel,
}: EditFolderRowProps) => {

    const binding = useEditFolderRow({
        onAccept,
        onCancel,
        initial,
    });

    return (
        <Container>
            {showError && <ErrorText>{errorText}</ErrorText>}
            <InputContainer>
                <Input {...binding.bindInput}></Input>
                <Spacer />
                <FontAwesomeIcon 
                    onClick={binding.accept} 
                    size={'1x'} 
                    icon={faCheckCircle} 
                    color={Styles.color.green}
                />
                <Spacer />
                <FontAwesomeIcon 
                    onClick={binding.cancel} 
                    size={'1x'} 
                    icon={faTimesCircle} 
                    color={Styles.color.gray.x_dark}
                />
            </InputContainer>
        </Container>
    );
}



export default EditFolderRow;