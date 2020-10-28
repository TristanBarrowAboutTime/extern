import React from 'react';
import { useTextInput } from '../hooks/useTextInput';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Styles from '../style/WMStyles';

type EditFolderBarProps = {
    initial: string
    onAccept: (value: string) => void
    onCancel: () => void
}
// input should probably be broken out into its own component.
const EditFolderBar = ({
    initial,
    onAccept,
    onCancel,
}: EditFolderBarProps) => {
    const classes = useStyles();
    const { value, bind:bindTextInput } = useTextInput(initial);
    return (
    <div className={classes.container}>
        <input className={classes.input} {...bindTextInput}></input>
        {/* replace div's below with icons */}

        <div className={classes.acceptIconContainer} onClick={() => onAccept(value)} >
            <FontAwesomeIcon className={classes.acceptIcon} icon={faCheck} color={'white'}/>
        </div>
        <div className={classes.cancelIconContainer} onClick={onCancel} >
            <FontAwesomeIcon className={classes.cancelIcon} icon={faTimes} color={'white'}/>
        </div>
    </div>
    )
}

const useStyles = createUseStyles({
    container: {
        height: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1
    },
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

export default EditFolderBar;