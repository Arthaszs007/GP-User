import { getVideoSrc } from "@/lib/action/video";
import React from "react";

const Trailer = ({ desc }: { desc: string | undefined }) => {
  return (
    <div className="flex flex-row space-x-4">
      <div className=" w-1/2">
        <iframe
          width="560"
          height="315"
          src={desc && getVideoSrc(desc)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-1/2 grid grid-cols-3 gap-2">
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://jesor.me/assets/o02yElEecO-1280.jpeg"
            alt="icon"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://jesor.me/assets/o02yElEecO-1280.jpeg"
            alt="icon"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://jesor.me/assets/o02yElEecO-1280.jpeg"
            alt="icon"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://jesor.me/assets/o02yElEecO-1280.jpeg"
            alt="icon"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://jesor.me/assets/o02yElEecO-1280.jpeg"
            alt="icon"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://jesor.me/assets/o02yElEecO-1280.jpeg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Trailer;
