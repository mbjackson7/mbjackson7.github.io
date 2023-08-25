import React from "react";
import profileImage from "../assets/ProfileImage.png";
import StandardPage from "../components/wrappers/StandardPage";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StandardPage>
      <div className="p-10 min-h-full flex flex-wrap justify-center gap-x-16">
        <div className="m-5 w-[60vh]">
          <p className="text-3xl mb-4">Hi, I'm Morgan</p>
          <p>
            Welcome to my portfolio! This portfolio is a project I started to
            better showcase my current and future projects, as well as give me
            more experience with web development. I plan to add more features
            and polish as I develop my design skills!
          </p>
        </div>
        <img
          className="rounded-3xl h-[40vh] object-cover border-black border-4"
          src={profileImage}
          alt="Me"
        />
      </div>
    </StandardPage>
  );
}
