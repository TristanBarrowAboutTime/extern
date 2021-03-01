import * as React from 'react';
import Checkbox from '../CheckBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../../style/Styles';
import styled from 'styled-components';
import { HSpacer } from '../../atomic-components/CssTriangle';
import CheckBox from '../CheckBox';
import { useWithSearchableSelector } from '../../../hooks/useSearchableSelector';
import SearchableSelector, { RenderRowArgs } from './SearchableSelector';
import TopArrowWrapper from '../../frames/TopArrowWrapper';
import MultipleSelectors from './MultipleSelectors';

export type Tag = { id:number, name: string };

const Container = styled.div`
    padding: 4px;
`;

const TagRow = styled.div`
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
const TagName = styled.div`
    margin-left: 35px;
    font-size: 14px;

`;

const FilterContainer = styled.div`
    position: absolute;
    top: 90px;
    right: 12px;
`;
type TagSelectorProps = {
    tags:Tag[]
    size: number
    slaves: any
    master: any
}

const TagSelector = (props: TagSelectorProps) => {
    const binding = useTagSelector({
        tags:props.tags,
        numberOfItems: props.size,
        pageSize: 10
    });

    return (
        <Container>
            <SearchableSelector
                title={'Tag'}
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
                    
                        <Title>Tags</Title> 
                    </>
                } 
                renderRow={(args: RenderRowArgs<Tag>) => (
                    <>
           
                    <TagRow key={args.index}>
                        <CheckBox 
                            isChecked={args.slaves!.slave(args.items[args.index].id)}
                            onClick={() => args.slaves!.toggleSlave(args.items[args.index].id)}
                        />
                      
                        <TagName>
                        <FontAwesomeIcon icon={faGlobe} color={Styles.color.red} size={'lg'} />
                        </TagName>
                    </TagRow>
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

type UseTagSelectorArgs = {
    tags:Tag[]
    numberOfItems: number
    pageSize: number
}

const useTagSelector = (args: UseTagSelectorArgs) => {
    const [sortedTag, setSortedTag] = React.useState(args.tags);
    const searchFor = (searchValue: string, item: Tag): boolean => {
        return (
            item.name.toLowerCase().includes(searchValue.toLowerCase())          
        );
    }
    const sortedEmployeeByName = () => {        
 
        const sort = sortedTag.sort((a,b) => a.name > b.name ? -1 : 1);
   }

    const searchableSelector = useWithSearchableSelector<Tag>({
        items: args.tags,       
        initPageSize: args.pageSize,
        searchFor,
    });

    return {
        ...searchableSelector, 
    };
}

export default TagSelector;