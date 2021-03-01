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

export type Division = { id: number, name: string };

const Container = styled.div`
    padding: 4px;
`;

const DivisionRow = styled.div`
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

const DivisionName = styled.div`
    margin-left: 35px;
    font-size: 14px;

`;

const FilterContainer = styled.div`
    position: absolute;
    top: 90px;
    right: 12px;
`;
type DivisionSelectorProps = {
    divisions:Division[]
    size: number
    slaves: any
    master: any
}

const DivisionSelector = (props: DivisionSelectorProps) => {
    const binding = useDivisionSelector({
        divisions: props.divisions,
        numberOfItems: props.master,
        pageSize: 10
    });

    return (
        <Container>
            <SearchableSelector
                title={'Division'}
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
                    
                        <Title>Divisions</Title> 
                    </>
                } 
                renderRow={(args: RenderRowArgs<Division>) => (
                    <DivisionRow key={args.index}>
                        <CheckBox 
                            isChecked={args.slaves!.slave(args.items[args.index].id)}
                            onClick={() => args.slaves!.toggleSlave(args.items[args.index].id)}
                        />
                      
                        <DivisionName>
                            {args.items[args.index].name}
                        </DivisionName>
                    </DivisionRow>
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

type UseDivisionSelectorArgs = {
    divisions:Division[]
    numberOfItems: number
    pageSize: number
}

const useDivisionSelector = (args: UseDivisionSelectorArgs) => {
    const [sortedDivision, setSortedDivision] = React.useState(args.divisions);
    const searchFor = (searchValue: string, item: Division): boolean => {
        return (
            item.name.toLowerCase().includes(searchValue.toLowerCase())          
        );
    }
    const sortedByDivisionName = () => {        
 
        const sort = sortedDivision.sort((a,b) => a.name > b.name ? -1 : 1);
   }

    const searchableSelector = useWithSearchableSelector<Division>({
        items: args.divisions,       
        initPageSize: args.pageSize,
        searchFor,
    });

    return {
        ...searchableSelector, 
    };
}

export default DivisionSelector;