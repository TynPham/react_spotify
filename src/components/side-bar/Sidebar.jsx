import React from "react";
import { DownIcon } from "../../icons";
import Options from "./Options";

const Sidebar = () => {
  return (
    <div className="sideBar bg-[#121212] h-[600px] pt-3 rounded-lg px-6 relative">
      <Options />
      <ul></ul>
      <div className="install-app flex h-10 gap-4 items-center opacity-70 hover:opacity-100 cursor-pointer absolute bottom-0 transition-all">
        <DownIcon />
        <span className="text-sm font-semibold text-[#fff]">Install App</span>
      </div>
    </div>
  );
};

export default Sidebar;
