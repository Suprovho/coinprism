import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Grid from "./Grid";
import List from "./List";
import "../Tabs/List.css"

export default function Tabs({coins}) {
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
            {
              coins.map((coin,i)=>{
                return <Grid key={i} coin={coin} delay={(i % 8) * 0.2} />
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-flex">
           {
             coins.map((coin,i)=>{
              return <List key={i} coin={coin} delay={(i % 8) * 0.2} />
            })
           }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
