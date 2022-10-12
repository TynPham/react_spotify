import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { DataSongs } from "../../context/Context";

const PlayBar = () => {
  const { songs, handleSongs, listSongs } = useContext(DataSongs);

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
      src={songs.url}
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleNext}
      onClickPrevious={handlePrev}
    />
  );
};

export default PlayBar;
