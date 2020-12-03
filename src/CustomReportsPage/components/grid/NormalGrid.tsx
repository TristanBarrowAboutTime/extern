import * as React from 'react';
import { useMemo, useCallback } from 'react';
import GeneralGrid from './GeneralGrid';
import PopoutMenu, { EventType } from '../popout-menu/ArrowPopout';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../hooks/component-hooks/molecular-components/useCheckmark';
import { CellType, GridCell } from './cells/GridCell';
import { PopoutMenuEvent } from '../../types/PopoutMenuEvent';

type NormalGridProps = {
    filterValue: string
    popoutMenu: {
        isOpen: boolean
        menuEvent: PopoutMenuEvent
        open: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
        close: () => void
    }
    popoutContent: React.ReactNode
    selectRow: (row: number) => void
}

const gridData = [
    ['cell', 'this is a cell. lets try a larger things. this is a cell. lets try a larger thingsthis is a cell. lets try a larger thingsthis is a cell. lets try a larger things', 'cool beans'],
    ['cell', 'this is a cell', 'cool beans'],
    ['cell', 'this is a cell', 'cool beans']
];

const NormalGrid = (props: NormalGridProps) => {
    const binding = useNormalGrid({
        selectRow: props.selectRow,
        openPopout: props.popoutMenu.open
    });

    return (
        <>
            <GeneralGrid grid={binding.grid} filterValue={props.filterValue} />
            {props.popoutMenu.isOpen && (
                <PopoutMenu menuEvent={props.popoutMenu.menuEvent}>
                    {props.popoutContent}
                </PopoutMenu>
            )}
        </>
    );
}

type UseNormalGridArgs = {
    selectRow: (i: number) => void
    openPopout: (e: EventType) => void
}

const useNormalGrid = (args: UseNormalGridArgs) => {
    const slaves = useMultipleCheckmarkSlaves(gridData.length);
    const master = useMasterCheckmark(slaves);

    const searchable = useCallback((initial: string) => {
        return initial + initial.split(' ').join('');
    }, []);

    const makeRow = useCallback((row: string[], index: number) => {
        const slaveCheck = {isChecked: slaves.slave(index), onClick: () => slaves.toggleSlave(index)};
        const hoveredCell = {
            onClick: (e: EventType) => {
                args.selectRow(index)
                args.openPopout(e);
            }
        }
        return [
            new GridCell(CellType.SLAVE_CHECKBOX_CELL, null, '', slaveCheck),
            new GridCell(CellType.HOVERED_CELL, row[0], searchable(row[0]), hoveredCell),
            new GridCell(CellType.DESCRIPTION_CELL, row[1], searchable(row[1])),
            new GridCell(CellType.NORMAL_CELL, row[2], searchable(row[2])),
        ];
    }, [slaves, args, searchable]);

    const header = useMemo(() => {

        const masterCheck = { isChecked: master.state, onClick: master.toggle };
        return [
            [
                new GridCell(CellType.MASTER_CHECKBOX_CELL, null,'', masterCheck),
                new GridCell(CellType.HEADER_CELL, 'Report Name', ''),
                new GridCell(CellType.HEADER_CELL, 'Description', ''),
                new GridCell(CellType.HEADER_CELL, 'Last Run Date', ''),
            ]
        ];
    }, [master.state, master.toggle]);

    let grid = useMemo(() => {
        const makeGrid = () => {
            let grid = header;
            gridData.forEach((row, index) => {
                grid.push(makeRow(row, index));
            });
            return grid;
        };
        return makeGrid();
    }, [makeRow, header]);

    return {grid};
}

export default NormalGrid;