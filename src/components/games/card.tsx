import React from "react";
import { Score_md } from "../score/score";

const Card = () => {
  return (
    <div className=" w-72 h-96 mx-2">
      <div className=" card card-compact w-full h-full bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-full"
            src="https://store-images.s-microsoft.com/image/apps.36537.14143814686075364.7e443c56-2382-4bea-8ceb-35638e527cd6.475937df-e65f-4850-b2f0-471c2966f074"
            alt="Game"
          />
        </figure>
        <div className="card-body flex flex-row justify-between ">
          <div className="overflow-hidden ">
            <p className="overflow-ellipsis">
              Dragon Quest XI: Echoes of an Elusive Age
            </p>
          </div>
          <div>
            <Score_md />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
