import { useEffect, useRef, MutableRefObject } from 'react';

// if you are having issues with the ref closing randomly see this React issue:
// https://github.com/facebook/react/issues/20325

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
    }, [ref]);

    return ref
}

