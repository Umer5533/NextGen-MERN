import React, { useEffect, useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/gigvideo.mp4";
const VideoPlayer = ({play, setplay }) => {
  const player = useRef(null);
  const videoRef = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setplay(false);
    }
  };

  useEffect(() => {
    if (!play && videoRef.current) {
      videoRef.current.pause(); // Pause the video when play state is false
    }
  }, [play]);
  return (
    <div
      className={`videoPlayer ${play ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} ref={videoRef} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
