import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Grid = ({ coin, delay }) => {
return (
  <Link to={`/coin/${coin.id}`}>
    <motion.div
      className={`text-white w-[300px] bg-[#1b1b1b] border-2 border-solid border-[#1b1b1b] h-[300px] cursor-pointer rounded-xl ${
        coin.price_change_percentage_24h > 0
          ? "hover:border-[#61c96f] hover:transition-all"
          : "hover:border-[#f94141] hover:transition-all"
      } flex flex-col`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="flex flex-start items-center gap-4 m-6">
        <img
          src={coin.image}
          alt="bit-img"
          className="h-12 w-12 rounded-[50%]"
        />
        <div className="flex flex-col gap-[0.2rem]">
          <p className="text-[#fff] uppercase font-semibold text-[1.2rem] m-0">
            {coin.symbol}
          </p>
          <p className="text-[#888] capitalize font-normal text-[0.80rem] m-0">
            {coin.name}
          </p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="flex items-center justify-start gap-4 ml-6 mr-6 mt-1 mb-1">
          <div className="border-2 border-solid border-[#61c96f] text-center font-semibold text-[#61c96f] rounded-3xl text-[1rem] pl-5 pr-5 pt-[0.35rem] pb-[0.35rem] hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="border-2 border-solid border-[#61c96f] text-[#61c96f] flex justify-center items-center rounded-[50%] h-9 w-9 hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-start gap-4 ml-6 mr-6 mt-1 mb-1">
          <div className="border-2 border-solid border-[#f94141] text-center font-semibold text-[#f94141] rounded-3xl text-[1rem] pl-5 pr-5 pt-[0.35rem] pb-[0.35rem] hover:bg-[#f94141] hover:text-[#fff] hover:transition-all">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="border-2 border-solid border-[#f94141] text-[#f94141] flex justify-center items-center rounded-[50%] h-9 w-9 hover:bg-[#f94141] hover:text-[#fff] hover:transition-all">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="m-6">
        <h3
          className="text-[1.2rem] font-semibold text-[#61c96f]"
          style={{
            color: coin.price_change_percentage_24h < 0 ? "#f94141" : "#61c96f",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="text-[#888] text-[0.8rem] font-medium mt-2">
          Total Volume : ${coin.total_volume.toLocaleString()}
        </p>
        <p className="text-[#888] text-[0.8rem] font-medium mt-2">
          Total market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </motion.div>
    </Link>
  );
};

export default Grid;
