import React from 'react'

import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

   // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; eror
   //const [gif, setGif] = useState('');
   // const [loading, setloading] = useState('false');
 
    // async function fetchData() {
    //     setloading(true);
    //     const url =`https://api.giphy.com/v1/gifs/random?api_key=${'bcXhAucNisSB7adeBYE7Wcxun6K0gRrp'}`; //working
    //     const {data} = await axios.get(url);
    //     const imageSoruce = data.data.images.downsized_large.url;
    //     console.log(imageSoruce);
    //     setGif(imageSoruce);
    //     setloading(false)
    // }

    // useEffect( () => {
    //  fetchData();
    // } ,[])

    const {gif, loading, fetchData} = useGif();// take values from useGif

    function clickHandler(){
          fetchData();
    }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        

        {
            loading ? (<Spinner/>) : (<img src={gif} width={450} alt=''/>)
        }
        

        <button onClick={clickHandler}
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>

        Generate</button>
    </div>
  )
}

export default Random