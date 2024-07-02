"use client";
import { useSession } from "next-auth/react";
import React from "react";

const News = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div className="flex flex-col items-center">
          <p className="text-4xl text-center mt-4">News page is coming soon </p>
          <img
            className="h-[30rem] mt-3 w-[60rem]"
            src="https://mastersenseigenetics.com/wp-content/uploads/2021/04/UnderConstruction.jpeg"
            alt="default"
          />
        </div>
      ) : (
        <p className="text-4xl text-center">Please sign in to view news page</p>
      )}
    </div>
  );
};

export default News;
