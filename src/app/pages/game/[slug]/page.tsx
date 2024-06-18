import Trailer from "@/components/Trailer/trailer";
import GameDetail from "@/components/games/gameDetail";
import NewsAndRank from "@/components/newsAndRank/newsAndRank";
import React from "react";

const Game = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      {/* Game detail  part */}
      <div className="flex justify-center">
        <GameDetail />
      </div>

      {/* tralier and images */}
      <div className="mt-32">
        <p className="text-2xl">Trailer and Images</p>
        <div className="divider" />
        <Trailer />
      </div>

      {/* news and rank */}
      <div className="mt-20">
        <NewsAndRank />
      </div>
    </div>
  );
};

export default Game;
