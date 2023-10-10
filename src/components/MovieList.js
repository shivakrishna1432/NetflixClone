import React from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default MovieList;
