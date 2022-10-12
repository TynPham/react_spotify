import React, { useState } from "react";
import Topnav from "../components/top-nav/Topnav";
import Sidebar from "../components/side-bar/Sidebar";
import { Outlet } from "react-router-dom";
import PlayBar from "../components/playBar/PlayBar";
import { DataSongs } from "../context/Context";
import listSongs from "../data/songs.json";

const Mainlayouts = () => {
  const [songs, setSongs] = useState(listSongs[0]);

  const handleSongs = (id) => {
    const currentSongs = listSongs.find((song) => song.id === id);
    setSongs(currentSongs);
  };

  return (
    <DataSongs.Provider value={{ listSongs, songs, handleSongs }}>
      <Topnav />

      <div className="container-main grid grid-cols-[241px_calc(100%_-_249px)] gap-2 mt-2">
        <Sidebar />
        <Outlet />
      </div>

      <PlayBar />
    </DataSongs.Provider>
  );
};

export default Mainlayouts;
