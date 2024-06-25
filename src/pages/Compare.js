import React, { useEffect, useState, useCallback } from "react";
import CoinInfo from "../components/Coin-page/CoinInfo";
import LineChart from "../components/Coin-page/LInechart";
import TogglePriceComponents from "../components/Coin-page/PriceType";
import Loader from "../components/common/Skeleton";
import SelectCoins from "../components/Compare/SelectCoins";
import List from "../components/Dashboard/Tabs/List";
import { get100Coins } from "../hooks/Get100coins";
import { GetCoinData } from "../hooks/useGetCoinData";
import { getPrices } from "../hooks/useGetCoinPrice";
import { settingChartData } from "../hooks/useChartdata";
import { settingCoinObject } from "../utils/SettingCoinObj";
import debounce from "lodash.debounce";

const Compare = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const coins = await get100Coins();
      setAllCoins(coins || []);
      await updateCoinData(crypto1, setCoin1Data);
      await updateCoinData(crypto2, setCoin2Data);
      await updateChartData(crypto1, crypto2, days, priceType);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    } finally {
      setLoading(false);
    }
  }, [crypto1, crypto2, days, priceType]);

  const updateCoinData = async (crypto, setCoinData) => {
    try {
      const data = await GetCoinData(crypto);
      settingCoinObject(data, setCoinData);
    } catch (error) {
      console.error(`Error fetching data for ${crypto}:`, error);
    }
  };

  const updateChartData = async (crypto1, crypto2, days, priceType) => {
    try {
      const [prices1, prices2] = await Promise.all([
        getPrices(crypto1, days, priceType),
        getPrices(crypto2, days, priceType),
      ]);
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error updating chart data:", error);
    }
  };

  const onCoinChange = debounce(async (e, isCoin2) => {
    const newCrypto = e.target.value;
    setLoading(true);
    if (isCoin2) {
      setCrypto2(newCrypto);
      await updateCoinData(newCrypto, setCoin2Data);
    } else {
      setCrypto1(newCrypto);
      await updateCoinData(newCrypto, setCoin1Data);
    }
    await updateChartData(isCoin2 ? crypto1 : newCrypto, isCoin2 ? newCrypto : crypto2, days, priceType);
    setLoading(false);
  }, 300);

  const handleDaysChange = debounce(async (e) => {
    const newDays = e.target.value;
    setLoading(true);
    setDays(newDays);
    await updateChartData(crypto1, crypto2, newDays, priceType);
    setLoading(false);
  }, 300);

  const handlePriceTypeChange = debounce(async (e) => {
    const newPriceType = e.target.value;
    setLoading(true);
    setPriceType(newPriceType);
    await updateChartData(crypto1, crypto2, days, newPriceType);
    setLoading(false);
  }, 300);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SelectCoins
            allCoins={allCoins}
            crypto1={crypto1}
            crypto2={crypto2}
            onCoinChange={onCoinChange}
            days={days}
            handleDaysChange={handleDaysChange}
          />
          <div className="grey-wrapper">
            <List coin={coin1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={coin2Data} />
          </div>
          <div className="grey-wrapper">
            <TogglePriceComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} multiAxis={true} />
          </div>
          <CoinInfo heading={coin1Data?.name || ""} desc={coin1Data?.desc || ""} />
          <CoinInfo heading={coin2Data?.name || ""} desc={coin2Data?.desc || ""} />
        </>
      )}
    </div>
  );
};

export default Compare;
