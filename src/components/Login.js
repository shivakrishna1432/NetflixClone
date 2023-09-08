import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix_image"
        />
      </div>
      <form className="w-3/12 bg-black p-12 my-40 mx-auto right-0 left-0 absolute bg-opacity-80 text-white rounded-lg">
        <h1 className="font-semibold text-3xl my-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email address"
          className="w-full my-2 px-4 py-2 bg-gray-600 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-2 px-4 py-2 bg-gray-600 rounded-md"
        />
        <button className="bg-red-700 w-full my-6 px-4 py-2 rounded-md">
          Submit
        </button>
        <p>
          New to Netflix?{" "}
          <span className="hover text-red-800">Sign up Now</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
