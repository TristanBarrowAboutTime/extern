import React from 'react'; 
import { createUseStyles } from 'react-jss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type WMSearchBarProps = {
    value: string,
    onChange: (event: {target: {value: string}}) => void,
    includeChevron?: boolean
}

const WMSearchBar = ({
    value,
    onChange,
    includeChevron = false
}: WMSearchBarProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <input
                className={classes.input} 
                placeholder='Search'
                type='text' 
                value={value} 
                onChange={onChange} 
            ></input>
            {/* this needs some logic to fip upsidedown and such */}
            {includeChevron && (
                <FontAwesomeIcon
                    className={classes.icon} 
                    icon={faChevronDown} 
                />
            )}
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
    },
    input: {
        width: 300,
        borderRadius: 4,
        boxShadow: {
            x: 0, y: 1, blur: 4, color: '#cccccc'
        },
        border: 0,
        padding: {
            left: 16, right: 1, top: 6, bottom: 4
        },
        backgroundColor: '#FAFAFA',
        '&::placeholder': {
            color: '#4D4D4D',
            opacity: 1,
        },
        'font-size': 20,
        '&:focus': {
            outline: 'none',
            padding: {
                left: 15, right: 0, top: 5, bottom: 3
            },
            border: {
                width: 1,
                color: '#E5E5E5',
                style: 'solid'
            }
        }
    },
    icon: {
        position: 'absolute',
        right: 30,
        top: 26
    },
    searchBar: {
        margin: {
            top: 16,
            bottom: 16,
            left: 32,
            right: 32,
        },
        padding: {
            left: 16, right: 1, top: 6, bottom: 4
        },
        border: 0,
        boxShadow: {
            x: 0, y: 1, blur: 4, color: '#cccccc'
        },
        width: 300, 
        '&::placeholder': {
            color: '#4D4D4D',
            opacity: 1,
        },
    }
});

export default WMSearchBar;