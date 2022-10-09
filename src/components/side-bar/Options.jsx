import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon, LibraryIcon, LibraryIcon2, PlusIcon } from "../../icons";

const Options = () => {
  return (
    <ul className="list-none relative before:content-[''] before:absolute before:bottom-[-8px] before:w-full before:h-[0.5px] before:bg-[#282828]">
      <li>
        <Link
          to="/library"
          className="flex h-10 gap-4 items-center opacity-70 hover:opacity-100 cursor-pointer transition-all"
        >
          <div>
            <LibraryIcon />
          </div>
          <div className="hidden">
            <LibraryIcon2 />
          </div>
          <span className="text-sm font-semibold text-[#fff]">
            Your Library
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="/playlist"
          className="flex h-10 gap-4 items-center opacity-70 hover:opacity-100 cursor-pointer transition-all"
        >
          <button className="w-6 h-6 bg-[#fff] flex justify-center items-center rounded-[2px] ">
            <PlusIcon />
          </button>
          <span className="text-sm font-semibold text-[#fff]">
            Create Playlist
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="/likedsong"
          className="flex h-10 gap-4 items-center opacity-70 hover:opacity-100 cursor-pointer transition-all"
        >
          <button className="w-6 h-6 bg-[linear-gradient(135deg,#450af5,#c4efd9);] flex justify-center items-center rounded-[2px]">
            <HeartIcon />
          </button>
          <span className="text-sm font-semibold text-[#fff]">Liked Songs</span>
        </Link>
      </li>
    </ul>
  );
};

export default Options;
