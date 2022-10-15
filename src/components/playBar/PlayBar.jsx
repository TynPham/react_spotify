import React, { useContext, useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { DataSongs } from "../../context/Context";
import { ShuffleIcon } from "../../icons";

const PlayBar = ({ playRef }) => {
  const [isRandom, setIsRandom] = useState(false);

  const { songs, handleSongs, listSongs, handlePlay, handlePause } =
    useContext(DataSongs);

  const randomRef = useRef(null);

  const handleNext = () => {
    if (songs.id === listSongs.length - 1) {
      handleSongs(0);
    } else {
      handleSongs(songs.id + 1);
    }
  };

  const handlePrev = () => {
    if (songs.id === 0) {
      handleSongs(listSongs.length - 1);
    } else {
      handleSongs(songs.id - 1);
    }
  };

  const handleRandom = () => {
    randomRef.current.classList.toggle("active");

    setIsRandom(!isRandom);
  };
  const handleRandomSong = () => {
    handleSongs(Math.floor(Math.random() * (listSongs.length - 1)));
  };

  useEffect(() => {
    const loop =
      playRef.current.container.current.getElementsByTagName("button")[0];
    const active = () => {
      loop.classList.toggle("active");
    };

    loop.addEventListener("click", active);

    return () => {
      loop.removeEventListener("click", active);
    };
  }, []);

  return (
    <div className="relative">
      <AudioPlayer
        ref={playRef}
        src={songs.url}
        showSkipControls={true}
        showJumpControls={false}
        showFilledVolume={true}
        onClickNext={handleNext}
        onClickPrevious={handlePrev}
        onEnded={isRandom ? handleRandomSong : handleNext}
        onPlay={handlePlay}
        onPause={handlePause}
        layout="stacked-reverse"
      />
      <span
        ref={randomRef}
        onClick={handleRandom}
        className="absolute left-[calc(42%)] top-[25%] text-[#868686] cursor-pointer"
      >
        <ShuffleIcon />
      </span>
    </div>
  );
};

export default PlayBar;
