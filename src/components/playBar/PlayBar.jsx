import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { DataSongs } from "../../context/Context";

const PlayBar = ({ playRef }) => {
  const { songs, handleSongs, listSongs, handlePlay, handlePause } =
    useContext(DataSongs);

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

  return (
    <AudioPlayer
      ref={playRef}
      src={songs.url}
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleNext}
      onClickPrevious={handlePrev}
      onEnded={handleNext}
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
};

export default PlayBar;
