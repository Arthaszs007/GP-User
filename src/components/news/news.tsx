import React from "react";
import NewsItem from "./newsItem";
import { INews } from "@/models/news";

// receive a news array param
const News = ({ news }: { news: INews[] }) => {
  //only render the 5 neweast news item
  return (
    <div>
      {news.map((item, index) =>
        index < 5 ? <NewsItem news={item} key={index} /> : null
      )}
    </div>
  );
};

export default News;
