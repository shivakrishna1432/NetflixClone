import React from "react";
import { IMG_CDN } from "../utils/constants";
import { convertMinutesToCustomFormat } from "../utils/helper";
import { getYear } from "../utils/helper";

const Movie = ({ movies, crew, cast }) => {
  const {
    poster_path,
    original_title,
    overview,
    vote_average,
    release_date,
    runtime,
  } = movies;
  const directors = crew?.filter((member) => member?.job === "Director");
  return (
    <div className="flex justify-center mt-4">
      <div className="flex mt-4 mx-14">
        <img
          src={IMG_CDN + poster_path}
          alt={original_title}
          className="w-[250px] rounded-lg"
        />
        <div className="flex flex-col px-4 mt-6">
          <h1 className="font-semibold text-3xl">
            {original_title}(⭐{vote_average?.toFixed(1)})
          </h1>
          <h1 className="font-bold text-lg mt-3">Plot</h1>
          <p className="text-lg">{overview}</p>
          <p className="mt-4 font-semibold">
            {getYear(release_date)} | {convertMinutesToCustomFormat(runtime)}
          </p>
          <div className="flex flex-col mt-4">
            {directors?.length > 1 ? (
              <h1 className="font-semibold text-lg">Directors :</h1>
            ) : (
              <h1 className="font-semibold text-lg">Director :</h1>
            )}
            {directors?.map((dir) => {
              return (
                <p className="text-lg" key={dir?.id}>
                  {dir?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
