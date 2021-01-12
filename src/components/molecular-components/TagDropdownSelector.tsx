import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import EmployeeSelector, { Employee } from './selectors/EmployeeSelector';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../hooks/component-hooks/molecular-components/useCheckmark';
import Popup from '../cellular-components/popout-menu/Popup';

let employees: Employee[] = [];

for (let i = 0; i < 105; i++) {
    employees.push({id: i, code: `00${i}`, fullName: `Bob Boberto the ${i}th`});
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #979797;
`;

const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2px;
    width: 300px;
    min-height: 31px;

`;

const Tag = styled.div`
    margin: 3px;
    padding: 2px 5px;
    font-size: 14px;
    border: 1px solid #d9d9d9;
    background-color: #f5f5f5;
`;

const TagText = styled.span`
    padding-right: 4px;
`;

const IconContainer = styled.div`
    position: relative;
    padding-right: 10px;
    padding-top: 6px;
    :hover {
        cursor: pointer;
    }
`;

const Placeholder = styled.span`
    margin-top: 5px;
    margin-left: 4px;
`;

const Dropdown = styled.div`
    position: absolute;
    left: -307px;
`;

type TagDropDownSelectorProps = {
    tags: string[]
    deleteTag: (tag: string) => void
} 

const TagDropDownSelector = (props: TagDropDownSelectorProps) => {
    const [dropdownIsOpen, setDropdownIsOpenTo] = useState(false);
    const slaves = useMultipleCheckmarkSlaves(employees.length);
    const master = useMasterCheckmark(slaves);

    return (
        <Container>
            <TagContainer>
                {props.tags.length === 0 ? <Placeholder>--None--</Placeholder> : (
                        props.tags.map((tag, key) => {
                            return (
                                <Tag key={key}>
                                    <TagText>{tag}</TagText>
                                    <FontAwesomeIcon 
                                        icon={faTimes} 
                                        color={'#666666'}
                                        size={'xs'} 
                                        onClick={(e) => {
                                            props.deleteTag(tag)
                                        }}
                                    />
                                </Tag>
                            );
                        })
                    )
                }
            </TagContainer>
            <IconContainer>
                <FontAwesomeIcon 
                    icon={dropdownIsOpen ? faChevronDown : faChevronUp} 
                    onClick={() => setDropdownIsOpenTo(!dropdownIsOpen)}
                />
                {dropdownIsOpen && (
                    <Dropdown>
                        <Popup 
                            close={(e) => {
                                e?.stopPropagation();
                                setDropdownIsOpenTo(false)
                            }}
                        >
                            <EmployeeSelector 
                                employees={employees} 
                                size={10}
                                slaves={slaves}
                                master={master}
                            />
                        </Popup>
                    </Dropdown>
               )}
            </IconContainer>
        </Container>
    );
}

export default TagDropDownSelector;