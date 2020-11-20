import * as React from 'react';
import SearchBar from '../atomic-components/SearchBar';
import { useWithSearchBar } from '../../hooks/component-hooks/atomic-components/useSearchBar';
import { usePagination } from '../../hooks/usePagination';
import Checkbox from '../molecular-components/CheckBox';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../hooks/component-hooks/molecular-components/useCheckmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../style/Styles';
import styled from 'styled-components';
import { HSpacer } from '../atomic-components/CssTriangle';

let employees = [];

for (let i = 0; i < 105; i++) {
    employees.push({code: `00${i}`, fullName: `Bob Boberto the ${i}th`});
}

const Container = styled.div`
    padding: 4px;
`;

const Title = styled.div`
    padding: 8px 0;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 16px;
`;

const HeaderCell = styled.div`
    padding-left: 8px;
    color: ${Styles.color.green};
    font-size: 14px;
`;


const EmployeeSelector = () => {
    const searchBar = useWithSearchBar();
    const slaves = useMultipleCheckmarkSlaves(employees.length);
    const master = useMasterCheckmark(slaves);
    const pageBinding = usePagination({
        numberOfItems: employees.length,
        pageSize: 10
    });
    
    return (
        <Container>
            <Title>Employee</Title>
            <SearchBar {...searchBar.searchBinding} />
            <Header>
                <Checkbox 
                    isChecked={master.state}
                    onClick={master.toggle}
                />
                <HSpacer size={8}/>
                <FontAwesomeIcon icon={faCheck} color={Styles.color.green} />
                <HeaderCell>Code</HeaderCell>
                <HeaderCell>Full Name</HeaderCell>
            </Header>
            <div>body</div>
            <div>bottom</div>
        </Container>
    );
}

export default EmployeeSelector;