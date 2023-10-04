import React, { useState } from 'react'

import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 
   // const [gif, setGif] = useState('');
   // const [loading, setloading] = useState('false');
    const [tag, setTag] = useState("")
 
    // async function fetchData() {
    //     setloading(true);
    //     const url =`https://api.giphy.com/v1/gifs/random?api_key=${"bcXhAucNisSB7adeBYE7Wcxun6K0gRrp"}&tag=$(tag)`; //working
    //     const {data} = await axios.get(url);
    //     const imageSoruce = data.data.images.downsized_large.url;
    //     console.log(imageSoruce);
    //     setGif(imageSoruce);
    //     setloading(false)
    // }

    // useEffect( () => {
    //  fetchData();
    // } ,[])

    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler(){
          fetchData(tag);
    }

    function changeHandler(event) {
          setTag(event.target.value)
    }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
        

        {
            loading ? (<Spinner/>) : (<img src={gif} width={450} alt=''/>)
        }

        <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
        />
        

        <button onClick={clickHandler}
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>

        Generate</button>
    </div>
  )
}

export default Tag