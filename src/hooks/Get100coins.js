import axios from "axios";
import { API_KEY } from "../utils/constant";

export const get100Coins = () => {
  const coins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        API_KEY
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });

  return coins;
};