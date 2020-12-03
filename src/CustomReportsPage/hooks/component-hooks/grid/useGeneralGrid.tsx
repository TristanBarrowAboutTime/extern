import * as React from 'react';
import { GridCell } from '../../../components/grid/cells/GridCell';

export const insertCells = () => {
    
}

export const flipArray = (array: GridCell[][]) => {
    const columnHeight: number = array.length;
    let rowWidth: number = 0;
    if (columnHeight > 0) {
        rowWidth = array[0].length;
    } else {
        return [[]];
    }

    let newArray: any[] = [];

    for (let i = 0; i < rowWidth; i++) {
        newArray.push([]);
    }

    for (let i = 0; i < rowWidth; i++) {
        for (let j = 0; j < columnHeight; j++) {
            newArray[i].push(array[j][i]);
        }
    }

    return newArray;
};

export const useGeneralGrid = (grid: GridCell[][]) => {
    if (grid.length === 0 || grid[0].length === 0) throw 'Grid Cannot Be Empty';

    return {
        columnGrid: flipArray(grid)
    }
}
