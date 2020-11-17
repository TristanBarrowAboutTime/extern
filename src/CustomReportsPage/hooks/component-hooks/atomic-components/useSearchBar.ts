import { useState } from "react";

export const useWithSearchBar = () => {
    const [value, setValueTo] = useState('');

    return {
        value,
        setValue: setValueTo,
        reset: () => setValueTo(""),
        searchBinding: {
            value,
            onChange: (event: {target: {value: string}}) => {
                setValueTo(event.target.value);
            }
        }
    };
};