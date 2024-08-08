"use client";
import Trailer from "@/components/Trailer/trailer";
import GameDetail from "@/components/games/gameDetail";
import NewsAndRank from "@/components/newsAndRank/newsAndRank";
import { IGame } from "@/models/game";
import React, { useEffect, useState } from "react";

const Game = ({ params }: { params: { slug: string } }) => {
  // to storage the game data
  const [game, setGame] = useState<IGame>();

  // to get the game data by slug as id
  const Initial_page = async () => {
    try {
      const res = await fetch(
        `${process.env.WEB_URL}/api/games?ids=${params.slug}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setGame(data[0]);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };
  //test
  // useEffect(() => {
  //   console.log(game);
  // }, [game]);
  //initial the page data
  useEffect(() => {
    Initial_page();
  }, []);

  return (
    <div>
      {/* Game detail  part */}
      <div className="flex justify-center">
        <GameDetail game={game && game} />
      </div>

      {/* tralier and images */}
      <div className="mt-32">
        <p className="text-2xl">Trailer and Images</p>
        <div className="divider" />
        <Trailer desc={game && game.description} images={game && game.images} />
      </div>

      {/* news and rank */}
      <div className="mt-20">
        <NewsAndRank />
      </div>
    </div>
  );
};

export default Game;
