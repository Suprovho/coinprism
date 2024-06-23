import axios from "axios";
import { API_KEY } from "../utils/constant";

export const GetCoinData =(id,setError)=>{
   const myData= axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`, API_KEY)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      if (setError) {
        setError(true);
      }
    });

    return myData;
}