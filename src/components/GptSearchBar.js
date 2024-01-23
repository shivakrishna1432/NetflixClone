import React, { useRef, useState } from "react";
import { MovieIcon } from "../utils/constants";

const GptSearchBar = () => {
  const [show, setShow] = useState(true);
  const searchText = useRef(null);
  const handleGptSearch = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-1/2 m-auto pt-[10%]">
        <form onSubmit={(e) => e.preventDefault()} className="p-2 flex ">
          <input
            type="text"
            placeholder="What would you like to watch today?"
            className="px-5 py-3 mx-4 rounded-full w-11/12 outline-none"
            ref={searchText}
          />
          <button
            className="text-white bg-red-600 px-8 py-3 rounded-full"
            onClick={handleGptSearch}
          >
            Search
          </button>
        </form>
      </div>
      {show ? (
        <div className="w-[300px] py-24 relative top-32 left-1/2 translate-x-[-50%] translate-y-[-30%]">
          <img className="" src={MovieIcon} alt="cinema-icon" />
          <p className="text-center text-2xl font-bold">Search for Movies</p>
        </div>
      ) : (
        <h1 className="text-center font-bold py-4 text-xl">
          Sorry!! No Results Found😒
        </h1>
      )}
    </>
  );
};

export default GptSearchBar;
