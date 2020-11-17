import * as React from 'react';
import styled from 'styled-components';
import GeneralGrid from './GeneralGrid';
import DescriptionCell from './cells/DescriptionCell';
import HoverableEditCell from './cells/HoverableEditCell';
import PopoutMenu from '../popout-menu/PopoutMenu';
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

type NormalGridProps = {
    gridData: any[]
    popoutMenu: React.ReactChild
}

const NormalGrid = (props: NormalGridProps) => {
    const slaves = useMultipleCheckmarkSlaves(props.gridData.length, false);
    const master = useMasterCheckmark(false, slaves.setAllSlaves);
    const popoutMenu = useWithPopoutMenu();

    const headerRow = [
        <CheckboxCell>
            <CheckBox isChecked={master.masterCheckmarkState} onClick={master.toggleMasterCheckmark} />
        </CheckboxCell>,
        <HeaderCell>Report Name</HeaderCell>,
        <HeaderCell>Description</HeaderCell>,
        <HeaderCell>Last Run Date</HeaderCell>
    ]

    const makeRow = (row: any, index: number) => {
        return [
            <CheckboxCell><CheckBox isChecked={slaves.checkmarkSlaves[index].valueOf()} onClick={() => slaves.toggleSlave(index)} /></CheckboxCell>,
            <HoverableEditCell canHover={false} onClickEdit={popoutMenu.open}>{row.reportName}</HoverableEditCell>,
            <DescriptionCell value={row.description} />,
            <NormalCell>{row.lastRunDate}</NormalCell>,
        ];
    }

    const setupGrid = (data: any) => {
        let grid = [
            headerRow
        ];
        data.forEach((element: any, index: number) => {
            grid.push(makeRow(element, index));
        });
        return grid;
    }

    return (
        <>
            <GeneralGrid grid={setupGrid(props.gridData)} />
            {popoutMenu.isOpen && 
                <PopoutMenu menuEvent={popoutMenu.menuEvent}>
                    {props.popoutMenu}
                </PopoutMenu>}
        </>
    );
}

export default NormalGrid;