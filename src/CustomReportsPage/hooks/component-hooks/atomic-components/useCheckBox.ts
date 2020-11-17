import { useState } from 'react';

// maybe this gets removed because it's redundant


export const useWithCheckbox = (initState: boolean = false) => {
    const [isChecked, setIsCheckedTo] = useState(initState);
    return {
        isChecked, setIsCheckedTo
    } 
}