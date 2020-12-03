import { useState, useCallback, useMemo } from 'react';

type UsePaginationArgs = {
    numberOfItems: number
    pageSize: number
}

export const usePagination = (args: UsePaginationArgs) => {
    const numberOfPages = useMemo(() => {
        const remainder = args.numberOfItems % args.pageSize;
        const wholePages = Math.floor(args.numberOfItems / args.pageSize);

        if (remainder === 0) 
            return wholePages;
        else 
            return wholePages + 1;

    }, [args.numberOfItems, args.pageSize]);

    const [page, setPageTo] = useState(0);

    const itemIndexes = useMemo(() => {
        console.log(page, numberOfPages)
        if (page > numberOfPages) throw new Error("Page is greater than the number of pages.");
        if (page < 0) throw new Error('Page is negative');

        let lastItem = page * args.pageSize + (args.pageSize - 1);
        if (page >= numberOfPages - 1) lastItem = args.numberOfItems - 1;

        let items = [];
        for (let firstItem = page * args.pageSize; firstItem <= lastItem; firstItem++) {
            items.push(firstItem);
        }

        return items;
    }, [page, numberOfPages, args.numberOfItems, args.pageSize]);

    const next = useCallback(() => {
        if (page < numberOfPages-1) {
            setPageTo(page + 1);
        }
    },[page,numberOfPages]);

    const prev = useCallback(() => {
        if (page > 0) {
            setPageTo(page - 1);
        }
    }, [page]);

    const first = useCallback(() => {
        setPageTo(0); 
    }, []);

    const last = useCallback(() => {
        setPageTo(numberOfPages - 1)
    }, [numberOfPages]);

    const gotoPage = useCallback((num: number) => {
        if (num > numberOfPages - 1) {
            console.warn('You attempted to go past the last page. Re-routing to the last page.');
            last();
        } else {
            setPageTo(num);
        }
    }, [numberOfPages]);

    return {
        page,
        numberOfPages,
        itemIndexes,
        next,
        prev,
        first,
        last,
        gotoPage
    }
}