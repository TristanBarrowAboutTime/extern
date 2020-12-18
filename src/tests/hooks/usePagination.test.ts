import { usePagination } from '../../CustomReportsPage/hooks/usePagination';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Use Pagination', () => {
    it('calculates pages correctly without a mod greater than zero (100, 10)', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 100,
            pageSize: 10
        }));

        expect(result.current.numberOfPages).toBe(10);
    });

    it('calculates pages correctly without a mod greater than zero (49, 7)', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 49,
            pageSize: 7 
        }));

        expect(result.current.numberOfPages).toBe(7);
    });

    it('calculates pages correctly with a mod greater than zero (105, 10)', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 105,
            pageSize: 10
        }));

        expect(result.current.numberOfPages).toBe(11);
    });

    it('calculates pages correctly with a mod greater than zero (53, 7)', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 53,
            pageSize: 7
        }));

        expect(result.current.numberOfPages).toBe(8);
    });
    
    it('calculates the correct items for the first page', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        expect(result.current.itemIndexes).toMatchObject([0,1,2,3,4]);
    });   
 
    it('calculates the correct items for the second page', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));

        act(() => {
            result.current.next();
        });
        
        expect(result.current.itemIndexes).toMatchObject([5,6,7,8,9])
    });

    it('calculates the correct items for the first page after navigation', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        act(() => {
            result.current.next();
        });
        
        act(() => {
            result.current.prev();
        })
        
        expect(result.current.itemIndexes).toMatchObject([0,1,2,3,4]);
    });

    it('stays on the first page when going back from first page', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        act(() => {
            result.current.prev();
        });
        
        expect(result.current.page).toBe(0);
    });

    it('goes to first page', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));

        act(() => {
            result.current.next();
        });

        act(() => {
            result.current.next();
        });

        act(() => {
            result.current.first();
        });
        
        expect(result.current.page).toBe(0);
    });


    it('goes to last page', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        act(() => {
            result.current.last();
        });
        
        expect(result.current.page).toBe(4);
        expect(result.current.itemIndexes).toMatchObject([20,21,22])
    });
    
    it('does not go past the last page', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        act(() => {
            result.current.last();
        });
        act(() => {
            result.current.next();
        });
    
        expect(result.current.page).toBe(4);
        expect(result.current.itemIndexes).toMatchObject([20,21,22])
    });

    it('goes to page with gotoPage(n)', () => {
        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        act(() => {
            result.current.gotoPage(3);
        });
    
        expect(result.current.page).toBe(2);
        expect(result.current.itemIndexes).toMatchObject([10,11,12,13,14])
    });

    it('give a warning and goes to the last page when attempting to go to a page past the last', () => {
        const originalWarn = console.warn;
        let mockConsole: string[] = [];
        console.warn = (output: string) => mockConsole.push(output); 

        const { result } = renderHook(() => usePagination({
            numberOfItems: 23,
            pageSize: 5
        }));
        
        act(() => {
            result.current.gotoPage(10);
        });
    
        expect(result.current.page).toBe(4);
        expect(result.current.itemIndexes).toMatchObject([20,21,22])
        expect(mockConsole).toMatchObject(['You attempted to go past the last page. Re-routing to the last page.']);

        console.warn = originalWarn;
    });

});