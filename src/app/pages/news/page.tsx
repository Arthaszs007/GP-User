"use client";
import Newlist from "@/components/news/newlist";
import { INews } from "@/models/news";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const News = () => {
  const { data: session } = useSession();
  const [news, setNews] = useState<INews[]>();

  //initial func to fetch api
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

  //initial the data
  useEffect(() => {
    Initial_News();
  }, []);
  return (
    <div>
      {session ? (
        <Newlist news={news} />
      ) : (
        <p className="text-4xl text-center">Please sign in to view rank page</p>
      )}
    </div>
  );
};

export default News;
