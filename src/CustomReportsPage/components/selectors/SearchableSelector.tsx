import * as React from 'react';
import SearchBar from '../atomic-components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PagingBar, { PagingBarProps } from '../molecular-components/PagingBar';
import { SearchBinding } from '../../types/SearchBinding';
import { useToggler } from '../../hooks/useToggler';

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

const IconContainer = styled.div`
    position: absolute;
    top: 64px;
    right: 30px;
`;

export type RenderRowArgs<T> = {
    slaves?: {
        slave: (id: number) => boolean, 
        toggleSlave: (id: number) => void
    }, 
    items: T[], 
    index: number
}

type SearchableSelectorProps<T> = {
    title: string
    searchBinding: SearchBinding
    header: React.ReactChild | React.ReactChildren
    renderRow: (args: RenderRowArgs<T>) => React.ReactChild | React.ReactChildren
    pageIndexes: number[]
    pagerBinding: PagingBarProps
    filters?: React.ReactNode
    items: T[]
    slaves?: {
        slave: (id: number) => boolean, 
        toggleSlave: (id: number) => void
    }, 
}

function SearchableSelector<T>(props: SearchableSelectorProps<T>) {
    const toggler = useToggler(false);
    return (
        <Container>
            <Title>{props.title}</Title>
            <SearchBar {...props.searchBinding} />
            <Header>
                {props.header}
            </Header>
            <div>
                {props.pageIndexes.map((index) => {
                    return props.renderRow({
                        slaves: props.slaves,
                        items: props.items,
                        index
                    });
                })}
            </div>
            <PagingBar {...props.pagerBinding}/> 
            {!!props.filters && <IconContainer>
                <FontAwesomeIcon 
                    onClick={toggler.toggle}
                    icon={toggler.toggleState ? faChevronUp : faChevronDown}
                />
            </IconContainer>}
            {!!props.filters && toggler.toggleState && props.filters}
        </Container>
    );
}



export default SearchableSelector;
