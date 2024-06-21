import React from "react";

export const Score_md = ({ score }: { score: string | undefined }) => {
  return (
    <div className="skeleton w-16 h-16 rounded bg-lime-500 flex items-center">
      <p className="text-center text-2xl font-bold w-full">{score}</p>
    </div>
  );
};

export const Score_sm = ({ score }: { score: string | undefined }) => {
  return (
    <div className="w-8 h-8 rounded bg-lime-500 flex items-center">
      <p className="text-center text-sm font-bold w-full">{score}</p>
    </div>
  );
};
