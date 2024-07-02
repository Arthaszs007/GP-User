"use client";
import VideoList from "@/components/editors/videoList";
import Card from "@/components/games/card";
import Carousel from "@/components/games/carousel";
import NewsAndRank from "@/components/newsAndRank/newsAndRank";
import { scoreAverage } from "@/lib/action/scores";
import { IConfig } from "@/models/config";
import { IGame } from "@/models/game";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Main = () => {
  // to storage the config data
  const [config, setConfig] = useState<IConfig[]>([]);
  // to storage the pop data
  const [popGames, setPopGammes] = useState<IGame[]>([]);
  // to storage the release data
  const [release, setRelease] = useState<IGame[]>([]);
  // to storage the editors data
  const [editors, setEditors] = useState<IGame[]>([]);

  // to get the config data before loading the components data
  const Initial = async () => {
    try {
      const res = await fetch(`${process.env.WEB_URL}/api/config`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setConfig(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };

  //initial the pop games part
  const Initial_pop = async () => {
    try {
      const res = await fetch(
        `${process.env.WEB_URL}/api/games?ids=${config[0].pop}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setPopGammes(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };

  //initial the release games part
  const Initial_release = async () => {
    try {
      const res = await fetch(
        `${process.env.WEB_URL}/api/games?ids=${config[0].release}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setRelease(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };

  // initial the editors part
  const Initial_editors = async () => {
    try {
      const res = await fetch(
        `${process.env.WEB_URL}/api/games?ids=${config[0].editors}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setEditors(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };

  // for test
  // useEffect(() => {
  //   console.log(editors);
  // }, [editors]);

  //after initial config, initial the all components data with the exist config data
  useEffect(() => {
    if (config.length > 0) {
      Initial_pop();
      Initial_release();
      Initial_editors();
    }
  }, [config]);

  // get the config data for page first render
  useEffect(() => {
    Initial();
  }, []);
  return (
    <div className="flex flex-col space-y-20">
      {/* top part */}
      <div className="flex flex-row justify-between">
        {popGames.map((item, index) => (
          <Link key={index} href={`/pages/game/${item.id}`}>
            <Card
              name={item.name}
              src={item.images}
              score={scoreAverage(item.scores)}
            />
          </Link>
        ))}
      </div>

      {/* release part */}
      <div>
        <div>
          <p className="text-2xl">New Releases</p>
        </div>
        <div className="divider" />
        <div>
          <Carousel games={release} />
        </div>
      </div>

      {/* editors' part */}
      <div>
        <div>
          <p className="text-2xl">Editors' Choices</p>
        </div>
        <div className="divider" />
        <div>
          <VideoList games={editors} />
        </div>
      </div>

      {/* news and rank part */}
      <div>
        <NewsAndRank />
      </div>
    </div>
  );
};

export default Main;
