import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
 

const API_KEY='tNlycP71DJ1YX1ZXDR1Dv8PjdXTYJgUv';
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (tag) => {

    const[gif,setGif]=useState('');
    
    const[loading,setLoading]=useState('false');

    async function fetchData(tag){
        setLoading(true);
        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
        const imgSrc=data.data.images.downsized_large.url
        console.log(imgSrc);
        setGif(imgSrc);
        setLoading(false);
    }

    useEffect(()=>{fetchData('car')},[])

    return {gif,loading,fetchData};
}

export default useGif