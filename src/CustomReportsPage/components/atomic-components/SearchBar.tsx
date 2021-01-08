import * as React from 'react'; 
import styled from 'styled-components';
import Styles from '../../style/Styles';

const Container = styled.div``;

type StyleProps = {
    width: number
    mediaQuerySize: number
}

// this will keep the input from clashing with the styles in the element style defenitions
const SearchBarStyle = styled.input`
    padding: 8px 1px 8px 16px !important;  
    border-radius: 4px;
    background-color: #FAFAFA;
    border: 1px solid ${Styles.color.gray.light} !important;
    box-shadow: 0 1px 4px #cccccc;
    width: ${(props: StyleProps) => props.width}px;
    border: 1px solid black;
    font-size: 16px;
    ::placeholder {
        color: #4D4D4D;
        opacity: 1
    }
    :focus {
        outline: none;
        border: 1px solid ${Styles.color.green} !important;
    }

    @media (max-width: ${(props: StyleProps) => props.mediaQuerySize}px) {
        width: calc(100% - 16px)
    }
`;

export type SearchBarProps = {
    value: string,
    onChange: (event: {target: {value: string}}) => void,
    includeChevron?: boolean
    width?: number
    mediaQuerySize?: number
}

const SearchBar = ({
    value,
    onChange,
    width = 316,
    mediaQuerySize = 0
}: SearchBarProps) => {
    
    return (
        <Container>
            <SearchBarStyle
                placeholder='Search'
                type='text' 
                value={value} 
                onChange={onChange} 
                width={width}
                mediaQuerySize={mediaQuerySize}
            />
        </Container>
    )
}

export default SearchBar;