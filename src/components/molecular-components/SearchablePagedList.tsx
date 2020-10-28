import React from 'react';
import { createUseStyles } from 'react-jss';
import Styles from '../../style/WMStyles';
import SearchBar from '../atomic-components/SearchBar';
import {useTextInput} from '../../hooks/useTextInput';

type SearchablePagedListProps = {
    list: { code: string, fullName: string }[]
    selectInput: (input: {code: string, fullName: string}) => void
}

const SearchablePagedList = ({
    list,
    // selectInput
}: SearchablePagedListProps) => {
    const classes = useStyles();
    // const [displayedItems, setDisplayedItems] = useState();
    const { bind } = useTextInput('');
    return (
        <div className={classes.container}>
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
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        padding: Styles.size.medium,
        border: {
            style: 'solid',
            color: Styles.color.green,
            width: 1
        }
    }
});

export default SearchablePagedList;