import React from "react";
import News from "../news/news";
import RankItem from "../rank/rankItem";

const NewsAndRank = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-2/3 pr-5">
        <p className="text-2xl">News</p>
        <div className="divider" />
        <div>
          <News />
        </div>
      </div>
      <div className="w-1/3 ">
        <p className="text-2xl">Top Upcoming Games</p>
        <div className="border px-2 border-gray-300 mt-5">
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
          <RankItem />
          <div className="border-t border-gray-300 my-1" />
        </div>
      </div>
    </div>
  );
};

export default NewsAndRank;
