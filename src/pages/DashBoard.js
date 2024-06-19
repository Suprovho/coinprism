import React, { useEffect, useState } from "react";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import axios from "axios";
import { API_KEY } from "../utils/constant";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",API_KEY)
      .then((response) => {
        console.log(response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Tabs coins={coins}/>
    </div>
  );
};

export default DashBoard;
