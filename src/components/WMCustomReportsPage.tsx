import React from 'react';
import WMFolderSelectionList from './WMFolderSelectionList';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
});

export const CustomReportsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <WMFolderSelectionList />
            <div>{"folders view"}</div>
        </div>
    );
}

export default CustomReportsPage;