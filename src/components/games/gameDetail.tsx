import React from "react";
import { Score_md, Score_sm } from "../score/score";

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
              <div className="text-3xl font-bold">Name</div>
              <div className="mt-5 text-xl">info</div>
            </div>
            <div className="flex flex-row justify-between space-x-10">
              <div className="w-full flex flex-col space-y-2">
                <div className="flex flex-row justify-between w-full space-x-20">
                  <div className="flex flex-row items-center w-1/2 justify-between">
                    <div className="flex flex-row ">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/steam-2752064-2284881.png?f=webp"
                        alt="icon"
                        className="w-6 h-6"
                      />
                      <p className="ml-3">Steam</p>
                    </div>
                    <div>
                      <Score_sm />
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-1/2 justify-between">
                    <div className="flex flex-row ">
                      <img
                        src="https://m.media-amazon.com/images/I/41Bty8ECCrL.png"
                        alt="icon"
                        className="w-6 h-6"
                      />
                      <p className="ml-3">IGN</p>
                    </div>
                    <div>
                      <Score_sm />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full  space-x-20">
                  <div className="flex flex-row items-center w-1/2 justify-between">
                    <div className="flex flex-row ">
                      <img
                        src="https://play-lh.googleusercontent.com/Mp_32pK1zEZMjw1RZZsiEE_pjGKArdykWzi9H-82n7IKIXvbgSDSqWHHdhEPtiBVLA"
                        alt="icon"
                        className="w-6 h-6"
                      />
                      <p className="ml-3">Metacritic</p>
                    </div>
                    <div>
                      <Score_sm />
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-1/2 justify-between">
                    <div className="flex flex-row ">
                      <img
                        src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-social-media/256/gamespot-icon.png"
                        alt="icon"
                        className="w-6 h-6"
                      />
                      <p className="ml-3">Gamespot</p>
                    </div>
                    <div>
                      <Score_sm />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Score_md />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
