import { INews } from "@/models/news";
import React from "react";

const Newlist = ({ news }: { news: INews[] | undefined }) => {
  return (
    <div className="flex flex-wrap justify-center gap-16">
      {news &&
        news.map((item, index) => (
          <div key={index}>
            <NewItem news={item} />
          </div>
        ))}
    </div>
  );
};

export default Newlist;

const NewItem = ({ news }: { news: INews }) => {
  return (
    <div className="card bg-base-100 w-[30rem] shadow-xl">
      <figure>
        <img className="h-[20rem] object-cover" src={news.image} alt="cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p>{news.time}</p>
      </div>
    </div>
  );
};
