import React from "react";
import { Score_md } from "../score/score";

//receive params as name, src and score
const Card = ({
  name,
  src,
  score,
}: {
  name: string;
  src: string;
  score: string;
}) => {
  return (
    <div className=" w-[16rem] h-96 mx-2">
      <div className=" card card-compact w-full h-full bg-base-100 shadow-xl ">
        <figure>
          <img className="w-full" src={src} alt="Game" />
        </figure>
        <div className="card-body flex flex-row justify-between ">
          <div className="overflow-hidden flex items-center">
            <p className="overflow-ellipsis font-bold">{name}</p>
          </div>
          <div>
            <Score_md score={score} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
