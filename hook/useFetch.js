import {useState, useEffect} from 'react';
import axios from "axios";


const useFetch = (endpoint,query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError]=useState(null);

    /*const axios = require('axios');*/

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': 'b01f874d7fmsh267b128c5293bdbp1cf541jsn3ce5bfba2fbd',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query},
    };


    const fetchData=async ()=>{
        setIsLoading(true);

        try{
            const response=await axios(options);
            setData(response.data.data);
            setIsLoading(false);
            
        }catch(error){
            setError(error);
            alert("There is an error");
            console.error('Error in fetchData:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch=()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data,isLoading,error,refetch};
}

export default useFetch