import React from "react";
import Topnav from "../components/top-nav/Topnav";
import Sidebar from "../components/side-bar/Sidebar";
import { Outlet } from "react-router-dom";

const Mainlayouts = () => {
  return (
    <>
      <Topnav />

      <div className="container-main grid grid-cols-[241px_calc(100%_-_249px)] gap-2 mt-2">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Mainlayouts;
