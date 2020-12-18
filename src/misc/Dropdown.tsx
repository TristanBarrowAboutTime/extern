import * as React from 'react';
import styled from 'styled-components';

const DropdownButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;

const Link = styled.span`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;

    & ${Link}:hover {
        cursor: pointer;

    }
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover ${DropdownContent} {
        display: block;
    }

    &:hover ${DropdownButton} {
        background-color: lightgreen;
    }
`;


type FilePathProps = {}

const FilePath = (props: FilePathProps) => {
    return (
        <Dropdown>
            <DropdownButton>
                Button
            </DropdownButton>
            <DropdownContent>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
            </DropdownContent>
        </Dropdown>
    ); 
}


export default FilePath;