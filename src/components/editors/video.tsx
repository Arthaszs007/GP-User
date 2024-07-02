import React from "react";
import { Score_md } from "../score/score";
import { IGame } from "@/models/game";
import { scoreAverage } from "@/lib/action/scores";
import { getVideoSrc } from "@/lib/action/video";
import Link from "next/link";

// receive a game type
const Video = ({ game }: { game: IGame | undefined }) => {
  return (
    <div>
      <iframe
        width="746.66"
        height="419.63"
        src={game && getVideoSrc(game.description)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className=" flex flex-row justify-between px-3 py-3">
        <div className="flex flex-col justify-between">
          <Link href={`/pages/game/${game?.id}`}>
            <p className="text-xl font-medium">{game && game.name}</p>
          </Link>
          <p>{game && game.platform}</p>
        </div>
        <Score_md score={game && scoreAverage(game.scores)} />
      </div>
    </div>
  );
};

export default Video;
