import React from "react";

const NewsItem = () => {
  return (
    <div className="flex flex-row justify-between mx-3 my-3">
      <div className="flex flex-col justify-between">
        <p className="mt-2 text-xl font-medium">title</p>
        <p className="my-2">time</p>
      </div>
      <div className="avatar">
        <div className="w-72 h-24 rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
