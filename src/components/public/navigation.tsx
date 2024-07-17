"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  //get user data from session
  const { data: session } = useSession();

  // to open the search game modal
  const OpenModal = (modalName: string) => {
    const modal = document.getElementById(
      modalName
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
      modal.scrollTop = 0;
    } else {
      console.error("Modal element not found");
    }
  };
  // for test
  // useEffect(() => {
  //   console.log(JSON.stringify(session?.user?.name));
  // }, [session]);

  // use to sign out
  const HandleSignOut = async () => {
    await signOut({ redirect: false });
  };
  return (
    <div className="flex flex-col-reverse place-items-center w-full h-full">
      <div className="mb-6">
        {session ? (
          <button
            className="btn btn-neutral w-40"
            onClick={() => HandleSignOut()}
          >
            Sign Out
          </button>
        ) : (
          <Link href="/login">
            <button className="btn btn-neutral w-40">Sign In / Up</button>
          </Link>
        )}
      </div>

      <p className="mb-2">{session ? session?.user?.name : "Please Sign in"}</p>

      <div className="divider divider-start" />

      <div className="mb-1">
        <ul className="menu menu-lg  w-56 rounded-box">
          <li>
            <Link href="/pages/main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <a onClick={() => OpenModal("search_modal")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Search
            </a>
          </li>
          <li>
            <Link href="/pages/rank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Ranks
            </Link>
          </li>
          <li>
            <Link href="/pages/news">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Cosplay
            </Link>
          </li>
          <li>
            <Link href="/pages/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="divider divider-start" />
      <div className="flex flex-col items-center w-full mb-1 mt-1">
        <img src="/logo.png" className="w-[7rem] h-[5rem]" />
        <p className="text-center text-2xl font-bold">Game Point</p>
      </div>
    </div>
  );
};

export default Navigation;
