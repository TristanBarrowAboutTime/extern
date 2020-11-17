import { useState } from 'react';

export const usePagination = <T extends unknown>(allItems: T[], pageSize: number) => {
    const [page, changePageTo] = useState(allItems.splice(0, pageSize));
    const next = () => {
        console.log('NextPage')
    }

    const prev = () => {
        console.log('PrevPage')
    }
    const totalPages = 13;
    const currentPage = 1;
    return {
        page,
        next,
        prev,
        totalPages,
        currentPage,
    }
}