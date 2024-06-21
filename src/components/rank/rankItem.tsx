import React from "react";
import { Score_sm } from "../score/score";

const RankItem = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-between">
        <p>Title</p>
        <p>date</p>
      </div>
      <div>
        <Score_sm score={"99"} />
      </div>
    </div>
  );
};

export default RankItem;
