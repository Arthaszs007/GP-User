"use client";

import {
  PasswordInputverify,
  UsernameInputverify,
} from "@/lib/action/stringFunc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegisterForm = () => {
  // to storage the user name
  const [username, setUsername] = useState("");
  // to storage the password
  const [password, setPassword] = useState("");
  // to storage the repeat password
  const [repeat, setRepeat] = useState("");
  //to storage the error display
  const [error, setError] = useState("");

  const router = useRouter();
  //  hold the username
  const HandleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  // hold the password
  const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  //hold the repeat
  const HandleRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeat(e.target.value);
  };

  // to verify input and submit
  const HandleSubmit = async () => {
    //empty check
    if (!username || !password || !repeat) {
      setError("Can't be empty");
      return;
    }
    // twice equal check
    else if (!(password === repeat)) {
      setError("twice password must be same");
      return;
    }
    // length check
    else if (password.length < 6 || repeat.length < 6 || username.length < 6) {
      setError("password or username must over 6 letters");
      return;
    }
    //username pattern check
    else if (!UsernameInputverify(username)) {
      setError("username only letters, numbers");
      return;
    }
    //password pattern check
    else if (!PasswordInputverify(password)) {
      setError("password only letters, numbers and @");
      return;
    }
    //if input is valid , invoke api
    const res = await fetch(`${process.env.WEB_URL}/api/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await res.json();

    if (data === "inserted") {
      signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      });
    } else setError(data);
  };
  //for test
  // useEffect(() => {
  //   console.log(UsernameInputverify(username));
  //   console.log(username);
  // }, [username]);

  return (
    <div className="flex flex-col space-y-2 px-5">
      <p className="text-2xl font-bold text-center">Register</p>
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
          onChange={HandleUsername}
          value={username}
          pattern="[A-Za-z0-9]+"
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
          onChange={HandlePassword}
          value={password}
        />
      </label>
      <div>
        <p>Repeat Password</p>
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
          onChange={HandleRepeat}
          value={repeat}
        />
      </label>
      <button className="btn btn-neutral" onClick={HandleSubmit}>
        Create account
      </button>
      {error && <p className="text-center text-red-600">{error}</p>}
    </div>
  );
};

export default RegisterForm;
