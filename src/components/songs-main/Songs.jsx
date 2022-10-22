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
    const scroll = divRef.current.scrollTop / 150;
    bgRef.current.style.opacity = scroll;

    if (scroll > 1.5) {
      playBarRef.current.style.visibility = "visible";
      playBarRef.current.style.opacity = 1;
      if (scroll > 2.25) {
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
      className="songs bg-[#121212] lg:h-[88vh] lg:w-[99vw] h-[80vh] rounded-t-lg overflow-hidden relative overflow-y-scroll"
    >
      <div className="relative lg:h-[43%] h-[52%] overflow-hidden height_37">
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
        className="flex items-center fixed w-[calc(100%_-_273px)] lg:w-[98vw] p-2 bg-[#2a443c] rounded-tl-[0.5rem] rounded-tr-[0.5rem] top-[64px] invisible transition-all duration-400 opacity-0 w-97vw"
      >
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          className="bg-[#1ED670] w-[56px] h-[56px] rounded-full mr-4 hover:scale-[1.05] active:scale-[1] active:opacity-60"
        >
          <span className={`${isPlaying ? "hidden" : "inline"}`}>
            <PlayIcon />
          </span>
          <span className={`${isPlaying ? "inline" : "hidden"}`}>
            <PauseIcon />
          </span>
        </button>
        <h2 className="text-2xl font-bold mb-1 ">Hot Hits Vietnam</h2>
      </div>
      <div
        ref={headerRef}
        className="flex w-[calc(100%_-_273px)] lg:w-[98vw] w-97vw h-[32px] items-center fixed top-[133.2px] bg-[#1a1a1a] invisible transition-all duration-600 opacity-0"
      >
        <h4 className="w-[11.8%] sm:w-[15.8%] text-center">#</h4>
        <h4 className="text-left text-[12px] w-[31.2%] sm:w-[43.2%] font-medium">
          TITLE
        </h4>
        <h4 className="w-[20%] text-[12px] font-medium text-center">ALBUM</h4>
        <h4 className="w-[27%] text-[12px] font-medium text-center sm:hidden">
          DATE ADDED
        </h4>
        <h4 className="w-[8.5%] sm:w-[15%] text-center sm:text-end sm:mr-[20px]">
          <DurationIcon />
        </h4>
      </div>
    </div>
  );
};

export default Songs;

//background-color: rgb(72, 144, 120); bg-[left_calc(50%)_top_calc(15%)]
