import React from 'react'; 
import { createUseStyles } from 'react-jss';
import styled from 'styled-components';
import Styles from '../../style/Styles';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type SearchBarProps = {
    value: string,
    onChange: (event: {target: {value: string}}) => void,
    includeChevron?: boolean
}

const Container = styled.div``;
const Input = styled.input`
    width: 300;
    border-radius: 4;
    box-shadow: ${Styles.searchBar.shadow};
    border: 0;
    padding: '6px 1px 4px 16px';
    background-color: ${Styles.color.gray.xx_light};
    font-size: 20;

    ::placeholder {
        color: ${Styles.color.gray.x_dark};

    }

    :focus {
        outline: none;
        padding: 5px 0px 3px 15px;
        border: 1px solid ${Styles.color.gray.medium};
    }

`;

const Icon = styled.div`


`;



const SearchBar = ({
    value,
    onChange,
    includeChevron = false
}: SearchBarProps) => {
    const classes = useStyles();
    return (
        <Container>
            <Input
                className={classes.input} 
                placeholder='Search'
                type='text' 
                value={value} 
                onChange={onChange} 
            ></Input>
            {/* this needs some logic to fip upsidedown and such */}
            {includeChevron && (
                <Icon>
                    <FontAwesomeIcon
                        className={classes.icon} 
                        icon={faChevronDown} 
                    />
                </Icon>
            )}
        </Container>
    )
}

export default SearchBar;