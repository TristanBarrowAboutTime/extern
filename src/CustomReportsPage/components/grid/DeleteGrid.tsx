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

type Row = {
    reportName: string
    description: string
    lastRunDate: string
    deletedBy: string
}

type NormalGridProps = {
    gridData: any[]
    popoutMenu: React.ReactChild
    searchValue: string
}

const DeleteGrid = (props: NormalGridProps) => {
    const slaves = useMultipleCheckmarkSlaves(props.gridData.length);
    const master = useMasterCheckmark(slaves);
    const popoutMenu = useWithPopoutMenu();

    const headerRow = [
        <CheckboxCell>
            <CheckBox isChecked={master.state} onClick={master.toggle} />
        </CheckboxCell>,
        <HeaderCell>Report Name</HeaderCell>,
        <HeaderCell>Description</HeaderCell>,
        <HeaderCell>Deleted By</HeaderCell>,
        <HeaderCell>Last Run Date</HeaderCell>
    ]

    const makeRow = (row: Row, index: number) => {
        return [
            <CheckboxCell><CheckBox isChecked={slaves.checkmarkSlaves[index].valueOf()} onClick={() => slaves.toggleSlave(index)} /></CheckboxCell>,
            <HoverableEditCell canHover={false} onClickEdit={popoutMenu.open}>{row.reportName}</HoverableEditCell>,
            <DescriptionCell>{row.description}</DescriptionCell>,
            <NormalCell>{row.deletedBy}</NormalCell>,
            <NormalCell>{row.lastRunDate}</NormalCell>,
        ];
    }

    const setupGrid = (data: any) => {
        let grid = [
            headerRow
        ];
        data.forEach((element: Row, index: number) => {
            if (element.reportName.toLowerCase().includes(props.searchValue.toLowerCase()) ||
                element.description.toLowerCase().includes(props.searchValue.toLowerCase()) ||
                element.deletedBy.toLowerCase().includes(props.searchValue.toLowerCase()) || 
                element.lastRunDate.toLowerCase().includes(props.searchValue.toLowerCase())) 
            {
                grid.push(makeRow(element, index));
            }
        });
        return grid;
    }

    return (
        <>
            {/* <GeneralGrid grid={setupGrid(props.gridData)} /> */}
            {popoutMenu.isOpen && 
                <PopoutMenu menuEvent={popoutMenu.menuEvent}>
                    {props.popoutMenu}
                </PopoutMenu>}
        </>
    );
}

export default DeleteGrid;