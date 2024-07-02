import React, { useEffect, useState } from "react";

export const Score_md = ({ score }: { score: string | undefined }) => {
  //storage the color
  const [color, setColor] = useState("");
  // minitor the score and set color
  useEffect(() => {
    setColor(ScoreFilter(score));
  }, [score]);
  return (
    <div className={`skeleton w-16 h-16 rounded ${color} flex items-center`}>
      <p className="text-center text-2xl font-bold w-full">{score}</p>
    </div>
  );
};

export const Score_sm = ({ score }: { score: string | undefined }) => {
  //storage the color
  const [color, setColor] = useState("");
  // minitor the score and set color
  useEffect(() => {
    setColor(ScoreFilter(score));
  }, [score]);
  return (
    <div className={`w-8 h-8 rounded ${color} flex items-center`}>
      <p className="text-center text-sm font-bold w-full">{score}</p>
    </div>
  );
};
// color  structure
const ColorValue = {
  great: "bg-lime-500",
  normal: "bg-yellow-500",
  worse: "bg-red-400",
};

//based on score to return config
const ScoreFilter = (score: string | undefined) => {
  const res = Number(score);
  if (res >= 8) return ColorValue.great;
  else if (res < 8 && res >= 6) return ColorValue.normal;
  else return ColorValue.worse;
};
