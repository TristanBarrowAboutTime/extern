import React, { useState } from 'react';
import styled from 'styled-components';
import { useToggler } from '../../hooks/useToggler';
import Styles from '../../style/Styles';
import SearchablePagedList from './SearchablePagedList';



// TODO: all of this. 
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

const Container = styled.div`
`;
const Input = styled.div`
    padding: 3px 10px 3px 10px;
    width: 300px;
    border: 1px solid black;
`;
const Dropdown = styled.div`
    position: absolute;
    background-color: ${Styles.color.white};
`;


type LargeDropdownProps = {}

const LargeDropdown = (props: LargeDropdownProps) => {
    const { toggleState, toggle } = useToggler(false);
    const [currentInput, setCurrentInputTo] = useState(null as {code: string, fullName: string} | null); 
    
    return (
        <Container>
            {tmpList.title}
            {currentInput !== null ? (
                <div>{currentInput.fullName}</div>
            ) : (
                <Input
                    onClick={toggle} 
                >
                    --none--
                </Input>
            )}
            {toggleState && <Dropdown>
                <SearchablePagedList 
                    list={tmpList.list}
                    selectInput={setCurrentInputTo}
                />
            </Dropdown>}
        </Container>
    ); 
}

export default LargeDropdown;