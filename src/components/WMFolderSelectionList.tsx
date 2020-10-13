import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss'; 
import { isTemplateExpression } from 'typescript';
import WMButton, { ButtonType } from './atomic-components/WMButton';

const strings = {
    displayName: 'Folders',
    btn1: 'New Folder',
    btn2: 'Reorder',
    search: 'Search'
}


type FolderSelectionListProps = {}

const useStyles = createUseStyles({
    container: {
        height: '90px',
        margin: '40px',
        backgroundColor: '#FAFAFA',
        boxShadow: {
            x: 0,
            y: 2,
            blur: 3,
            spread: 1,
            color: 'rgba(0,0,0,0.17)',

        },
        padding: 32,
        borderRadius: 4,

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    displayName: {
        'font-size': '24px'
    },
    searchBar: {
        paddingTop: 16,
        width: 375,
        'font-size': 20,
        border: {
            
        }
    },
    body: {
        display: 'flex',
        flexDirection: 'column',

    }
});

const tempEditItems = [
    'bob',
    'mary',
    'mark',
    'fredrico sancheze the fifth'
];


const FolderSelectionList: FunctionComponent<FolderSelectionListProps> = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.displayName}>{strings.displayName}</div>
                <div>
                    <WMButton
                        buttonType={ButtonType.GREEN}
                        text={"New Folder"}
                        onClick={() => { console.log('clicked')}}
                    />
                    <WMButton
                        buttonType={ButtonType.NAKED}
                        text={"Reorder"}
                        onClick={() => { console.log('clicked')}}
                    />
                </div>
            </div>
            <div className={classes.searchBar}>Search</div>
            <div className={classes.body}>
                {tempEditItems.map((item) => {
                    return item;
                })}
            </div>
        </div>
    );
}




export default FolderSelectionList;