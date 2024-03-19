import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

    const[tag,setTag]=useState('car')
    const{gif,loading,fetchData}=useGif(tag);

    function clickHandler(){
      fetchData(tag);
    }

  return (
    <div className="bg-blue-600 w-1/2 rounded-lg border-1 border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <div className="mt-[15px] text-3xl underline font-bold">RANDOM {tag} GIF</div>
        
        {loading?(<Spinner/>):(<img src={gif} width="450"/>)}

        <input
          className="w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center " onChange={(event)=>setTag(event.target.value)} value={tag}
        />
        
        <button 
        className="bg-white bg-opacity-70 text-lg py-2 rounded-lg w-10/12 mb-[20px]" onClick={clickHandler}>
            GENERATE
        </button>
    </div>
  )
}

export default Tag