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




// --- or another way






// ---- hook

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;



// ---- consumer component

import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;
