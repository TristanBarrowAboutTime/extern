import * as React from 'react';
import styled from 'styled-components';
import Styles from '../../../style/Styles';
import CheckBox from '../../molecular-components/CheckBox';
import HoverableCell from './HoverableCell';

export enum CellType {
    HEADER_CELL,
    NORMAL_CELL,
    MASTER_CHECKBOX_CELL,
    SLAVE_CHECKBOX_CELL,
    HOVERED_CELL,
    DESCRIPTION_CELL
}

const HeaderCell = styled.th`
    white-space: nowrap;
    text-align: start;
    border-right: ${Styles.grid.border};
    padding: 8px;
    color: ${Styles.color.green};
    border-bottom: ${Styles.grid.border};
    font-weight: 900;
    margin-left: 8px;
    margin-right: 8px;
`;

const NormalCell = styled.td`
    border-right: ${Styles.grid.border};
    white-space: nowrap;
    padding: 8px;
`;

const DescriptionCell = styled.td`
    border-right: ${Styles.grid.border};
    padding: 8px;
`;

const DescriptionText = styled.span`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;

const MasterCheckboxCell = styled.th`
    padding: 8px;
    border-right: ${Styles.grid.border};
    border-bottom: ${Styles.grid.border};
`;

const SlaveCheckboxCell = styled.td`
    padding: 8px;
    border-right: ${Styles.grid.border};
`;

export class GridCell {
    constructor(type: CellType, content: React.ReactNode, searchableValue: string, binding?: any) {
        this.type = type;
        this.content = content;
        this.searchableValue = searchableValue;
        if (binding !== undefined) this.binding = binding;
        else this.binding = null;
        this.get = this.get.bind(this);
        this.contains = this.contains.bind(this);
    }
    type: CellType
    content: React.ReactNode
    searchableValue: string
    binding?: any

    contains(searchValue: string): boolean {
        return this.searchableValue.toLowerCase().includes(searchValue.toLowerCase());
    }

    get(key: number) {
        switch(this.type) {
            case CellType.HEADER_CELL:
                return <HeaderCell key={key}>{this.content}</HeaderCell>;
            case CellType.NORMAL_CELL:
                return <NormalCell key={key}>{this.content}</NormalCell>;
            case CellType.HOVERED_CELL:
                return <HoverableCell key={key} {...this.binding}>{this.content}</HoverableCell>;
            case CellType.MASTER_CHECKBOX_CELL: 
                return <MasterCheckboxCell key={key}><CheckBox {...this.binding} /></MasterCheckboxCell>;
            case CellType.SLAVE_CHECKBOX_CELL:
                return <SlaveCheckboxCell key={key}><CheckBox {...this.binding} /></SlaveCheckboxCell>;
            case CellType.DESCRIPTION_CELL: 
                return <DescriptionCell key={key}><DescriptionText>{this.content}</DescriptionText></DescriptionCell>
        }
    }
}


