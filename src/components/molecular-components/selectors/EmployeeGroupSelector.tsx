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
    :hover {
        cursor: pointer;
    }

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


const EmployeeGroupSelector = (props: employeeGroupSelectorProps) => {
    const binding = useEmployeeGroupSelector({
        employeeGroup: props.employeeGroup,
        numberOfItems: props.size,
        pageSize: 10,     
    });

    return (
        <Container>
            <SearchableSelector
                title={'Employee Group'}
                searchBinding={binding.selector.searchBinding}
                pageIndexes={binding.selector.pageIndexes}
                slaves={props.slaves}
                items={binding.sortedGroup}
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
                        <Title onClick={() => binding.sort()}>Employee Groups </Title> 
                    </>
                } 
                // renderRow={(args: any) => (
                renderRow={(args: RenderRowArgs<EmployeeGroup>) => (
                    <DepartmentRow key={args.index}>
                        {/* <CheckBox 
                            isChecked={args.slaves!.slave(args.items[args.index].id)}
                            onClick={() => args.slaves!.toggleSlave(args.items[args.index].id)}
                        /> */}
                      
                        <GroupName>
                            {/* {args.items.name} */}
                            {args.items[args.index].name}
                        </GroupName>
                    </DepartmentRow>
                )} 
                pagerBinding={{
                    ...binding.selector.pagerBinding,
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
    console.log('init', args.employeeGroup);
    const [sortedGroup, setSortedGroup] = React.useState(args.employeeGroup);
    
    const sort = () => {
        
        const unsorted = [...sortedGroup];
        let sorted: EmployeeGroup[] = unsorted.reverse();

        // for (let i = sortedGroup.length-1; i >= 0; i--) {
        //     reversed.push(sortedGroup[i])
        // }
        console.log('norm', sortedGroup);
        console.log('sort', sorted);
        setSortedGroup(sorted);
    }
    // console.log(count);

    console.log('what will show in ui', sortedGroup);

    const searchableSelector = useWithSearchableSelector<EmployeeGroup>({
        items: sortedGroup, 
        initPageSize: args.pageSize,
        searchFor: (searchValue: string, item: EmployeeGroup): boolean => true,
    });
    return {
        selector: searchableSelector, 
        sort,
        sortedGroup,
    
    };
}

export default EmployeeGroupSelector;