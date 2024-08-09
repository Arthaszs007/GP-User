import React from "react";

const AboutIcon = ({ src }: { src: string }) => {
  return (
    <div>
      <img
        className="w-[3rem] h-[3rem]  object-cover rounded-lg"
        src={src}
        alt="image"
      />
    </div>
  );
};

export default AboutIcon;
