import React, { useContext, useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { DataSongs } from "../../context/Context";
import { ShuffleIcon } from "../../icons";

const PlayBar = ({ playRef, imgRef }) => {
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
    <div className="fixed w-full bottom-0">
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
        className="randomBtn absolute left-[44%] lg:left-[40%] top-[34%] lg:top-[32%] translate-x-[-100%] translate-y-[-50%] text-[#868686] cursor-pointer"
      >
        <ShuffleIcon />
      </span>
      <div className="absolute top-[50%] translate-y-[-50%] left-[1%] flex items-center gap-[1rem] sm:gap-[0.5rem] sm:mt-[1px]">
        <div
          ref={imgRef}
          className="w-[56px] sm:w[30px] h-[56px] sm:h-[30px] sm:w-[30px] sm:mb-[20px]"
        >
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src={songs.links.images[0].url}
            alt="imgs"
          />
        </div>
        <div className="leading-[1] mb-[5px] sm:mb-[20px] sm:leading-[0.75]">
          <h3 className="text-sm sm:text-[0.5rem] sm:leading-[0.5rem] font-medium sm:w-[90px]">
            {songs.name}
          </h3>
          <span className="text-[0.6875rem] sm:text-[0.5rem] text-[#b3b3b3]">
            {songs.author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
