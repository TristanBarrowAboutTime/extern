import * as React from 'react';
import styled from 'styled-components';
import GeneralGrid from './GeneralGrid';
import DescriptionCell from './cells/DescriptionCell';
import HoverableEditCell from './cells/HoveredCell';
import PopoutMenu from '../popout-menu/ArrowPopout';
import CheckBox from '../molecular-components/CheckBox';
import Styles from '../../style/Styles';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../hooks/component-hooks/molecular-components/useCheckmark';
import { useWithPopoutMenu } from '../../hooks/component-hooks/molecular-components/usePopoutMenu';
import { normalize } from 'path';
import { CellType, GridCell } from './cells/InsertCells';
import { GridType } from '../../types/GridTypes';

type NormalGridProps = {
    gridData: any[]
    popoutMenu: React.ReactChild
    searchValue: string
}

const gridData = [
    ['cell', 'this is a cell', 'cool beans']
]

const NormalGrid = (props: NormalGridProps) => {
    const slaves = useMultipleCheckmarkSlaves(props.gridData.length);
    const master = useMasterCheckmark(slaves);
    const popoutMenu = useWithPopoutMenu();
    const masterCheck = (
        <CheckBox 
            isChecked={master.state} 
            onClick={master.toggle}
        ></CheckBox>
    );
    const gridHeader = [
        [
            new GridCell(CellType.CHECKBOX_CELL, 'hello', masterCheck),
            new GridCell(CellType.HEADER_CELL, 'hello'),
            new GridCell(CellType.HEADER_CELL, 'hello'),
            new GridCell(CellType.HEADER_CELL, 'hello'),
        ]
    ];

    const MakeRow = () => {

    }

    return (
        <>
            <GeneralGrid grid={gridHeader} />
            {popoutMenu.isOpen && 
                <PopoutMenu menuEvent={popoutMenu.menuEvent}>
                    {props.popoutMenu}
                </PopoutMenu>}
        </>
    );
}

export default NormalGrid;