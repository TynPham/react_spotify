import React, { useRef } from "react";
import { DurationIcon } from "../../icons";
import listSongs from "../../data/songs.json";

const ListSongs = () => {
  const headref = useRef();

  return (
    <div className="w-full absolute top-[68%]">
      <table className="table-auto w-full">
        <thead className="sticky top-[72px] before:content-[''] before:absolute before:w-[calc(100%_-_30px)] before:h-[0.5px] before:bg-[#b3b3b3] before:opacity-10 before:left-[50%] before:translate-x-[-50%] before:bottom-[-15px] before:mb-[10px]">
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
            <tr key={index}>
              <td className="text-center pt-3">1</td>
              <td className="pt-3">cmm</td>
              <td className="text-center pt-3">cmm</td>
              <td className="text-center pt-3">cmm</td>
              <td className="text-center pt-3">cmm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
