import React, { useEffect, useState, useCallback, useMemo } from "react";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import Search from "../components/Dashboard/Search/Search";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";
import Loader from "../components/common/Skeleton";
import TopBottom from "../components/common/TopToBottom";
import { get100Coins } from "../hooks/Get100coins";
import debounce from "lodash.debounce";

const DashBoard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const myCoins = await get100Coins();
      if (myCoins) {
        setCoins(myCoins);
        setPaginatedCoins(myCoins.slice(0, 10));
      }
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const onSearchChange = debounce((e) => {
    setSearch(e.target.value);
  }, 300);

  const filteredSearch = useMemo(() => {
    return coins.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }, [coins, search]);

  const handlePageChange = (event, value) => {
    setPage(value);
    const initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
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
