import { useMemo, useState } from 'react';

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

        if (page >= numberOfPages) throw new Error("Page is greater than the number of pages.");
        if (page < 0) throw new Error('Page is negative');

        let lastItem = page * numberOfPages + (args.pageSize - 1);
        if (page >= numberOfPages - 1) lastItem = args.numberOfItems - 1;

        let items = [];
        for (let firstItem = page * numberOfPages; firstItem <= lastItem; firstItem++) {
            items.push(firstItem);
        }

        return items;
    }, [page, args.numberOfItems]);

    const next = () => {
        if (page < numberOfPages-1) {
            setPageTo(page + 1);
        }
    }

    const prev = () => {
        if (page > 0) {
            setPageTo(page - 1);
        }
    }

    const start = () => {
        setPageTo(0); 
    }

    const end = () => {
        setPageTo(numberOfPages - 1)
    }

    const gotoPage = (num: number) => {
        if (num > numberOfPages - 1) {
            console.warn('You attempted to go past the last page. Re-routing to the last page.');
            end();
        } else {
            setPageTo(num - 1);
        }
    }

    return {
        page,
        numberOfPages,
        itemIndexes,
        next,
        prev,
        start,
        end,
        gotoPage
    }
}