import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/common/Skeleton";
import { settingCoinObject } from "../utils/SettingCoinObj";
import List from "../components/Dashboard/Tabs/List";
import CoinInfo from "../components/Coin-page/CoinInfo";
import { GetCoinData } from "../hooks/useGetCoinData";
import { getPrices } from "../hooks/useGetCoinPrice";
import Button from "../components/common/Button";
import LineChart from "../components/Coin-page/LInechart";
import { settingChartData } from "../hooks/useChartdata";
import SelectDays from "../components/Coin-page/SelectDays";
import TogglePriceComponents from "../components/Coin-page/PriceType";

const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [error, setError] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] }); // x axis labels , y axis datasets
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    id && getData();
  }, [id]);

  async function getData() {
    const data = await GetCoinData(id,setError);
    if (data) {
      settingCoinObject(data, setCoinData);
      const prices = await getPrices(id, days, priceType,setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <>
      {error ? (
        <div className="flex justify-center items-center flex-col mt-16 w-full text-wrap">
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
              alignItems:"center",
            }}
          >
            <Link href="/dashboard">
              <Button text="Dashboard" />
            </Link>
          </div>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} delay={0.5} />
          </div>
          <div className="grey-wrapper">
           <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <TogglePriceComponents priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
};

export default Coin;
