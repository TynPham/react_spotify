import React, { useRef, useState, useEffect } from "react";
import Topnav from "../components/top-nav/Topnav";
import Sidebar from "../components/side-bar/Sidebar";
import { Outlet } from "react-router-dom";
import PlayBar from "../components/playBar/PlayBar";
import { DataSongs } from "../context/Context";
import listSongs from "../data/songs.json";

let cdThumbAnimate;

const Mainlayouts = () => {
  const [songs, setSongs] = useState(listSongs[0]);

  const playBarRef = useRef(null);
  const imgRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    cdThumbAnimate.play();
    setIsPlaying(true);
    playBarRef.current.audio.current.play();
  };
  const handlePause = () => {
    cdThumbAnimate.pause();
    setIsPlaying(false);
    playBarRef.current.audio.current.pause();
  };

  const handleSongs = (id) => {
    const currentSongs = listSongs.find((song) => song.id === id);
    setSongs(currentSongs);
  };

  useEffect(() => {
    cdThumbAnimate = imgRef.current.animate([{ transform: "rotate(360deg)" }], {
      duration: 5000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();
  }, []);

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

      <PlayBar playRef={playBarRef} imgRef={imgRef} />
    </DataSongs.Provider>
  );
};

export default Mainlayouts;
