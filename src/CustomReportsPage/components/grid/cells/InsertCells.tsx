import * as React from 'react';
import styled from 'styled-components';
import Styles from '../../../style/Styles';
import DescriptionCell from './DescriptionCell';
import HoverableEditCell from './HoveredCell';

export enum CellType {
    HEADER_CELL,
    NORMAL_CELL,
    CHECKBOX_CELL,
    HOVERED_CELL,
    DESCRIPTION_CELL
}

const HeaderCell = styled.div`
    color: ${Styles.color.green};
    font-weight: 900;
    margin-left: 8px;
    margin-right: 8px;
`;

const NormalCell = styled.div`
    white-space: nowrap;
    margin-left: 8px;
    margin-right: 8px;
`;

const CheckboxCell = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 30px;
`;

export class GridCell {
    constructor(type: CellType, content: React.ReactNode, bind?: any) {
        this.type = type;
        this.content = content;

    }
    type: CellType
    content: React.ReactNode
    bind?: any
}


const InsertCell = (cell: GridCell) => {
    switch(cell.type) {
        case CellType.HEADER_CELL:
            return <HeaderCell>{cell.content}</HeaderCell>;
        case CellType.NORMAL_CELL:
            return <NormalCell>{cell.content}</NormalCell>;
        case CellType.DESCRIPTION_CELL:
            return <DescriptionCell>{cell.content}</DescriptionCell>;
        case CellType.HOVERED_CELL:
            return <HoverableEditCell {...cell.bind}>{cell.content}</HoverableEditCell>;
        case CellType.CHECKBOX_CELL: 
            return <CheckboxCell {...cell.bind}></CheckboxCell>
    }
}

export default InsertCell;