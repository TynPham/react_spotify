import React, { useEffect, useRef, useState } from "react";
import IMG from "../../assets/bg.jpg";
import { DurationIcon, ETCIcon, HeartLgIcon, PlayIcon } from "../../icons";
import ListSongs from "./ListSongs";

const Songs = () => {
  const bgRef = useRef();
  const divRef = useRef();
  const playBarRef = useRef();
  const headerRef = useRef();

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
        <div
          className="absolute top-0 left-0 h-[40vh] min-h-[340px] w-full bg-[left_50%_top_15%] bg-cover bg-no-repeat opacity-100 px-4 lg:px-8"
          style={{
            backgroundImage: `url(${IMG})`,
          }}
        >
          <h2 className="text-xs font-semibold mt-20">PLAYLIST</h2>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold tracking-[-1px] leading-[2rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] mt-2 ml-[-4px]">
            Hot Hits Vietnam
          </h1>
          <span className="text-[#b3b3b3] text-[1rem] block font-normal mt-10">
            Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh
            bìa: RPT MCK
          </span>
          <span className="block text-[0.875rem] font-semibold mt-2">
            Spotify 169,255 likes 57 songs, 3 hr 43 min
          </span>
        </div>
        <div
          ref={bgRef}
          className="absolute top-0 left-0 h-[40vh] min-h-[340px] w-full bg-[#2a443c] opacity-0"
        ></div>
      </div>
      <div className="w-full h-[232px] bg-green-rgba-ln">
        <div className="h-[104px] w-full p-4 lg:p-[30px]">
          <div className="flex items-center z-[2]">
            <button className="bg-[#1ED670] w-[56px] h-[56px] rounded-full mr-8 hover:scale-[1.05]">
              <PlayIcon />
            </button>
            <button className="opacity-60 mr-6 hover:opacity-100">
              <HeartLgIcon />
            </button>
            <button className="opacity-60 hover:opacity-100">
              <ETCIcon />
            </button>
          </div>
        </div>
      </div>
      <ListSongs />
      <div
        ref={playBarRef}
        className="flex items-center fixed w-[calc(100%_-_273px)] p-2 bg-[#2a443c] rounded-tl-[0.5rem] top-[64px] invisible transition-all duration-400 opacity-0"
      >
        <button className="bg-[#1ED670] w-[56px] h-[56px] rounded-full mr-4 hover:scale-[1.05]">
          <PlayIcon />
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
