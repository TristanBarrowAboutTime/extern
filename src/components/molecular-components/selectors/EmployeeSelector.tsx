import * as React from 'react';
import Checkbox from '../CheckBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../../style/Styles';
import styled from 'styled-components';
import { HSpacer } from '../../atomic-components/CssTriangle';
import CheckBox from '../CheckBox';
import { useWithSearchableSelector } from '../../../hooks/useSearchableSelector';
import SearchableSelector, { RenderRowArgs } from './SearchableSelector';
import TopArrowWrapper from '../../frames/TopArrowWrapper';
import MultipleSelectorsEmployees from './MultipleSelectorsEmployees';

export type Employee = { id: number, code: string, name: string };

const Container = styled.div`
    padding: 4px;
`;

const EmployeeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 24px;
    margin-top: 2px;
`;

const EmployeeCode = styled.div`
    margin-left: 8px;
    width: 67px;
`;

const EmployeeFullName = styled.div`

`;

const HeaderCode = styled.div`
    padding-left: 8px;
    color: ${Styles.color.green};
    font-size: 14px;
`;

const HeaderFullName = styled.div`
    margin-left: 35px;
    color: ${Styles.color.green};
    font-size: 14px;

`;

const FilterContainer = styled.div`
    position: absolute;
    top: 90px;
    right: 12px;
`;
type EmployeeSelectorProps = {
    employees: Employee[]
    size: number
    slaves: any
    master: any
}

const EmployeeSelector = (props: EmployeeSelectorProps) => {
    const binding = useEmployeeSelector({
        employees: props.employees,
        numberOfItems: props.size,
        pageSize: 10
    });

    return (
        <Container>
            <SearchableSelector
                title={'Employees'}
                searchBinding={binding.searchBinding}
                pageIndexes={binding.pageIndexes}
                slaves={props.slaves}
                // sortable={}
                items={binding.items}
                filters={
                    <FilterContainer>
                        <TopArrowWrapper color={'#A7AFB2'} position={-22}>
                            <MultipleSelectorsEmployees />
                        </TopArrowWrapper>
                    </FilterContainer>
                }
                header={
                    <>
                        <Checkbox 
                            isChecked={props.master.state}
                            onClick={props.master.toggle}
                        />
                        <HSpacer size={8} />
                        <FontAwesomeIcon icon={faCheck} color={Styles.color.green} />
                        <HeaderCode>Code</HeaderCode>
                        <HeaderFullName>Full Name</HeaderFullName> 
                    </>
                } 
                renderRow={(args: RenderRowArgs<Employee>) => (
                    <>
                     <EmployeeRow key={args.index}>
                        <CheckBox 
                            isChecked={args.slaves!.slave(args.items[args.index].id)}
                            onClick={() => args.slaves!.toggleSlave(args.items[args.index].id)}
                        />
                        <EmployeeCode>{args.items[args.index].code}</EmployeeCode>
                        <EmployeeFullName>
                            {args.items[args.index].name}
                        </EmployeeFullName>
                    </EmployeeRow>
                    </>
                )} 
                pagerBinding={{
                    ...binding.pagerBinding,
                    showGoToEnd: true,
                    pagesShowing: 6
                }}
            />
        </Container>
    );
}

type UseEmployeeSelectorArgs = {
    employees: Employee[]
    numberOfItems: number
    pageSize: number
}

const useEmployeeSelector = (args: UseEmployeeSelectorArgs) => {
    const [sortedEmployee, setSortedEmployee] = React.useState(args.employees);
    const searchFor = (searchValue: string, item: Employee): boolean => {
        return (
            item.code.toLowerCase().includes(searchValue.toLowerCase()) || 
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    const sortedEmployeeByName = () => {        
 
        const sort = sortedEmployee.sort((a,b) => a.name > b.name ? -1 : 1);
   }

    
    const searchableSelector = useWithSearchableSelector<Employee>({
        items: args.employees,
        initPageSize: args.pageSize,
        searchFor,
    });

    return {
        ...searchableSelector, 
    };
}

export default EmployeeSelector;