"use client";
import React, { useEffect, useState } from "react";
import Video from "./video";
import { IGame } from "@/models/game";
import { getVideoCover } from "@/lib/action/video";

// receive a game type data
const VideoList = ({ games }: { games: IGame[] }) => {
  // to storage the current game info to show
  const [curGame, setCurGame] = useState<IGame | undefined>(undefined);

  // to set the seleted item
  const handleVideoChange = (value: IGame) => {
    setCurGame(value);
  };
  //initial the default selected item
  useEffect(() => {
    setCurGame(games[0]);
  }, [games]);

  return (
    <div className="flex flex-row justify-between space-x-4">
      <div className="w-2/3">
        <Video game={curGame} />
      </div>
      <div className="flex flex-col w-1/3 space-y-3">
        {games &&
          games.length > 0 &&
          games.map((item, index) => (
            <div key={index} onClick={() => handleVideoChange(item)}>
              <VideoListItem
                imgSrc={getVideoCover(item.description)}
                name={item.name}
                selected={curGame?.id === item.id ? true : false}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoList;

// receive 2 params as img cover and game name
export const VideoListItem = ({
  imgSrc,
  name,
  selected,
}: {
  imgSrc: string | undefined;
  name: string;
  selected: boolean;
}) => {
  return (
    <div
      className={
        selected
          ? "flex flex-row space-x-3 bg-gray-300  rounded-lg"
          : "flex flex-row space-x-3"
      }
    >
      <div className="rounded w-1/2 h-[7.5rem]">
        <img src={imgSrc} className="h-full w-full rounded-lg" />
      </div>

      <div className="w-1/2 break-words mt-2">{name}</div>
    </div>
  );
};
