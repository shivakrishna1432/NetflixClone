import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute bg-gradient-to-b from-black z-10 px-8 py-2 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-52"
      />
      {user && (
        <div className="flex">
          <img
            className=" w-8 h-8 mx-2 rounded-full cursor-pointer"
            src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
            alt="UserIcon"
          />
          <button
            className="bg-red-700 h-8 px-4 text-white font-bold rounded-md"
            onClick={() => handleSignOut()}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
