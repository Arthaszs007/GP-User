"use client";
import React from "react";

const ContactCard = ({ src }: { src: string }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={src} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Arthas Liu</h1>
          <div className="flex flex-col space-y-3 my-5">
            <p>
              JavaScript | TypeScript | Next.js | React | Node.js | Web
              Developer
            </p>
            <p>
              Welcome to my LinkedIn profile! I am Arthas Liu, an enthusiastic
              and dedicated web developer with a profound passion for science.
              My journey in the tech world has been shaped by my expertise in
              JavaScript, react , Next.js, which has allowed me to craft
              innovative solutions and contribute to divers projects.
            </p>
            <p>
              Proficient in JavaScript, React, and Next.js for building dynamic,
              interactive web applications. Skilled in modern web development
              technologies to create efficient, scalable solutions.
            </p>
            <p>
              <a
                className="link link-primary"
                href="https://github.com/Arthaszs007"
              >
                Github : https://github.com/Arthaszs007
              </a>
            </p>
            <p>
              <a
                className="link link-primary"
                href="https://www.linkedin.com/in/arthas-liu-4463b7304/"
              >
                linkedin : https://www.linkedin.com/in/arthas-liu-4463b7304/
              </a>
            </p>
            <p>
              With 10 years of experience in game development as a game system
              designer, I excel at creating engaging and innovative applications
              systems. Additionally, I have a strong proficiency in UI and UX
              design, ensuring that player interactions are both intuitive and
              enjoyable.
            </p>
          </div>
          <MailButton />
          {/* <button className="btn btn-primary">E-mail me</button> */}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

const MailButton = () => {
  const handleClick = () => {
    const recipient = "arthas.liu.ca@gamil.com";
    const subject = "Default Subject";
    const body = "Hi, Arthas ...";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Email Me
    </button>
  );
};
