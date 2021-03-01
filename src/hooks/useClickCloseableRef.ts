import { useEffect, useRef, MutableRefObject } from 'react';

// you may need to call e.stopPropagation() when you open the ref to get the 
// behavior you want.

export const useClickClosableRef = (action: (e?: MouseEvent) => void) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // You may have forgot to pass the ref to the jsx element if 
            // 'contains' doesn't exist.

          
            if (ref.current.contains(e.target as Node)) return;
           
            action(e);
        }
        document.addEventListener('click', handleClick, { capture: true });
        return () => {
            document.removeEventListener('click', handleClick, { capture: true });
            action();
        }
    }, [ref, action]);

    return ref
}

