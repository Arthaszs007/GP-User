import VideoList, { VideoListItem } from "@/components/editors/videoList";
import Card from "@/components/games/card";
import Carousel from "@/components/games/carousel";
import NewsAndRank from "@/components/newsAndRank/newsAndRank";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col space-y-20">
      {/* top part */}
      <div className="flex flex-row justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* release part */}
      <div>
        <div>
          <p className="text-2xl">New Releases</p>
        </div>
        <div className="divider" />
        <div>
          <Carousel />
        </div>
      </div>

      {/* editors' part */}
      <div>
        <div>
          <p className="text-2xl">Editors' Choices</p>
        </div>
        <div className="divider" />
        <div>
          <VideoList />
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
