import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlayBar = () => {
  return (
    <AudioPlayer
      src={
        "https://seaf20.iiiijjjjij.com/files/2020/8/7/hom_nay_em_cuoi_roi_khai_dang_official_lyric_video_8202815258287763929.mp3"
      }
      showSkipControls={true}
      showJumpControls={false}
    />
  );
};

export default PlayBar;
