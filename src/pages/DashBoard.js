import React, { useEffect, useState } from "react";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import axios from "axios";
import { API_KEY } from "../utils/constant";
import Search from "../components/Dashboard/Search/Search";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";
import Loader from "../components/common/Skeleton";
import TopBottom from "../components/common/TopToBottom";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        API_KEY
      )
      .then((response) => {
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredSearch = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    // Value = new page number
    var initialCount = (value - 1) * 10; // suppose val is 1 so 1-1*10 so 0 will be initial count
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search Search={search} onSearchChange={onSearchChange} />
          <Tabs
            coins={search ? filteredSearch : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
       <TopBottom />
    </div>
  );
};

export default DashBoard;
