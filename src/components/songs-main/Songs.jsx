import React, { useRef, useContext } from "react";

import { DurationIcon, PauseIcon, PlayIcon } from "../../icons";
import ListSongs from "./ListSongs";
import { DataSongs } from "../../context/Context";
import OptionsBar from "./OptionsBar";
import Title from "./Title";

const Songs = () => {
  const bgRef = useRef();
  const divRef = useRef();
  const playBarRef = useRef();
  const headerRef = useRef();

  const { isPlaying, handlePlay, handlePause } = useContext(DataSongs);

  const handleScroll = () => {
    const opacity = divRef.current.scrollTop / 150;
    bgRef.current.style.opacity = opacity;

    if (opacity > 1.5) {
      playBarRef.current.style.visibility = "visible";
      playBarRef.current.style.opacity = 1;
      if (opacity > 2.25) {
        headerRef.current.style.visibility = "visible";
        headerRef.current.style.opacity = 1;
      } else {
        headerRef.current.style.visibility = "hidden";
        headerRef.current.style.opacity = 0;
      }
    } else {
      playBarRef.current.style.visibility = "hidden";
      playBarRef.current.style.opacity = 0;
    }
  };

  return (
    <div
      ref={divRef}
      onScroll={handleScroll}
      className="songs bg-[#121212] h-[600px] rounded-lg overflow-hidden relative overflow-y-scroll"
    >
      <div className="relative h-[300px] overflow-hidden">
        <Title />
        <div
          ref={bgRef}
          className="absolute top-0 left-0 h-[40vh] min-h-[340px] w-full bg-[#2a443c] opacity-0"
        ></div>
      </div>
      <OptionsBar />
      <ListSongs parentRef={divRef} />
      <div
        ref={playBarRef}
        className="flex items-center fixed w-[calc(100%_-_273px)] p-2 bg-[#2a443c] rounded-tl-[0.5rem] top-[64px] invisible transition-all duration-400 opacity-0"
      >
        <button className="bg-[#1ED670] w-[56px] h-[56px] rounded-full mr-4 hover:scale-[1.05]">
          <span
            onClick={handlePlay}
            className={`${isPlaying ? "hidden" : "inline"}`}
          >
            <PlayIcon />
          </span>
          <span
            onClick={handlePause}
            className={`${isPlaying ? "inline" : "hidden"}`}
          >
            <PauseIcon />
          </span>
        </button>
        <h2 className="text-2xl font-bold mb-1 ">Hot Hits Vietnam</h2>
      </div>
      <div
        ref={headerRef}
        className="flex w-[calc(100%_-_273px)] h-[32px] items-center fixed top-[133.2px] bg-[#1a1a1a] invisible transition-all duration-600 opacity-0"
      >
        <h4 className="w-[11.8%] text-center">#</h4>
        <h4 className="text-left text-[12px] w-[31.2%] font-medium">TITLE</h4>
        <h4 className="w-[20%] text-[12px] font-medium text-center">ALBUM</h4>
        <h4 className="w-[27%] text-[12px] font-medium text-center">
          DATE ADDED
        </h4>
        <h4 className="w-[8.5%] text-center">
          <DurationIcon />
        </h4>
      </div>
    </div>
  );
};

export default Songs;

//background-color: rgb(72, 144, 120); bg-[left_calc(50%)_top_calc(15%)]
