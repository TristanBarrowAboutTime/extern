import { useState } from 'react';

export const useToggler = (initState: boolean) => {
    const [toggleState, setToggleStateTo] = useState(initState);
    const toggle = () => {
        setToggleStateTo(!toggleState);
    }

    return { toggleState, toggle };
}
