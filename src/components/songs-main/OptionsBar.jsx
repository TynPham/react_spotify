import React, { useContext, useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  HeartLgIcon,
  HeartLgIconFill,
  ETCIcon,
} from "../../icons";
import { DataSongs } from "../../context/Context";

const OptionsBar = () => {
  const { isPlaying, handlePlay, handlePause } = useContext(DataSongs);

  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div className="w-full h-[232px] bg-green-rgba-ln">
      <div className="h-[104px] w-full p-6 lg:p-[30px]">
        <div className="flex items-center z-[2]">
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            className="bg-[#1ED670] w-[56px] h-[56px] rounded-full mr-8 hover:scale-[1.05] active:scale-[1] active:opacity-60"
          >
            <span className={`${isPlaying ? "hidden" : "inline"}`}>
              <PlayIcon />
            </span>
            <span className={`${isPlaying ? "inline" : "hidden"}`}>
              <PauseIcon />
            </span>
          </button>
          <button
            className={`${
              isLike ? "opacity-100" : "opacity-60"
            } mr-6 hover:opacity-100 text-[#1ED670] relative`}
          >
            <span
              onClick={handleLike}
              className={`${isLike ? "hidden" : "inline"}`}
            >
              <HeartLgIcon />
            </span>
            <span
              onClick={handleLike}
              className={` ${isLike ? "inline animate-like" : "hidden"}`}
            >
              <HeartLgIconFill />
            </span>
          </button>
          <button className="opacity-60 hover:opacity-100">
            <ETCIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;

// absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
