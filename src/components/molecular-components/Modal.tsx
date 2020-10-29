import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { createUseStyles } from 'react-jss';
import Button, { ButtonType } from '../atomic-components/Button';
import Styles from '../../style/Styles';

type ModalProps = {
    title: string
    content: string
    buttons: {
        text: string,
        buttonType: ButtonType, 
        onClick:() => void,
    }[],
    closeModal: () => void
}

const Modal = ({
    title,
    content,
    buttons,
    closeModal,

}: ModalProps) => {
    const classes = useStyles();
    return (
        <div className={classes.blackout}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div />
                    <div className={classes.title}>{title}</div>
                    <FontAwesomeIcon 
                        className={classes.close}
                        icon={faTimes} 
                        color={Styles.color.white} 
                        onClick={closeModal}
                    />
                </div>
                <div className={classes.body}>
                    <div className={classes.message}>{content}</div>
                    <div className={classes.buttonSet}>
                        {buttons.map((button) => {
                            return (
                                <Button 
                                    key={button.text}
                                    buttonType={button.buttonType}
                                    onClick={button.onClick}
                                    text={button.text}
                                    styles={{marginLeft: 4, marginRight: 4}}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

const useStyles = createUseStyles({
    blackout: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,.1)'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 550,
        marginTop: 75,
        height: 200,
        backgroundColor: 'white',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-stretch',
        backgroundColor: 'gray',
        borderTop: {
            style: 'solid', 
            width: 2
        },
        height: 22
    },
    title: {
        color: 'white'
    },
    close: {
        marginRight: 5,
        marginTop: 3,
        color: 'white',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    body: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    message: {
        marginTop: 24
    },
    buttonSet: {
        marginBottom: 16
    }
});

export default Modal;