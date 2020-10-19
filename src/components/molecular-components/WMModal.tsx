import React from 'react';
import { createUseStyles } from 'react-jss';
import WMButton, { ButtonType } from '../atomic-components/WMButton';

type WMModalProps = {
    title: string
    content: string
    buttons: {
        text: string,
        buttonType: ButtonType, 
        onClick:()=>void,
    }[]
}

const WMModal = ({
    title,
    content,
    buttons,
}: WMModalProps) => {
    const classes = useStyles();
    return (
        <div className={classes.blackout}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div />
                    <div className={classes.title}>{title}</div>
                    <div className={classes.close}>X</div>
                </div>
                <div className={classes.body}>
                    <div className={classes.message}>{content}</div>
                    <div className={classes.buttonSet}>
                        {buttons.map((button) => {
                            return (
                                <WMButton 
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
        marginRight: 4,
        color: 'white'
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

export default WMModal;