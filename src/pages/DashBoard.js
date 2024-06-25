import React, { useEffect, useState } from "react";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import Search from "../components/Dashboard/Search/Search";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";
import Loader from "../components/common/Skeleton";
import TopBottom from "../components/common/TopToBottom";
import { get100Coins } from "../hooks/Get100coins";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   getData();   
  }, []);

  const getData=async()=>{
    const myCoins=await get100Coins();
      if (myCoins) {
         setCoins(myCoins);
         setPaginatedCoins(myCoins.slice(0, 10));
         setLoading(false);
      }
  }

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
