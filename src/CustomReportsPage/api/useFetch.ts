import { useState, useEffect } from 'react';

type DataShape = {
    userId: number
	id: number
	title: string
	completed: boolean 
}

export const useFetch = (url: string) => {
    const [data, setDataTo] = useState("");
    const [hasData, setHasDataTo] = useState(false);

    useEffect(() => {
        if (!hasData) {

            setTimeout(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(json => {
                        setDataTo(json);
                        setHasDataTo(true)
                    });   
            }, 1000);
        }
    });

    return {
        data,
        dataString: JSON.stringify(data),
        hasData
    }
}

