import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

function useData() {
    const [query, setQuery] = useState("React hooks");
    const [data, setData] = useState ([]);
    useEffect(() =>{
        async function fetchData(){
            const response = await axios.get(
                `https://swapi.dev/api/people?query=${query}`
            );
            setData(response.data.hits);
        }
    }, [query]);

    return[data, query, setQuery];

} 

export default useData;