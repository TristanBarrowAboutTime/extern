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
import MultipleSelectors from './MultipleSelectors';

export type EmployeeGroup = {id:number, name: string};

const Container = styled.div`
    padding: 4px;
`;

const DepartmentRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 24px;
    margin-top: 2px;
`;

const Title = styled.div`
    margin-left: 35px;
    color: ${Styles.color.green};
    font-size: 14px;

`;


const GroupName = styled.div`
    margin-left: 35px;
    font-size: 14px;

`;

const FilterContainer = styled.div`
    position: absolute;
    top: 90px;
    right: 12px;
`;

type employeeGroupSelectorProps = {
    employeeGroup:EmployeeGroup[]
    size: number
    slaves: any
    master: any

}


let count = 0;
const EmployeeGroupSelector = (props: employeeGroupSelectorProps) => {


    const[counter, setCounter]= React.useState(0);

    // React.useEffect(()=> {
    //     console.log('sortedGroup', sortedGroup)
    // },[sortedGroup])
    const binding = useEmployeeGroupSelector({
        employeeGroup: props.employeeGroup,
        numberOfItems: props.size,
        pageSize: 10,     
    });

    // console.log('employee group',props.employeeGroup);
        return (
        <Container>
            {counter}

            <SearchableSelector
                title={'Employee Group'}
                searchBinding={binding.searchBinding}
                pageIndexes={binding.pageIndexes}
                slaves={props.slaves}
                items={binding.items}
                filters={
                    <FilterContainer>
                        <TopArrowWrapper color={'#A7AFB2'} position={-22}>
                            <MultipleSelectors />
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
                    
                         
                        <Title onClick={() => {binding.sortedGroupByName()}}>Employee Groups </Title> 
                    </>
                } 
                // renderRow={(args: any) => (
                     renderRow={(args: RenderRowArgs<EmployeeGroup>) => (
                    <DepartmentRow key={args.index}>
                        <CheckBox 
                            isChecked={args.slaves!.slave(args.items[args.index].id)}
                            onClick={() => args.slaves!.toggleSlave(args.items[args.index].id)}
                        />
                      
                        <GroupName>
                            {/* {args.items.name} */}
                            {args.items[args.index].name}
                        </GroupName>
                    </DepartmentRow>
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

type UseemployeeGroupSelectorArgs = {
    employeeGroup:EmployeeGroup[]
    numberOfItems: number
    pageSize: number
}

const useEmployeeGroupSelector = (args: UseemployeeGroupSelectorArgs) => {

    const [sortedGroup, setSortedGroup] = React.useState(args.employeeGroup);
    const searchFor = (searchValue: string, item: EmployeeGroup): boolean => {
        return (
            item.name.toLowerCase().includes(searchValue.toLowerCase())          
        );
    }
 
    let order = true;
    const sortedGroupByName = () => {  
        // setCounter(count++);
        order = !order;      
        console.log('order of sorting', order)
        const sort = order ? args.employeeGroup : args.employeeGroup.reverse()
        //API response will always be in sorted order, so reverse() will work for sor
        //  const sort = employeeGroup.sort((a,b) => order ? a.name > b.name : a.name < b.name);
     
         setSortedGroup(sort);

    }

    const searchableSelector = useWithSearchableSelector<EmployeeGroup>({
        items: sortedGroup,       
        initPageSize: args.pageSize,
        searchFor,      
    });


    return {
        ...searchableSelector, 
        sortedGroupByName,
    
    };
}

export default EmployeeGroupSelector;