"use client";
import ContactCard from "@/components/contact/contactCard";
import { IAbout } from "@/models/about";

import React, { useEffect, useState } from "react";

const About = () => {
  //to storage data
  const [about, setAbout] = useState<IAbout[]>();

  // initial data
  const InitialPage = async () => {
    try {
      const res = await fetch(`${process.env.WEB_URL}/api/about`, {
        method: "GET",
      });
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      setAbout(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };
  //initial page
  useEffect(() => {
    InitialPage();
  }, []);

  return (
    <div>
      {/* display is "1" will display */}
      {about && about[0].display === "1" ? (
        <ContactCard src={about[0].image} />
      ) : (
        <Nocontent />
      )}
    </div>
  );
};

export default About;

export const Nocontent = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl text-center mt-4">About page is coming soon </p>
      <img
        className="h-[30rem] mt-3 w-[60rem]"
        src="https://mastersenseigenetics.com/wp-content/uploads/2021/04/UnderConstruction.jpeg"
        alt="default"
      />
    </div>
  );
};
