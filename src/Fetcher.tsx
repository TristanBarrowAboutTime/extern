import React from 'react';
import { useFetch } from './CustomReportsPage/api/useFetch';

const Fetcher = () => {
    const binding = useFetch('https://jsonplaceholder.typicode.com/todos/1');
    
    return (
        <div>
            {binding.hasData ? binding.data : 'No Data'}
        </div>
    )
}

export default Fetcher;