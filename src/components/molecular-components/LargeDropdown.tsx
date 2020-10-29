import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useToggler } from '../../hooks/useToggler';
import Styles from '../../style/Styles';
import SearchablePagedList from './SearchablePagedList';

const createList = () => {
    const list = [];
    for (let i  = 0; i < 100; i++) {
        list.push({
            code: `00${i}`,
            fullName: `Employee Name${i}`
        });
    }
    return {
        title: 'Employee',
        list
    }
}

const tmpList = createList();

type LargeDropdownProps = {}

const LargeDropdown = (props: LargeDropdownProps) => {
    const { toggleState, toggle } = useToggler(false);
    const [currentInput, setCurrentInputTo] = useState(null as {code: string, fullName: string} | null); 
    
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {tmpList.title}
            {currentInput !== null ? (
                <div>{currentInput.fullName}</div>
            ) : (
                <div 
                    onClick={toggle} 
                    className={classes.input}
                >
                    --none--
                </div>
            )}
            {toggleState && <div className={classes.dropdown}>
                <SearchablePagedList 
                    list={tmpList.list}
                    selectInput={setCurrentInputTo}
                />
            </div>}
        </div>
    ); 
}

const useStyles = createUseStyles({
    container: {
        
    },
    input: {
        padding: {
            top: 3, bottom: 3,
            left: 10, right: 10
        },
        width: 300,
        border: {
            style: 'solid',
            color: 'black',
            width: 1
       } 
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: Styles.color.white
    }
});

export default LargeDropdown;