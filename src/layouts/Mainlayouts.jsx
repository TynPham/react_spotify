import React, { useRef, useState } from "react";
import Topnav from "../components/top-nav/Topnav";
import Sidebar from "../components/side-bar/Sidebar";
import { Outlet } from "react-router-dom";
import PlayBar from "../components/playBar/PlayBar";
import { DataSongs } from "../context/Context";
import listSongs from "../data/songs.json";

const Mainlayouts = () => {
  const [songs, setSongs] = useState(listSongs[0]);

  const playBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      playBarRef.current.audio.current.play();
    }
  };
  const handlePause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      playBarRef.current.audio.current.pause();
    }
  };

  const handleSongs = (id) => {
    const currentSongs = listSongs.find((song) => song.id === id);
    setSongs(currentSongs);
  };

  return (
    <DataSongs.Provider
      value={{
        listSongs,
        songs,
        handleSongs,
        isPlaying,
        handlePlay,
        handlePause,
      }}
    >
      <Topnav />

      <div className="container-main grid grid-cols-[241px_calc(100%_-_249px)] gap-2 mt-2">
        <Sidebar />
        <Outlet />
      </div>

      <PlayBar playRef={playBarRef} />
    </DataSongs.Provider>
  );
};

export default Mainlayouts;
