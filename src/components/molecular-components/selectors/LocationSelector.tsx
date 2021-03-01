import * as React from 'react';
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

export type Location = { id: number, name: string };

const Container = styled.div`
    padding: 4px;
`;

const LocationRow = styled.div`
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

const LocationName = styled.div`
    margin-left: 35px;
    font-size: 14px;

`;

const FilterContainer = styled.div`
    position: absolute;
    top: 90px;
    right: 12px;
`;
type LocationSelectorProps = {
    locations:Location[]
    size: number
    slaves: any
    master: any
}

const LocationSelector = (props: LocationSelectorProps) => {
    const binding = useLocationSelector({
        locations: props.locations,
        numberOfItems: props.master,
        pageSize: 10
    });

    return (
        <Container>
            <SearchableSelector
                title={'Location'}
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
                        <CheckBox 
                            isChecked={props.master.state}
                            onClick={props.master.toggle}
                        />
                        <HSpacer size={8} />
                        <FontAwesomeIcon icon={faCheck} color={Styles.color.green} />
                    
                        <Title>Locations</Title> 
                    </>
                } 
                renderRow={(args: RenderRowArgs<Location>) => (
                    <LocationRow key={args.index}>
                        <CheckBox 
                            isChecked={args.slaves!.slave(args.items[args.index].id)}
                            onClick={() => args.slaves!.toggleSlave(args.items[args.index].id)}
                        />
                      
                        <LocationName>
                            {args.items[args.index].name}
                        </LocationName>
                    </LocationRow>
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

type UseLocationSelectorArgs = {
    locations:Location[]
    numberOfItems: number
    pageSize: number
}

const useLocationSelector = (args: UseLocationSelectorArgs) => {
    const [sortedLocation, setSortedLocation] = React.useState(args.locations);
    const searchFor = (searchValue: string, item: Location): boolean => {
        return (
            item.name.toLowerCase().includes(searchValue.toLowerCase())          
        );
    }
    const sortedByLocationName = () => {        
 
        const sort = sortedLocation.sort((a,b) => a.name > b.name ? -1 : 1);
   }

    const searchableSelector = useWithSearchableSelector<Location>({
        items: args.locations,       
        initPageSize: args.pageSize,
        searchFor,
    });

    return {
        ...searchableSelector, 
    };
}

export default LocationSelector;