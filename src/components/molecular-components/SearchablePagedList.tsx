import React from 'react';
import Styles from '../../style/Styles';
import SearchBar from '../atomic-components/SearchBar';
import {useTextInput} from '../../hooks/useTextInput';
import styled from 'styled-components';

type SearchablePagedListProps = {
    list: { code: string, fullName: string }[]
    selectInput: (input: {code: string, fullName: string}) => void
}

const Container = styled.div`
    padding: ${Styles.size.medium};
    border: 1px solid ${Styles.color.green};
`;

const SearchablePagedList = ({
    list,
    // selectInput
}: SearchablePagedListProps) => {
    // const [displayedItems, setDisplayedItems] = useState();
    const { bind } = useTextInput('');
    return (
        <Container>
            <SearchBar {...bind} />
            <div>
                {list.map((listItem) => {
                    return (
                        <div>
                            {listItem.fullName}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default SearchablePagedList;