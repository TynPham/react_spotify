import React, { useContext, useEffect, useState } from "react";
import { DurationIcon, SmPauseIcon, SmPlayIcon } from "../../icons";
import { DataSongs } from "../../context/Context";
import AnimationLine from "../animationLine/AnimationLine";

const ListSongs = ({ parentRef }) => {
  const [indexSongs, setIndexSongs] = useState(0);

  const { listSongs, handleSongs, songs, isPlaying, handlePlay, handlePause } =
    useContext(DataSongs);

  const handleClickSongs = (id) => {
    setIndexSongs(id);
    handleSongs(id);
  };

  useEffect(() => {
    setIndexSongs(songs.id);
  }, [songs]);

  useEffect(() => {
    if (indexSongs == 0) {
      parentRef.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    if (indexSongs > 2) {
      parentRef.current.scroll({
        top: 60 * (indexSongs - 2),
        behavior: "smooth",
      });
    }
  }, [indexSongs]);

  return (
    <div className="w-full absolute lg:top-[53%] top-[68%] top_48">
      <table className="table-auto w-full">
        <thead className="top-[72px] border-b border-[#b3b3b3] opacity-60">
          <tr className="opacity-60">
            <th className="w-[10%]">#</th>
            <th className="text-left w-[25%] text-[12px] font-medium">TITLE</th>
            <th className="w-[20%] text-[12px] font-medium">ALBUM</th>
            <th className="date w-[20%] text-[12px] font-medium sm:hidden">
              DATE ADDED
            </th>
            <th className="w-[10%]">
              <DurationIcon />
            </th>
          </tr>
        </thead>
        <tbody className="mt-3">
          {listSongs.map((song, index) => (
            <tr
              key={index}
              className="hover:bg-bar-hover group"
              onClick={() => handleClickSongs(song.id)}
            >
              <td
                className={`text-center sm:text-[0.75rem] pt-1 ${
                  song.id === indexSongs ? "text-[#1ED670]" : ""
                }`}
              >
                {isPlaying && song.id === indexSongs ? (
                  <>
                    <div className="relative group-hover:invisible">
                      <AnimationLine />
                    </div>
                    <span
                      onClick={handlePause}
                      className="hidden group-hover:inline"
                    >
                      <SmPauseIcon />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="inline group-hover:hidden">
                      {song.id + 1}
                    </span>
                    <span
                      onClick={handlePlay}
                      className="hidden group-hover:inline"
                    >
                      <SmPlayIcon />
                    </span>
                  </>
                )}
              </td>
              <td className="pt-1 flex">
                <div className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] mr-4 mt-[5px] sm:mr-3">
                  <img
                    className="w-full h-full object-cover"
                    src={song.links.images[0].url}
                    alt="singer"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-around">
                  <h4
                    className={`text-base sm:text-[0.75rem] text_of ${
                      song.id === indexSongs ? "text-[#1ED670]" : ""
                    }`}
                  >
                    {song.name}
                  </h4>
                  <span className="text-xs sm:text-[0.5rem] sm:leading-[0.5rem] text-[#b3b3b3]">
                    {song.author}
                  </span>
                </div>
              </td>
              <td className="text-center text-sm sm:text-[0.75rem] pt-1 opacity-60 group-hover:opacity-100">
                {song.album}
              </td>
              <td className="date text-center text-sm pt-1 opacity-60 group-hover:opacity-100 sm:hidden">
                {song.date}
              </td>
              <td className="text-center text-sm sm:text-[0.75rem] pt-1 opacity-60 group-hover:opacity-100">
                {song.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
