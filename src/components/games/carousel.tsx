"use client";
import React, { useRef } from "react";
import { Score_sm } from "../score/score";
import { IGame } from "@/models/game";
import { scoreAverage } from "@/lib/action/scores";
import Link from "next/link";
import { LimitString } from "@/lib/action/stringFunc";

// receive a game type data
const Carousel = ({ games }: { games: IGame[] }) => {
  //get ref of components
  const carouselRef = useRef<HTMLDivElement>(null);

  // control the scroll of carousel
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="carousel rounded-box h-[24rem] flex space-x-3 "
        ref={carouselRef}
      >
        {games.length > 0 &&
          games.map((item, index) => (
            <Link
              className="carousel-item"
              key={index}
              href={`/pages/game/${item.id}`}
            >
              <CarouselItem
                name={item.name}
                platform={item.platform}
                score={scoreAverage(item.scores)}
                src={item.images}
              />
            </Link>
          ))}
      </div>

      <div className="flex flex-row justify-between absolute -top-[5rem] w-[10rem]  right-0">
        <button
          className="btn btn-circle ml-3 opacity-25 hover:opacity-100"
          onClick={scrollLeft}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-left-bold-circle-outline</title>
            <path d="M7,12L12,7V10H16V14H12V17L7,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z" />
          </svg>
        </button>
        <button
          className="btn btn-circle mr-3 opacity-25 hover:opacity-100"
          onClick={scrollRight}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-right-bold-circle-outline</title>
            <path d="M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

// receive 4 params as name,platform , score,src
export const CarouselItem = ({
  name,
  platform,
  score,
  src,
}: {
  name: string;
  platform: string;
  score: string;
  src: string;
}) => {
  return (
    <div className=" flex flex-col">
      <img className="h-[20rem] w-[16rem] object-cover" src={src} alt="game" />
      <div className="flex flex-col">
        <div>
          <p className="font-bold">{LimitString(name, 30)}</p>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <Score_sm score={score} />
          <p>{platform}</p>
        </div>
      </div>
    </div>
  );
};
