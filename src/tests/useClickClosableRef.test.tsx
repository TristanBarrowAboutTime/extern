import { useEffect, useRef, MutableRefObject } from 'react';
import { useClickClosableRef } from '../CustomReportsPage/hooks/useClickCloseableRef';
import { renderHook, act } from '@testing-library/react-hooks';

jest.mock('react');

const mockUseRef = useRef as jest.Mock;
mockUseRef.mockImplementation(() => {
    return () => {
        return {
            current: 'cool'
        }
    }
});
  
const originalAddEventListener = document.addEventListener;
const originalRemoveEventListener = document.removeEventListener;

beforeAll(() => {
    
});

beforeEach(() => {
    document.addEventListener = jest.fn(); 
    document.removeEventListener = jest.fn(); 
});

afterEach(() => {
    document.addEventListener = originalAddEventListener;
    document.removeEventListener = originalRemoveEventListener;
});


describe('Use Click Closable Ref', () => {

    it('action does not get called when its inside the ref', () => {

        const action = jest.fn();
        const contains = jest.fn().mockReturnValue(true);
        const refMock = { current: { contains } };

        const { result } = renderHook(() => useClickClosableRef(action));

        expect(result).toBe('');
        // expect(action).not.toHaveBeenCalled();
         
    }); 
});