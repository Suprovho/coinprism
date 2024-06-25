import React from "react";
import { Link } from "react-router-dom";
import AnchorTemporaryDrawer from "./Drawer";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex sm:p-5 p-2 items-center justify-between top-0 sticky left-0 bg-[#111] z-[1000] w-dvw text-wrap">
      <h1 className="sm:text-3xl text-lg font-bold cursor-pointer m-0">
        CoinPrism<span className="text-[#3a80e9]">.</span>
      </h1>
      <div className="sm:flex sm:items-center sm:justify-end sm:gap-4 links hidden">
        <Link to={"/"}>
        <p className="link">Home</p>
        </Link>
        <Link to={"/compare"}>
        <p className="link">Compare</p>
        </Link>
        <Link to={"/DashBoard"}>
        <Button text={"DashBoard"} onClick={()=>console.log("button clicked")} />
        </Link>
      </div>
      <div className="sm:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
