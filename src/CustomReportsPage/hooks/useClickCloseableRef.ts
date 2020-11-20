import { useEffect, useRef, MutableRefObject } from 'react';

export const useClickClosableRef = (action: () => void) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // You probably forgot to pass the ref to the jsx element.
            console.log(ref)
            if (ref.current.contains(e.target as Node)) return;
            action();
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            action();
        }
    }, [ref]);

    return ref
}

