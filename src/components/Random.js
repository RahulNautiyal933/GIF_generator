import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    const{gif,loading,fetchData}=useGif();

    function changeHandler(){
      fetchData();
    }

  return (
    <div className="bg-green-600 w-1/2 rounded-lg border-1 border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <div className="mt-[15px] text-3xl underline font-bold">A RANDOM GIF</div>
        
        {loading?(<Spinner/>):(<img src={gif} width="450"/>)}
        
        <button className="bg-white bg-opacity-70 text-lg py-2 rounded-lg w-10/12 mb-[20px]" onClick={changeHandler}>
            GENERATE
        </button>
    </div>
  )
}

export default Random