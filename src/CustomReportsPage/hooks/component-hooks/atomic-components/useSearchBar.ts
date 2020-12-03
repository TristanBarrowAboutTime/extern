import { useState, useCallback } from "react";

export const useWithSearchBar = () => {
    const [value, setValueTo] = useState('');
    const reset = useCallback(() => setValueTo(''), []);

    const onChange = useCallback((event: {target: {value: string}}) => {
        setValueTo(event.target.value);
    },[])

    return {
        value,
        setValue: setValueTo,
        reset: reset,
        searchBinding: {
            value,
            onChange
        }
    };
};