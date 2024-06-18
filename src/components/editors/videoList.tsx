import React from "react";
import Video from "./video";

const VideoList = () => {
  return (
    <div className="flex flex-row justify-between space-x-4">
      <div className="w-2/3">
        <Video />
      </div>
      <div className="flex flex-col w-1/3 space-y-3">
        <div>
          <VideoListItem />
        </div>
        <div>
          <VideoListItem />
        </div>
        <div>
          <VideoListItem />
        </div>
        <div>
          <VideoListItem />
        </div>
      </div>
    </div>
  );
};

export default VideoList;

export const VideoListItem = () => {
  return (
    <div className="flex flex-row space-x-3">
      <div className="rounded w-1/2">
        <img
          src="https://i.ytimg.com/vi/jSJr3dXZfcg/hqdefault.jpg"
          className="h-full rounded-lg"
        />
      </div>

      <div className="w-1/2 break-words">
        Warcraft of World111111111111111111111111111111111111 111111111111
      </div>
    </div>
  );
};
