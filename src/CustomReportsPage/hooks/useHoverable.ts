import { useState } from 'react';

export const useHoverable = (init: boolean) => {
    const [isHovered, setIsHoveredTo] = useState(init);

    return {
        isHovered,
        bind: {
            onMouseEnter: () => setIsHoveredTo(true),
            onMouseLeave: () => setIsHoveredTo(false)
        }
    }
}
