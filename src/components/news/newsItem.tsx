import { INews } from "@/models/news";
import React from "react";

const NewsItem = ({ news }: { news: INews }) => {
  return (
    <div className="flex flex-row justify-between mx-3 my-3">
      <div className="flex flex-col justify-between">
        <p className="mt-2 text-lg font-medium">{news.title}</p>
        <p className="my-2 text-sm">{news.time}</p>
      </div>
      <div className="avatar">
        <div className="w-72 h-28 rounded">
          <img src={news.image} />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
