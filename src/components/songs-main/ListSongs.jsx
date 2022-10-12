import React, { useContext, useEffect, useState } from "react";
import { DurationIcon } from "../../icons";
import { DataSongs } from "../../context/Context";

const ListSongs = () => {
  const [indexSongs, setIndexSongs] = useState(0);

  const { listSongs, handleSongs, songs } = useContext(DataSongs);

  const handleClickSongs = (id) => {
    setIndexSongs(id);
    handleSongs(id);
  };

  useEffect(() => {
    setIndexSongs(songs.id);
  }, [songs]);

  return (
    <div className="w-full absolute top-[68%]">
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
                {song.id + 1}
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
                    className={`text-base ${
                      song.id === indexSongs ? "text-[#1ED670]" : ""
                    }`}
                  >
                    {song.name}
                  </h4>
                  <span className="text-sm text-[#b3b3b3]">{song.author}</span>
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
