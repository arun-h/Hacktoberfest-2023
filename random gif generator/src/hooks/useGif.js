import { useEffect,useState } from "react";
import axios from 'axios';

const RandomUrl =`https://api.giphy.com/v1/gifs/random?api_key=${'bcXhAucNisSB7adeBYE7Wcxun6K0gRrp'}`;
const tagUrl =`https://api.giphy.com/v1/gifs/random?api_key=${"bcXhAucNisSB7adeBYE7Wcxun6K0gRrp"}&tag=$(tag)`; 

const useGif = (tag) => {
  
    const [loading, setloading] = useState('false');
    const [gif, setGif] = useState('');
   
   
 
    async function fetchData(tag) {
        setloading(true);
        
        const {data} = await axios.get(tag ? tagUrl : RandomUrl);
        const imageSoruce = data.data.images.downsized_large.url;
        console.log(imageSoruce);
        setGif(imageSoruce);
        setloading(false)
    }

    useEffect( () => {
     fetchData('');
    } ,[])

    return {gif,loading,fetchData}

   
}

export default useGif