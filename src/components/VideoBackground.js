import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoId }) => {
  const movie = useSelector((store) => store.movie?.mainTrailerVideo);
  const key = movie?.key;
  useTrailerVideo(videoId);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        showinfo="0"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?autoplay=1&mute=1&control=0&rel=0&loop=1&playlist=" +
          key
        }
        title="YouTube video player"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
