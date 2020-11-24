import * as React from 'react';
import { useMemo } from 'react';
import SearchBar from '../atomic-components/SearchBar';
import { useWithSearchBar } from '../../hooks/component-hooks/atomic-components/useSearchBar';
import { usePagination } from '../../hooks/usePagination';
import Checkbox from '../molecular-components/CheckBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../style/Styles';
import styled from 'styled-components';
import { HSpacer } from '../atomic-components/CssTriangle';
import CheckBox from '../molecular-components/CheckBox';
import PagingBar from '../molecular-components/PagingBar';

type Employee = { id: number, code: string, fullName: string };

const Container = styled.div`
    padding: 4px;
`;

const Title = styled.div`
    padding: 8px 0;
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

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 16px;
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

type EmployeeSelectorProps = {
    employees: {id: number, code: string, fullName: string}[]
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
            <Title>Employee</Title>
            <SearchBar 
                {...binding.searchBinding}
            />
            <Header>
                <Checkbox 
                    isChecked={props.master.state}
                    onClick={props.master.toggle}
                />
                <HSpacer size={8}/>
                <FontAwesomeIcon icon={faCheck} color={Styles.color.green} />
                <HeaderCode>Code</HeaderCode>
                <HeaderFullName>Full Name</HeaderFullName>
            </Header>
            <div>
                {binding.pageIndexes.map((index) => {
                    return (
                        <EmployeeRow key={index}>
                            <CheckBox 
                                isChecked={props.slaves.slave(binding.employees[index].id)}
                                onClick={() => props.slaves.toggleSlave(binding.employees[index].id)}
                            />
                            <EmployeeCode>{binding.employees[index].code}</EmployeeCode>
                            <EmployeeFullName>
                                {binding.employees[index].fullName}
                            </EmployeeFullName>
                        </EmployeeRow>
                    )
                })}
            </div>
            <PagingBar
                currentPage={binding.page}
                prev={binding.pages.prev}
                next={binding.pages.next}
                first={binding.pages.first}
                last={binding.pages.last}
                numOfPages={binding.pages.numberOfPages}
                pagesShowing={2}
                goTo={binding.pages.gotoPage}
                showGoToEnd={false}
            /> 
        </Container>
    );
}

type UseEmployeeSelectorArgs = {
    employees: {id: number, code: string, fullName: string}[]
    numberOfItems: number
    pageSize: number
}

// a higher component needs to own master and slave state so progress is not 
// lost if the selector is closed
const useEmployeeSelector = (args: UseEmployeeSelectorArgs) => {
    const searchBar = useWithSearchBar();
    
    const newEmployees: Employee[] = useMemo(() => {
        let tmpNewEmployees: Employee[] = [];

        args.employees.forEach((employee) => {
            if (employee.code.toLowerCase().includes(searchBar.value.toLowerCase()) || 
                employee.fullName.toLowerCase().includes(searchBar.value.toLowerCase())
            ) {
                tmpNewEmployees.push(employee);;
            }
        });
        return tmpNewEmployees;
    }, [searchBar.value]);

    const pages = usePagination({
        numberOfItems: newEmployees.length,
        pageSize: args.pageSize
    });

    const searchBinding = {
        ...searchBar.searchBinding,
        onChange: (e: {target: {value: string}}) => {
            searchBar.searchBinding.onChange(e);
            pages.first();
        }
    }

    return {
        employees: newEmployees,
        searchBinding,
        searchValue: searchBar.value,
        pages,
        numOfPages: pages.numberOfPages,
        page: pages.page,
        pageIndexes: pages.itemIndexes,
        first: pages.first,
        last: pages.last,
        prev: pages.prev,
        next: pages.next,
        goTo: pages.gotoPage,
    }
}

export default EmployeeSelector;