import { useState, useCallback } from 'react';

export const useToggler = (initState: boolean) => {
    const [toggleState, setToggleStateTo] = useState(initState);
    
    const toggle = useCallback(() => {
        setToggleStateTo(!toggleState);
    }, [toggleState]);

    return { toggleState, toggle };
}
