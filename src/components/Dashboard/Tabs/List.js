import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "../Tabs/List.css"
import { useConvertNumber } from "../../../hooks/ConvertNumber";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const List = ({ coin,delay }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.tr className="list-row" initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay }}>
    <Tooltip title="Coin Image">
      <td className="td-img">
        <img
          src={coin.image}
          alt="bit-img"
          className="h-12 w-12 rounded-[50%] coin-image-td"
        />
      </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement="bottom-start">
      <td className="td-info">
        <div className="flex flex-col gap-[0.2rem]">
          <p className="text-[#fff] uppercase font-semibold text-[1.2rem] m-0 td-p">
            {coin.symbol}
          </p>
          <p className="text-[#888] capitalize font-normal text-[0.80rem] m-0 td-p">
            {coin.name}
          </p>
        </div>
      </td>
      </Tooltip>
      <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
       >
      {coin.price_change_percentage_24h > 0 ? (
        <td className="flex items-center justify-start gap-4 ml-6 mr-6 mt-1 mb-1">
          <div className="border-2 border-solid border-[#61c96f] text-center font-semibold text-[#61c96f] rounded-3xl text-[1rem] pl-5 pr-5 pt-[0.35rem] pb-[0.35rem] hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="td-chip-icon border-2 border-solid border-[#61c96f] text-[#61c96f] flex justify-center items-center rounded-[50%] h-9 w-9 hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="flex items-center justify-start gap-4 ml-6 mr-6 mt-1 mb-1">
          <div className="border-2 border-solid border-[#f94141] text-center font-semibold text-[#f94141] rounded-3xl text-[1rem] pl-5 pr-5 pt-[0.35rem] pb-[0.35rem] hover:bg-[#f94141] hover:text-[#fff] hover:transition-all">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="td-chip-icon border-2 border-solid border-[#f94141] text-[#f94141] flex justify-center items-center rounded-[50%] h-9 w-9 hover:bg-[#f94141] hover:text-[#fff] hover:transition-all">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
      </Tooltip>
      <Tooltip title="Coin Price In USD" placement="bottom-end">
      <td
        className="text-[1.2rem] font-semibold text-[#485149]  td-current-price"
        style={{
          color: coin.price_change_percentage_24h < 0 ? "#f94141" : "#61c96f",
        }}
      >
        ${coin.current_price.toLocaleString()}
      </td>
      </Tooltip>
      <Tooltip title="Coin Total Volume" placement="bottom-end">
      <td className="text-[#888] text-lg font-medium mt-2 td-totalVolume">
        ${coin.total_volume.toLocaleString()}
      </td>
      </Tooltip>
    <Tooltip title="Coin Market Capital" placement="bottom-end">
      <td className="text-[#888] text-lg font-medium mt-2 td-marketCap">
        ${coin.market_cap.toLocaleString()}
      </td>
      </Tooltip>
      <td className="mobile text-[#888] text-[1rem] font-medium  sm:hidden">${useConvertNumber(coin.market_cap)}</td>
    </motion.tr>
    </Link>
  );
};

export default List;
