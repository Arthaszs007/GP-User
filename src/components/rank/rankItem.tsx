import React from "react";
import { Score_sm } from "../score/score";
import { scoreAverage } from "@/lib/action/scores";
import { IUpcoming } from "@/models/upcoming";

const RankItem = ({ upcoming }: { upcoming: IUpcoming }) => {
  return (
    <div className="flex flex-row justify-between my-2">
      <div className="flex flex-col justify-between">
        <p>{upcoming.name}</p>
        <p className="text-sm">{upcoming.release}</p>
      </div>
      <div className="mt-3">
        <Score_sm score={scoreAverage(upcoming.score)} />
      </div>
    </div>
  );
};

export default RankItem;
