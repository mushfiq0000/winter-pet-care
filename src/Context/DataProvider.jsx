import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContextData } from './ContextData';

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchdata = async()=>{
            try {
                const res = await fetch('/petservice.json')
                const result = await res.json()
                setData(result);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error);
                
            }
        }
        fetchdata();

    },[])
    
   const dataInfo = {data, loading}
   
   
    
    return ( 
        <ContextData value={dataInfo}>{children}</ContextData>
    );
};

export default DataProvider;