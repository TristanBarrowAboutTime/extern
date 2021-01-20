import { useToggler } from '../../hooks/useToggler';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Use Toggler', () => {
    it('toggles to false from true', () => {
        const { result } = renderHook(() => useToggler(true));
        act(() => {
            result.current.toggle();
        });
        expect(result.current.toggleState).toBe(false);
    });
    it('toggles to true from false', () => {
        const { result } = renderHook(() => useToggler(false));
        act(() => {
            result.current.toggle();
        });
        expect(result.current.toggleState).toBe(true);
    });
    // tests
    it('toggles twice to true', () => {
        const { result } = renderHook(() => useToggler(true));
        act(() => {
            result.current.toggle();
        });
        act(() => {
            result.current.toggle();
        });
        expect(result.current.toggleState).toBe(true);
    });
    it('toggles twice to false', () => {
        const { result } = renderHook(() => useToggler(false));
        act(() => {
            result.current.toggle();
        });
        act(() => {
            result.current.toggle();
        });
        expect(result.current.toggleState).toBe(false);
    });
});