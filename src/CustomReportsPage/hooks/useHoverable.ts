import { useCallback, useState } from 'react';

export const useHoverable = (init: boolean) => {
    const [isHovered, setIsHoveredTo] = useState(init);
    
    const onMouseEnter = useCallback(() => setIsHoveredTo(true), []);
    const onMouseLeave = useCallback(() => setIsHoveredTo(false), []);

    return {
        isHovered,
        bind: {
            onMouseEnter,
            onMouseLeave
        }
    }
}
