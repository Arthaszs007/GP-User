import React from "react";

export const Score_lg = () => {
  return (
    <div className="avatar">
      <div className="w-24 rounded">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  );
};

export const Score_md = () => {
  return (
    <div className="skeleton w-16 h-16 rounded bg-lime-500 flex items-center">
      <p className="text-center text-2xl font-bold w-full">99.9</p>
    </div>
  );
};

export const Score_sm = () => {
  return (
    <div className="w-8 h-8 rounded bg-lime-500 flex items-center">
      <p className="text-center text-sm font-bold w-full">99.8</p>
    </div>
  );
};
