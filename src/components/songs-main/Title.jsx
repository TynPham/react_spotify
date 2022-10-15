import React from "react";
import IMG from "../../assets/bg.jpg";

const Title = () => {
  return (
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
        Đông tới Tây, đây là những ca khúc thịnh hành nhất ở Việt Nam. Ảnh bìa:
        RPT MCK
      </span>
      <span className="block text-[0.875rem] font-semibold mt-2">
        Spotify 169,255 likes 57 songs, 3 hr 43 min
      </span>
    </div>
  );
};

export default Title;
