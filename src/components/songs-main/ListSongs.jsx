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
    if (indexSongs > 2) {
      parentRef.current.scroll({
        top: 60 * (indexSongs - 2),
        behavior: "smooth",
      });
    }
  }, [indexSongs]);

  return (
    <div className="w-full absolute lg:top-[56%] top-[68%]">
      <table className="table-auto w-full">
        <thead className="sticky top-[72px] border-b border-[#b3b3b3] opacity-60">
          <tr className="opacity-60">
            <th className="w-[10%]">#</th>
            <th className="text-left w-[25%] text-[12px] font-medium">TITLE</th>
            <th className="w-[20%] text-[12px] font-medium">ALBUM</th>
            <th className="w-[20%] text-[12px] font-medium">DATE ADDED</th>
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
                className={`text-center p-1 ${
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
              <td className="p-1 flex">
                <div className="w-[40px] h-[40px] mr-4 mt-[5px]">
                  <img
                    className="w-full h-full object-cover"
                    src={song.links.images[0].url}
                    alt="singer"
                  />
                </div>
                <div>
                  <h4
                    className={`text-xs ${
                      song.id === indexSongs ? "text-[#1ED670]" : ""
                    }`}
                  >
                    {song.name}
                  </h4>
                  <span className="text-sm sm:text-[0.5rem] sm:leading-[0.5rem] text-[#b3b3b3]">
                    {song.author}
                  </span>
                </div>
              </td>
              <td className="text-center text-sm p-1 opacity-60 group-hover:opacity-100">
                {song.album}
              </td>
              <td className="text-center text-sm p-1 opacity-60 group-hover:opacity-100">
                {song.date}
              </td>
              <td className="text-center text-sm p-1 opacity-60 group-hover:opacity-100">
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
