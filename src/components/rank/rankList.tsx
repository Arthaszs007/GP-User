"use client";
import { IGame } from "@/models/game";
import { IRank } from "@/models/rank";
import React, { useEffect, useState } from "react";
import { Score_sm } from "../score/score";
import { scoreAverage } from "@/lib/action/scores";
import { LimitString } from "@/lib/action/stringFunc";
import Link from "next/link";

// the indivdual rank
export const RankListChild = ({ rank, ids }: { rank: IRank; ids: string }) => {
  //to storage the rank games' info
  const [games, setGames] = useState<IGame[]>();
  // fetch the games' info in this rank
  const Initial_data = async () => {
    try {
      const res = await fetch(`${process.env.WEB_URL}/api/games?ids=${ids}`, {
        method: "GET",
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setGames(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };
  //initial the rank data
  useEffect(() => {
    Initial_data();
  }, []);

  return (
    <div className="w-1/2 px-8 py-4">
      <p className="text-center text-3xl my-2">{rank.name}</p>
      <RankListChildHead game={games && games[0]} />
      <table className="table table-zebra">
        {/* head */}
        <tbody>
          {games &&
            games.map(
              (item, index) =>
                index !== 0 && (
                  <RankListChildBody
                    game={item}
                    key={index}
                    number={index + 1}
                  />
                )
            )}
        </tbody>
      </table>
    </div>
  );
};

// except No.1
const RankListChildBody = ({
  game,
  number,
}: {
  game: IGame;
  number: number;
}) => {
  return (
    <tr>
      <th>
        <p className="text-xl text-center">{number}</p>
      </th>
      <td>
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3 ju">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={game.images} alt="cover" />
              </div>
            </div>
            <div>
              <div className="font-bold hover:underline">
                <Link href={`/pages/game/${game.id}`}>
                  {LimitString(game.name, 40)}
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Score_sm score={scoreAverage(game.scores)} />
          </div>
        </div>
      </td>
    </tr>
  );
};

// No.1
const RankListChildHead = ({ game }: { game: IGame | undefined }) => {
  return (
    <div className="relative">
      <img
        src={game && game.images}
        alt="cover"
        className="h-[20rem] w-full rounded-lg object-cover overflow-hidden"
      />
      <div className="w-full h-[4rem] bg-black/75 absolute bottom-0 z-10 flex  justify-between  items-center px-4 space-x-2 rounded-b-lg">
        <Link href={`/pages/game/${game?.id}`}>
          <p className="text-white text-xl hover:underline">
            {game && LimitString(game.name, 40)}
          </p>
        </Link>

        <Score_sm score={game && scoreAverage(game.scores)} />
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/030/549/066/original/golden-no-1-text-no-1-champion-or-winner-3d-number-one-for-1st-place-3d-illustration-png.png"
        alt="icon"
        className="h-[4rem] w-[4rem] absolute top-0 left-0 z-10"
      />
    </div>
  );
};
