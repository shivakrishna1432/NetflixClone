import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, imageUrl } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="w-screen absolute bg-gradient-to-b from-black z-10 px-8 py-2 flex justify-between items-center">
      <img src={NETFLIX_LOGO} alt="logo" className="w-52" />
      {user && (
        <div className="flex">
          <img
            className=" w-8 h-8 mx-2 rounded-full cursor-pointer"
            src={imageUrl()}
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
