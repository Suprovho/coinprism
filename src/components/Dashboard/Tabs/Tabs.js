import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Grid from "./Grid";
import List from "./List";
import "../Tabs/List.css";
import Button from "../../common/Button"

export default function Tabs({ coins, setSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: "1.2rem",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="flex items-start justify-center w-full flex-wrap gap-[1rem]">
            {coins.length > 0 ? (
              coins.map((coin, i) => {
                return <Grid key={i} coin={coin} delay={(i % 8) * 0.2} />;
              })
            ) : (
              <div className="flex justify-center items-center flex-col mt-16 w-full text-wrap">
                <h1 style={{ textAlign: "center" }}>
                  Sorry, Couldn't find the coin you're looking for 😞
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    margin: "2rem",
                  }}
                >
                  <Button text="Clear Search" onClick={() => setSearch("")} />
                </div>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-flex">
            {coins.length > 0 ? (
              coins.map((coin, i) => (
                <List key={i} coin={coin} delay={(i % 8) * 0.2} />
              ))
            ) : (
              <div className="flex justify-center items-center flex-col w-full text-wrap mt-16">
                <h1 style={{ textAlign: "center" }}>
                  Sorry, Couldn't find the coin you're looking for 😞
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    margin: "2rem",
                  }}
                >
                  <Button text="Clear Search" onClick={() => setSearch("")} />
                </div>
              </div>
            )}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
