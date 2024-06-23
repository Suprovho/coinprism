import { CircularProgress } from "@mui/material";
import React from "react";
function Loader() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center fixed z-[10000] bg-[#111] overflow-y-hidden overflow-x-hidden text-[#3a80e9]">
      <CircularProgress />
    </div>
  );
}

export default Loader;
