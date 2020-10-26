import React from 'react';
import { createUseStyles } from 'react-jss';
import WMStyles from '../../style/WMStyles';
import WMSearchBar from '../atomic-components/WMSearchBar';
import {useTextInput} from '../../hooks/useTextInput';

type WMSearchablePagedListProps = {
    list: { code: string, fullName: string }[]
    selectInput: (input: {code: string, fullName: string}) => void
}

const WMSearchablePagedList = ({
    list,
    // selectInput
}: WMSearchablePagedListProps) => {
    const classes = useStyles();
    // const [displayedItems, setDisplayedItems] = useState();
    const { bind } = useTextInput('');
    return (
        <div className={classes.container}>
            <WMSearchBar {...bind} />
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
        padding: WMStyles.size.medium,
        border: {
            style: 'solid',
            color: WMStyles.color.green,
            width: 1
        }
    }
});

export default WMSearchablePagedList;