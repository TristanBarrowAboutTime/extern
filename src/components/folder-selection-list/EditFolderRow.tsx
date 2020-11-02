import React, { useEffect } from 'react';
import { useTextInput } from '../../hooks/useTextInput';
import { createUseStyles } from 'react-jss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
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


// input should probably be broken out into its own component.
const EditFolderRow = ({
    initial,
    showError,
    errorText,
    onAccept,
    onCancel,
}: EditFolderRowProps) => {
    const classes = useStyles();
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
                <input className={classes.input} {...bindTextInput}></input>

                <div className={classes.acceptIconContainer} onClick={() => onAccept(value)} >
                    <FontAwesomeIcon className={classes.acceptIcon} icon={faCheck} color={'white'}/>
                </div>
                <div className={classes.cancelIconContainer} onClick={onCancel} >
                    <FontAwesomeIcon className={classes.cancelIcon} icon={faTimes} color={'white'}/>
                </div>
            </InputContainer>
        </Container>
    );
}

const useStyles = createUseStyles({
    input: {
        top: 0,
        padding: {
            left: 4, top: 0, right: 0, bottom: 0
        },
        marginLeft:28,
        fontSize: 16,
        height: 19,
        flexGrow: 1,
        boxSizing: 'boarder-box',
        border: {
            width: 1,
            color: '#85B554',
            style: 'solid'
        },
        '&:focus': {
            outline: 'none'
        }
    },
    acceptIcon: {
        fontSize: 9,
    },
    acceptIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 5,
        height: Styles.size.medium,
        width: 16,
        backgroundColor: Styles.color.green,
        borderRadius: 100,
    },
    cancelIcon: {
        fontSize: 10,
    },
    cancelIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 5,
        height: 16,
        width: 16,
        backgroundColor: Styles.color.gray.x_dark,
        borderRadius: 100,
    }
    
});

export default EditFolderRow;