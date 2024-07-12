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
        <div className="flex flex-wrap">
          {ranks?.map((item, index) => (
            <RankListChild rank={item} ids={item.children} key={index} />
          ))}
        </div>
      ) : (
        <p className="text-4xl text-center">Please sign in to view rank page</p>
      )}
    </div>
  );
};

export default Rank;
