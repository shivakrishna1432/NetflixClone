import React from "react";
import { IMG_CDN } from "../utils/constants";
import dayjs from "dayjs";
import CircularBar from "./CircularBar";

const MovieCard = ({ posterPath, title, rating, date, movie }) => {
  return (
    <div className="w-48 p-2 transition hover:-translate-y-1">
      <img
        className="rounded-t-lg"
        src={IMG_CDN + posterPath}
        alt="movie-card"
      />
      <div className="w-12 relative left-2 bottom-6 bg-black rounded-full">
        <CircularBar rating={Math.floor(rating)} />
      </div>
      <div>
        <h2 className="text-white line-clamp-1">{title}</h2>
        <h2 className="text-white">{dayjs(date).format("MMM D, YYYY")}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
