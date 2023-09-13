import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleClick = () => {
    const message = isValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!isSignIn) {
      //Sign Up Page
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      //Sign In Page
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix_image"
        />
      </div>
      <form
        className="w-1/4 bg-black p-12 my-40 mx-auto right-0 left-0 absolute bg-opacity-80 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-semibold text-3xl my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="w-full my-2 px-4 py-2 bg-neutral-800 rounded-md"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="w-full my-2 px-4 py-2 bg-neutral-800 rounded-md"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-2 px-4 py-2 bg-neutral-800 rounded-md"
          ref={password}
        />
        <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
        <button
          className="bg-red-800 w-full my-6 px-4 py-2 rounded-md"
          onClick={() => handleClick()}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignIn ? "New to Netflix?" : "Already a Member?"}
          <span
            className="hover text-red-600 cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? " Sign up Now" : " Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
