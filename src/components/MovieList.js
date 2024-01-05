import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="py-2">
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link to={"/" + movie?.id} key={movie?.id}>
              <MovieCard
                posterPath={movie?.poster_path}
                title={movie?.title}
                date={movie?.release_date}
                rating={movie?.vote_average}
                movie={movie}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
