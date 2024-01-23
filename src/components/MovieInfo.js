import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "./MovieDetails";
import Movie from "./Movie";

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieInfoDetails, setMovieInfoDetails] = useState([]);
  useEffect(() => {
    getMovieInfo();
    // eslint-disable-next-line
  }, []);
  const getMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?api_key=" +
        process.env.REACT_APP_TMDB_API_KEY
    );
    const json = await data.json();
    //console.log(json);
    setMovieInfo(json);
  };

  useEffect(() => {
    getMovieInfoDetails();
    // eslint-disable-next-line
  }, []);
  const getMovieInfoDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=US`
    );

    const json = await data.json();
    setMovieInfoDetails(json);
    // console.log(json);
  };

  return (
    <div className="bg-neutral-600 text-white">
      <div className="flex justify-between items-center py-3 pt-[10%]">
        <h1 className="font-bold text-3xl mx-6">Movie Details</h1>
      </div>
      <Movie movies={movieInfoDetails} crew={movieInfo?.crew} />
      <MovieDetails cast={movieInfo?.cast} />
    </div>
  );
};

export default MovieInfo;
