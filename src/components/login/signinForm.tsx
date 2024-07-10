"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SigninForm = () => {
  //to storage the username from form
  const [username, setUsername] = useState("");
  //to storage the password from form
  const [password, setPassword] = useState("");
  //to storga the error
  const [error, setError] = useState("");
  // get the dispatch from the store

  //execute the submit action
  const handleSubmit = async () => {
    // input check
    if (!username || !password) {
      setError("can't be empty");
      return;
    } else if (password.length < 6) {
      setError("password must over 6 letters");
      return;
    }
    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    if (result?.error) {
      // console.error("failed", result.error);
      setError("Username or Password is wrong");
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2 px-5">
      <p className="text-2xl font-bold text-center">Log in</p>
      <p>Username</p>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          className="grow"
          onChange={handleUsername}
          value={username}
        />
      </label>
      <div>
        <p>Password</p>
      </div>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          onChange={handlePassword}
          value={password}
        />
      </label>
      <button className="btn btn-neutral" onClick={handleSubmit}>
        Log in
      </button>
      {error && <p className="text-center text-red-600">{error}</p>}
    </div>
  );
};

export default SigninForm;
