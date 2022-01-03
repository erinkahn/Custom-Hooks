// ----- hook

import {useState, useEffect} from 'react';

export default function useFetch(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url, options);
                const json = await resp.json();
                setResponse(json);
            } catch(error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return {response, error};
}



// ---- consumer component

import useFetch from '../hooks/useFetch';

const FetchData = (props) => {
    const resp = useFetch('https://urlgoeshere', {});

    if (!resp.response) {
        return <div>Loading...</div>;
    }

    const thing = resp.response.name;
    return (
        <div>
            {thing}
        </div>
    )
}
