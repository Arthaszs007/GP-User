import React, { useEffect, useState } from "react";
import News from "../news/news";
import RankItem from "../rank/rankItem";
import { INews } from "@/models/news";
import { IUpcoming } from "@/models/upcoming";
import Link from "next/link";

const NewsAndRank = () => {
  //to storage the news array data
  const [news, setNews] = useState<INews[]>([]);
  //to storage the rank array data
  const [upcoming, setUpcoming] = useState<IUpcoming[]>([]);

  // to initial rank data
  const Initial_Rank = async () => {
    try {
      const res = await fetch(`${process.env.WEB_URL}/api/upcoming`, {
        method: "GET",
      });
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setUpcoming(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };

  // to initial news data
  const Initial_News = async () => {
    try {
      const res = await fetch(`${process.env.WEB_URL}/api/news`, {
        method: "GET",
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setNews(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };

  //for components initial
  useEffect(() => {
    Initial_News();
    Initial_Rank();
  }, []);
  return (
    <div className="flex flex-row justify-between">
      <div className="w-2/3 pr-5">
        <div className="flex flex-row justify-between">
          <p className="text-2xl">Cosplay Girl</p>
          <Link href={"/pages/news"} className="link link-primary ">
            <p className="text-right pt-2">See more...</p>
          </Link>
        </div>
        <div className="divider" />
        <div>
          <News news={news} />
        </div>
      </div>
      <div className="w-1/3 ">
        <div className="flex flex-row justify-between">
          <p className="text-2xl">Top Upcoming Games</p>
          <Link href={"/pages/rank"} className="link link-primary">
            <p className="text-right pt-2">See more...</p>
          </Link>
        </div>
        <div className="border px-2 border-gray-300 mt-5">
          {upcoming.map((item, index) => (
            <div key={index}>
              <RankItem upcoming={item} />
              <div className="border-t border-gray-300 my-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndRank;
