import React from "react";
import { logo } from "../utils/helper";
import { IMG_CDN } from "../utils/constants";

const Actor = ({ cast }) => {
  const { profile_path, name, character } = cast;
  return (
    <>
      <div className="flex bg-neutral-500 m-4 w-[300px] rounded-lg">
        <img
          src={profile_path ? IMG_CDN + profile_path : logo}
          alt={name}
          className="w-[120px] rounded-lg"
        />
        <div className="flex flex-col mx-4 mt-2">
          <h1 className="font-semibold text-lg">{name}</h1>
          <p>{character}</p>
        </div>
      </div>
    </>
  );
};

export default Actor;
