import React, { useEffect } from 'react';
import { useTextInput } from '../../hooks/useTextInput';
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
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-right: 16px;
    margin-right: ${Styles.size.large};

`; 

const InputContainer = styled.div`
    height: 20;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
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
    const { value, bind:bindTextInput } = useTextInput(initial);

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.keyCode === 13) {
                console.log(value)
                onAccept(value);
            }
        }
        document.addEventListener('keydown', listener);
        return () => document.removeEventListener('keydown', listener);
    }, [value]);


    return (
        <Container>
            {showError && <div>{errorText}</div>}
            <InputContainer>
                <Input {...bindTextInput}></Input>
                <Spacer />
                <FontAwesomeIcon 
                    onClick={() => onAccept(value)} 
                    size={'1x'} 
                    icon={faCheckCircle} 
                    color={Styles.color.green}
                />
                <Spacer />
                <FontAwesomeIcon 
                    onClick={onCancel} 
                    size={'1x'} 
                    icon={faTimesCircle} 
                    color={Styles.color.gray.x_dark}
                />
            </InputContainer>
        </Container>
    );
}

export default EditFolderRow;