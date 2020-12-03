import { useCallback, useMemo, useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';

type UseSearchableSelectorArgs<T> = {
    items: T[]
    initPageSize: number
    searchFor: (searchValue: string, item: T) => boolean
}

export const useWithSearchableSelector = <T>(args: UseSearchableSelectorArgs<T>) => {
    const searchBar = useWithSearchBar();
    const [pageSize, setPageSizeTo] = useState(args.initPageSize);

    const newItems: T[] = useMemo(() => {
        let tempItems: T[] = [];

        args.items.forEach((item) => {
            if (args.searchFor(searchBar.value, item)) {
                tempItems.push(item);;
            }
        });

        return tempItems;
    }, [searchBar.value, pageSize]);

    const pages = usePagination({
        numberOfItems: newItems.length,
        pageSize: pageSize
    });

    const searchBinding = {
        ...searchBar.searchBinding,
        onChange: (e: {target: {value: string}}) => {
            searchBar.searchBinding.onChange(e);
            pages.first();
        }
    }

    return {
        items: newItems,
        searchBinding,
        searchValue: searchBar.value,
        pages,
        page: pages.page,
        pageIndexes: pages.itemIndexes,
        pagerBinding: {
            currentPage: pages.page,
            numOfPages: pages.numberOfPages,
            setPageSizeTo,
            first: pages.first,
            last: pages.last,
            prev: pages.prev,
            next: pages.next,
            goTo: pages.gotoPage,
        }
    }
}
