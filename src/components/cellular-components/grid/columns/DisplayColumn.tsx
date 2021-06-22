import * as React from 'react';
import { ColumnProps } from '../ColumnProps';

const DisplayColumn = (props: ColumnProps) => {
    return (
        <div>
            {props.text}
        </div>
    );
}

export default DisplayColumn;