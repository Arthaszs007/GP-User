import React from "react";
import NewsItem from "./newsItem";
import { INews } from "@/models/news";

const News = ({ news }: { news: INews[] }) => {
  return (
    <div>
      {news.map((item, index) => (
        <NewsItem news={item} key={index} />
      ))}
    </div>
  );
};

export default News;
