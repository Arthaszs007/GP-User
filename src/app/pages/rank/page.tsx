"use client";
import { RankListChild } from "@/components/rank/rankList";
import { IGame } from "@/models/game";
import { IRank } from "@/models/rank";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Rank = () => {
  // get session
  const { data: session } = useSession();
  // to storage the rank list all data
  const [ranks, setRanks] = useState<IRank[]>();

  //initial the basic ranks data
  const Initial_ranks = async () => {
    try {
      const res = await fetch(`${process.env.WEB_URL}/api/rank`, {
        method: "GET",
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setRanks(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };
  //initial the rank data
  useEffect(() => {
    Initial_ranks();
  }, []);

  return (
    <div>
      {session ? (
        <div className="flex flex-col items-center">
          <p className="text-4xl text-center mt-4">Rank page is coming soon</p>
          <img
            className="h-[30rem] mt-3 w-[60rem]"
            src="https://mastersenseigenetics.com/wp-content/uploads/2021/04/UnderConstruction.jpeg"
            alt="default"
          />
        </div>
      ) : (
        // <p className="text-4xl text-center">Please sign in to view rank page</p>
        <div className="flex flex-wrap">
          {ranks?.map((item, index) => (
            <RankListChild rank={item} ids={item.children} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rank;
