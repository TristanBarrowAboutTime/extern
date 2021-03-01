import * as React from 'react';
import Styles from '../../../style/Styles';
import styled from 'styled-components';
import { useWithSearchableSelector } from '../../../hooks/useSearchableSelector';
import SearchableSelector, { RenderRowArgs } from './SearchableSelector';

const Container = styled.div`
    padding: 4px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 8px;
    margin-top: 2px;
`;

const HeaderCode = styled.div`
    padding-left: 8px;
    color: ${Styles.color.green};
    font-size: 14px;
`;

type FolderSelectorProps = {
    folders: string[]
    size: number
}

const FolderSelector = (props: FolderSelectorProps) => {
    const binding = useFolderSelector({
        folders: props.folders,
        numberOfItems: props.size,
        pageSize: 10
    });

    return (
        <Container>
            <SearchableSelector
                title={'Folders'}
                searchBinding={binding.searchBinding}
                pageIndexes={binding.pageIndexes}
                items={binding.items}
                header={<HeaderCode>Code</HeaderCode>} 
                renderRow={(args: RenderRowArgs<string>) => (
                    <Row key={args.index}>
                        {props.folders[args.index]}
                    </Row>
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

type UseFolderSelectorArgs = {
    folders: string[]
    numberOfItems: number
    pageSize: number
}

const useFolderSelector = (args: UseFolderSelectorArgs) => {

    const searchFor = (searchValue: string, item: string): boolean => {
        return item.toLowerCase().includes(searchValue.toLowerCase());
    }
      
    const searchableSelector = useWithSearchableSelector<string>({
        items: args.folders,
        initPageSize: args.pageSize,
        searchFor,
    });

    return searchableSelector;
}

export default FolderSelector;