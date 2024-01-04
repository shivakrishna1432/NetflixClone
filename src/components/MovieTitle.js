import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="w-1/3 py-4">{overview}</p>
      <div className="py-4">
        <button className="bg-white text-black hover:bg-opacity-70 px-8 py-2 rounded-md mr-4">
          <div className="flex items-center">
            <FaPlay className="mt-1 mr-2" />{" "}
            <span className="font-bold">Play</span>
          </div>
        </button>
        <button className="bg-neutral-600 px-8 py-2 rounded-md hover:bg-opacity-70">
          <div className="flex items-center">
            <AiOutlineInfoCircle className="mt-1 mr-2" />
            <span className="font-semibold">More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
