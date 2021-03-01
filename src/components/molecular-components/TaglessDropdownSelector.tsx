import React, { ReactChild, ReactChildren } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import EmployeeSelector, { Employee } from './selectors/EmployeeSelector';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../hooks/component-hooks/molecular-components/useCheckmark';
import Popup from '../cellular-components/popout-menu/Popup';
import DepartmentSelector, { Department } from './selectors/DepartmentSelector';
import DivisionSelector, { Division } from './selectors/DivisionSelector';

let employees: Employee[] = [];

let departments: Department[] = [];

let divisions: Division[] = [];

for (let i = 0; i < 105; i++) {
    employees.push({id: i, code: `00${i}`, name: `Joseph Peterson`});
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    border: 1px solid #979797;
`;

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    height: 31px;
    width: 330px;
    :hover {
        cursor: pointer;
    }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 32px;
    right: 363px;
`;

type DropDownSelectorProps = {
    children: ReactChild | ReactChildren

}

const TaglessDropDownSelector = (props: DropDownSelectorProps) => {
    const [dropdownIsOpen, setDropdownIsOpenTo] = useState(false);
    const slaves = useMultipleCheckmarkSlaves(employees.length);
    const master = useMasterCheckmark(slaves);
    return (
        <Container className='container-bar'>
            <Bar onClick={() => setDropdownIsOpenTo(true)}>
                <FontAwesomeIcon
                    icon={!dropdownIsOpen ? faChevronDown : faChevronUp} 
                />
            </Bar>
            {dropdownIsOpen && (
                <Dropdown>
                    <Popup 
                        close={(e) => {
                            e?.stopPropagation();
                            setDropdownIsOpenTo(false)
                        }}
                    >
                        {props.children}
                    </Popup>
                </Dropdown>
            )}
        </Container>
    );
}

export default TaglessDropDownSelector;