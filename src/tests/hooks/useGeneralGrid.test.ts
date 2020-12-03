import * as React from 'react';
import { useGeneralGrid, flipArray } from '../../CustomReportsPage/hooks/component-hooks/grid/useGeneralGrid';
import { renderHook, act } from '@testing-library/react-hooks';
import InsertCell, { CellType, GridCell }from '../../CustomReportsPage/components/grid/cells/GridCell';

describe('Use General Grid', () => {

    it('Empty Grid throws an Error', () => {
        const grid: GridCell[][] = [];
        grid.push([]); 
        expect(() => useGeneralGrid([])).toThrowError('Grid Cannot Be Empty')
        expect(() => useGeneralGrid(grid)).toThrowError('Grid Cannot Be Empty')
    });


});
    
describe('Flip Array', () => {
    it('Grid gets flipped', () => {
        const grid: GridCell [][] = [
            [
                new GridCell(CellType.HEADER_CELL, 'H1'), 
                new GridCell(CellType.HEADER_CELL, 'H2')
            ],
            [
                new GridCell(CellType.NORMAL_CELL, 'C1'),
                new GridCell(CellType.NORMAL_CELL, 'C2')
            ]
        ];
        
        const flipped = flipArray(grid);

        expect(flipped[0][0].content).toBe('H1');
        expect(flipped[0][0].type).toBe(CellType.HEADER_CELL);
        expect(flipped[0][1].content).toBe('C1');
        expect(flipped[0][1].type).toBe(CellType.NORMAL_CELL);
        expect(flipped[1][0].content).toBe('H2');
        expect(flipped[1][0].type).toBe(CellType.HEADER_CELL);
        expect(flipped[1][1].content).toBe('C2');
        expect(flipped[1][1].type).toBe(CellType.NORMAL_CELL);
    });

    it('Grid gets flipped', () => {
        const grid: GridCell [][] = [
            [
                new GridCell(CellType.HEADER_CELL, 'H1'), 
                new GridCell(CellType.HEADER_CELL, 'H2'),
                new GridCell(CellType.HEADER_CELL, 'H3'),
            ],
            [
                new GridCell(CellType.CHECKBOX_CELL,    'C1'),
                new GridCell(CellType.DESCRIPTION_CELL, 'C2'),
                new GridCell(CellType.NORMAL_CELL,      'C3'),
            ]
        ];
        
        const flipped = flipArray(grid);

        expect(flipped[0][0].content).toBe('H1');
        expect(flipped[0][0].type).toBe(CellType.HEADER_CELL);
        expect(flipped[0][1].content).toBe('C1');
        expect(flipped[0][1].type).toBe(CellType.CHECKBOX_CELL);

        expect(flipped[1][0].content).toBe('H2');
        expect(flipped[1][0].type).toBe(CellType.HEADER_CELL);
        expect(flipped[1][1].content).toBe('C2');
        expect(flipped[1][1].type).toBe(CellType.DESCRIPTION_CELL);

        expect(flipped[2][0].content).toBe('H3');
        expect(flipped[2][0].type).toBe(CellType.HEADER_CELL);
        expect(flipped[2][1].content).toBe('C3');
        expect(flipped[2][1].type).toBe(CellType.NORMAL_CELL);

    });

});

describe('');