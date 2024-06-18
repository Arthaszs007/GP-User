import React from "react";
import { Score_lg } from "../score/score";

const Video = () => {
  return (
    <div>
      <iframe
        width="746.66"
        height="419.63"
        src="https://www.youtube.com/embed/hp9hwjdPKvc?si=7JUazIBcwJDcimdC"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className=" flex flex-row justify-between px-3 py-3">
        <div className="flex flex-col justify-between">
          <p className="text-xl font-medium">Title</p>
          <p>Platform</p>
        </div>
        <Score_lg />
      </div>
    </div>
  );
};

export default Video;
