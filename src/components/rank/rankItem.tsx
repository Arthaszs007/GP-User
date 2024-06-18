import React from "react";

const RankItem = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-between">
        <p>Title</p>
        <p>date</p>
      </div>
      <div>marks</div>
    </div>
  );
};

export default RankItem;
