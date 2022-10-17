import React from "react";
import { CloseIcon, Homeicon, Img, SearchIcon, UserIcon } from "../../icons";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="topNav flex justify-between h-12 items-center">
      <Link to="/" className="ml-2">
        <Img />
      </Link>
      <div className="flex gap-4 ml-2">
        <Link
          to="/"
          className="w-12 h-12 rounded-full bg-[#242424] flex justify-center items-center"
        >
          <Homeicon />
        </Link>
        <form
          className="flex items-center bg-[#242424] w-[340px] lg:w-[440px] text-sm rounded-[500px] py-[6px] px-[48px] justify-start relative border-2 border-transparent focus-within:border-white"
          action=""
        >
          <div className="absolute left-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full h-full placeholder-[#6a7172] bg-transparent font-semibold border-none outline-none"
          />
          <div className="absolute right-3 hidden">
            <CloseIcon />
          </div>
        </form>
      </div>
      <button className="w-12 h-12 rounded-full border-8 border-solid border-[#242424]">
        <UserIcon />
      </button>
    </div>
  );
};

export default Topnav;
