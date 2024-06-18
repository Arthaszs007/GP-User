import React from "react";

const GameDetail = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <img
        className="w-[80rem] h-[25rem]  object-cover blur-sm"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        alt="Tailwind-CSS-Avatar-component"
      />

      <div className="absolute h-[20rem] w-[55rem] mx-20 bg-gray-200 rounded-lg mt-[10rem] hero">
        <div className="hero-content flex flex-row h-full w-full">
          <div className="w-2/6 flex flex-col items-center ">
            <img
              className="w-[13rem] h-[13rem]  object-cover rounded-lg"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
          <div className="flex flex-col justify-between w-4/6 h-[13rem] mr-[3rem]">
            <div className="flex flex-col">
              <div>Name</div>
              <div>info</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>4 100</div>
              <div>70</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
